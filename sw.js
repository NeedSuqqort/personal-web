if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>n(e,o),l={module:{uri:o},exports:d,require:t};i[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(s(...e),d)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-7V5oYEbX.css",revision:null},{url:"assets/index-prjUPHFB.js",revision:null},{url:"index.html",revision:"9f7e48b108698ce2055a7f75e1662758"},{url:"registerSW.js",revision:"ad21e4d50f38947ea5a8b89268df7838"},{url:"favicon.ico",revision:"a7309093a03525bfd3a0fa9542d8204b"},{url:"apple-touch-icon.png",revision:"677f8df13d1bbe9e928b53e9086391b8"},{url:"android-chrome-192x192.png",revision:"7edf6280842bf528e773bcd9078b45df"},{url:"android-chrome-512x512.png",revision:"031898951e49e2e6d9a2258230afed2a"},{url:"maskable_icon.png",revision:"64eaa3caf4388856be1b0db022850ceb"},{url:"manifest.webmanifest",revision:"d1767bf0e56d17aa4d3a90b6b8405c2d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
