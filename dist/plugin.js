W.loadPlugin({name:"windy-plugin-mt-2023",version:"0.1.0",author:"Arnaud Kawka",repository:{type:"git",url:"https://github.com/globe-coder/windy-plugin-mt-2023.git"},description:"Show boats position and tracks of the Minitransat 2023",displayName:"Minitransat 2023",hook:"menu"},["map"],(function(t,o){var e=o.map;const n=L.divIcon({html:'<svg  viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">\n            <path d="M4.784,13.635c0,0 -0.106,-2.924 0.006,-4.379c0.115,-1.502 0.318,-3.151 0.686,-4.632c0.163,-0.654 0.45,-1.623 0.755,-2.44c0.202,-0.54 0.407,-1.021 0.554,-1.352c0.038,-0.085 0.122,-0.139 0.215,-0.139c0.092,0 0.176,0.054 0.214,0.139c0.151,0.342 0.361,0.835 0.555,1.352c0.305,0.817 0.592,1.786 0.755,2.44c0.368,1.481 0.571,3.13 0.686,4.632c0.112,1.455 0.006,4.379 0.006,4.379l-4.432,0Z" style="fill:#002efc;"/><path d="M5.481,12.731c0,0 -0.073,-3.048 0.003,-4.22c0.06,-0.909 0.886,-3.522 1.293,-4.764c0.03,-0.098 0.121,-0.165 0.223,-0.165c0.103,0 0.193,0.067 0.224,0.164c0.406,1.243 1.232,3.856 1.292,4.765c0.076,1.172 0.003,4.22 0.003,4.22l-3.038,0Z" style="fill:#fff;fill-opacity:0.846008;"/>\n        </svg>',iconSize:[24,24],iconAnchor:[12,12]});let i=[],c=[];const s=()=>{for(const t of i)if(t._icon){t._icon.style.transformOrigin="12px 12px";const o=t._icon.getAttribute("data-heading");-1===t._icon.style.transform.indexOf("rotateZ")&&(t._icon.style.transform=`${t._icon.style.transform} rotateZ(${o||0}deg)`)}};let r=!1;t.ondestroy=()=>{r&&(i.forEach((t=>e.removeLayer(t))),c.forEach((t=>e.removeLayer(t))),i=[],c=[],e.off("zoom",s),e.off("zoomend",s),e.off("viewreset",s),r=!1)},t.onopen=()=>{r||(fetch("https://raw.githubusercontent.com/globe-coder/minitransat-tracker/master/boats_result.json").then((t=>t.json())).then((t=>t.result)).then((t=>{let o=0;for(const r of Object.keys(t)){o=(o+60)%360;const a=t[r],l=L.polyline(a.track,{color:`hsl(${o}, 100%, 45%)`,weight:2,opacity:.5}).addTo(e);l.on("mouseover",(()=>l.setStyle({opacity:1,weight:4}))),l.on("mouseout",(()=>l.setStyle({opacity:.5,weight:2})));const p=L.marker(a.track[a.track.length-1],{icon:n}).addTo(e);i.push(p),p._icon.setAttribute("data-heading",a.heading),p.bindPopup(r),p.on("click",(()=>{l.setStyle({weight:4,opacity:1})})),p.on("mouseover",(()=>l.setStyle({weight:4,opacity:1}))),p.on("mouseout",(()=>{p._icon.classList.contains("leaflet-popup-target")||l.setStyle({weight:2,opacity:.5})})),c.push(l),s()}})).catch(console.error),e.on("zoom",s),e.on("zoomend",s),e.on("viewreset",s),r=!0,e.setView([42,-5],6))}}));