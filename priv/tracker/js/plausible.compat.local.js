!function(){"use strict";var t,e,i,a=window.location,r=window.document,o=r.getElementById("plausible"),s=o.getAttribute("data-api")||(t=o.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function n(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var i={};i.n=t,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}}var l=window.plausible&&window.plausible.q||[];window.plausible=n;for(var p,d=0;d<l.length;d++)n.apply(this,l[d]);function w(){p!==a.pathname&&(p=a.pathname,n("pageview"))}var u,c=window.history;c.pushState&&(u=c.pushState,c.pushState=function(){u.apply(this,arguments),w()},window.addEventListener("popstate",w)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){p||"visible"!==r.visibilityState||w()}):w()}();