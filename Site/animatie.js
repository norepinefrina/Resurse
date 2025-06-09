function Deschide(A) {location.replace(A)}
function Ia(A) {return document.getElementsByClassName(A)[0]}
function Ia2(A) {return document.getElementById(A)}

const Bara = Ia("Bara")
const Jos = Ia("Jos")
const Negru = Ia("Negru")
const Navigare = Ia("Navigare")
const Continut = Ia("Continut")
const Query = new URLSearchParams(document.location.search)
const Apple = /iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)

function Toggle() {
Navigare.classList.toggle("NavigareAnimatie")
Negru.classList.toggle("NegruAnimatie")}

function Copiaza(A) {
navigator.clipboard.writeText(A)}

function Redirect(A, B) {
if (B) {
Ia("Loading").classList.toggle("LoadingVizibil")
Negru.classList.toggle("NegruAnimatie")
setTimeout(function() {
Ia("Loading").classList.toggle("LoadingVizibil")
Negru.classList.toggle("NegruAnimatie")}, 8000) }
location.assign(A)}


Bara.innerHTML = `
<div class="Logo" onclick="Redirect('/')"></div>
<div class="Titlu" onclick="Redirect('/')">Norepinefrină</div>
<div class="NavigareDeschide" onclick="Toggle()"></div>`

Navigare.innerHTML = `
<div class="NavigareInchide" onclick="Toggle()"></div>
<div class="NavigareTitlu">Navigation</div>
<br><br>
<div class="NavigareButon" onclick="Redirect('/')">home</div>
<div class="NavigareButon Plans" onclick="Redirect('/planuri')">plans</div>
<div class="NavigareButon" onclick="Redirect('/ajutor')">help</div>
<div class="NavigareButon" onclick="Redirect('/Change')">change</div>
<div class="NavigareButon" onclick="Redirect('/Delete')">delete</div>
<div class="NavigareButon" onclick="Redirect('/executors')">executors</div>
<div class="NavigareButon" onclick="Redirect('/Giveaways')">giveaways</div>
<div class="NavigareButon" onclick="Redirect('/configurari')">configurations</div>`

Negru.innerHTML =`<div class="Loading"></div>`

Jos.innerHTML = `
<p class="Centru">Noradrenaline<br>
Made on Android for Android</p>
<br>
<a class="JosLink" href="/discord">Discord</a>
<a class="JosLink" href="https://youtube.com/@vodrite">YouTube</a>
<br>
<a class="JosLink" href="https://t.me/norepinafrina">Telegram Channel</a>
<a class="JosLink" href="https://t.me/norepinafrinagroup">Telegram Group</a>
<br>
<br>
<a class="JosLink Celestial" href="/reguli">Guidelines</a>`


// DeepSeek Background + Loading
if (document.title !== "404") {
const d=document,s=d.createElement('style');s.textContent=':root{--a:#9d00ff;--b:#ff61fa;--c:#00f7ff}.Loading{display:flex;justify-content:center;align-items:center;min-height:100vh;background:#000;margin:0;overflow:hidden;position:relative}.Loading .a{width:200px;height:200px;position:relative;animation:b 12s linear infinite}.Loading .a .c{position:absolute;width:100%;height:100%;background:radial-gradient(circle at center,transparent 60%,var(--a) 90%,#000 100%);filter:blur(20px);animation:d 4s ease-in-out infinite}.Loading .a .e{position:absolute;width:100%;height:100%;border:2px solid var(--c);border-radius:45%55%40%60%/60%40%60%40%;animation:f 8s linear infinite,g 12s infinite;box-shadow:0 0 40px var(--c)}.Loading .a .h{position:absolute;width:120%;height:120%;animation:i 16s linear infinite}.Loading .a .h .j{position:absolute;width:4px;height:4px;background:#fff;clip-path:polygon(50%0,100%50%,50%100%,0 50%);filter:drop-shadow(0 0 2px var(--b))}.Loading .k{position:absolute;font-family:Dekko;color:var(--c);text-transform:uppercase;letter-spacing:4px;text-shadow:0 0 15px var(--c);animation:l 1.2s infinite}@keyframes m{0%,100%{transform:translate(0,0);opacity:.3}50%{transform:translate(50px,-30px);opacity:1}}@keyframes b{0%{transform:rotate(0)scale(1)}50%{transform:rotate(180deg)scale(1.2)}100%{transform:rotate(360deg)scale(1)}}@keyframes d{0%,100%{opacity:.8;transform:scale(1)}50%{opacity:.4;transform:scale(1.4)}}@keyframes f{0%{border-radius:45%55%40%60%/60%40%60%40%}50%{border-radius:55%45%60%40%/40%60%40%60%}100%{border-radius:45%55%40%60%/60%40%60%40%}}@keyframes g{0%{border-color:var(--c)}33%{border-color:var(--a)}66%{border-color:var(--b)}}@keyframes i{to{transform:rotate(-360deg)}}@keyframes l{0%,100%{opacity:1}50%{opacity:.3}}.Loading .a .h .j:nth-child(1){top:10%;left:30%;animation:n 7s infinite}.Loading .a .h .j:nth-child(2){top:70%;left:80%;animation:n 9s infinite}.Loading .a .h .j:nth-child(3){top:40%;left:10%;animation:n 5s infinite}.Loading .a .h .j:nth-child(4){top:90%;left:40%;animation:n 6s infinite}@keyframes n{from{transform:rotate(0)translateX(60px)rotate(0)}to{transform:rotate(360deg)translateX(60px)rotate(-360deg)}}.Loading::before{content:"";position:fixed;width:300%;height:300%;background:radial-gradient(circle at 10%20%,#fff0 1%,transparent 3%),radial-gradient(circle at 90%80%,#f0f0 1%,transparent 3%),repeating-linear-gradient(45deg,#000 0 1px,transparent 1px 10px);animation:o 20s linear infinite;opacity:.3}@keyframes o{from{transform:translate(-50%,-50%)}to{transform:translate(0)}}.q{position:fixed;inset:0;z-index:-3;background:linear-gradient(325deg,#9430ff1a 0,transparent 25%,#d6afff14 50%,transparent 75%,#9430ff1a 100%),radial-gradient(circle,#1d0a33 0,#000);filter:blur(35px);opacity:.9}.r{position:fixed;width:2px;height:2px;background:#d6afff;border-radius:50%;filter:drop-shadow(0 0 5px #9430ff);animation:m 8s infinite ease-in-out;z-index:-2}';d.head.append(s);const g=d.createElement('div');g.className='q';d.body.append(g);d.addEventListener('DOMContentLoaded',()=>{Object.assign(d.body.style,{position:'relative',isolation:'isolate',zIndex:'1'});const a=d.createElement('div');for(let i=((Apple&&20)||200);i--;)a.appendChild(Object.assign(d.createElement('div'),{className:'r',style:`left:${Math.random()*1e2}%;top:${Math.random()*1e2}%;animation-delay:${Math.random()*8}s`}));d.body.append(a);d.querySelector('.Loading').innerHTML=`<div class=a><div class=c></div><div class=e></div><div class=h>${'<div class=j></div>'.repeat(4)}</div></div><div class=k>Lost in space..</div>`})}






