(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r},i=n(895),f=n(896);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,u=e.target,i=e.specs,f=e.replace;this.state.page=window.open(this.buildURI(t,a,n,r,o),u,i,f)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}();c.defaultProps=Object.assign(f.defaultProps,{target:"_blank"}),c.propTypes=f.propTypes,t.default=c},1139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=(r=u)&&r.__esModule?r:{default:r},f=n(895),c=n(896);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n.state={href:""},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.uFEFF,a=e.enclosingCharacter;this.setState({href:this.buildURI(t,o,n,r,a)})}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=e.headers,r=e.separator,o=e.uFEFF;this.setState({href:this.buildURI(t,o,n,r)})}},{key:"buildURI",value:function(){return f.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e,t,n,r,o,a){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var u=new Blob([(0,f.toCSV)(t,n,r,a)]);return window.navigator.msSaveBlob(u,o),!1}}},{key:"handleAsyncClick",value:function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.props.onClick(e,function(n){!1!==n?t.handleLegacy.apply(t,[e].concat(r)):e.preventDefault()})}},{key:"handleSyncClick",value:function(e){if(!1===this.props.onClick(e))e.preventDefault();else{for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.handleLegacy.apply(this,[e].concat(n))}}},{key:"handleClick",value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick.apply(e,[t].concat(n)):e.handleSyncClick.apply(e,[t].concat(n));e.handleLegacy.apply(e,[t].concat(n))}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,a=t.separator,u=t.filename,f=(t.uFEFF,t.children),c=(t.onClick,t.asyncOnClick,t.enclosingCharacter),s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]);return i.default.createElement("a",o({download:u},s,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick(n,r,a,u,c)}),f)}}]),t}();s.defaultProps=c.defaultProps,s.propTypes=c.propTypes,t.default=s},572:function(e,t){var n=Array.isArray;e.exports=n},573:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},575:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.hasNextTick=t.hasSetImmediate=void 0,t.fallback=s,t.wrap=l;var o,a=n(576),u=(o=a)&&o.__esModule?o:{default:o};var i,f=t.hasSetImmediate="function"===typeof e&&e,c=t.hasNextTick="object"===typeof r&&"function"===typeof r.nextTick;function s(e){setTimeout(e,0)}function l(e){return function(t){var n=(0,u.default)(arguments,1);e(function(){t.apply(null,n)})}}i=f?e:c?r.nextTick:s,t.default=l(i)}).call(this,n(266).setImmediate,n(59))},576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t|=0;for(var n=Math.max(e.length-t,0),r=Array(n),o=0;o<n;o++)r[o]=e[t+o];return r},e.exports=t.default},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAsync=void 0;var r,o=n(594),a=(r=o)&&r.__esModule?r:{default:r};var u="function"===typeof Symbol;function i(e){return u&&"AsyncFunction"===e[Symbol.toStringTag]}t.default=function(e){return i(e)?(0,a.default)(e):e},t.isAsync=i},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);return(0,r.default)(function(e,t){n(e[0],t)},t,1)};var r=a(n(586)),o=a(n(577));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},586:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");var s=(0,c.default)(e),l=0,p=[],d=!1;function y(e,t,n){if(null!=n&&"function"!==typeof n)throw new Error("task callback must be a function");if(b.started=!0,(0,o.default)(e)||(e=[e]),0===e.length&&b.idle())return(0,i.default)(function(){b.drain()});for(var r=0,u=e.length;r<u;r++){var f={data:e[r],callback:n||a.default};t?b._tasks.unshift(f):b._tasks.push(f)}d||(d=!0,(0,i.default)(function(){d=!1,b.process()}))}function h(e){return function(t){l-=1;for(var n=0,o=e.length;n<o;n++){var a=e[n],u=(0,r.default)(p,a,0);0===u?p.shift():u>0&&p.splice(u,1),a.callback.apply(a,arguments),null!=t&&b.error(t,a.data)}l<=b.concurrency-b.buffer&&b.unsaturated(),b.idle()&&b.drain(),b.process()}}var v=!1,b={_tasks:new f.default,concurrency:t,payload:n,saturated:a.default,unsaturated:a.default,buffer:t/4,empty:a.default,drain:a.default,error:a.default,started:!1,paused:!1,push:function(e,t){y(e,!1,t)},kill:function(){b.drain=a.default,b._tasks.empty()},unshift:function(e,t){y(e,!0,t)},remove:function(e){b._tasks.remove(e)},process:function(){if(!v){for(v=!0;!b.paused&&l<b.concurrency&&b._tasks.length;){var e=[],t=[],n=b._tasks.length;b.payload&&(n=Math.min(n,b.payload));for(var r=0;r<n;r++){var o=b._tasks.shift();e.push(o),p.push(o),t.push(o.data)}l+=1,0===b._tasks.length&&b.empty(),l===b.concurrency&&b.saturated();var a=(0,u.default)(h(e));s(t,a)}v=!1}},length:function(){return b._tasks.length},running:function(){return l},workersList:function(){return p},idle:function(){return b._tasks.length+l===0},pause:function(){b.paused=!0},resume:function(){!1!==b.paused&&(b.paused=!1,(0,i.default)(b.process))}};return b};var r=s(n(587)),o=s(n(572)),a=s(n(591)),u=s(n(592)),i=s(n(575)),f=s(n(593)),c=s(n(577));function s(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},587:function(e,t,n){var r=n(588),o=n(589),a=n(590);e.exports=function(e,t,n){return t===t?a(e,t,n):r(e,o,n)}},588:function(e,t){e.exports=function(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}},589:function(e,t){e.exports=function(e){return e!==e}},590:function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},591:function(e,t){e.exports=function(){}},592:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null===e)throw new Error("Callback was already called.");var t=e;e=null,t.apply(this,arguments)}},e.exports=t.default},593:function(e,t,n){"use strict";function r(){this.head=this.tail=null,this.length=0}function o(e,t){e.length=1,e.head=e.tail=t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,r.prototype.removeLink=function(e){return e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev,e.prev=e.next=null,this.length-=1,e},r.prototype.empty=function(){for(;this.head;)this.shift();return this},r.prototype.insertAfter=function(e,t){t.prev=e,t.next=e.next,e.next?e.next.prev=t:this.tail=t,e.next=t,this.length+=1},r.prototype.insertBefore=function(e,t){t.prev=e.prev,t.next=e,e.prev?e.prev.next=t:this.head=t,e.prev=t,this.length+=1},r.prototype.unshift=function(e){this.head?this.insertBefore(this.head,e):o(this,e)},r.prototype.push=function(e){this.tail?this.insertAfter(this.tail,e):o(this,e)},r.prototype.shift=function(){return this.head&&this.removeLink(this.head)},r.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)},r.prototype.toArray=function(){for(var e=Array(this.length),t=this.head,n=0;n<this.length;n++)e[n]=t.data,t=t.next;return e},r.prototype.remove=function(e){for(var t=this.head;t;){var n=t.next;e(t)&&this.removeLink(t),t=n}return this},e.exports=t.default},594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)(function(t,n){var o;try{o=e.apply(this,t)}catch(a){return n(a)}(0,r.default)(o)&&"function"===typeof o.then?o.then(function(e){i(n,null,e)},function(e){i(n,e.message?e:new Error(e))}):n(null,o)})};var r=u(n(573)),o=u(n(595)),a=u(n(575));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){try{e(t,n)}catch(r){(0,a.default)(f,r)}}function f(e){throw e}e.exports=t.default},595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=(0,a.default)(arguments),n=t.pop();e.call(this,t,n)}};var r,o=n(576),a=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var r=a(n(1138)),o=a(n(1139));function a(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,t.CSVLink=o.default},895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},u=t.isJsons=function(e){return Array.isArray(e)&&e.every(function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&!(e instanceof Array)})},i=t.isArrays=function(e){return Array.isArray(e)&&e.every(function(e){return Array.isArray(e)})},f=t.jsonsHeaders=function(e){return Array.from(e.map(function(e){return Object.keys(e)}).reduce(function(e,t){return new Set([].concat(o(e),o(t)))},[]))},c=t.jsons2arrays=function(e,t){var n=t=t||f(e),r=t;u(t)&&(n=t.map(function(e){return e.label}),r=t.map(function(e){return e.key}));var a=e.map(function(e){return r.map(function(t){return s(t,e)})});return[n].concat(o(a))},s=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce(function(e,t,n,r){if(void 0!==e[t])return e[t];r.splice(1)},t);return void 0===n?"":n},l=t.elementOrEmpty=function(e){return e||0===e?e:""},p=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter(function(e){return e}).map(function(e){return e.map(function(e){return l(e)}).map(function(e){return""+n+e+n}).join(t)}).join("\n")},d=t.arrays2csv=function(e,t,n,r){return p(t?[t].concat(o(e)):e,n,r)},y=t.jsons2csv=function(e,t,n,r){return p(c(e,t),n,r)},h=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e},v=t.toCSV=function(e,t,n,r){if(u(e))return y(e,t,n,r);if(i(e))return d(e,t,n,r);if("string"===typeof e)return h(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,o){var u=v(e,n,r,o),i=a()?"application/csv":"text/csv",f=new Blob([t?"\ufeff":"",u],{type:i}),c="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+u,s=window.URL||window.webkitURL;return"undefined"===typeof s.createObjectURL?c:s.createObjectURL(f)}},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,o=n(0),a=((r=o)&&r.__esModule,n(8));t.propTypes={data:(0,a.oneOfType)([a.string,a.array]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]}}]);
//# sourceMappingURL=5.a1e14dea.chunk.js.map