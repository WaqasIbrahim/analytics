!function(){"use strict";var o=window.location,n=window.document,p=n.currentScript,l=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event",s=p&&p.getAttribute("data-exclude").split(",");function c(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}if(s)for(var i=0;i<s.length;i++)if("pageview"==e&&o.pathname.match(new RegExp("^"+s[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return c("exclusion rule");var a={};a.n=e,a.u=o.href,a.d=p.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=JSON.stringify(t.props));var r=new XMLHttpRequest;r.open("POST",l,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4==r.readyState&&t&&t.callback&&t.callback()}}}function t(e){for(var t=e.target,i="auxclick"==e.type&&2==e.which,a="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==o.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}n.addEventListener("click",t),n.addEventListener("auxclick",t);var i=p.getAttribute("file-types"),u=i&&i.split(",")||["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"];function a(e){for(var t,i,a=e.target,r="auxclick"==e.type&&2==e.which,n="click"==e.type;a&&(void 0===a.tagName||"a"!=a.tagName.toLowerCase()||!a.href);)a=a.parentNode;a&&a.href&&(t=a.href,i=t.split(".").pop(),u.some(function(e){return e==i}))&&((r||n)&&plausible("File Download",{props:{url:a.href}}),a.target&&!a.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){o.href=a.href},150),e.preventDefault()))}n.addEventListener("click",a),n.addEventListener("auxclick",a);var r=window.plausible&&window.plausible.q||[];window.plausible=e;for(var d,f=0;f<r.length;f++)e.apply(this,r[f]);function h(){d!==o.pathname&&(d=o.pathname,e("pageview"))}var w,g=window.history;g.pushState&&(w=g.pushState,g.pushState=function(){w.apply(this,arguments),h()},window.addEventListener("popstate",h)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){d||"visible"!==n.visibilityState||h()}):h()}();