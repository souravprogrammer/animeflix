if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Channel.png",revision:"76c0d9a8e2219bfe5ed97f2e58d00c7e"},{url:"/_next/static/9QrPMMgtdKY7NUU1ZYKnx/_buildManifest.js",revision:"2116422ad27174a67a89652495e471d0"},{url:"/_next/static/9QrPMMgtdKY7NUU1ZYKnx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/163.cbbc3b14ac491f0a.js",revision:"cbbc3b14ac491f0a"},{url:"/_next/static/chunks/166.49dfb803519e2099.js",revision:"49dfb803519e2099"},{url:"/_next/static/chunks/19.a792adf691281b2d.js",revision:"a792adf691281b2d"},{url:"/_next/static/chunks/236.00062e92e25b19b8.js",revision:"00062e92e25b19b8"},{url:"/_next/static/chunks/245.ed05ba61df004fc5.js",revision:"ed05ba61df004fc5"},{url:"/_next/static/chunks/280.d9695d4066b290f3.js",revision:"d9695d4066b290f3"},{url:"/_next/static/chunks/333.90521fba36ceb318.js",revision:"90521fba36ceb318"},{url:"/_next/static/chunks/37-5be5be8eeb97fd18.js",revision:"5be5be8eeb97fd18"},{url:"/_next/static/chunks/410.87a25eb24eeff5e1.js",revision:"87a25eb24eeff5e1"},{url:"/_next/static/chunks/524.b18db72be57dbf46.js",revision:"b18db72be57dbf46"},{url:"/_next/static/chunks/712.d2eb03ac0d28aa25.js",revision:"d2eb03ac0d28aa25"},{url:"/_next/static/chunks/735.2f5c3ce15499c560.js",revision:"2f5c3ce15499c560"},{url:"/_next/static/chunks/886-fce05a3a87125555.js",revision:"fce05a3a87125555"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-1cb174da82364de6.js",revision:"1cb174da82364de6"},{url:"/_next/static/chunks/pages/404-ec95c789a98c6f19.js",revision:"ec95c789a98c6f19"},{url:"/_next/static/chunks/pages/_app-965c340b38edc20c.js",revision:"965c340b38edc20c"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-4b48672a46aa7293.js",revision:"4b48672a46aa7293"},{url:"/_next/static/chunks/pages/list-281e74a4b3f9237c.js",revision:"281e74a4b3f9237c"},{url:"/_next/static/chunks/pages/profile-e1afb76e24ae038e.js",revision:"e1afb76e24ae038e"},{url:"/_next/static/chunks/pages/watch/%5B...show%5D-1c022bee9f85f07a.js",revision:"1c022bee9f85f07a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4d168ee704526973.js",revision:"4d168ee704526973"},{url:"/_next/static/css/cbad4da268462adf.css",revision:"cbad4da268462adf"},{url:"/error.png",revision:"7c27e0d2efc5a7f4b0b6ef88c7f56d0e"},{url:"/favicon.ico",revision:"f33f94d756c4671278b0fc4e9497781d"},{url:"/icon-192x192.png",revision:"386f0aa9a525d99b940c1e666b8fa4b7"},{url:"/icon-256x256.png",revision:"ba1ab014451e3a7e6db82269f6de76e5"},{url:"/icon-384x384.png",revision:"d9ccb0699febb4174e77ae8318077078"},{url:"/icon-512x512.png",revision:"fe7b60a816f59966946e5efe50acdac7"},{url:"/manifest.json",revision:"94650a825b0230050b6e1dcf3739ffb0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
