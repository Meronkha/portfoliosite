"use strict";var precacheConfig=[["/portfoliosite/index.html","1cf4a98cc1497e9e90d6b62a3dcf1ea7"],["/portfoliosite/static/css/main.3999bf19.css","6c542b9fd2628a06d7a50ded31c5da83"],["/portfoliosite/static/js/main.29a712a1.js","3200111c085ae34564254465898da085"],["/portfoliosite/static/media/CSS3_logo.747e0cdd.png","747e0cdd86b84302647a03026e26fd08"],["/portfoliosite/static/media/DIN-Regular.e0185b8d.ttf","e0185b8dd98e7dadde77c95bcc0e8b8d"],["/portfoliosite/static/media/JS_Logo.637ccbf2.png","637ccbf2b702b94a2cf9a3ff6cdd7dc2"],["/portfoliosite/static/media/LL.931ff365.png","931ff365830ddfd652b5cc3d4fd07ec3"],["/portfoliosite/static/media/Matlab.cf286322.png","cf28632239db6e02bc09bcca6bf5360f"],["/portfoliosite/static/media/aa.f984eaaa.png","f984eaaab140283cd556ca7e75e9b754"],["/portfoliosite/static/media/background.324716ec.jpg","324716ec6a234a365b1c05be492c07f1"],["/portfoliosite/static/media/catia.13b51ae4.png","13b51ae427cdaa47f5955ab8ab6c85b7"],["/portfoliosite/static/media/codepen2.df5a99db.png","df5a99db8ad1eb232762a77744db2a3c"],["/portfoliosite/static/media/down.1cbca645.svg","1cbca645cfc9911919d9d45f168da011"],["/portfoliosite/static/media/email.59dac313.png","59dac313459fe190c271e2ed7e86d998"],["/portfoliosite/static/media/html.da3c36ab.png","da3c36ab7d12285e143e25c4741d3d3e"],["/portfoliosite/static/media/linkedin-logo.7fb99744.png","7fb99744eaccae943d5adf537b5b3a93"],["/portfoliosite/static/media/me2.a3278f0e.jpeg","a3278f0e3819ee7131e1cf8695e1cacc"],["/portfoliosite/static/media/me21.48e11f61.jpeg","48e11f61875979dc4af2993ab6f5f60f"],["/portfoliosite/static/media/nodejs2.f8dab57d.png","f8dab57d048fabd69ea16c67e1615b86"],["/portfoliosite/static/media/pyth.ca2ceddc.png","ca2ceddcd9c28a22c449286f3fe66751"],["/portfoliosite/static/media/react.61a7eeee.png","61a7eeee285cd4b16e3f86b37ab01ae3"],["/portfoliosite/static/media/setings.33697f6b.png","33697f6bc37bacb5c924d3f73af0ab0f"],["/portfoliosite/static/media/ucl3.bfebdb81.jpg","bfebdb81ff0dc03217462ada055bdc19"],["/portfoliosite/static/media/website.62c4f4e8.jpg","62c4f4e84e1050a0f15bf92a376fd5ca"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/portfoliosite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});