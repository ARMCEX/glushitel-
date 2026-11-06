const APP="glush-app-346ba7bc9d",STAT="glush-static-c60064261c",APPF=["./", "index.html", "rashod.html", "norma.js", "manifest.webmanifest"],STATF=["icon-180.png", "icon-192.png", "icon-512.png", "lib/pdfmake.min.js", "lib/vfs_fonts.js", "img/bg-1a-1.jpg", "img/bg-1a-2.jpg", "img/bg-1a-3.jpg", "img/bg-1a-4.jpg", "img/bg-1b-1.jpg", "img/bg-1b-2.jpg", "img/bg-1b-3.jpg", "img/bg-1b-4.jpg", "img/bg-1b-5.jpg", "img/dn-13-1.jpg", "img/dn-2-1.jpg", "img/dn-6-1.jpg", "img/g-500-500-8-1.jpg", "img/k-3360-70-8-1.jpg", "img/k-3440-70-8-1.jpg", "img/ka-2930-60-52-8-1-1.jpg", "img/ka-3440-100-75-8-1.jpg", "img/ka-3440-100-86-8-1.jpg", "img/kg-2930-250-8-a-v-1.jpg", "img/kp-4-1.jpg", "img/kr-3440-340-10-1.jpg", "img/montazh-1.jpg", "img/p-1-1.jpg", "img/p-11-1.jpg", "img/p-2-1.jpg", "img/p-350-72-6_p-470-107-8-1.jpg", "img/p-470-84-8_p-470-100-8-1.jpg", "img/pkp-1-1.jpg", "img/pl-34-35-14-1-1.jpg", "img/pl-34-35-14-1-2.jpg", "img/png-1-1.jpg", "img/png-1-2.jpg", "img/pvt-1-1.jpg", "img/pvt-1-2.jpg", "img/pvt-2-1.jpg", "img/pvt-2-2.jpg", "img/pvt-3-1.jpg", "img/pvt-3-2.jpg", "img/s2750-3120-1-1.jpg", "img/s2750-3120-2-1.jpg", "img/s3360-2930-5-1-1.jpg", "img/s3360-2930-5-2-1.jpg", "img/s3440-2930-5-1-1.jpg", "img/s3440-3360-6-1.jpg", "img/s3440-3360-8-1.jpg", "img/s800-800-6-1-1.jpg", "img/sg-1-1.jpg", "img/sg-2-1.jpg", "img/spg-3200-2770-5-1-1.jpg", "img/zd-1-1.jpg", "img/zd-2-1.jpg", "img/zd-5-1.jpg"];
self.addEventListener("install",e=>e.waitUntil((async()=>{
  const s=await caches.open(STAT);for(const f of STATF){if(!(await s.match(f)))await s.add(f)}
  const a=await caches.open(APP);await a.addAll(APPF.map(f=>new Request(f,{cache:"reload"})));
  await self.skipWaiting()})()));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==APP&&k!==STAT).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
async function fresh(req){
  try{const ctl=new AbortController(),t=setTimeout(()=>ctl.abort(),5000);
    const r=await fetch(req.url,{cache:"no-store",signal:ctl.signal});clearTimeout(t);
    if(r.ok){const a=await caches.open(APP);const u=new URL(req.url);await a.put(u.pathname.endsWith("/")?"index.html":u.pathname.split("/").pop(),r.clone());return r}}catch(e){}
  const u=new URL(req.url),nm=u.pathname.endsWith("/")?"index.html":u.pathname.split("/").pop();
  return (await caches.match(nm))||(await caches.match(req,{ignoreSearch:true}))||(await caches.match("index.html"))}
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(e.request.mode==="navigate"||/\/(index\.html|rashod\.html|norma\.js|sw\.js)$/.test(u.pathname))return e.respondWith(fresh(e.request));
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
