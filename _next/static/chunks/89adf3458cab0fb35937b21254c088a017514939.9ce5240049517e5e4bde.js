(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var u=f[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],d=r[u]||new Set;d.has(l)?a=!1:(d.add(l),r[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),o=n("q1tI"),a=n("YFqc"),c=n.n(a);function i(e){var t=e.selected,n=Object(o.useState)(!1),a=n[0],i=n[1],s=function(e){return e===t?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"};return Object(r.jsx)("div",{children:Object(r.jsxs)("nav",{className:"bg-gray-800",children:[Object(r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)("div",{className:"flex-shrink-0",children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"text-white font-bold text-2xl",children:"Boni Lab"})})}),Object(r.jsx)("div",{className:"hidden md:block",children:Object(r.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"".concat(s("Home")," px-3 py-2 rounded-md text-sm font-medium"),children:"Home"})}),Object(r.jsx)(c.a,{href:"/people",children:Object(r.jsx)("a",{className:"".concat(s("People")," hover:text-white px-3 py-2 rounded-md text-sm font-medium"),children:"People"})}),Object(r.jsx)(c.a,{href:"/publications",children:Object(r.jsx)("a",{className:"".concat(s("Publications")," hover:text-white px-3 py-2 rounded-md text-sm font-medium"),children:"Publications"})}),Object(r.jsx)(c.a,{href:"/translated",children:Object(r.jsx)("a",{className:"".concat(s("B\xe0i B\xe1o Khoa H\u1ecdc")," hover:text-white px-3 py-2 rounded-md text-sm font-medium"),children:"B\xe0i B\xe1o Khoa H\u1ecdc"})}),Object(r.jsx)(c.a,{href:"/opportunities",children:Object(r.jsx)("a",{className:"".concat(s("Opportunities")," hover:text-white px-3 py-2 rounded-md text-sm font-medium"),children:"Opportunities"})}),Object(r.jsx)(c.a,{href:"/software",children:Object(r.jsx)("a",{className:"".concat(s("Software")," hover:text-white px-3 py-2 rounded-md text-sm font-medium"),children:"Software"})})]})})]}),Object(r.jsx)("div",{className:"-mr-2 flex md:hidden",children:Object(r.jsxs)("button",{className:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",onClick:function(){return i(!a)},children:[Object(r.jsx)("span",{className:"sr-only",children:"Open main menu"}),a?Object(r.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(r.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),Object(r.jsx)("div",{className:"".concat(a?"":"hidden"," md:hidden"),children:Object(r.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"".concat(s("Home")," block px-3 py-2 rounded-md text-base font-medium"),children:"Home"})}),Object(r.jsx)(c.a,{href:"/people",children:Object(r.jsx)("a",{className:"".concat(s("People")," hover:text-white block px-3 py-2 rounded-md text-sm font-medium"),children:"People"})}),Object(r.jsx)(c.a,{href:"/publications",children:Object(r.jsx)("a",{className:"".concat(s("Publications")," hover:text-white block px-3 py-2 rounded-md text-sm font-medium"),children:"Publications"})}),Object(r.jsx)(c.a,{href:"/opportunities",children:Object(r.jsx)("a",{className:"".concat(s("Opportunities")," hover:text-white block px-3 py-2 rounded-md text-sm font-medium"),children:"Opportunities"})}),Object(r.jsx)(c.a,{href:"/projects",children:Object(r.jsx)("a",{className:"".concat(s("Projects")," hover:text-white block px-3 py-2 rounded-md text-sm font-medium"),children:"Projects"})}),Object(r.jsx)(c.a,{href:"/software",children:Object(r.jsx)("a",{className:"".concat(s("Software")," hover:text-white block px-3 py-2 rounded-md text-base font-medium"),children:"Software"})})]})})]})})}function s(){return Object(r.jsx)("footer",{className:"bg-gray-800","aria-labelledby":"footerHeading",children:Object(r.jsx)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:Object(r.jsxs)("div",{className:"md:flex md:items-center md:justify-between",children:[Object(r.jsxs)("div",{className:"flex space-x-6 md:order-2",children:[Object(r.jsxs)("a",{href:"https://twitter.com/maciekboni",className:"text-gray-400 hover:text-gray-300",children:[Object(r.jsx)("span",{className:"sr-only",children:"Twitter"}),Object(r.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(r.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})]}),Object(r.jsxs)("a",{href:"https://github.com/bonilab",className:"text-gray-400 hover:text-gray-300",children:[Object(r.jsx)("span",{className:"sr-only",children:"GitHub"}),Object(r.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})]})]}),Object(r.jsxs)("p",{className:"mt-8 text-base text-gray-400 md:mt-0 md:order-1",children:["\xa9 ",(new Date).getFullYear()," Boni Lab"]})]})})})}function u(e){var t=e.title,n=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(i,{selected:t})}),n,Object(r.jsx)(s,{})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,x=e.shallow,b=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var v=a.Children.only(h),y=v&&"object"===typeof v&&v.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),g=r(O,2),w=g[0],M=g[1],N=a.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,a.useEffect)((function(){var e=M&&t&&(0,c.isLocalURL)(f),r="undefined"!==typeof j?j:n&&n.locale,o=u[f+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,f,p,{locale:r})}),[p,f,M,j,t,n]);var k={ref:N,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,p,m,x,b,j)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),l(n,f,p,{priority:!0}))}};return(e.passHref||"a"===v.type&&!("href"in v.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof j?j:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(v,k)};t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),d=l[0],f=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){i||d||(0,c.default)((function(){return f(!0)}))}),[d]),[p,d]};var a=n("q1tI"),c=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map}}]);