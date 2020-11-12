importScripts("https://betacdn.haraj.com.sa/assets/js/md5.js", "https://betacdn.haraj.com.sa/assets/js/idb-keyval-iife.min.js", "https://betacdn.haraj.com.sa/precache-manifest.3200ac388e4357a3d181328df504f2f6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
// @ts-nocheck

// Init indexedDB using idb-keyval, https://github.com/jakearchibald/idb-keyval
const store = new idbKeyval.Store('GraphQL-Cache', 'white-listed-queries');
const cacheGraphQLEndPoint = /^https?:\/\/(graphql\.haraj\.com\.sa)|(jdeed\.com\/graphql)/;
// longCacheQueries - 1 day
const longCacheQueries = ['getAnnouncement', 'relatedTags', 'promotedPosts'];
const shortCacheQueries = ['initialPosts', 'detailsPosts'];
const cacheQueries = longCacheQueries.concat(shortCacheQueries);

if (workbox) {
	console.log('Yay! SW loaded 🎉');
	const resources = self.__precacheManifest || [];
	resources.push('/manifest.webmanifest');
	workbox.precaching.precacheAndRoute(resources, { cleanUrls: false });
	workbox.routing.registerNavigationRoute(
		workbox.precaching.getCacheKeyForURL('/index.html'),
		{
			blacklist: [
				new RegExp('/sw.js'),
				new RegExp('/robots.txt'),
				new RegExp('/manifest.webmanifest'),
				new RegExp('/admin'),
				new RegExp('/admin/*'),
				new RegExp('/.well-known/*')
			]
		}
	);
	workbox.routing.registerRoute(
		new RegExp('^https://haraj.azureedge.net/static/'),
		workbox.strategies.staleWhileRevalidate()
	);
	workbox.routing.registerRoute(
		new RegExp(
			'^https://s3-eu-west-1.amazonaws.com/img1.haraj.com.sa/static/'
		),
		workbox.strategies.staleWhileRevalidate()
	);

	workbox.routing.registerRoute(
		cacheGraphQLEndPoint,
		async ({ event }) => staleWhileRevalidateManual(event),
		'POST'
	);
} else {
	console.log('SW did not Load 😬');
}

self.addEventListener('push', (event) => {
	event.waitUntil(
		self.registration.pushManager
			.getSubscription()
			.then(function (subscription) {
				if (subscription.endpoint) {
					let headers = {
						'Content-Type': 'text/plain; charset=utf-8'
					};

					const endpoint = subscription.endpoint;
					const query = `{
						webNotification(subscription:"${endpoint}") {
							body
							icon
							type
							related_title
							related_user
							related_ads_num
							pay_value
							status
							date
						}
					}`;

					return fetch(
						'https://graphql.haraj.com.sa/?queryName=webNotification',
						{
							method: 'POST',
							body: JSON.stringify({ query }),
							headers
						}
					)
						.then((res) => res.json())
						.then((resp) => {
							let title = 'لديك إشعار جديد';
							let notfBody = {
								body: '',
								icon:
									'https://betacdn.haraj.com.sa/assets/images/256_icon.png',
								badge:
									'https://betacdn.haraj.com.sa/assets/images/badge.png'
							};
							if (
								resp &&
								resp.data &&
								resp.data.webNotification
							) {
								if (resp.data.webNotification.body) {
									const info = {
										title:
											resp.data.webNotification
												.related_title ||
											'لديك إشعار جديد',
										body: resp.data.webNotification.body,
										icon: resp.data.webNotification.icon,
										extra: {
											related_user:
												resp.data.webNotification
													.related_user,
											related_ads_num:
												resp.data.webNotification
													.related_ads_num,
											pay_value:
												resp.data.webNotification
													.pay_value,
											status:
												resp.data.webNotification
													.status,
											date:
												resp.data.webNotification.date,
											type: resp.data.webNotification.type
										}
									};
									if (info.title) {
										title = info.title;
									}
									notfBody = {
										body: info.body || '',
										icon:
											info.icon ||
											'https://betacdn.haraj.com.sa/assets/images/256_icon.png',
										badge:
											'https://betacdn.haraj.com.sa/assets/images/badge.png',
										data: info
									};
								}
							}
							return event.waitUntil(
								self.registration.showNotification(
									title,
									notfBody
								)
							);
						})
						.catch((err) => {
							let title = 'لديك إشعار جديد';
							let body = {
								body: '',
								icon:
									'https://betacdn.haraj.com.sa/assets/images/256_icon.png',
								badge:
									'https://betacdn.haraj.com.sa/assets/images/badge.png'
							};
							console.warn(err);
							return event.waitUntil(
								self.registration.showNotification(title, body)
							);
						});
				} else {
					let title = 'لديك إشعار جديد';
					let body = {
						body: '',
						icon:
							'https://betacdn.haraj.com.sa/assets/images/256_icon.png',
						badge:
							'https://betacdn.haraj.com.sa/assets/images/badge.png'
					};
					return event.waitUntil(
						self.registration.showNotification(title, body)
					);
				}
			})
	);
});

self.addEventListener('install', function (event) {
	self.skipWaiting();
});

self.addEventListener('activate', function (event) {});

self.addEventListener('notificationclick', function (event) {
	var url;
	if (
		event.notification.data &&
		event.notification.data.extra &&
		event.notification.data.extra.type == 'replay_ads' &&
		event.notification.data.extra.related_ads_num
	) {
		url = '/11' + event.notification.data.extra.related_ads_num;
	} else {
		url = '/note.php';
	}
	event.notification.close();
	event.waitUntil(clients.openWindow(url));
});

self.addEventListener('fetch', async (event) => {
	if (event.request.method === 'POST') {
		// Respond with cached data and update from network in the background.
		event.respondWith(staleWhileRevalidateManual(event));
	}
});

async function staleWhileRevalidateManual(event) {
	const cachedResponse = await getCache(event.request.clone());
	const fetchPromise = () =>
		fetch(event.request.clone())
			.then((response) => {
				setCache(event.request.clone(), response.clone());
				return response;
			})
			.catch((err) => {
				console.error(err);
			});
	return cachedResponse ? Promise.resolve(cachedResponse) : fetchPromise();
}

async function serializeResponse(response) {
	let serializedHeaders = {};
	for (var entry of response.headers.entries()) {
		serializedHeaders[entry[0]] = entry[1];
	}
	let serialized = {
		headers: serializedHeaders,
		status: response.status,
		statusText: response.statusText
	};
	serialized.body = await response.json();
	return serialized;
}

const filterVariables = (variables) => {
	let result = {};
	let removeKeys = 'token token2'.split(' ');
	if (variables.ids && variables.ids.length > 1) {
		removeKeys.push('ids');
	}
	for (key in variables) {
		if (!removeKeys.includes(key)) {
			result[key] = variables[key];
		}
	}
	return result;
};

const makeMD5Id = (query, variables) => {
	const result = { query, variables };
	return CryptoJS.MD5(JSON.stringify(result)).toString();
};

const getQueryName = (url) => {
	const matchedQuery = url.match(/queryName=(.*?)&/);
	return matchedQuery ? matchedQuery[1] : null;
};

async function setCache(request, response) {
	// Only cache white-listed queries
	const queryName = getQueryName(request.url);
	if (!queryName || !cacheQueries.includes(queryName)) return null;

	const body = await request.json();
	// Don't cache request for posts in home page
	if (
		body.query.includes(
			'posts( id:$ids, page:$page, orderMainByPostId:$orderMainByPostId)'
		) ||
		body.query.includes(
			'posts( page:$page, orderMainByPostId:$orderMainByPostId)'
		)
	) {
		return null;
	}

	const variables = filterVariables(body.variables);
	const id = makeMD5Id(body.query, variables);
	var entry = {
		variables,
		queryName,
		query: body.query,
		receivedAt: Date.now(),
		response: await serializeResponse(response)
	};
	idbKeyval.set(id, entry, store);
}

async function getCache(request) {
	let data;
	try {
		// Check no cache queries
		const queryName = getQueryName(request.url);
		if (!queryName || !cacheQueries.includes(queryName)) return null;

		const body = await request.json();
		const variables = filterVariables(body.variables);
		const id = makeMD5Id(body.query, variables);

		data = await idbKeyval.get(id, store);
		if (!data) return null;

		// Check cache max age.
		const localMaxAge = longCacheQueries.includes(queryName)
			? 24 * 60 * 60
			: 5 * 60; // unix timestamp
		const cacheControl = request.headers.get('Cache-Control');
		const maxAge = cacheControl
			? parseInt(cacheControl.split('=')[1])
			: localMaxAge;
		if (Date.now() - data.receivedAt > maxAge * 1000) {
			console.log('Cache expired. Load from API endpoint.');
			return null;
		}

		console.log('Load response from cache.');
		return new Response(JSON.stringify(data.response.body), data.response);
	} catch (err) {
		return null;
	}
}

