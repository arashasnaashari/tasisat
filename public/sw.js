if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,n,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(n.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0YRVQHUlJD6bK3RVgGiGK/_buildManifest.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/0YRVQHUlJD6bK3RVgGiGK/_ssgManifest.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/commons.0c1e776fe80463d3a045.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/main-d05026e4d67ba9239e35.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/pages/_app-b9b8ff1ab8f65a3a80ce.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/pages/_error-f5ba5ce7cd74f32925ff.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/pages/index-00b0fb076d2140012bbc.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/polyfills-aa54647e89713304033b.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/css/4c4e08cb1a2acb4c9366.css",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/BMitra.167c66262d72d9c6cae669c9d8654102.ttf",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/BMitra.25c2b9c67f508af69cb20967f3c55d09.otf",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/BMitra.3f7bb1168d2986467a596fb678d817ff.eot",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/BMitra.9c15c9209c98a699414cf14f06db6f34.woff2",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/BMitra.c381fe9c8ce0f3cb1eba184331c14aa9.svg",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/BMitra.e504628dbbe7dd311523f783d8f9afba.woff",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/IranianSans.31aa981b20f660203db0b98171912003.ttf",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/IranianSans.5c6028c519acd0dfa42c10fb2adda08e.svg",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/IranianSans.62f495549a25be40323d3bcf1af1b172.otf",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/IranianSans.c0a2b16b528596a0e9cc682f92cb0e4f.woff",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/IranianSans.e9a0a20a1825b69704ed8bb1d7a58508.eot",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Segoeui.3bcbc7bb08e1b4bd10558375609f28f3.ttf",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Segoeui.684e6e692d12e614ce3a77a7858b42f0.svg",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Segoeui.8fd65f11985ad9e4162a8d690383fb3e.woff2",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Segoeui.acbeffa8db8e04477a0e0c98d3dc7e8d.eot",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Segoeui.b758adf39360f27e19fb764518738d45.woff",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Segoeui.cae8883ca7a2ae5f83f6041fb41a7da1.otf",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Vazir.04fa21193336c3e1fa9870b7bd2face5.eot",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Vazir.8698ab7164cb8aa9f35b0df0e3a335df.ttf",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/_next/static/media/Vazir.a30b9598c58099f1584cd2e1d074004b.woff",revision:"0YRVQHUlJD6bK3RVgGiGK"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/img/icon.png",revision:"cac6ffd06ea7984642597f5e627b281d"},{url:"/img/icon1.png",revision:"d4339fc8e360ff2fbb95dbc73afd8b51"},{url:"/img/icon2.png",revision:"1e44f09d15d64517ea83e3eb4b04c6e6"},{url:"/img/icon3.png",revision:"3e24631f7195e56e720077620dad9a81"},{url:"/img/icon4.png",revision:"6a093d319ce2a23339bb7ef4140f8223"},{url:"/img/icon5.png",revision:"7a1d87adde53aba16b8a73f1b26f336b"},{url:"/img/icon6.png",revision:"2b6f8c9371d686efad45ef75ac9ed052"},{url:"/img/icon7.png",revision:"959d616a2df61301e264c5e347790456"},{url:"/img/inner1.jpg",revision:"fb88965a39d8e0a50294e73abbfa7e9e"},{url:"/img/inner2.jpg",revision:"caf2c99e414869c7c3e663ea000efdbf"},{url:"/img/inner3.jpg",revision:"9f16f4b74c87d3e766cb6624cb5565e5"},{url:"/img/landing.jpg",revision:"96d423c0ee995679cc3c5d029e5502ef"},{url:"/manifest.json",revision:"888c10b892102d929bffc950ece02eee"},{url:"/vercel.svg",revision:"add0e19c842458a231c2d120a79f09b6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
