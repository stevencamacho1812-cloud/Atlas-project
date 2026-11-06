const IMG={"p10": "assets/img/p10.jpg", "p7": "assets/img/p7.jpg", "p1": "assets/img/p1.jpg", "p2": "assets/img/p2.jpg", "p3": "assets/img/p3.jpg", "p4": "assets/img/p4.jpg", "p5": "assets/img/p5.jpg", "p6": "assets/img/p6.jpg", "p8": "assets/img/p8.jpg", "p9": "assets/img/p9.jpg", "u2": "assets/img/u2.jpg", "u4": "assets/img/u4.jpg", "u10": "assets/img/u10.jpg", "l34": "assets/img/l34.jpg", "l57": "assets/img/l57.jpg", "l910": "assets/img/l910.jpg", "v45": "assets/img/v45.jpg", "v101": "assets/img/v101.jpg", "v67": "assets/img/v67.jpg", "lk": "assets/img/lk.png", "lw": "assets/img/lw.png", "u1": "assets/img/u1.jpg", "u3": "assets/img/u3.jpg", "u5": "assets/img/u5.jpg", "u6": "assets/img/u6.jpg", "u7": "assets/img/u7.jpg", "u8": "assets/img/u8.jpg", "u9": "assets/img/u9.jpg", "g": "assets/img/g.jpg", "n6": "assets/img/n6.jpg", "s7": "assets/img/s7.jpg", "s5": "assets/img/s5.jpg", "d57": "assets/img/d57.jpg", "d12": "assets/img/d12.jpg", "d910": "assets/img/d910.jpg", "d68": "assets/img/d68.jpg", "s3": "assets/img/s3.jpg", "s2": "assets/img/s2.jpg", "s6": "assets/img/s6.jpg", "s4": "assets/img/s4.jpg", "d34": "assets/img/d34.jpg", "s1": "assets/img/s1.jpg", "s8": "assets/img/s8.jpg", "s10": "assets/img/s10.jpg", "s9": "assets/img/s9.jpg"};
const WA="573053533404";
const $=s=>document.querySelector(s),fmt=n=>"$ "+n.toLocaleString("es-CO")+" COP";
const P=[["Neón","Una noche en Las Vegas, con el bólido en la curva.","p",["v101"]],["Lluvia","Agua, velocidad y un auto que atraviesa la cortina.","p",[]],["Visor","Un casco que refleja todo lo que pasa a su alrededor.","r",["l34"]],["Principado","Cuatro autos bajando por las calles de un circuito urbano.","a",["l34","v45"]],["Parrilla","La salida vista desde lo alto, en pleno giro.","a",["v45","l57"]],["Cima","Brazos abiertos sobre el auto, el instante de la victoria.","r",["v67","n6"]],["Esse","Una curva en S que se pierde en el horizonte.","p",["l57","v67"]],["Humo","Un derrape en la noche entre nubes de humo.","p",[]],["Leyenda","El casco y el cockpit, una mirada hacia adelante.","r",["l910"]],["Apex","El punto exacto de la curva, a toda velocidad.","p",["l910","v101"]]].map((a,i)=>({id:i+1,n:a[0],s:a[1],c:a[2],x:a[3]}));
const S=[["S","40 × 30 cm",140000],["M","50 × 40 cm",170000],["L","70 × 50 cm",230000],["XL","100 × 70 cm",420000]];
const C={p:"Pista y movimiento",a:"Vistas aéreas",r:"Cascos y retratos"};
let flt="",cur=null,cart=[];
try{cart=JSON.parse(localStorage.getItem("atlas")||"[]")}catch(e){}
cart=cart.filter(i=>i&&P[i.id-1]&&S[i.s]&&i.q>0);
const save=()=>{try{localStorage.setItem("atlas",JSON.stringify(cart))}catch(e){}};
const wa=t=>"https://wa.me/"+WA+"?text="+encodeURIComponent(t);
document.querySelectorAll("[data-i]").forEach(e=>e.src=IMG[e.dataset.i]);
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa);a.target="_blank";a.rel="noopener"});
$("#fp").textContent="Desde "+fmt(S[0][2]);
function grid(){$("#gr").innerHTML=P.filter(p=>!flt||p.c==flt).map(p=>`<button class="cd" data-id="${p.id}"><img src="${IMG["p"+p.id]}" alt="Cuadro ${p.n}, fotografía de Fórmula 1 en blanco y negro" loading="lazy"><span class="nm">${p.n}</span><span class="ds">${p.s}</span><span class="pr">Desde ${fmt(S[0][2])}</span></button>`).join("");$("#fi").hidden=!flt;$("#ft").textContent=C[flt]||""}
const VID={"s1": "assets/video/s1.mp4", "s6": "assets/video/s6.mp4", "s2": "assets/video/s2.mp4", "s10": "assets/video/s10.mp4", "s8": "assets/video/s8.mp4", "d12": "assets/video/d12.mp4", "d34": "assets/video/d34.mp4", "d57": "assets/video/d57.mp4", "s3": "assets/video/s3.mp4", "s4": "assets/video/s4.mp4", "d910": "assets/video/d910.mp4", "d68": "assets/video/d68.mp4", "s5": "assets/video/s5.mp4", "s9": "assets/video/s9.mp4", "s7": "assets/video/s7.mp4"},RM=matchMedia("(prefers-reduced-motion:reduce)").matches,ISV=k=>/^[sd]/.test(k),PAIR={1:"d12",2:"d12",3:"d34",4:"d34",5:"d57",7:"d57",6:"d68",8:"d68",9:"d910",10:"d910"};
const items=p=>["s"+p.id,"p"+p.id,...p.x,"u"+p.id,PAIR[p.id],"g"].filter(k=>!ISV(k)||VID[k]);
function modal(){const p=cur.p,k=items(p),kk=k[cur.g],pr=S[cur.s][2];
$("#mb").innerHTML=`<div>${ISV(kk)?`<video class="big vd" src="${VID[kk]}" poster="${IMG[kk]}" aria-label="Video del cuadro ${p.n} en una sala" muted loop playsinline preload="metadata" controls ${RM?"":"autoplay"}></video>`:`<img class="big" src="${IMG[kk]}" alt="Cuadro ${p.n}, foto ${cur.g+1}" style="object-fit:${kk[0]=="p"?"cover":"contain"}">`}<div class="th">${k.map((x,i)=>`<button data-g="${i}" aria-label="Foto ${i+1}" aria-current="${i==cur.g}"><img src="${IMG[x]}" alt="">${ISV(x)?"<i class=pl>▶</i>":""}</button>`).join("")}</div></div>
<div class="mi"><h3>${p.n}</h3><p>${p.s}</p><h5>Tamaño</h5><div class="ch">${S.map((s,i)=>`<button data-s="${i}" aria-pressed="${i==cur.s}">${s[0]} · ${s[1]}</button>`).join("")}</div>
<div class="tot">${fmt(pr)}</div><h5>Materiales</h5><ul class="mt"><li>Impresión fotográfica en blanco y negro</li><li>Paspartú blanco y marco delgado</li><li>Vidrio acrílico, liviano y seguro</li></ul><button class="b d" id="ad" style="width:100%;margin:1.2rem 0 0">Agregar al carrito</button></div>`}
function showP(id){cur={p:P[id-1],s:0,f:0,g:0};modal();$("#m").showModal()}
const price=i=>S[i.s][2];
function draw(){const sub=cart.reduce((t,i)=>t+price(i)*i.q,0),n=cart.reduce((t,i)=>t+i.q,0);
$("#cn").textContent=n;$("#cf").hidden=!n;
$("#ci").innerHTML=n?cart.map((i,x)=>`<div class="li"><img src="${IMG["p"+i.id]}" alt=""><div><b style="font-weight:400">${P[i.id-1].n}</b><br>Talla ${S[i.s][0]} · ${S[i.s][1]}<br>${fmt(price(i))}<div class="q"><button data-d="${x}" aria-label="Quitar uno">−</button><span>${i.q}</span><button data-u="${x}" aria-label="Agregar uno">+</button></div></div><button data-r="${x}" style="background:none;border:0;text-decoration:underline;align-self:start">Quitar</button></div>`).join("")+`<div style="border-top:1px solid var(--line);padding-top:.8rem"><div class="rw" style="font-size:1.2rem"><span>Total cuadros</span><span>${fmt(sub)}</span></div><p style="margin:.3rem 0 0;color:var(--mut);font-size:.9rem">El envío lo coordinamos contigo por WhatsApp.</p></div>`:`<p>Tu carrito está vacío. <a href="#coleccion" id="ce">Mira la colección</a>.</p>`;
save()}
const dr=o=>{$("#dr").classList.toggle("on",o);$("#sc").classList.toggle("on",o);if(o)setTimeout(()=>$("#dx").focus(),60)};
$("#gr").onclick=e=>{const b=e.target.closest(".cd");if(b)showP(+b.dataset.id)};
$("#mb").onclick=e=>{const b=e.target.closest("button");if(!b)return;const d=b.dataset;
if(d.g!=null)cur.g=+d.g;else if(d.s!=null)cur.s=+d.s;else if(d.f!=null)cur.f=+d.f;
else if(b.id=="ad"){const t=cart.find(i=>i.id==cur.p.id&&i.s==cur.s);t?t.q++:cart.push({id:cur.p.id,s:cur.s,q:1});$("#m").close();draw();dr(true);return}
modal()};
$("#m").onclick=e=>{if(e.target.id=="m")$("#m").close()};$("#mx").onclick=()=>$("#m").close();
$("#cb").onclick=()=>dr(true);document.addEventListener("keydown",e=>{if(e.key=="Escape")dr(false)});$("#m").addEventListener("close",()=>{$("#mb").innerHTML=""});$("#dx").onclick=$("#sc").onclick=()=>dr(false);
$("#ci").onclick=e=>{if(e.target.id=="ce")return dr(false);const b=e.target.closest("button");if(!b)return;const d=b.dataset;
if(d.u!=null)cart[d.u].q++;if(d.d!=null&&--cart[d.d].q<1)cart.splice(d.d,1);if(d.r!=null)cart.splice(d.r,1);draw()};
document.querySelectorAll(".ds3 button").forEach(b=>b.onclick=()=>{flt=b.dataset.f;grid();$("#coleccion").scrollIntoView()});
$("#fr").onclick=()=>{flt="";grid()};
$("#fb").onclick=()=>showP(10);
$("#go").onclick=()=>{if(!$("#nom").value.trim()||!$("#dir").value.trim()){$("#er").textContent="Escribe tu nombre y tu ciudad y dirección para enviar el pedido.";($("#nom").value.trim()?$("#dir"):$("#nom")).focus();return}$("#er").textContent="";const sub=cart.reduce((t,i)=>t+price(i)*i.q,0);
const l=cart.map(i=>`- ${i.q} × ${P[i.id-1].n}, talla ${S[i.s][0]} (${S[i.s][1]}): ${fmt(price(i)*i.q)}`).join("\n");
window.open(wa(`Hola Atlas Project, quiero hacer este pedido:\n${l}\n\nTotal cuadros: ${fmt(sub)}\nEnvío: por coordinar\nPago con: ${document.querySelector("[name=pay]:checked").value}\nNombre: ${$("#nom").value}\nCiudad y dirección: ${$("#dir").value}`),"_blank")};
grid();draw();
