(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{652:function(e,t,a){"use strict";a.d(t,"a",function(){return v});a(10),a(5),a(24),a(58),a(54);var r=a(0),c=a.n(r),s=a(103),i=a(102),m=a(230),u=a(85),l=(a(8),a(13),a(7),a(14),a(1));function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],~t.indexOf(a)||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],~t.indexOf(a)||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e){var t=e.hideExit,a=(e.title,e.children),n=e.handleClose;o(e,["hideExit","title","children","handleClose"]);return Object(r.useEffect)(function(){return document.documentElement.classList.add("no-scroll"),function(){document.documentElement.classList.remove("no-scroll")}}),c.a.createElement("div",null,c.a.createElement("div",{className:"modal_overlay",onClick:n}),c.a.createElement("div",{className:"modal",id:"modal"},!t&&c.a.createElement("button",{className:"btn-borderless",id:"close_btn",onClick:n},c.a.createElement(l.a,{icon:["fas","times"],className:"danger"})),c.a.createElement("div",{className:"modal_content"},c.a.createElement(c.a.Fragment,null,a))))}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(){function o(){var e,c,t,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=this,a=(e=d(o)).call.apply(e,[this].concat(r)),c=!a||"object"!==b(a)&&"function"!=typeof a?f(t):a,y(f(c),"state",{total:"",totalAmount:0,totalPayable:"",commissionValue:"",taxOnCommission:"",price:"",discount:""}),y(f(c),"handleAmount",function(e){var t=Object(i.a)(e.target.value);(/^\d+$/.test(t)||/[\u0660-\u0669]/g.test(t)||""===t)&&t.length<16&&c.setState({total:t},c.computeCommission)}),y(f(c),"computeCommission",function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:.01,a=c.state.total,n=Object(s.a)(c.props,"myInfo.discount")||0;n=parseFloat((1-n).toFixed(2)),a=parseInt((e=a,+(e+="").replace(/[٠١٢٣٤٥٦٧٨٩]/g,function(e){return e.charCodeAt(0)-1632})));var r,l=Math.floor(a*t),o=Math.floor((n<1?l-n*l:l)*(r=Math.pow(10,0)))/r;c.setState({totalPayable:o,commissionValue:l,price:o,discount:n<1?100*n:0},function(){c.props.getUpdate&&c.props.getUpdate({total:l,totalPayable:o,discount:c.state.discount})})}),y(f(c),"handleClose",function(){c.setState(function(e){return{showBreakdown:!e.showBreakdown}})}),c}var e,t,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(o,r["Component"]),e=o,(t=[{key:"render",value:function(){var e=this.state,t=e.total,a=(e.price,e.commissionValue),n=e.discount,r=e.totalPayable,l=e.showBreakdown;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"com_input_wrapper"},c.a.createElement("span",null,"ادخل سعر البيع"),c.a.createElement("input",{type:"text",name:"total",style:{textAlign:"center",direction:"ltr"},value:t,onChange:this.handleAmount,maxLength:15,autoCorrect:"off",inputMode:"numeric",autoComplete:"off",placeholder:"15000"})),c.a.createElement("div",{className:"output_wrapper"},c.a.createElement("span",{className:"labal"},"العمولة المستحقة"),c.a.createElement("span",{className:"result",id:"totalAmount"},c.a.createElement("span",{style:n?{textDecorationLine:"line-through",color:"red",marginLeft:3}:{}},a)," ",!!n&&r,c.a.createElement("span",{className:"currency"},"ريال"),c.a.createElement("span",{id:"more_info_logo",onClick:this.handleClose},c.a.createElement(m.a,{icon:u.c})))),c.a.createElement("br",null),l&&c.a.createElement(p,{handleClose:this.handleClose},c.a.createElement("div",{className:"extra_info_wrapper"},c.a.createElement("div",null,"عمولة الموقع مع ضريبة القيمة المضافة هي :"," ",c.a.createElement("strong",{id:"commissionValue"},r&&r),"ريال",c.a.createElement("br",null),!!this.state.discount&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),"تم خصم :",c.a.createElement("strong",null," ",this.state.discount)," ","%")),c.a.createElement("hr",{className:"fullwidth"}),c.a.createElement("div",{className:"info"},"مؤسسة موقع حراج للتجارة",c.a.createElement("br",null)," سجل تجاري رقم: 1010283122",c.a.createElement("br",null)," الرقم الضريبي: 300710482300003",c.a.createElement("br",null)," قرطبة، الرياض ، المملكة العربية السعودية."))))}}])&&n(e.prototype,t),a&&n(e,a),o}()},688:function(e,t,a){"use strict";a.r(t);var E=a(11),n=(a(10),a(5),a(36),a(24),a(33),a(58),a(54),a(38)),s=a.n(n),y=a(0),j=a.n(y),u=a(103),i=a(12),m=a(652),S=a(1),C=a(2),p=a(230),b=a(85),l=(a(34),[{bank:"rajhi",number:"521608010066975",iban:"SA46 8000 0521 6080 1006 6975",name:"مؤسسة موقع حراج للتجارة"},{bank:"ncb",number:"26463101000104",iban:"SA69 1000 0026 4631 0100 0104",name:"مؤسسة موقع حراج للتجارة"},{bank:"samba",number:"9001201393",iban:"SA62 4000 0000 0090 0120 1393",name:"MAWQA HARAJ EST"},{bank:"sfc",number:"96929400102",iban:"SA56 5500 0000 0969 2940 0102",name:"HARAJ TRADING EST"},{bank:"sabb",number:"020255220001",iban:"SA19 4500 0000 0202 5522 0001",name:"مؤسسة موقع حراج للتجارة"},{bank:"albilad",number:"555108217630003",iban:"SA64 1500 0555 1082 1763 0003",name:"يوسف صالح دغيمان البراكي الرشيدي"},{bank:"arab",number:"0108054779920015",iban:"SA25 3040 0108 0547 7992 0015",name:"يوسف صالح دغيمان البراكي الرشيدي"},{bank:"riyad",number:"2392342129940",iban:"SA77 2000 0002 3923 4212 9940",name:"مؤسسة موقع حراج للتجارة"},{bank:"alinma",number:"68200255188000",iban:"SA70 0500 0068 2002 5518 8000",name:"يوسف صالح دغيمان البراكي الرشيدي"}]),P=(a(17),a(13),a(14),a(20),a(7),a(8),a(19),a(6)),r=a(313);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=j.a.forwardRef(function(e,t){return j.a.createElement("input",c({type:"file",id:"img_def_uploader",name:"img",accept:"image/*",ref:t},e))});d.displayName="CustomInput";var R=function(e){var c=e.response,t=e.setThereIsImage,s=e.commissionId,i=e.accessToken,a=o(Object(y.useState)(""),2),m=a[0],n=a[1];return Object(y.useEffect)(function(){var t,a,n,r,l,o;m&&s&&regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n={token:i,imgURL:m,commissionId:+s},r=["status","notValidReason"],e.next=4,regeneratorRuntime.awrap(Object(P.d)({queryName:"addImageToCommission",mutation:!0,select:r,args:n}));case 4:l=e.sent,(o=null==l?void 0:null===(t=l.result)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.addImageToCommission)&&(o.status?c({type:"success",text:"تم رفع صورة الفاتورة بنجاح"}):c({type:"error",text:"لم يتم إرفاق الايصال، نرجو تحميل الايصال ".concat(o.notValidReason)}));case 7:case"end":return e.stop()}})},[m,s]),j.a.createElement("div",{className:"img_upload"},j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"صورة ايصال التحويل "),j.a.createElement(r.a,{CustomInput:d,onSuccess:function(e,t){n(t.url)},onFailure:function(e,t){n(null),c({text:"لم يتم إرفاق الايصال، ".concat(t.errorMessage),type:"error"})},onSelect:function(){return t(!0)}})))},A=a(300),I=a(4),x=a(39),T=a(16),M=a(9),D=a(28);function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function F(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach(function(e){v(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q={FORM:"FORM",LOADING:"LOADING",ERROR:"ERROR",DONE:"DONE"};function h(e){var t=e.userInfo,a=void 0===t?{username:"",mobile:""}:t,n=e.total,v=e.accessToken,c=e.lastCommission,r=L(Object(y.useState)({username:(null==a?void 0:a.username)||"",price:"",bank:"",date:"",moneysender:"",mobile:(null==a?void 0:a.mobile)||"",postId:"",note:""}),2),h=r[0],l=r[1];Object(y.useEffect)(function(){l(function(e){return F({},e,{username:(null==a?void 0:a.username)||e.username,mobile:(null==a?void 0:a.mobile)||e.mobile})})},[a.mobile,a.username]);function g(){var e,t,a,n=h.moneysender,r=h.username,l=h.bank,o=h.price;return w(""),e=c.price,t=c.receivedAt,a=Object(T.b)()-3e5,h.price==e&&a<t?(w("هذه البيانات مكرره"),k(q.ERROR),!1):""==r?(w("فضلا أذكر أسم المستخدم"),k(q.ERROR),!1):o?""==l?(w("أختر اسم البنك"),k(q.ERROR),!1):""==n?(w("فضلا أذكر معلومات المرسل"),k(q.ERROR),!1):(w(""),!0):(w("فضلا أذكر مبلغ التحويل"),k(q.ERROR),!1)}var o=L(Object(y.useState)(""),2),O=o[0],s=o[1],i=L(Object(y.useState)(""),2),m=i[0],w=i[1],u=L(Object(y.useState)(null),2),p=u[0],_=u[1],b=L(Object(y.useState)(q.FORM),2),d=b[0],k=b[1],f=Object(E.d)(M.h),N=Object(E.c)();return Object(y.useEffect)(function(){l(F({},h,{price:n}))},[n]),d===q.DONE?j.a.createElement("div",{id:"com_form"},j.a.createElement("h3",null,"تم ارسال النموذج, سيتم اشعارك بتسجيل العمولة و تفعيلها بعضويتك(خلال ٧ ايام)."),m&&j.a.createElement("p",null,m),j.a.createElement(C.Link,{to:"/"},"الرئيسية ",j.a.createElement(S.a,{icon:["fas","home"]}))):j.a.createElement("form",{id:"com_form",onSubmit:function(t){var a,n,r,l,o,c,s,i,m,u,p,b,d,f,E,y;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=h.postId,n=h.moneysender,r=h.username,l=h.mobile,o=h.price,c=h.date,s=h.bank,i=h.note,g())return k(q.LOADING),u={queryName:"submitCommission",mutation:!0,select:"status notValidReason infoMessage id",args:{postId:a,message:i,amount:{value:o,type:"String"},mobile:l,bankName:s,token:v,dateTransfer:c,username:r,paidBy:n}},e.next=8,regeneratorRuntime.awrap(Object(P.d)(u));e.next=12;break;case 8:p=e.sent,b=p.result,D.a.commission("bank_submit",O?"with_image":"no_image"),(null==b?void 0:null===(m=b.data)||void 0===m?void 0:m.submitCommission)&&(d=b.data.submitCommission,f=d.status,E=d.infoMessage,y=d.id,f?(O?_(y):(w(""),k(q.DONE)),N(I.bb({price:o}))):(w("حصل خطاء ما "+E),k(q.ERROR)));case 12:case"end":return e.stop()}})}},j.a.createElement("h1",null,"نموذج تحويل العمولة"),j.a.createElement("p",null,"بعد إرسال المبلغ،يجب مراسلتنا عبر النموذج التالي لأجل تسجيل العمولة بأسم عضويتك ثم الحصول على مميزات الموقع الخاصة بالعملاء"),j.a.createElement("div",{className:"field_wrapper"},j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"أسم المستخدم* :"),f&&(null==a?void 0:a.username)?j.a.createElement("span",{className:"usernameExist"},h.username):j.a.createElement("input",{type:"text",name:"username",value:h.username,onChange:function(e){return l(F({},h,{username:e.target.value}))}})),j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"مبلغ العمولة* :"),j.a.createElement("input",{type:"number",name:"price",size:20,maxLength:60,value:h.price,onChange:function(e){return l(F({},h,{price:e.target.value}))},required:!0})),j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"البنك الذي تم التحويل إليه* :"),j.a.createElement("select",{name:"bank",value:h.bank,onChange:function(e){l(F({},h,{bank:e.target.value}))},required:!0},j.a.createElement("option",{value:""},"أختر أسم البنك"),j.a.createElement("option",{value:"مصرف الراجحي"},"مصرف الراجحي"),j.a.createElement("option",{value:"البنك الأهلي التجاري"},"البنك الأهلي التجاري"),j.a.createElement("option",{value:"سامبا"},"سامبا"),j.a.createElement("option",{value:"ساب"},"ساب"),j.a.createElement("option",{value:"بنك الرياض"},"بنك الرياض"),j.a.createElement("option",{value:"بنك البلاد"},"بنك البلاد"),j.a.createElement("option",{value:"بنك الانماء"},"بنك الانماء"),j.a.createElement("option",{value:"لبنك العربي الوطني"},"البنك العربي الوطني"),j.a.createElement("option",{value:"البنك السعودي الفرنسي"},"البنك السعودي الفرنسي"),j.a.createElement("option",{value:"تم التصدق بالعمولة"},"تم التصدق بالعمولة"),j.a.createElement("option",{value:"لم يتم التحويل"},"لم يتم التحويل"))),j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"متى تم التحويل :"),j.a.createElement("select",{name:"datetransfer",value:h.date,onChange:function(e){l(F({},h,{date:e.target.value}))}},j.a.createElement("option",{value:"تم التحويل اليوم"},"تم التحويل اليوم"),j.a.createElement("option",{value:"تم التحويل يوم أمس"},"تم التحويل يوم أمس"),j.a.createElement("option",{value:"تم التحويل قبل أمس"},"تم التحويل قبل أمس"),j.a.createElement("option",{value:"تم التحويل قبل 3 أيام"},"تم التحويل قبل 3 أيام"),j.a.createElement("option",{value:"تم التحويل قبل أسبوع"},"تم التحويل قبل أسبوع"),j.a.createElement("option",{value:"تم التحويل قبل شهر"},"تم التحويل قبل شهر"),j.a.createElement("option",{value:"لم يتم التحويل"},"لم يتم التحويل"))),j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"أسم المحول* :"),j.a.createElement("input",{type:"text",name:"moneysender",value:h.moneysender,onChange:function(e){return l(F({},h,{moneysender:e.target.value}))},required:!0})),j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"رقم الجوال المرتبط بعضويتك* :"),j.a.createElement("input",{type:"text",name:"mobile",value:h.mobile,onChange:function(e){return l(F({},h,{mobile:e.target.value}))},required:!0})),j.a.createElement("div",{className:"input_wrapper small"},j.a.createElement("label",null,"رقم الإعلان :"),j.a.createElement("input",{type:"text",name:"link",value:h.postId,onChange:function(e){return l(F({},h,{postId:e.target.value}))}})),j.a.createElement("div",{className:"input_wrapper large"},j.a.createElement("label",null,"ملاحظات :"),j.a.createElement("textarea",{name:"message",rows:1,id:"message",value:h.note,onChange:function(e){return l(F({},h,{note:e.target.value}))}}),j.a.createElement("small",null,"نرجو الحرص على أن تكون معلومات التحويل صحيحة ودقيقه"))),j.a.createElement(R,{accessToken:v,commissionId:p,setThereIsImage:s,response:function(e){e.type;var t=e.text;w(t),k(q.DONE)}}),j.a.createElement("button",{type:"submit"},"إرسال"),j.a.createElement(C.Link,{id:"pay_terms_btn",to:"/payment-policy"},"سياسة دفع العمول"),d===q.ERROR&&j.a.createElement(x.a,{danger:!0},m),d===q.LOADING&&j.a.createElement("div",{id:"com_form",className:"com_loading"},j.a.createElement(A.a,null)))}function g(e){var t=e.userInfo,a=e.total,n=e.accessToken,r=e.lastCommission;return j.a.createElement(j.a.Fragment,null,j.a.createElement("div",{className:"secondOptionWrapper"},j.a.createElement("h5",{id:"optionTwo"},j.a.createElement("span",null,"الطريقة الثانية:"),j.a.createElement("strong",null,"تحويل البنكي")),j.a.createElement("p",{className:"YellowAlert"},j.a.createElement(p.a,{icon:b.q}),"الدفع بالتحويل البنكي لأحد الحسابات التالية ثم تعبئة"," ",j.a.createElement("a",{href:"#com_form"},"نموذج التحويل")," والانتظار اسبوع للتفعيل.")),j.a.createElement("div",{className:"banks_details_wrapper"},l.map(function(e){return j.a.createElement("div",{className:"bank_details",key:e.bank},j.a.createElement("img",{src:"https://v8-cdn.haraj.com.sa/banks/".concat(e.bank,".png"),className:"logo"}),j.a.createElement("span",{className:"labal"},"رقم الحساب"),j.a.createElement("span",{className:"number"},e.number),j.a.createElement("span",{className:"labal"},"الايبان"),j.a.createElement("span",{className:"iban"},e.iban),j.a.createElement("span",{className:"name"},e.name))})),j.a.createElement(h,{userInfo:t,total:a,accessToken:n,lastCommission:r}))}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function z(e,t){var a=Math.pow(10,t);return Math.floor(e*a)/a}var G=function(){function n(e){var r,t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,a=k(n).call(this,e),r=!a||"object"!==O(a)&&"function"!=typeof a?N(t):a,V(N(r),"togglePaymentModal",function(){r.props.history.push("/payment".concat(r.state.totalPayable?"?amount=".concat(r.state.totalPayable):""))}),V(N(r),"updateTotal",function(e){var t=e.total,a=e.totalPayable,n=e.discount;r.setState({total:t,totalPayable:a,price:a,discount:n})}),r.state={postId:"",total:"",mobile:"  ",totalAmount:0,username:"  ",moneysender:"",bank:"",date:"تم التحويل اليوم",note:"",price:0,message:"",successMsg:"",showBreakdown:!1,totalPayable:0,amount:0,commissionValue:0,discount:0,taxOnCommission:0,commissionFormVisible:!0,commissionId:null,showPaymentModal:!1,applePay:!1},r.scrollToThis=j.a.createRef(),r}var e,t,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(n,y["Component"]),e=n,(t=[{key:"componentDidMount",value:function(){try{window.ApplePaySession&&ApplePaySession.canMakePayments()&&ApplePaySession.supportsVersion(6)&&this.setState({applePay:!0})}catch(e){}try{document.querySelector("body").style.backgroundColor="#F2F4FA",document.querySelector(".backButton").style.backgroundColor="#F2F4FA",document.querySelector("html").style.scrollBehavior="smooth"}catch(e){}}},{key:"componentWillUnmount",value:function(){try{document.querySelector("body").style.backgroundColor="",document.querySelector(".backButton").style.backgroundColor="",document.querySelector("html").style.scrollBehavior=""}catch(e){}}},{key:"handleAmount",value:function(e){var t=e.target.value;(/^\d+$/.test(t)||/[\u0660-\u0669]/g.test(t)||""===t)&&t.length<16&&this.setState({total:t},this.computeCommission)}},{key:"computeCommission",value:function(e,t){var a,n=0<arguments.length&&void 0!==e?e:.01,r=1<arguments.length&&void 0!==t?t:.05,l=this.state.total,o=Object(u.a)(this.props,"myInfo.discount")||0;l=parseInt((a=l,+(a+="").replace(/[٠١٢٣٤٥٦٧٨٩]/g,function(e){return e.charCodeAt(0)-1632})));var c=Math.floor(l*n),s=z(c*r,0),i=z(c*o,0),m=c-i+s;this.setState({totalPayable:m,commissionValue:c,taxOnCommission:s,price:m,discount:i})}},{key:"render",value:function(){var e,t,a,n,r=this,l=this.props.location,o=(l.search,l.pathname),c=this.state.applePay;return j.a.createElement("div",{className:"singleContentGrid commission_wrapper"},j.a.createElement(s.a,null,j.a.createElement("title",null,"عمولة حراج"),j.a.createElement("meta",{name:"og:title",content:"عمولة حراج"}),j.a.createElement("meta",{name:"description",content:"كما هو مذكور في معاهدة استخدام الموقع، فإن الموقع يحصل على عمولة قدرها 1% من سعر السلعة المباعة عن طريق الموقع و يدفعها المعلن، وهي أمانه في ذمته. إذا كانت السلعة المباعة سلعه عقاريه، وبها أكثر من وسيط، فإن الموقع يكون أحد الوسطاء، ويتقاسم العمولة معهم. ويعتبر هذا الشرط اتفاقاً ملزماً، يحق بموجبه للموقع المطالبة بهذه العمولة.إن كانت قيمة العمولة أقل من 20 ريال سعودي ، فيمكن التصدق بها عن الموقع."}),j.a.createElement("link",{rel:"canonical",href:"".concat(i.j).concat(o)})),j.a.createElement("br",null),j.a.createElement("button",{onClick:this.props.history.goBack,className:"backButton btn-link"},j.a.createElement(S.a,{icon:["fal","arrow-right"],size:"2x"})," "),j.a.createElement("div",{className:"commission_header"},j.a.createElement("div",{className:"main_text"},j.a.createElement("h1",null,"بيع منتجك بعمولة 1% ",j.a.createElement("br",null),"فقط في حراج"),j.a.createElement("p",null,"العمولة أمانة في ذمة المعلن سواء تمت المبايعة عن"," ",j.a.createElement("br",null),"طريق الموقع أو بسببه، وموضحة قيمتها بما يلي"),j.a.createElement("a",{href:"#cal_wrapper",className:"btn btn-primary-alt"},"حساب العمولة",j.a.createElement(S.a,{icon:["fas","arrow-left"],size:"1x"})),j.a.createElement("div",{className:"paymentOptions"},j.a.createElement("img",{src:"https://betacdn.haraj.com.sa/assets/images/mada.png"}),j.a.createElement(S.a,{icon:["fab","apple-pay"]}),j.a.createElement("img",{src:"https://betacdn.haraj.com.sa/assets/images/visa_master.png"}))),j.a.createElement("div",{className:"hero_video_wrapper",style:{backgroundImage:'url("https://betacdn.haraj.com.sa/assets/images/backgrounds/haraj_mobile.png")'}})),j.a.createElement("div",{className:"sections_wrapper"},j.a.createElement("div",{className:"dev_card"},j.a.createElement("span",{className:"icons_wrapper"},j.a.createElement("img",{alt:"house icon",loading:"lazy",height:"35",width:"35",src:"https://betacdn.haraj.com.sa/assets/images/svg/car.svg"})," "),j.a.createElement("h4",null,"عمولة السيارات"),j.a.createElement("ul",null,j.a.createElement("li",null,"بيع السيارات:1% من قيمة السيارة."),j.a.createElement("li",null,"سيارات للتنازل:1% من قيمة التنازل إذا كان التنازل بمقابل."),j.a.createElement("li",null,"تبادل السيارات:1% من قيمة المبادلة إذا كان هناك مقابل للمبادلة."))),j.a.createElement("div",{className:"dev_card"},j.a.createElement("span",{className:"icons_wrapper"},j.a.createElement("img",{alt:"house icon",loading:"lazy",height:"35",width:"35",src:"https://betacdn.haraj.com.sa/assets/images/svg/house.svg"})),j.a.createElement("h4",null,"عمولة العقارات"),j.a.createElement("ul",null,j.a.createElement("li",null,"بيع عقار عن طريق المالك: 1% من قيمة العقار."),j.a.createElement("li",null,"بيع عقار عن طريق وسيط:يعتبر الموقع شريك في الوساطة ويقتسم السعي مع الوسطاء بالتساوي ، أو يدفع المعلن للموقع 1% من قيمة العقار."),j.a.createElement("li",null,"تأجير عقارات:1% من قيمة عقد الإيجار الجديد فقط ، وليس العقد المجدد لنفس الشخص."))),j.a.createElement("div",{className:"dev_card"},j.a.createElement("span",{className:"icons_wrapper"},j.a.createElement("img",{alt:"house icon",loading:"lazy",height:"35",width:"35",src:"https://betacdn.haraj.com.sa/assets/images/svg/more-icon.svg"})),j.a.createElement("h4",null,"عمولة السلع و الخدمات الأخرى"),j.a.createElement("ul",null,j.a.createElement("li",null,"بيع سلعة:1% من قيمة السلعة المباعة"),j.a.createElement("li",null,"تأجير سلع(معدات وغيرها):1% من قيمة مبلغ الإيجار."),j.a.createElement("li",null,"تقديم خدمات: 1% من قيمة الخدمة المقدمة. وفي حالة تقديم الخدمة لأكثر من شخص فيتم تحويل 1% عن كل خدمة تم تقديمها."),j.a.createElement("li",null,"طلب سلعة أو خدمة: 1% من قيمة المبايعة.")))),j.a.createElement("div",{className:"sub_wrapper"},j.a.createElement("div",{className:"content"},j.a.createElement("span",null,j.a.createElement("span",{className:"icons_wrapper"},j.a.createElement(S.a,{icon:["fas","id-badge"],size:"2x"}))),j.a.createElement("strong",null,"للاشتراك بعضوية معارض السيارت والعقار"),j.a.createElement(C.Link,{to:"/member.php",onClick:function(){return D.a.commission("membership_btn","yearly")}},"اضغط هنا")),j.a.createElement("div",{className:"content"},j.a.createElement("span",null,j.a.createElement("span",{className:"icons_wrapper"},j.a.createElement(p.a,{icon:b.h,size:"2x"}))),j.a.createElement("strong",null,"للاشتراك بعضوية الخدمات والسلع المكررة."),j.a.createElement(C.Link,{to:"/services-membership",onClick:function(){return D.a.commission("membership_btn","711")}},"اضغط هنا"))),j.a.createElement("br",null),j.a.createElement("div",{id:"cal_wrapper"},j.a.createElement("h1",null,"حساب العمولة"),j.a.createElement("div",{className:"cal_contnet"},j.a.createElement(m.a,w({},this.props,{getUpdate:this.updateTotal}))),j.a.createElement("h3",{id:"payOptions"},"طريقة الدفع"),j.a.createElement("h5",{id:"optionOne"},j.a.createElement("span",null,"الطريقة الأولى:"),j.a.createElement("strong",null,"بطاقة مدى")),j.a.createElement("p",{className:"greenAlert"},j.a.createElement(p.a,{icon:b.q}),"إذا تم الدفع ( مدى ) يتم تفعيل العمولة بحسابك بشكل تلقائي خلال ٢٤ ساعة (لا يحتاج تعبئة نمودج التحويل )"),j.a.createElement("div",{className:"btnWrapper"},j.a.createElement(C.Link,{className:"payBtn mada",to:"/payment".concat(this.state.totalPayable?"?amount=".concat(this.state.totalPayable):""),onClick:function(){return D.a.commission("mada_btn",r.state.totalPayable?"with_amount":"without")}},j.a.createElement("span",null,"اضغظ هنا للدفع بـ"),j.a.createElement("span",{className:"pay_btn_icon_wrapper"},j.a.createElement("img",{src:"https://betacdn.haraj.com.sa/assets/images/mada.png"}),j.a.createElement("img",{src:"https://betacdn.haraj.com.sa/assets/images/visa_master.png"}))),c&&j.a.createElement(C.Link,{to:"/payment/applepay".concat(this.state.totalPayable?"?amount=".concat(this.state.totalPayable):""),onClick:function(){return D.a.commission("apple_pay_btn",r.state.totalPayable?"with_amount":"without")},className:"payBtn apple-pay-button apple-pay-button-black"}))),j.a.createElement("br",null),j.a.createElement(g,{userInfo:null===(e=this.props)||void 0===e?void 0:e.myInfo,total:this.state.totalPayable,accessToken:null===(t=this.props)||void 0===t?void 0:null===(a=t.loginInfo)||void 0===a?void 0:a.accessToken,lastCommission:null===(n=this.props)||void 0===n?void 0:n.lastCommission}))}}])&&_(e.prototype,t),a&&_(e,a),n}();t.default=Object(E.b)(function(e){return{loginInfo:e.GeneralReducer.loginInfo,myInfo:e.GeneralReducer.myInfo,lastCommission:e.MiscReducers.lastCommission}})(G)}}]);
//# sourceMappingURL=9.5efc1e10e22ff1d9e0d4.js.map