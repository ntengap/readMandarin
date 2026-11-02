// Moteur partagé — le contenu et les textes sont dans lang-fr.js / lang-en.js
const TPL="\n<header>\n  <div class=\"streak\" id=\"streak\">{{0}}</div>\n  <button class=\"inst hid\" id=\"inst\">{{1}}</button>\n  <div class=\"nav\"><button class=\"ic\" id=\"prev\">{{2}}</button><button id=\"pos\" class=\"posb\"></button><button class=\"ic\" id=\"next\">{{3}}</button></div>\n</header>\n<div class=\"hbar hid\" id=\"hbar\"><button id=\"hback\"></button><span id=\"hname\"></span></div>\n<div id=\"vHome\" class=\"hid\"></div>\n<div class=\"tabs t4 hid\" id=\"mainTabs\"><button id=\"tabR\" class=\"on\">{{4}}</button><button id=\"tabB\">{{5}}</button><button id=\"tabQ\">{{6}}</button><button id=\"tabP\">{{7}}</button><button id=\"tabN\">{{8}}</button><button id=\"tabT\">{{9}}</button><button id=\"tabS\">{{10}}</button><button id=\"tabA\">{{11}}</button></div>\n<div id=\"cal\" class=\"hid\"><div class=\"csheet\"><div class=\"chead\"><button id=\"cpv\">‹</button><span id=\"cmt\"></span><button id=\"cnx\">›</button><button id=\"calx\">{{13}}</button></div><div class=\"cg\" id=\"cg\"></div><div class=\"cinfo\" id=\"cinfo\"></div><button id=\"ctd\" class=\"ctd\"></button><div class=\"cleg\">{{14}}</div></div></div>\n<div id=\"vRead\">\n<h1 id=\"title\"></h1>\n<div class=\"date\" id=\"date\"></div>\n<main id=\"text\"></main>\n<div class=\"tip\" id=\"tip\"></div>\n<div class=\"tools\">\n  <button id=\"all\">{{15}}</button>\n  <button id=\"lis\">{{16}}</button>\n  <button id=\"tpy\" class=\"act\">{{17}}</button>\n  <button id=\"tfr\">{{18}}</button>\n</div>\n<div class=\"tools lo\"><button id=\"lslow\" class=\"act\">{{19}}</button><button id=\"lfr\">{{20}}</button><button id=\"lall\">{{21}}</button></div>\n<button class=\"done\" id=\"done\">{{22}}</button>\n<button class=\"nxt hid\" id=\"nxt\"></button>\n<div class=\"dots\" id=\"dots\"></div>\n</div>\n<div id=\"vBuild\" class=\"hid\">\n  <div class=\"big\"><div class=\"line\" id=\"bline\"></div><div class=\"tr\" id=\"btr\"></div><div class=\"emo\" id=\"bemo\"></div></div>\n  <div class=\"tabs t4\"><button id=\"mA\" class=\"on\">{{23}}</button><button id=\"mE\">{{24}}</button><button id=\"mC\">{{25}}</button><button id=\"nG\" class=\"tg\">{{26}}</button></div>\n  <div id=\"gS\"><div class=\"grp\"><b>{{27}}</b>{{28}}</div><div class=\"chips cs\" id=\"cS\"></div></div>\n  <div id=\"gV\"><div class=\"grp\"><b>{{29}}</b>{{30}}</div><div class=\"chips cv\" id=\"cV\"></div></div>\n  <div id=\"gO\"><div class=\"grp\"><b id=\"lOh\">{{31}}</b> <span id=\"lOt\">{{32}}</span></div><div class=\"chips co\" id=\"cO\"></div></div>\n  <div id=\"gN\" class=\"hid\"><div class=\"grp\"><b>{{33}}</b>{{34}}</div><div class=\"chips\" id=\"cN\"></div><div class=\"grp\"><b>{{35}}</b>{{36}}</div><div class=\"chips\" id=\"cT\"></div></div>\n  <div class=\"brow\"><button id=\"bsay\">{{37}}</button><button class=\"alt\" id=\"brnd\">{{38}}</button></div>\n</div>\n<div id=\"vQuiz\" class=\"hid\">\n  <div class=\"big\"><div class=\"tr\" id=\"qfr\" style=\"font-size:22px;color:var(--ink);margin:0\"></div></div>\n  <div class=\"ans\" id=\"qans\"></div>\n  <div class=\"chips\" id=\"qpool\" style=\"justify-content:center\"></div>\n  <div class=\"qmsg\" id=\"qmsg\"></div>\n  <div class=\"brow\"><button class=\"alt\" id=\"qreset\">{{39}}</button><button id=\"qnext\">{{40}}</button></div>\n  <div class=\"qsc\" id=\"qsc\"></div>\n</div>\n<div id=\"vPair\" class=\"hid\">\n  <div class=\"hint\">{{41}}</div>\n  <div class=\"big\"><div class=\"emo\" id=\"pemo\" style=\"font-size:64px;margin:0\"></div><div class=\"line\" id=\"pline\"></div><div class=\"tr\" id=\"pfr\"></div></div>\n  <div class=\"chips\" id=\"popts\" style=\"justify-content:center\"></div>\n  <div class=\"qmsg\" id=\"pmsg\"></div>\n  <div class=\"brow\"><button id=\"pnext\">{{42}}</button></div>\n  <div class=\"qsc\" id=\"psc\"></div>\n</div>\n<div id=\"vNames\" class=\"hid\">\n  <div class=\"hint\">{{43}}</div>\n  <div class=\"nsub\"><button id=\"nsv\" class=\"on\">{{44}}</button><button id=\"nse\">{{45}}</button><button id=\"nsp\">{{46}}</button></div>\n  <div id=\"nlist\"></div>\n</div>\n<div id=\"vTrip\" class=\"hid\">\n  <div class=\"hint\">{{47}}</div>\n  <div class=\"tgs\" id=\"tgs\"></div>\n  <div class=\"tools\" style=\"margin:0 0 10px\"><button id=\"tg\">{{48}}</button><button id=\"td\">{{49}}</button></div>\n  <div id=\"tlist\"></div>\n  <div id=\"tgame\" class=\"hid\">\n    <div class=\"big\"><div style=\"font-size:54px\">{{50}}</div><div class=\"tr\">{{51}}</div>\n      <div class=\"row\"><button class=\"sm\" id=\"gplay\">{{52}}</button><button class=\"sm\" id=\"gslow\">{{53}}</button></div></div>\n    <div id=\"gopts\"></div>\n    <div class=\"qmsg\" id=\"gmsg\"></div>\n    <div class=\"brow\"><button id=\"gnext\">{{54}}</button></div>\n    <div class=\"qsc\" id=\"gsc\"></div>\n  </div>\n  <div id=\"tdlg\" class=\"hid\"></div>\n</div>\n<div id=\"vTone\" class=\"hid\">\n  <div class=\"tgs\" id=\"ttabs\"></div>\n  <div id=\"tcont\"></div>\n</div>\n<div id=\"vTpr\" class=\"hid\">\n  <div class=\"hint\">{{55}}</div>\n  <div class=\"tgs\" id=\"tptabs\"></div>\n  <div id=\"tpcont\"></div>\n</div>\n\n<div style=\"text-align:center;margin:18px 0 6px;font-size:13px\"><a href=\"index.html?choose=1\" style=\"color:#8a7564\">🌐 Langue / Language</a></div>";
document.body.insertAdjacentHTML("afterbegin",TPL.replace(/\{\{(\d+)\}\}/g,(m,k)=>UI[k]));
try{localStorage.setItem("lm-lang",LANG)}catch(e){}

// "hanzi|pinyin|français" séparés par des espaces ; sans « | » = ponctuation

let S;try{S=JSON.parse(localStorage.getItem(K))||{}}catch(e){S={}}
S.done=S.done||{};
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
const dayKey=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const dayNum=d=>Math.floor((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/864e5);
const today=new Date();let off=0;
if(!S.start){S.start=dayKey(today);save()}
function startDate(){const p=S.start.split('-');return new Date(+p[0],+p[1]-1,+p[2])}
const $=id=>document.getElementById(id);
let showFr=false,showPy=true;

function cur(){const d=new Date(today);d.setDate(d.getDate()+off);return d}
function streak(){let n=0;const d=new Date(today);if(!S.done[dayKey(d)])d.setDate(d.getDate()-1);
  while(S.done[dayKey(d)]){n++;d.setDate(d.getDate()-1)}return n}

function speak(txt,rate){
  if(!window.speechSynthesis)return;
  if(L.on)stopL();
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(txt);u.lang="zh-CN";u.rate=rate||.8;
  const v=speechSynthesis.getVoices().find(v=>/zh[-_]CN/i.test(v.lang))||speechSynthesis.getVoices().find(v=>/^zh/i.test(v.lang));
  if(v)u.voice=v;speechSynthesis.speak(u);
}
function parseRaw(raw){
  const re=/([，。！？、；：])|([^\s|，。！？、；：]+)\|([^|]*)\|(.*?)(?=\s+[^\s|]+\||\s+[，。！？、；：]|\s*$)/g;
  const out=[];let m;
  while((m=re.exec(raw))){out.push(m[1]?[m[1]]:[m[2],m[3].trim(),m[4].trim()])}
  return out;
}
const plain=s=>parseRaw(s).map(p=>p[0]).join("");

function render(){
  const d=cur(),k=dayKey(d),i=curIdx(),x=T[i];
  $("title").textContent=x.t;
  $("date").textContent=d.toLocaleDateString(I[0],{weekday:"long",day:"numeric",month:"long"})+I[1]+(i+1)+"/"+T.length+(nAt(off)>=T.length?RV:"");
  $("pos").textContent="📅 "+(off===0?I[2]:off>0?"+"+off+I[3]:"−"+(-off)+I[3]);
  $("next").style.visibility=stepDay(1)===null?"hidden":"visible";$("prev").style.visibility=stepDay(-1)===null?"hidden":"visible";
  $("tip").style.display="none";
  const box=$("text");box.innerHTML="";box.className=showPy?"":"hide-py";
  x.s.forEach(([raw,fr])=>{
    const c=document.createElement("div");c.className="sent";
    const l=document.createElement("div");l.className="line";
    parseRaw(raw).forEach(p=>{
      if(p.length<3){const e=document.createElement("span");e.className="p";e.textContent=p[0];l.appendChild(e);return}
      const w=document.createElement("div");w.className="w";
      w.innerHTML='<span class="py">'+p[1]+'</span><span class="hz">'+p[0]+'</span>';
      w.onclick=()=>{document.querySelectorAll(".w.on").forEach(e=>e.classList.remove("on"));w.classList.add("on");
        const tp=$("tip");tp.style.display="block";tp.innerHTML="<b>"+p[0]+"</b>"+p[1]+" — "+p[2];speak(p[0],.7)};
      l.appendChild(w);
    });
    c.appendChild(l);
    const f=document.createElement("div");f.className="fr";f.textContent=showFr?fr:"";c.appendChild(f);
    const r=document.createElement("div");r.className="row";
    const b=document.createElement("button");b.className="sm";b.textContent="🔊";b.onclick=()=>speak(plain(raw));
    r.appendChild(b);c.appendChild(r);box.appendChild(c);
  });
  const dn=!!S.done[k];
  $("done").textContent=dn?I[4]:I[5];
  $("done").className="done"+(dn?" ok":"");
  const nx=stepDay(1);$("nxt").classList.toggle("hid",!(dn&&nx!==null));$("nxt").classList.remove("pop");$("nxt").textContent=X.nx;
  $("streak").textContent="🔥 "+streak();
  const dots=$("dots");dots.innerHTML="";
  for(let j=6;j>=0;j--){const e=new Date(today);e.setDate(e.getDate()-j);
    const n=document.createElement("i");if(S.done[dayKey(e)])n.className="on";if(j===0)n.classList.add("today");dots.appendChild(n)}
}

$("done").onclick=()=>{const k=dayKey(cur());let unl=false;S.done[k]=!S.done[k];
  if(!S.done[k])delete S.done[k];
  else if(off===frontOff()&&nAt(off)+1<T.length){S.front=dayNum(today)+off+1;unl=true}
  save();render();if(unl){const n=$("nxt");n.textContent=X.un+"  "+X.nx;n.classList.add("pop")}};
$("nxt").onclick=()=>{const o=stepDay(1);if(o!==null){ov=null;off=o;render();window.scrollTo(0,0)}};
const LOC=I[0];
const RV=LANG==="fr"?" · ↺ révision":" · ↺ review";
function nAt(o){const d=new Date(today);d.setDate(d.getDate()+o);return dayNum(d)-dayNum(startDate())}
const X=LANG==="fr"?{nx:"Jour suivant ›",lk:(n,t)=>"🔒 Jour "+n+(t?" · "+t:"")+" — lis le texte du jour pour le débloquer.",un:"🔓 Jour suivant débloqué !"}
 :{nx:"Next day ›",lk:(n,t)=>"🔒 Day "+n+(t?" · "+t:"")+" — read today's text to unlock it.",un:"🔓 Next day unlocked!"};
function themeOf(i){const x=TH.find(t=>i+1>=t[0]&&i+1<=t[1]);return x?x[2]:""}
function frontOff(){return Math.max(0,(S.front||0)-dayNum(today))}
function hasText(o){if(o>frontOff())return false;const n=nAt(o);return n>=0&&(n<T.length||o===0)}
function curIdxAt(o){const n=nAt(o);return((n%T.length)+T.length)%T.length}
function stepDay(dir){const lo=-nAt(0),hi=frontOff();for(let o=off+dir;o<=hi&&o>=lo;o+=dir)if(hasText(o))return o;return null}
function goDay(o){ov=null;off=o;$("cal").classList.add("hid");render();window.scrollTo(0,0)}
let cm=null;
function calOpen(){const d=cur();cm={y:d.getFullYear(),m:d.getMonth()};calDraw();$("cal").classList.remove("hid")}
function calDraw(){
  const g=$("cg");g.innerHTML="";const sd=startDate(),first=new Date(cm.y,cm.m,1);
  $("cmt").textContent=first.toLocaleDateString(LOC,{month:"long",year:"numeric"});
  const mm=cm.y*12+cm.m;const lastD=new Date(today);lastD.setDate(lastD.getDate()+frontOff()+7);
  $("cpv").disabled=mm<=sd.getFullYear()*12+sd.getMonth();$("cnx").disabled=mm>=lastD.getFullYear()*12+lastD.getMonth();
  for(let k=0;k<7;k++){const w=document.createElement("div");w.className="cwd";w.textContent=new Date(2024,0,1+k).toLocaleDateString(LOC,{weekday:"narrow"});g.appendChild(w)}
  const lead=(first.getDay()+6)%7;for(let k=0;k<lead;k++)g.appendChild(document.createElement("i"));
  const dim=new Date(cm.y,cm.m+1,0).getDate();
  for(let dd=1;dd<=dim;dd++){
    const e=new Date(cm.y,cm.m,dd),o=dayNum(e)-dayNum(today),b=document.createElement("button");
    b.textContent=dd;const ok=hasText(o);b.disabled=!ok;
    if(ok&&S.done[dayKey(e)])b.classList.add("rd");
    if(o===0)b.classList.add("td");if(o===off)b.classList.add("cu");
    if(ok)b.onclick=()=>goDay(o);
    else if(o>0&&nAt(o)>=0&&nAt(o)<T.length){b.disabled=false;b.classList.add("lk");b.onclick=()=>{$("cinfo").textContent=X.lk(nAt(o)+1,themeOf(nAt(o)))}}
    g.appendChild(b)}
  $("cinfo").textContent="";
}
$("ctd").textContent=I[2];$("ctd").onclick=()=>goDay(0);
$("cpv").onclick=()=>{cm.m--;if(cm.m<0){cm.m=11;cm.y--}calDraw()};
$("cnx").onclick=()=>{cm.m++;if(cm.m>11){cm.m=0;cm.y++}calDraw()};
$("pos").onclick=calOpen;$("calx").onclick=()=>$("cal").classList.add("hid");
$("cal").onclick=e=>{if(e.target.id==="cal")$("cal").classList.add("hid")};
$("prev").onclick=()=>{const o=stepDay(-1);if(o!==null){ov=null;off=o;render()}};
$("next").onclick=()=>{const o=stepDay(1);if(o!==null){ov=null;off=o;render()}};
$("all").onclick=()=>{const x=T[curIdx()];speak(x.s.map(s=>plain(s[0])).join(""))};
$("tpy").onclick=()=>{showPy=!showPy;$("tpy").classList.toggle("act",showPy);render()};
$("tfr").onclick=()=>{showFr=!showFr;$("tfr").classList.toggle("act",showFr);render()};

// ---------- Construire ----------

const CLS=[...new Map(ITM.map(x=>[x.c,[x.c,x.cp]])).values()];

const DG=["","一","二","三","四","五","六","七","八","九"],PG=["","yī","èr","sān","sì","wǔ","liù","qī","bā","jiǔ"];
function numZh(n,it){
  if(n===1)return ["一",it.y];
  if(n===2)return ["两","liǎng"];
  if(n<10)return [DG[n],PG[n]];
  const t=Math.floor(n/10),u=n%10;
  return [(t>1?DG[t]:"")+"十"+(u?DG[u]:""),(t>1?PG[t]+" ":"")+"shí"+(u?" "+PG[u]:"")];
}

const NUMH=["一","两","三","四","五","六","七","八","九","十"];
const NUMP=["","liǎng","sān","sì","wǔ","liù","qī","bā","jiǔ","shí"];

const cap=t=>t.charAt(0).toUpperCase()+t.slice(1)+".";

let B={s:0,m:0,v:0,o:0,a:0,i:0,n:3,neg:false};
function chip(a,b,on,fn){const e=document.createElement("button");e.className="chip"+(on?" on":"");
  e.innerHTML='<div class="c1">'+a+'</div><div class="c2">'+b+'</div>';e.onclick=fn;return e}
function bGo(f){f();bRender();speak(gen(B).hz)}
function bRender(){
  const r=gen(B),line=$("bline");line.innerHTML="";line.className="line"+(r.parts.length>=5?" s5":"");
  r.parts.forEach(p=>{const w=document.createElement("div");w.className="w"+(p[2]==="CL"?" cl":"");
    w.innerHTML='<span class="py">'+p[1]+'</span><span class="hz">'+p[0]+'</span>';
    w.onclick=()=>speak(p[0],.7);line.appendChild(w)});
  const d=document.createElement("span");d.className="p";d.textContent="。";line.appendChild(d);
  $("btr").textContent=r.fr;
  $("bemo").textContent=B.m===2?(B.n<=20?ITM[B.i].e.repeat(B.n):ITM[B.i].e+" × "+B.n):"";
  ["mA","mE","mC"].forEach((id,i)=>$(id).classList.toggle("on",B.m===i));
  $("nG").classList.toggle("on",B.neg&&B.m<2);$("nG").classList.toggle("hid",B.m===2);
  $("gV").classList.toggle("hid",B.m!==0);$("gN").classList.toggle("hid",B.m!==2);
  $("lOh").textContent=["饭","忙","本"][B.m];$("lOt").textContent=[I[6],I[7],I[6]][B.m];
  const S_=$("cS"),V_=$("cV"),O_=$("cO"),N_=$("cN"),T_=$("cT");S_.innerHTML=V_.innerHTML=O_.innerHTML=N_.innerHTML=T_.innerHTML="";
  SUB.forEach((x,i)=>S_.appendChild(chip(x[0],x[2],i===B.s,()=>bGo(()=>B.s=i))));
  VRB.forEach((x,i)=>V_.appendChild(chip(x.h,x.p,i===B.v,()=>bGo(()=>{B.v=i;B.o=0}))));
  if(B.m===1)ADJ.forEach((x,i)=>O_.appendChild(chip(x[0],x[2][0],i===B.a,()=>bGo(()=>B.a=i))));
  else if(B.m===2){
    ITM.forEach((x,i)=>O_.appendChild(chip(x.h,x.c+" "+artStrip(x.f1),i===B.i,()=>bGo(()=>B.i=i))));
    for(let k=0;k<10;k++)N_.appendChild(chip(String(k),k?DG[k]:"·",B.n%10===k,()=>bGo(()=>{B.n=Math.floor(B.n/10)*10+k;if(B.n===0)B.n=1})));
    for(let k=0;k<10;k++)T_.appendChild(chip(k?String(k*10):"0",k?(k>1?DG[k]:"")+"十":"·",Math.floor(B.n/10)===k,()=>bGo(()=>{B.n=k*10+B.n%10;if(B.n===0)B.n=1})));
  }
  else VRB[B.v].o.forEach((x,i)=>O_.appendChild(chip(x[0],x[2],i===B.o,()=>bGo(()=>B.o=i))));
}
$("mA").onclick=()=>bGo(()=>B.m=0);
$("mE").onclick=()=>bGo(()=>B.m=1);
$("mC").onclick=()=>bGo(()=>B.m=2);
$("nG").onclick=()=>bGo(()=>B.neg=!B.neg);
$("bsay").onclick=()=>speak(gen(B).hz);
const rnd=n=>Math.floor(Math.random()*n);
$("brnd").onclick=()=>bGo(()=>{B.s=rnd(SUB.length);B.m=rnd(3);B.v=rnd(VRB.length);B.o=rnd(VRB[B.v].o.length);B.a=rnd(ADJ.length);B.i=rnd(ITM.length);B.n=1+rnd(99);B.neg=Math.random()<.3});

// ---------- Quiz ----------
S.q=S.q||{ok:0,tot:0};

const DIS=[["不","bù"],["很","hěn"],["的","de"],["我们","wǒmen"],["也","yě"],["都","dōu"]];
let Q=null;
function shuf(a){for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function qNew(){
  const rr=Math.random(),m=rr<.25?1:(rr<.6?2:0),v=rnd(VRB.length);
  const r=gen({s:rnd(SUB.length),m:m,v:v,o:rnd(VRB[v].o.length),a:rnd(ADJ.length),i:rnd(ITM.length),n:Math.random()<.6?1+rnd(10):1+rnd(99),neg:Math.random()<.3});
  const have=r.parts.map(p=>p[0]);
  const pool=m===2?CLS:DIS;
  const ds=shuf(pool.filter(d=>!have.includes(d[0]))).slice(0,2);
  const tiles=shuf(r.parts.map(p=>[p[0],p[1]]).concat(ds)).map((t,i)=>({id:i,h:t[0],p:t[1]}));
  Q={r:r,tiles:tiles,placed:[],done:false,tries:0};
  qRender("");
}
function qRender(msg,ok){
  $("qfr").textContent=Q.r.fr;
  const A=$("qans"),P=$("qpool");A.innerHTML=P.innerHTML="";
  Q.placed.forEach(id=>{const t=Q.tiles[id];A.appendChild(chip(t.h,t.p,false,()=>{if(Q.done)return;Q.placed=Q.placed.filter(x=>x!==id);qRender("")}))});
  Q.tiles.forEach(t=>{if(!Q.placed.includes(t.id))P.appendChild(chip(t.h,t.p,false,()=>qPick(t.id)))});
  const m=$("qmsg");m.textContent=msg||"";m.className="qmsg"+(ok?" ok":"");
  $("qsc").textContent="⭐ "+S.q.ok+" / "+S.q.tot;
}
const QX=LANG==="fr"?{
 role:{S:"le sujet",V:"l'action",O:"l'objet",NEG:"la négation",DEG:"« très »",NUM:"le nombre",CL:"le classificateur",N:"le nom",ADJ:"la qualité"},
 inS:(h,r,p)=>"« "+h+" » est bien dans la phrase (c'est "+r+"), mais est-ce la bonne place ? Qu'est-ce qui doit venir en position "+p+" ?",
 out:h=>"« "+h+" » ne sert pas dans cette phrase. Relis la phrase en français : quel mot ne correspond à rien ?",
 order:r=>"Ordre : "+(r.parts.some(p=>p[2]==="NUM")?"Sujet · 有 · Nombre · Classificateur · Nom.":r.parts.some(p=>p[2]==="ADJ")?"Sujet · (不 / 很) · Qualité.":"Sujet · (不 / 没) · Action · Objet.")}
:{
 role:{S:"the subject",V:"the action",O:"the object",NEG:"the negation",DEG:"“very”",NUM:"the number",CL:"the classifier",N:"the noun",ADJ:"the quality"},
 inS:(h,r,p)=>"“"+h+"” is in the sentence (it's "+r+"), but is it the right place? What should come in position "+p+"?",
 out:h=>"“"+h+"” isn't used in this sentence. Re-read the English: which word matches nothing?",
 order:r=>"Order: "+(r.parts.some(p=>p[2]==="NUM")?"Subject · 有 · Number · Classifier · Noun.":r.parts.some(p=>p[2]==="ADJ")?"Subject · (不 / 很) · Quality.":"Subject · (不 / 没) · Action · Object.")};
function qPick(id){
  if(Q.done)return;
  Q.placed.push(id);speak(Q.tiles[id].h,.7);
  const n=Q.r.parts.length;
  if(Q.placed.length<n){qRender("");return}
  const i=Q.placed.findIndex((id2,k)=>Q.tiles[id2].h!==Q.r.parts[k][0]);
  if(i<0){
    Q.done=true;S.q.tot++;if(Q.tries===0)S.q.ok++;save();
    qRender("✓ "+Q.r.hz,true);chime();speak(Q.r.hz);
  }else{
    Q.tries++;const bad=Q.tiles[Q.placed[i]];Q.placed=Q.placed.slice(0,i);
    Q.err=Q.err||[];const ne=Q.err[i]=(Q.err[i]||0)+1,role=Q.r.parts[i][2],pr=Q.r.parts.find(p=>p[0]===bad.h);
    let m;
    if(ne===1)m=HINT[role];
    else if(ne===2)m=pr?QX.inS(bad.h,QX.role[pr[2]],i+1):QX.out(bad.h);
    else m=QX.order(Q.r)+" "+HINT[role];
    qRender(m);
  }
}
$("qnext").onclick=qNew;
$("qreset").onclick=()=>{if(Q&&!Q.done){Q.placed=[];qRender("")}};
// ---------- Paires ----------
S.p=S.p||{ok:0,tot:0};
let P=null;
const L1="个本只杯";
function pNew(){
  const l1=S.p.ok<8;
  const pool=l1?ITM.filter(x=>L1.includes(x.c)):ITM;
  const it=pool[rnd(pool.length)];
  const cls=(l1?CLS.filter(c=>L1.includes(c[0])):CLS).filter(c=>c[0]!==it.c);
  P={it:it,opts:shuf([[it.c,it.cp]].concat(shuf(cls).slice(0,l1?2:3))),wrong:[],done:false};
  pRender("");
}
function pRender(msg,ok){
  const it=P.it,l=$("pline");
  $("pemo").textContent=it.e;
  if(P.done)l.innerHTML='<div class="w cl"><span class="py">sān '+P.right[1]+' '+it.p+'</span><span class="hz">三<span style="color:var(--acc)">'+P.right[0]+'</span>'+it.h+'</span></div>';
  else l.innerHTML='<div class="w"><span class="py">'+it.p+'</span><span class="hz">'+it.h+'</span></div>';
  l.firstChild.onclick=()=>speak(it.h,.7);
  $("pfr").textContent=artStrip(it.f1);
  const O=$("popts");O.innerHTML="";
  P.opts.forEach(c=>{if(P.wrong.includes(c[0]))return;if(P.done&&c[0]!==P.right[0])return;O.appendChild(chip(c[0],c[1],false,()=>pPick(c)))});
  const m=$("pmsg");m.textContent=msg||"";m.className="qmsg"+(ok?" ok":"");
  $("psc").textContent="⭐ "+S.p.ok+" / "+S.p.tot+" · "+(S.p.ok<8?I[8]:I[9]);
}
const PX=LANG==="fr"?{
 fam:(c,n,t)=>c+" = "+t+". « "+n+" » fait-il partie de cette famille ?",
 joker:"个 est le joker, mais cet objet a une famille bien à lui. Est-ce un animal, un contenant, quelque chose de plat ou de long ?",
 gen:"Aucune famille précise ne va ici. Quel classificateur sert « à tout faire » ?",
 rest:(l,n)=>"Il reste : "+l+" — dans quelle famille range-t-on « "+n+" » ?"}
:{
 fam:(c,n,t)=>c+" = "+t+". Does “"+n+"” belong to that family?",
 joker:"个 is the all-purpose joker, but this object has a family of its own. Is it an animal, a container, something flat or long?",
 gen:"None of the specific families fits here. Which classifier works “for everything”?",
 rest:(l,n)=>"Left: "+l+" — which family does “"+n+"” belong to?"};
function pPick(c){
  if(P.done)return;
  if(c[0]===P.it.c){
    P.done=true;P.right=c;S.p.tot++;if(!P.wrong.length)S.p.ok++;save();
    pRender("✓ "+c[0]+" = "+CUE[c[0]],true);chime();speak("三"+c[0]+P.it.h);
  }else{
    P.wrong.push(c[0]);const n=P.wrong.length,noun=artStrip(P.it.f1),rest=P.opts.filter(o=>!P.wrong.includes(o[0])).map(o=>o[0]+" "+CUE[o[0]]).join(" · ");
    let m;
    if(c[0]==="个"&&P.it.c!=="个")m=PX.joker;
    else if(n===1)m=PX.fam(c[0],noun,CUE[c[0]]);
    else if(n===2)m=P.it.c==="个"?PX.gen:I[10];
    else m=PX.rest(rest,noun);
    pRender(m);
  }
}
$("pnext").onclick=pNew;

let nk="v";
function nRender(){
  const L=$("nlist");L.innerHTML="";
  NM[nk].forEach(x=>{const b=document.createElement("button");b.className="ncard";
    b.innerHTML='<span class="nm">'+x[3]+'</span><span><div class="nh">'+x[0]+'</div><div class="np">'+x[1]+'</div></span><span class="nr"><div><b>'+x[2]+'</b></div><div class="nf">'+x[4]+'</div></span>';
    b.onclick=()=>{document.querySelectorAll(".ncard.on").forEach(e=>e.classList.remove("on"));b.classList.add("on");speak(x[0],.7)};
    L.appendChild(b)});
  ["v","e","p"].forEach(k=>$("ns"+k).classList.toggle("on",k===nk));
}
$("nsv").onclick=()=>{nk="v";nRender()};$("nse").onclick=()=>{nk="e";nRender()};$("nsp").onclick=()=>{nk="p";nRender()};

const TALL=[];TR.forEach(g=>g.p.forEach(x=>TALL.push(x)));
let tgi=0,tgame=false,tdlg=false,G=null;
S.t=S.t||{ok:0,tot:0};
function showBig(x){
  const o=document.createElement("div");o.className="bigshow";
  o.innerHTML='<div class="bh"></div><div class="bf"></div><button class="sp">🔊</button>';
  o.querySelector(".bh").textContent=x[0];o.querySelector(".bf").textContent=x[2];
  o.querySelector(".sp").onclick=e=>{e.stopPropagation();speak(x[0],.8)};
  o.onclick=()=>o.remove();document.body.appendChild(o);
}
function tRender(){
  const gs=$("tgs");gs.innerHTML="";
  TR.forEach((g,i)=>{const b=document.createElement("button");b.textContent=g.e+" "+g.g;b.className=(i===tgi&&!tgame&&!tdlg)?"on":"";b.onclick=()=>{tgi=i;tgame=false;tdlg=false;tRender()};gs.appendChild(b)});
  $("tg").classList.toggle("act",tgame);$("td").classList.toggle("act",tdlg);
  $("tlist").classList.toggle("hid",tgame||tdlg);$("tgame").classList.toggle("hid",!tgame);$("tdlg").classList.toggle("hid",!tdlg);
  if(tdlg){dRender();return}
  if(tgame){gRender();return}
  const L=$("tlist");L.innerHTML="";
  TR[tgi].p.forEach(x=>{
    const c=document.createElement("div");c.className="tcard";
    const t=document.createElement("div");t.className="tt";
    t.innerHTML='<div class="th"></div><div class="tp"></div><div class="tf"></div>';
    t.querySelector(".th").textContent=x[0];t.querySelector(".tp").textContent=x[1];t.querySelector(".tf").textContent=x[2];
    t.onclick=()=>speak(x[0],.85);
    const b=document.createElement("div");b.className="tb";
    const s1=document.createElement("button");s1.textContent="🐢";s1.onclick=()=>speak(x[0],.5);
    const s2=document.createElement("button");s2.textContent="📲";s2.onclick=()=>showBig(x);
    b.appendChild(s1);b.appendChild(s2);c.appendChild(t);c.appendChild(b);L.appendChild(c);
  });
}
function gNew(){
  const ph=TALL[rnd(TALL.length)];
  const others=shuf(TALL.filter(y=>y[2]!==ph[2])).slice(0,2);
  G={ph:ph,opts:shuf([ph].concat(others)),wrong:[],done:false};
  gRender();speak(ph[0],.75);
}
function gRender(){
  if(!G){gNew();return}
  const box=$("gopts");box.innerHTML="";
  G.opts.forEach(o=>{const b=document.createElement("button");b.className="gopt";b.textContent=o[2];
    if(G.wrong.includes(o[2])){b.disabled=true;b.classList.add("dim")}
    if(G.done&&o[2]===G.ph[2])b.classList.add("good");
    b.onclick=()=>gPick(o);box.appendChild(b)});
  const m=$("gmsg");
  if(G.done){m.className="qmsg ok";m.textContent="✓ "+G.ph[0]+"  "+G.ph[1]}
  else{m.className="qmsg";m.textContent=G.wrong.length?I[11]:""}
  $("gsc").textContent="⭐ "+S.t.ok+" / "+S.t.tot;
}
function gPick(o){
  if(G.done)return;
  if(o[2]===G.ph[2]){G.done=true;S.t.tot++;if(!G.wrong.length)S.t.ok++;save();chime();gRender();speak(G.ph[0],.85)}
  else{G.wrong.push(o[2]);gRender()}
}
$("tg").onclick=()=>{tgame=!tgame;tdlg=false;if(tgame&&!G)gNew();tRender()};
$("td").onclick=()=>{tdlg=!tdlg;tgame=false;dI=-1;dS=null;tRender()};
$("gplay").onclick=()=>{if(G)speak(G.ph[0],.8)};
$("gslow").onclick=()=>{if(G)speak(G.ph[0],.5)};
$("gnext").onclick=gNew;

S.d=S.d||{done:{}};
let dI=-1,dS=null;
function dSay(){const t=DL[dI].turns[dS.i];if(t&&t.npc)speak(t.npc[0],.8)}
function dRender(){
  const box=$("tdlg");box.innerHTML="";
  if(dI<0){
    const h=document.createElement("div");h.className="hint";h.textContent=I[12];box.appendChild(h);
    DL.forEach((d,i)=>{const b=document.createElement("button");b.className="ncard";
      b.innerHTML='<span class="nm"></span><span><div class="nh" style="font-size:20px"></div><div class="nf"></div></span><span class="nr"></span>';
      b.querySelector(".nm").textContent=d.e;b.querySelector(".nh").textContent=d.t;b.querySelector(".nf").textContent=d.turns.length+I[13];
      b.querySelector(".nr").textContent=S.d.done[d.t]!==undefined?"⭐ "+S.d.done[d.t]+"/"+d.turns.length:"";
      b.onclick=()=>{dI=i;dS={i:0,wrong:[],done:false,ok:0,help:false,order:null};dRender();dSay()};box.appendChild(b)});
    return;
  }
  const d=DL[dI],n=d.turns.length;
  const bar=document.createElement("div");bar.className="dbar";
  const back=document.createElement("button");back.textContent="‹ Situations";back.onclick=()=>{dI=-1;dS=null;dRender()};
  const pr=document.createElement("span");pr.className="nf";pr.textContent=d.e+" "+d.t+" · "+Math.min(dS.i+1,n)+"/"+n;
  const hp=document.createElement("button");hp.textContent=I[14];hp.className=dS.help?"act":"";hp.onclick=()=>{dS.help=!dS.help;dRender()};
  bar.appendChild(back);bar.appendChild(pr);bar.appendChild(hp);box.appendChild(bar);
  if(dS.i>=n){
    S.d.done[d.t]=Math.max(S.d.done[d.t]||0,dS.ok);save();
    const big=document.createElement("div");big.className="big";
    big.innerHTML='<div style="font-size:54px">🎉</div><div class="tr"></div>';
    big.querySelector(".tr").textContent="⭐ "+dS.ok+" / "+n+I[15];
    box.appendChild(big);
    const r=document.createElement("div");r.className="brow";
    const b1=document.createElement("button");b1.className="alt";b1.textContent=I[16];b1.onclick=()=>{dS={i:0,wrong:[],done:false,ok:0,help:false,order:null};dRender();dSay()};
    const b2=document.createElement("button");b2.textContent=I[17];b2.onclick=()=>{dI=-1;dS=null;dRender()};
    r.appendChild(b1);r.appendChild(b2);box.appendChild(r);
    return;
  }
  const t=d.turns[dS.i];
  if(!dS.order)dS.order=shuf(t.o.map((x,k)=>k));
  const show=dS.help||dS.done;
  const nb=document.createElement("div");
  if(t.npc){
    nb.className="dnpc";
    nb.innerHTML='<span class="dav">🗣️</span><div style="flex:1"><div class="dh"></div><div class="dp"></div><div class="df"></div></div><button class="sm">🔊</button>';
    nb.querySelector(".dh").textContent=t.npc[0];nb.querySelector(".dp").textContent=t.npc[1];
    nb.querySelector(".df").textContent=show?t.npc[2]:"";
    nb.querySelector(".sm").onclick=()=>speak(t.npc[0],.7);
  }else{nb.className="dnpc dsit";nb.textContent=t.sit}
  box.appendChild(nb);
  dS.order.forEach(k=>{
    const o=t.o[k],b=document.createElement("button");b.className="gopt";
    b.innerHTML='<div class="oh"></div><div class="op"></div><div class="of"></div>';
    b.querySelector(".oh").textContent=o[0];b.querySelector(".op").textContent=o[1];b.querySelector(".of").textContent=show?o[2]:"";
    if(dS.wrong.includes(k)){b.disabled=true;b.classList.add("dim")}
    if(dS.done&&k===0)b.classList.add("good");
    b.onclick=()=>{
      if(dS.done)return;
      if(k===0){dS.done=true;if(!dS.wrong.length)dS.ok++;chime();speak(o[0],.85);dRender()}
      else{dS.wrong.push(k);dRender()}
    };
    box.appendChild(b);
  });
  const m=document.createElement("div");m.id="dmsg";
  if(dS.done){m.className="qmsg ok";m.textContent="✓"}
  else{m.className="qmsg";m.textContent=dS.wrong.length?I[18]+t.h:""}
  box.appendChild(m);
  if(dS.done){
    const r=document.createElement("div");r.className="brow";
    const nx=document.createElement("button");nx.id="dnext";nx.textContent=dS.i+1>=n?I[19]:I[20];
    nx.onclick=()=>{dS.i++;dS.order=null;dS.done=false;dS.wrong=[];dRender();dSay()};
    r.appendChild(nx);box.appendChild(r);
  }
}

S.tn=S.tn||{ok:0,tot:0};S.tm=S.tm||{ok:0,tot:0};
let tsub="l",Q2=null,M2=null,toneBusy=false;
function toneSvg(n,sz){
  const P={1:"8,8 52,8",2:"8,30 52,8",3:"8,41 22,52 52,19",4:"8,8 52,52"};
  let g='<svg viewBox="0 0 60 60" width="'+sz+'" height="'+sz+'" aria-hidden="true">';
  [8,19,30,41,52].forEach(y=>{g+='<line x1="4" x2="56" y1="'+y+'" y2="'+y+'" stroke="currentColor" stroke-opacity=".13"/>'});
  if(n===5)g+='<circle cx="30" cy="41" r="5" fill="var(--acc)"/>';
  else{const pt=P[n].split(" ")[0].split(",");
    g+='<polyline points="'+P[n]+'" fill="none" stroke="var(--acc)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="'+pt[0]+'" cy="'+pt[1]+'" r="6" fill="var(--acc)"/>'}
  return g+'</svg>';
}
function tChip(x){const b=chip(x[0],x[1]+(x[2]?" · "+x[2]:""),false,()=>speak(x[0],.6));return b}
function toneRender(){
  const tb=$("ttabs");tb.innerHTML="";
  [["l",I[21]],["q",I[22]],["m",I[23]],["s",I[24]],["r",I[25]]].forEach(x=>{
    const b=document.createElement("button");b.textContent=x[1];b.className=x[0]===tsub?"on":"";b.onclick=()=>{tsub=x[0];toneRender()};tb.appendChild(b)});
  const c=$("tcont");c.innerHTML="";
  ({l:tnL,q:tnQ,m:tnM,s:tnS,r:tnR})[tsub](c);
}
function tnL(c){
  const b=document.createElement("button");b.className="sm";b.style.cssText="display:block;margin:0 auto 10px;padding:10px 18px";b.textContent=I[26];
  b.onclick=async()=>{if(toneBusy)return;toneBusy=true;try{speechSynthesis.cancel()}catch(e){}
    for(const t of TN.slice(0,4)){await sp(t.h,"zh-CN",.6);await wait(350)}toneBusy=false};
  c.appendChild(b);
  TN.forEach(t=>{
    const d=document.createElement("div");d.className="tncard";
    d.innerHTML=toneSvg(t.n,64)+'<div style="flex:1"><div class="a"></div><div class="b"></div><div class="c"></div></div>';
    d.querySelector(".a").textContent=t.h+"  "+t.p;d.querySelector(".b").textContent=t.n<5?I[27]+t.n+" · "+t.d:I[28]+t.d;d.querySelector(".c").textContent=t.f+" — "+t.m;
    d.onclick=()=>speak(t.h,.6);c.appendChild(d)});
}
function q2New(){Q2={it:TQ[rnd(TQ.length)],wrong:[],done:false};speak(Q2.it[0],.6)}
function tnQ(c){
  if(!Q2)q2New();
  const it=Q2.it;
  const big=document.createElement("div");big.className="big";
  big.innerHTML=I[29];
  c.appendChild(big);
  big.querySelector("#q2p").onclick=()=>speak(it[0],.7);big.querySelector("#q2s").onclick=()=>speak(it[0],.45);
  const g=document.createElement("div");g.className="tonegrid";
  [1,2,3,4].forEach(n=>{
    const b=document.createElement("button");b.className="gopt tbtn";b.innerHTML=toneSvg(n,46)+'<span>'+n+'</span>';
    if(Q2.wrong.includes(n)){b.disabled=true;b.classList.add("dim")}
    if(Q2.done&&n===it[1])b.classList.add("good");
    b.onclick=()=>{if(Q2.done)return;
      if(n===it[1]){Q2.done=true;S.tn.tot++;if(!Q2.wrong.length)S.tn.ok++;save();chime();speak(it[0],.7);toneRender()}
      else{Q2.wrong.push(n);toneRender()}};
    g.appendChild(b)});
  c.appendChild(g);
  const m=document.createElement("div");m.className="qmsg"+(Q2.done?" ok":"");
  m.textContent=Q2.done?"✓ "+it[0]+"  "+it[2]+" = "+it[3]:(Q2.wrong.length?I[30]:"");
  c.appendChild(m);
  if(Q2.done){const r=document.createElement("div");r.className="brow";const nx=document.createElement("button");nx.textContent=I[20];nx.onclick=()=>{Q2=null;toneRender()};r.appendChild(nx);c.appendChild(r)}
  const sc=document.createElement("div");sc.className="qsc";sc.textContent="⭐ "+S.tn.ok+" / "+S.tn.tot;c.appendChild(sc);
}
function m2New(){const p=PR[rnd(PR.length)];M2={p:p,tg:rnd(2),order:shuf([0,1]),wrong:[],done:false};speak(p[M2.tg][0],.6)}
function tnM(c){
  if(!M2)m2New();
  const p=M2.p;
  const big=document.createElement("div");big.className="big";
  big.innerHTML=I[31];
  c.appendChild(big);
  big.querySelector("#m2p").onclick=()=>speak(p[M2.tg][0],.7);big.querySelector("#m2s").onclick=()=>speak(p[M2.tg][0],.45);
  M2.order.forEach(k=>{
    const r=document.createElement("div");r.className="mrow";
    const b=document.createElement("button");b.className="gopt";b.textContent=p[k][2];
    if(M2.wrong.includes(k)){b.disabled=true;b.classList.add("dim")}
    if(M2.done&&k===M2.tg)b.classList.add("good");
    b.onclick=()=>{if(M2.done)return;
      if(k===M2.tg){M2.done=true;S.tm.tot++;if(!M2.wrong.length)S.tm.ok++;save();chime();toneRender()}
      else{M2.wrong.push(k);toneRender()}};
    const h=document.createElement("button");h.className="sm";h.textContent="🔊";h.onclick=()=>speak(p[k][0],.6);
    r.appendChild(b);r.appendChild(h);c.appendChild(r)});
  const m=document.createElement("div");m.className="qmsg"+(M2.done?" ok":"");
  m.textContent=M2.done?"✓ "+p[0][0]+" "+p[0][1]+" = "+p[0][2]+"  ·  "+p[1][0]+" "+p[1][1]+" = "+p[1][2]:(M2.wrong.length?I[32]:"");
  c.appendChild(m);
  if(M2.done){const r=document.createElement("div");r.className="brow";const nx=document.createElement("button");nx.textContent=I[20];nx.onclick=()=>{M2=null;toneRender()};r.appendChild(nx);c.appendChild(r)}
  const sc=document.createElement("div");sc.className="qsc";sc.textContent="⭐ "+S.tm.ok+" / "+S.tm.tot;c.appendChild(sc);
}
function tnS(c){
  SND.forEach(x=>{
    const d=document.createElement("div");d.className="sndc";
    d.innerHTML='<div class="t"><div class="l"></div><div class="d"></div></div><div class="chips"></div>';
    d.querySelector(".l").textContent=x[0];d.querySelector(".d").textContent=x[1];
    x[2].forEach(e=>d.querySelector(".chips").appendChild(tChip(e)));c.appendChild(d)});
}
function tnR(c){
  RL.forEach(x=>{
    const d=document.createElement("div");d.className="sndc";
    d.innerHTML='<div class="t"><div class="l" style="font-size:22px;min-width:96px"></div><div class="d"></div></div><div class="chips"></div>';
    d.querySelector(".l").textContent=x[0];d.querySelector(".d").textContent=x[1];
    x[2].forEach(e=>d.querySelector(".chips").appendChild(tChip(e)));c.appendChild(d)});
}

S.tp=S.tp||{n:0};
let tpM="s",tpPy=true,tpSn=false,tpCmd=null,tpSc=-1,tpSi=0,tpTm=null,tpSec=8;
const tpA={on:false,tok:0,wl:null};
const pk=a=>a[rnd(a.length)];
function colOpts(it,py,none){
  const o=COL.map(c=>({zh:"我的"+it+"是"+c[0]+"的。",py:"Wǒ de "+py+" shì "+c[1]+" de.",fr:I[33]+c[2],hex:c[3],lab:c[0],lpy:c[1]}));
  if(none)o.push({zh:"我没有。",py:"Wǒ méiyǒu.",fr:I[34],lab:"没有",lpy:"méiyǒu"});
  return o;
}
SCN.forEach(sc=>sc.steps.forEach(st=>{if(st.col)st.opts=colOpts(st.col[0],st.col[1],false).map(o=>Object.assign(o,{next:st.next}))}));
function tpStop(){tpA.tok++;tpA.on=false;if(tpTm){clearTimeout(tpTm);tpTm=null}try{speechSynthesis.cancel()}catch(e){}try{if(tpA.wl)tpA.wl.release()}catch(e){}tpA.wl=null}

function genColor(noAsk){
  if(!noAsk&&Math.random()<.4){
    const it=pk(CLO);
    return{e:"👕",zh:"你的"+it[0]+"是什么颜色的？",py:"Nǐ de "+it[1]+" shì shénme yánsè de?",fr:it[2],ask:colOpts(it[0],it[1],true)};
  }
  const c=pk(COL),v=pk([["摸一下","mō yíxià",I[35]],["指一下","zhǐ yíxià",I[36]]]);
  return{hex:c[3],zh:"找一个"+c[0]+"的东西，"+v[0]+"。",py:"Zhǎo yí ge "+c[1]+" de dōngxi, "+v[1]+".",fr:I[37]+c[2]+I[38]+v[2]+"."};
}
function genAction(){const a=pk(ACT);return{zh:a[0],py:a[1],fr:a[2],e:a[3]}}
function genFor(m,noAsk){
  if(m==="b")return genBody();if(m==="c")return genColor(noAsk);if(m==="a")return genAction();
  const r=Math.random();return r<.4?genBody():(r<.65?genColor(noAsk):genAction());
}
function coachCard(cmd){
  const d=document.createElement("div");d.className="coach";
  d.innerHTML=(cmd.hex?'<i class="sw"></i>':'<div class="ce"></div>')+'<div class="cz"></div><div class="cp"></div><div class="cf"></div><div style="display:flex;justify-content:center;gap:10px;margin-top:10px"><button class="sm" data-k="a">🔊</button><button class="sm" data-k="b">🐢</button></div>';
  if(cmd.hex)d.querySelector(".sw").style.background=cmd.hex;else d.querySelector(".ce").textContent=cmd.e||"🙂";
  d.querySelector(".cz").textContent=cmd.zh;d.querySelector(".cp").textContent=tpPy?cmd.py:"";d.querySelector(".cf").textContent=tpSn?cmd.fr:"";
  d.querySelector('[data-k="a"]').onclick=()=>speak(cmd.zh,.8);d.querySelector('[data-k="b"]').onclick=()=>speak(cmd.zh,.5);
  return d;
}
function askBox(c,opts,pick){
  const hex=opts.some(o=>o.hex),box=document.createElement("div");if(hex)box.className="cgrid";
  let done=false;
  opts.forEach(o=>{
    const b=document.createElement("button");b.className="gopt"+(hex?" cbtn":"");
    if(hex){
      b.innerHTML='<i class="sw"></i><div class="oh"></div><div class="op"></div>';
      const sw=b.querySelector(".sw");
      if(o.hex)sw.style.background=o.hex;else{sw.style.background="transparent";sw.style.border="none";sw.style.fontSize="22px";sw.textContent="🚫"}
      b.querySelector(".oh").textContent=o.lab||o.zh;b.querySelector(".op").textContent=tpPy?(o.lpy||o.py):"";
    }else{
      b.innerHTML='<div class="oh"></div><div class="op"></div><div class="of"></div>';
      b.querySelector(".oh").textContent=o.zh;b.querySelector(".op").textContent=tpPy?o.py:"";b.querySelector(".of").textContent=tpSn?o.fr:"";
    }
    b.onclick=()=>{if(done)return;done=true;box.querySelectorAll("button").forEach(x=>{if(x!==b)x.classList.add("dim")});b.classList.add("good");speak(o.zh,.85);pick(o)};
    box.appendChild(b);
  });
  c.appendChild(box);
}

function tprRender(){
  const tb=$("tptabs");tb.innerHTML="";
  [["s",I[39]],["b",I[40]],["c",I[41]],["a","🏃 Actions"],["x",I[42]]].forEach(x=>{
    const b=document.createElement("button");b.textContent=x[1];b.className=x[0]===tpM?"on":"";
    b.onclick=()=>{tpStop();tpM=x[0];tpSc=-1;tpCmd=null;tprRender()};tb.appendChild(b)});
  const c=$("tpcont");c.innerHTML="";
  const tl=document.createElement("div");tl.className="tools";tl.style.margin="0 0 8px";
  [["拼 Pinyin",tpPy,()=>{tpPy=!tpPy}],[I[14],tpSn,()=>{tpSn=!tpSn}]].forEach(x=>{
    const b=document.createElement("button");b.textContent=x[0];b.className=x[1]?"act":"";b.onclick=()=>{x[2]();tprRender()};tl.appendChild(b)});
  c.appendChild(tl);
  if(tpM==="s"){if(tpSc<0)tpMenu(c);else tpScene(c)}else tpFree(c);
}
function tpMenu(c){
  const h=document.createElement("div");h.className="hint";h.textContent=I[43];c.appendChild(h);
  SCN.forEach((s,i)=>{
    const b=document.createElement("button");b.className="ncard";
    b.innerHTML='<span class="nm"></span><span><div class="nh" style="font-size:20px"></div><div class="nf"></div></span>';
    b.querySelector(".nm").textContent=s.e;b.querySelector(".nh").textContent=s.t;b.querySelector(".nf").textContent=s.sub;
    b.onclick=()=>{tpSc=i;tpSi=0;tprRender();tpSay()};c.appendChild(b)});
  tpScore(c);
}
function tpSay(){if(tpSc>=0)speak(SCN[tpSc].steps[tpSi].zh,.8)}
function tpGo(n){tpSi=n;if(SCN[tpSc].steps[n].t==="end"){S.tp.n++;save();chime()}tprRender();tpSay()}
function tpScene(c){
  const sc=SCN[tpSc],st=sc.steps[tpSi];
  const bar=document.createElement("div");bar.className="dbar";
  const back=document.createElement("button");back.textContent=I[44];back.onclick=()=>{tpStop();tpSc=-1;tprRender()};
  const nm=document.createElement("span");nm.className="nf";nm.textContent=sc.e+" "+sc.t;
  bar.appendChild(back);bar.appendChild(nm);c.appendChild(bar);
  c.appendChild(coachCard(st));
  const r=document.createElement("div");r.className="brow";
  if(st.t==="end"){
    const b1=document.createElement("button");b1.className="alt";b1.textContent=I[45];b1.onclick=()=>{tpSi=0;tprRender();tpSay()};
    const b2=document.createElement("button");b2.textContent=I[46];b2.onclick=()=>{tpSc=-1;tprRender()};
    r.appendChild(b1);r.appendChild(b2);c.appendChild(r);
  }else if(st.t==="cmd"){
    const f=document.createElement("button");f.textContent=I[47];f.onclick=()=>tpGo(st.next);r.appendChild(f);c.appendChild(r);
  }else{
    askBox(c,st.opts,o=>{tpTm=setTimeout(()=>{tpTm=null;tpGo(o.next)},1500)});
  }
}
function tpNext(){tpCmd=genFor(tpM,false);tprRender();speak(tpCmd.zh,.8)}
function tpFree(c){
  const info={b:I[48],c:I[49],a:I[50],x:I[51]}[tpM];
  if(!tpCmd){
    const d=document.createElement("div");d.className="coach";
    d.innerHTML='<div class="ce">🎧</div><div class="cf" style="font-size:16px"></div>';
    d.querySelector(".cf").textContent=I[52]+info;c.appendChild(d);
    const r=document.createElement("div");r.className="brow";
    const s1=document.createElement("button");s1.textContent=I[53];s1.onclick=()=>tpNext();r.appendChild(s1);c.appendChild(r);
  }else{
    c.appendChild(coachCard(tpCmd));
    if(tpA.on){const w=document.createElement("div");w.className="tpbarw";w.innerHTML='<div id="tpbar"></div>';c.appendChild(w)}
    else if(tpCmd.ask){askBox(c,tpCmd.ask,o=>{S.tp.n++;save();chime();tpTm=setTimeout(()=>{tpTm=null;tpNext()},2200)})}
    else{const r=document.createElement("div");r.className="brow";const f=document.createElement("button");f.textContent=I[47];
      f.onclick=()=>{S.tp.n++;save();chime();tpNext()};r.appendChild(f);c.appendChild(r)}
  }
  const ar=document.createElement("div");ar.className="tools";ar.style.marginTop="12px";
  if(tpA.on){const st=document.createElement("button");st.textContent="⏹ Stop";st.className="act";st.onclick=()=>{tpStop();tprRender()};ar.appendChild(st)}
  else{
    const au=document.createElement("button");au.textContent="▶ Auto";au.onclick=()=>tpAutoRun();ar.appendChild(au);
    [5,8,12].forEach(sec=>{const b=document.createElement("button");b.textContent=sec+" s";b.className=sec===tpSec?"act":"";b.onclick=()=>{tpSec=sec;tprRender()};ar.appendChild(b)});
  }
  c.appendChild(ar);tpScore(c);
}
async function tpAutoRun(){
  tpStop();const my=tpA.tok;tpA.on=true;
  try{if(navigator.wakeLock)tpA.wl=await navigator.wakeLock.request("screen")}catch(e){}
  while(tpA.tok===my){
    tpCmd=genFor(tpM,true);tprRender();
    await sp(tpCmd.zh,"zh-CN",.8);if(tpA.tok!==my)break;
    const bar=document.getElementById("tpbar");
    if(bar){bar.style.transition="none";bar.style.width="100%";void bar.offsetWidth;bar.style.transition="width "+tpSec+"s linear";bar.style.width="0%"}
    await wait(tpSec*1000);if(tpA.tok!==my)break;
    S.tp.n++;save();
  }
}
const HX=LANG==="fr"
 ?{back:"‹ Accueil",title:"Que veux-tu faire ?",today:"Texte du jour",read:"✓ Lu aujourd'hui",unread:"À lire maintenant ›",
   sub:["","Construis des phrases","Remets la phrase en ordre","Classificateurs","Villes, marques, célébrités","Phrases et dialogues","Prononciation","Bouge en chinois"],
   prog:["",null,n=>"⭐ "+n,n=>"⭐ "+n,null,n=>"💬 "+n+"/"+DL.length,n=>"⭐ "+n,n=>"✋ "+n]}
 :{back:"‹ Home",title:"What do you want to do?",today:"Today's text",read:"✓ Read today",unread:"Read now ›",
   sub:["","Build sentences","Put the sentence in order","Classifiers","Cities, brands, famous people","Phrases and dialogues","Pronunciation","Move in Chinese"],
   prog:["",null,n=>"⭐ "+n,n=>"⭐ "+n,null,n=>"💬 "+n+"/"+DL.length,n=>"⭐ "+n,n=>"✋ "+n]};
const VIEWS=[["vRead","tabR"],["vBuild","tabB"],["vQuiz","tabQ"],["vPair","tabP"],["vNames","tabN"],["vTrip","tabT"],["vTone","tabS"],["vTpr","tabA"]];
const GOAL=[0,0,30,20,0,DL.length,40,60];
function homeStat(n){
  if(n===2)return[S.q.ok,GOAL[2]];if(n===3)return[S.p.ok,GOAL[3]];
  if(n===5)return[Object.keys(S.d.done).length,GOAL[5]];
  if(n===6)return[S.tn.ok+S.tm.ok,GOAL[6]];if(n===7)return[S.tp.n,GOAL[7]];return null}
function home(push){
  VIEWS.forEach(x=>$(x[0]).classList.add("hid"));$("vHome").classList.remove("hid");
  $("hbar").classList.add("hid");document.querySelector(".nav").style.visibility="hidden";
  if(L.on)stopL();if(tpA.on||tpTm)tpStop();
  const h=$("vHome");h.innerHTML="";
  const t=document.createElement("div");t.className="htitle";t.textContent=HX.title;h.appendChild(t);
  const k=dayKey(new Date(today)),dn=!!S.done[k],i=curIdxAt(0);
  const hero=document.createElement("button");hero.className="hero"+(dn?" ok":"");
  hero.innerHTML='<div class="h1"></div><div class="h2"></div><div class="h3"></div><div class="pb"><i></i></div>';
  hero.querySelector(".h1").textContent=$("tabR").textContent.split(" ")[0]+" "+HX.today;
  hero.querySelector(".h2").textContent=T[i].t;
  hero.querySelector(".h3").textContent=dn?HX.read:HX.unread;
  const nd=Object.keys(S.done).length;hero.querySelector("i").style.width=Math.min(100,Math.round(nd/T.length*100))+"%";
  hero.onclick=()=>{off=0;ov=null;render();tab(0,true)};h.appendChild(hero);
  const g=document.createElement("div");g.className="hgrid";
  for(let n=1;n<8;n++){
    const b=document.createElement("button");b.className="hcard";
    const lab=$(VIEWS[n][1]).textContent,sp=lab.indexOf(" ");
    b.innerHTML='<div class="hz"></div><div class="hn"></div><div class="hs"></div><div class="pb"><i></i></div>';
    b.querySelector(".hz").textContent=lab.slice(0,sp);b.querySelector(".hn").textContent=lab.slice(sp+1);
    const st=homeStat(n);let sub=HX.sub[n];
    if(st&&st[0]>0&&HX.prog[n])sub=HX.prog[n](st[0])+" · "+sub;
    b.querySelector(".hs").textContent=sub;
    const pb=b.querySelector(".pb");if(st)b.querySelector("i").style.width=Math.min(100,Math.round(st[0]/st[1]*100))+"%";else pb.style.visibility="hidden";
    b.onclick=()=>tab(n,true);g.appendChild(b)}
  h.appendChild(g);
  window.scrollTo(0,0);
}
function tab(n,push){
  VIEWS.forEach((x,i)=>{$(x[0]).classList.toggle("hid",i!==n);$(x[1]).classList.toggle("on",i===n)});
  $("vHome").classList.add("hid");
  $("hbar").classList.remove("hid");$("hback").textContent=HX.back;$("hname").textContent=$(VIEWS[n][1]).textContent;
  document.querySelector(".nav").style.visibility=n===0?"visible":"hidden";
  if(push){try{history.pushState({m:n},"")}catch(e){}}
  if(L.on)stopL();
  if(tpA.on||tpTm)tpStop();
  if(n===1)bRender();
  if(n===2&&!Q)qNew();
  if(n===3&&!P)pNew();
  if(n===4)nRender();
  if(n===5)tRender();
  if(n===6)toneRender();
  if(n===7)tprRender();
  window.scrollTo(0,0);
}
$("hback").onclick=()=>{if(history.state&&history.state.m!==undefined){history.back()}else home()};
window.addEventListener("popstate",()=>home());


// ---------- Écoute en boucle + sons ----------
let ov=null;
function curIdx(){if(ov!==null)return ov;return curIdxAt(off)}
const L={on:false,tok:0,slow:true,fr:false,all:false,wl:null};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function sp(txt,lang,rate){return new Promise(res=>{
  if(!window.speechSynthesis){res();return}
  const u=new SpeechSynthesisUtterance(txt);u.lang=lang;u.rate=rate;
  const vs=speechSynthesis.getVoices(),lc=lang.toLowerCase();
  const v=vs.find(v=>v.lang.replace("_","-").toLowerCase()===lc)||vs.find(v=>v.lang.toLowerCase().startsWith(lc.slice(0,2)));
  if(v)u.voice=v;
  let done=false,tm;const fin=()=>{if(!done){done=true;clearTimeout(tm);res()}};
  u.onend=fin;u.onerror=fin;
  tm=setTimeout(fin,Math.max(3000,txt.length*700/rate));
  speechSynthesis.speak(u);
})}
function lui(){$("lis").textContent=L.on?"⏹ Stop":I[54];$("lis").classList.toggle("act",L.on)}
async function listen(){
  const my=++L.tok;L.on=true;lui();
  try{if(navigator.wakeLock)L.wl=await navigator.wakeLock.request("screen")}catch(e){}
  try{speechSynthesis.cancel()}catch(e){}
  while(L.tok===my){
    const x=T[curIdx()];
    for(let k=0;k<x.s.length&&L.tok===my;k++){
      document.querySelectorAll(".sent").forEach((e,j)=>{e.style.outline=j===k?"3px solid var(--acc)":""});
      const zh=plain(x.s[k][0]);
      if(L.slow){await sp(zh,"zh-CN",.55);if(L.tok!==my)break;await wait(500)}
      await sp(zh,"zh-CN",.9);if(L.tok!==my)break;
      if(L.fr){await wait(300);await sp(x.s[k][1],I[0],1);if(L.tok!==my)break}
      await wait(900);
    }
    if(L.tok!==my)break;
    if(L.all){ov=(curIdx()+1)%T.length;render()}
    await wait(800);
  }
}
function stopL(){
  L.tok++;L.on=false;
  try{speechSynthesis.cancel()}catch(e){}
  try{if(L.wl)L.wl.release()}catch(e){}
  L.wl=null;
  document.querySelectorAll(".sent").forEach(e=>{e.style.outline=""});
  lui();
}
$("lis").onclick=()=>{L.on?stopL():listen()};
$("lslow").onclick=()=>{L.slow=!L.slow;$("lslow").classList.toggle("act",L.slow)};
$("lfr").onclick=()=>{L.fr=!L.fr;$("lfr").classList.toggle("act",L.fr)};
$("lall").onclick=()=>{L.all=!L.all;$("lall").classList.toggle("act",L.all)};
document.addEventListener("visibilitychange",()=>{if(document.hidden&&L.on)stopL()});
function chime(){try{
  const a=new (window.AudioContext||window.webkitAudioContext)();
  [660,880].forEach((f,i)=>{const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+i*.12;
    o.type="sine";o.frequency.value=f;
    g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.15,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+.3);
    o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+.32)});
}catch(e){}}
// ---------- Installer ----------
let dp=null;
const isStd=()=>(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone===true;
const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
function instShow(){$("inst").classList.toggle("hid",isStd())}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;instShow()});
window.addEventListener("appinstalled",()=>{dp=null;$("inst").classList.add("hid")});
function instHelp(){
  const o=document.createElement("div");o.className="ov";
  o.innerHTML=I[55]+(isIOS
    ?I[56]
    :I[57])
    +'<br><button>OK</button></div>';
  o.onclick=e=>{if(e.target===o||e.target.tagName==="BUTTON")o.remove()};
  document.body.appendChild(o);
}
$("inst").onclick=async()=>{
  if(dp){dp.prompt();try{await dp.userChoice}catch(e){}dp=null;instShow()}
  else instHelp();
};
instShow();
if(window.speechSynthesis)speechSynthesis.onvoiceschanged=()=>{};
render();home();
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
