const teachers = [
 {id:"hod1",name:"Dr. Bijendra Gupta Sir",image:"image/Brijendra_gupta.png",role:"HOD 01 • Head of Department",subject:"Department Leadership",department:"Information Technology",journey:"Guiding the Information Technology department with vision, discipline and student-first leadership.",message:"Keep building what you wish existed. Curiosity is the strongest technology of all.",achievement:"IT Department Leadership",philosophy:"Lead people, strengthen foundations, and give students room to become their best selves.",memory:"The moments when a student returned with a finished project and a proud smile."},
 {id:"hod2",name:"Prof. Rashmi Kulkarni",image:"image/Rashmi.png",role:"HOD 02 • Head of Department",subject:"Department Leadership",department:"Artificial Intelligence & Machine Learning",journey:"Championing a department where intelligent ideas, experimentation and confidence can grow.",message:"The best future is the one you learn how to build.",achievement:"AIML Department Leadership",philosophy:"Make ambitious ideas feel achievable, then let students take them further.",memory:"Watching a difficult concept suddenly click for an entire classroom."},
 {id:"t1",name:"Rutuja Ma'am",image:"image/Rutuja.png",role:"Teacher 01 • AIML Faculty",subject:"Artificial Intelligence & Machine Learning",department:"AIML",journey:"Helping students turn curiosity about intelligent systems into practical understanding.",message:"Ask better questions. Better ideas usually follow.",achievement:"AIML Mentor",philosophy:"Curiosity first, tools second, understanding always.",memory:"The first experiment that finally gave the expected result."},
 {id:"t2",name:"Aditya Sir",image:"image/Aditya.png",role:"Teacher 02 • AIML Faculty",subject:"Artificial Intelligence & Machine Learning",department:"AIML",journey:"Bridging concepts and implementation so students can move from theory to making things.",message:"Learn it. Build it. Improve it.",achievement:"Innovation Mentor",philosophy:"Build confidence by turning intimidating problems into small solvable steps.",memory:"A prototype that started rough and ended up genuinely impressive."},
 {id:"t3",name:"Jyoti Ma'am",image:"image/Jyoti.png",role:"Teacher 03 • AIML Faculty",subject:"Artificial Intelligence & Machine Learning",department:"AIML",journey:"Encouraging students to look at challenging problems from smarter angles.",message:"Every problem has a smarter angle. Find it.",achievement:"Problem-Solving Mentor",philosophy:"Challenge assumptions, test ideas, learn from the result.",memory:"The classroom debate where everyone left with a new perspective."},
 {id:"t4",name:"Ankur Sir",image:"image/Ankur.png",role:"Teacher 04 • AIML Faculty",subject:"Artificial Intelligence & Machine Learning",department:"AIML",journey:"Making complex ideas approachable, memorable and connected to real learning.",message:"Make every lesson count, and make every question welcome.",achievement:"Student Growth Mentor",philosophy:"A classroom works best when students feel safe to ask why.",memory:"The moment a quiet student finally volunteered an answer."},
 {id:"t5",name:"Vipin Sir",image:"image/Vipin_Sahu.png",role:"Teacher 05 • IT Faculty",subject:"Information Technology",department:"IT",journey:"Building strong technical foundations that make larger systems easier to understand.",message:"Strong foundations make brave builders.",achievement:"Technical Foundation Mentor",philosophy:"Get the fundamentals right, then keep experimenting.",memory:"The project where the fundamentals suddenly came together."},
 {id:"t6",name:"Suhasani Ma'am",image:"image/suwasini.png",role:"Teacher 06 • IT Faculty",subject:"Information Technology",department:"IT",journey:"Teaching with precision, patience and the belief that every student can improve.",message:"Precision becomes progress when you practise with patience.",achievement:"Precision Mentor",philosophy:"Be patient with the process and serious about the details.",memory:"The tiny correction that completely changed a student's understanding."},
 {id:"t7",name:"Najiya Ma'am",image:"image/nazia.png",role:"Teacher 07 • IT Faculty",subject:"Information Technology",department:"IT",journey:"Connecting technology with purpose so students see more than just the syntax.",message:"Technology matters most when it solves something meaningful.",achievement:"Purpose-Driven Mentor",philosophy:"Teach the tool, but never lose sight of why it exists.",memory:"A student connecting a classroom concept to a real-world problem."},
 {id:"t8",name:"Bhushan Sir",image:"image/bhushan.png",role:"Teacher 08 • IT Faculty",subject:"Information Technology",department:"IT",journey:"Helping students move from concepts to confidence through steady practice.",message:"From concepts to confidence — one step at a time.",achievement:"Confidence Builder",philosophy:"Progress compounds when students keep showing up.",memory:"The demo that worked on the final run after everything went wrong before it."},
 {id:"t9",name:"Archana Ma'am",image:"image/Archana_Sahu.png",role:"Teacher 09 • IT Faculty",subject:"Information Technology",department:"IT",journey:"Showing students how attention to detail turns good work into memorable work.",message:"The details become the difference.",achievement:"Detail & Craft Mentor",philosophy:"Care about the small things; they shape the whole experience.",memory:"The polished final submission that made everyone stop and smile."}
];
const HODS=teachers.slice(0,2), FACULTY=teachers.slice(2);

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function portrait(t, label=""){return t.image?`<img src="${t.image}" alt="Portrait of ${t.name}" loading="lazy"><span class="num">${label}</span>`:`<span class="num">${label}</span><span class="initial">${t.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</span>`}
function card(t,i,leader=false){return `<article class="${leader?'leader-card':'teacher-card'} reveal" data-id="${t.id}" onclick="openProfile('${t.id}')"><div class="portrait">${portrait(t,leader?t.role.split(" •")[0]:"MENTOR "+String(i+1).padStart(2,"0"))}</div><div class="card-info"><p>${t.role}</p><h3>${t.name}</h3><p>${t.subject} • ${t.department}</p><div class="view">View Story <span>↗</span></div></div></article>`}
$("#leadersGrid").innerHTML=HODS.map((t,i)=>card(t,i,true)).join("");
$("#teacherGrid").innerHTML=FACULTY.map((t,i)=>card(t,i)).join("");

const all=teachers;

function openProfile(id){
 const t=all.find(x=>x.id===id);
 $("#profileContent").innerHTML=`<div class="profile-layout"><div class="portrait">${portrait(t)}</div><div class="profile-copy"><span class="section-kicker">${t.role}</span><h2>${t.name}</h2><p><b>${t.subject}</b> • ${t.department}</p><p class="quote">“${t.message}”</p><div class="profile-details"><div class="detail"><b>📖 Academic Journey</b><p>${t.journey}</p></div><div class="detail"><b>🏆 Special Achievement</b><p>${t.achievement}</p></div><div class="detail"><b>💡 Teaching Philosophy</b><p>${t.philosophy}</p></div><div class="detail"><b>❤️ Student Memory</b><p>${t.memory}</p></div></div></div></div>`;
 $("#profileModal").classList.add("open"); $("#profileModal").setAttribute("aria-hidden","false");
}
$("#modalClose").onclick=()=>$("#profileModal").classList.remove("open");
$("#profileModal").onclick=e=>{if(e.target.id==="profileModal")$("#profileModal").classList.remove("open")};

function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
if(document.getElementById("quizQuestion")){const questions=[
 ["Who says “This question is very important” before every exam?", "t1",["Prof. Ananya Shah","Prof. Neha Patil","Prof. Arjun Desai","Prof. Kavya Joshi"]],
 ["Who would remind you to verify everything?", "t8",["Prof. Isha Nair","Prof. Priya Menon","Prof. Vivek More","Prof. Sameer Rao"]],
 ["Who makes blank screens become real experiences?", "t4",["Prof. Kavya Joshi","Prof. Arjun Desai","Prof. Ananya Shah","Prof. Neha Patil"]],
 ["Who believes discipline creates freedom?", "t7",["Prof. Vivek More","Prof. Sameer Rao","Prof. Priya Menon","Prof. Isha Nair"]],
 ["Who turns rows, keys and queries into a story?", "t2",["Prof. Neha Patil","Prof. Ananya Shah","Prof. Isha Nair","Prof. Priya Menon"]],
 ["Who teaches students to think beyond the packet?", "t3",["Prof. Arjun Desai","Prof. Sameer Rao","Prof. Vivek More","Prof. Kavya Joshi"]],
 ["Who says technology should be powerful AND thoughtful?", "t6",["Prof. Isha Nair","Prof. Priya Menon","Prof. Neha Patil","Prof. Ananya Shah"]],
 ["Who tells students to debug the problem, not just the code?", "t5",["Prof. Sameer Rao","Prof. Vivek More","Prof. Arjun Desai","Prof. Isha Nair"]],
 ["Who teaches that security starts with curiosity?", "t8",["Prof. Priya Menon","Prof. Isha Nair","Prof. Kavya Joshi","Prof. Neha Patil"]],
 ["Who is known for turning complex things into possibilities?", "hod2",["Prof. Rohan Kulkarni","Dr. Aditi Mehra","Prof. Ananya Shah","Prof. Vivek More"]],
 ["Who leads Computer Engineering with curiosity and patience?", "hod1",["Dr. Aditi Mehra","Prof. Rohan Kulkarni","Prof. Isha Nair","Prof. Neha Patil"]],
 ["Who believes every problem has a structure?", "t1",["Prof. Ananya Shah","Prof. Sameer Rao","Prof. Vivek More","Prof. Arjun Desai"]],
 ["Who connects classroom theory with the world outside?", "t3",["Prof. Arjun Desai","Prof. Kavya Joshi","Prof. Neha Patil","Prof. Priya Menon"]],
 ["Who says “Assume nothing. Verify everything.”?", "t8",["Prof. Priya Menon","Prof. Isha Nair","Prof. Sameer Rao","Prof. Vivek More"]],
 ["Who turns a futuristic subject into a practical playground?", "t6",["Prof. Isha Nair","Prof. Ananya Shah","Prof. Kavya Joshi","Prof. Rohan Kulkarni"]],
 ["Who believes the best classroom is a place where experiments are safe?", "t4",["Prof. Kavya Joshi","Prof. Neha Patil","Prof. Priya Menon","Prof. Aditi Mehra"]],
 ["Who teaches that great software is as much about people as code?", "t7",["Prof. Vivek More","Prof. Sameer Rao","Prof. Arjun Desai","Prof. Rohan Kulkarni"]],
 ["Who remembers the project demos that ran perfectly — eventually?", "t7",["Prof. Vivek More","Prof. Kavya Joshi","Prof. Ananya Shah","Prof. Neha Patil"]],
 ["Who is associated with the first model that finally predicted something correctly?", "t6",["Prof. Isha Nair","Prof. Priya Menon","Prof. Arjun Desai","Prof. Sameer Rao"]],
 ["Who is one of the two department leaders in GuruVerse?", "hod1",["Dr. Aditi Mehra","Prof. Neha Patil","Prof. Priya Menon","Prof. Sameer Rao"]]
];
let qi=0,score=0,answered=false;
function loadQ(){
  answered=false;
  const q=questions[qi];
  $("#quizCount").textContent=`QUESTION ${String(qi+1).padStart(2,"0")} / ${questions.length}`;
  $("#quizScore").textContent=`SCORE ${score}`;
  $("#quizQuestion").textContent=q[0];
  $("#quizFeedback").textContent="";
  $("#nextQuestion").hidden=true;
  $("#quizOptions").innerHTML=q[2].map((o,i)=>`<button class="quiz-option">${String.fromCharCode(65+i)} — ${o}</button>`).join("");
  $("#quizOptions").onclick=e=>{
    if(!e.target.classList.contains("quiz-option")||answered)return;
    answered=true;
    const correct=all.find(t=>t.id===q[1]).name;
    if(e.target.textContent.includes(correct)){
      score++; e.target.classList.add("correct"); $("#quizFeedback").textContent="✨ Correct! You know your mentors.";
      if(typeof confetti==='function') confetti();
    }else{ e.target.classList.add("wrong"); $("#quizFeedback").textContent=`Not quite — it was ${correct}.`; }
    $("#quizScore").textContent=`SCORE ${score}`;
    $("#nextQuestion").hidden=false;
  };
}
$("#nextQuestion").onclick=()=>{qi++;if(qi>=questions.length){saveScore();qi=0;score=0;toast("Quiz complete! Score saved to Hall of Fame 🏆")}loadQ()};function saveScore(){let l=JSON.parse(localStorage.getItem("guru_scores")||"[]");l.push({name:prompt("Enter your name for the Hall of Fame:")||"Anonymous",score:score+"/"+questions.length});l.sort((a,b)=>parseInt(b.score)-parseInt(a.score));localStorage.setItem("guru_scores",JSON.stringify(l.slice(0,5)));renderScores()}function renderScores(){const l=JSON.parse(localStorage.getItem("guru_scores")||"[]");$("#leaderboardList").innerHTML=l.length?l.map((x,i)=>`<div class="leader-row"><span>${["🥇","🥈","🥉","4.","5."][i]} ${escapeHtml(x.name)}</span><b>${x.score}</b></div>`).join(""):"<div class='leader-row'><span>Be the first to make the board.</span><b>—</b></div>"}loadQ();renderScores();}


const awards=[["🏆","The Knowledge Architect"],["❤️","The Most Inspiring Mentor"],["😂","The Classroom Legend"],["🔥","The Energy Machine"],["📚","The Concept Master"],["🌟","The Student’s Favorite"]];
if(document.getElementById("awardsGrid")) {
  $("#awardsGrid").innerHTML=awards.map(([icon,title],i)=>`<article class="award-card reveal"><div class="award-icon">${icon}</div><h3>${title}</h3><select data-award="${i}"><option value="">Cast anonymous vote…</option>${all.map(t=>`<option value="${t.id}">${t.name}</option>`).join("")}</select><div class="award-voted" id="voted${i}"></div></article>`).join("");
}
$$(".award-card select").forEach(s=>s.onchange=()=>{if(!s.value)return;localStorage.setItem("guru_award_"+s.dataset.award,s.value);$("#voted"+s.dataset.award).textContent="✓ Vote recorded on this device";s.disabled=true});$$(".award-card select").forEach(s=>{if(localStorage.getItem("guru_award_"+s.dataset.award)){s.value=localStorage.getItem("guru_award_"+s.dataset.award);s.disabled=true;$("#voted"+s.dataset.award).textContent="✓ Vote recorded on this device"}});

$("#menuBtn").onclick=()=>$("#navLinks").classList.toggle("open");
window.addEventListener("scroll",()=>{const h=document.documentElement;$("#progressBar").style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});$$(".reveal").forEach(x=>obs.observe(x));$$("nav a").forEach(a=>a.onclick=()=>$("#navLinks").classList.remove("open"));


/* GURUVERSE 2.0 — extra interactive features */
function confetti(){const layer=document.createElement("div");layer.className="confetti-layer";document.body.appendChild(layer);for(let i=0;i<42;i++){const c=document.createElement("i");c.style.left=Math.random()*100+"vw";c.style.animationDelay=Math.random()*.25+"s";c.style.transform=`rotate(${Math.random()*360}deg)`;layer.appendChild(c)}setTimeout(()=>layer.remove(),2200)}
const extraHTML=`<section class="surprise-section section" id="surprise"><div class="surprise-inner reveal"><span class="section-kicker">11 / SECRET STUDENT MODE</span><h2>Press the button.<br><em>Trust us.</em></h2><p id="surpriseText">There is a surprise hidden somewhere in GuruVerse.</p><button class="btn primary" id="surpriseBtn">✨ Surprise Me</button></div></section>`;
const final=document.querySelector(".final");final.insertAdjacentHTML("beforebegin",extraHTML);
const surprises=["Your teacher probably remembers more about your class than you think. ❤️","Plot twist: the ‘easy’ assignment was never easy.","Some of your best lessons happened after the bell.","Achievement unlocked: you made a teacher smile today. ✨","Future-you will remember these people.","Secret mission: tell one teacher thank you before the day ends."];document.getElementById("surpriseBtn").onclick=()=>{document.getElementById("surpriseText").textContent=surprises[Math.floor(Math.random()*surprises.length)];confetti()};
const countdown=document.createElement("div");countdown.className="countdown-pill";document.querySelector(".hero-copy").prepend(countdown);function updateCountdown(){const target=new Date("2026-09-05T00:00:00+05:30").getTime(),d=Math.max(0,target-Date.now()),days=Math.floor(d/864e5),hrs=Math.floor(d%864e5/36e5),mins=Math.floor(d%36e5/6e4),secs=Math.floor(d%6e4/1e3);countdown.textContent=d?`TEACHERS' DAY IN ${days}D ${hrs}H ${mins}M ${secs}S`:`HAPPY TEACHERS' DAY • 2026 ✦`}updateCountdown();setInterval(updateCountdown,1000);
/* GURUVERSE ULTRA — interaction layer */
(function(){
const traits={1:[96,91,88,95,82],2:[92,94,90,93,86],3:[95,86,90,92,80],4:[91,94,88,96,83],5:[94,87,96,90,89],6:[90,92,91,94,85],7:[96,89,94,88,91],8:[98,90,97,96,93],9:[93,88,92,91,87],10:[97,93,95,94,90]};const names=['LOGIC','PATIENCE','CHAOS CONTROL','MOTIVATION','LEGACY'];
const grid=document.getElementById('dnaGrid');if(grid&&Array.isArray(all)){grid.innerHTML=all.map(t=>`<article class="dna-card" data-id="${t.id}"><div class="dna-name">${t.name}</div><div class="dna-sub">${t.subject}</div><div class="dna-bars">${(traits[t.id]||[90,90,90,90,90]).map((v,i)=>`<div class="dna-bar"><span>${names[i]}</span><i class="dna-track"><em class="dna-fill" style="--v:${v}%"></em></i><b>${v}</b></div>`).join('')}</div></article>`).join('');grid.onclick=e=>{let c=e.target.closest('.dna-card');if(c&&typeof openProfile==='function')openProfile(+c.dataset.id)}}
const wall=document.getElementById('polaroidWall'),add=document.getElementById('addMemory');function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}function render(){if(!wall)return;let a=[];try{a=JSON.parse(localStorage.getItem('guru_memories')||'[]')}catch{}wall.innerHTML=a.map(m=>`<article class="polaroid" style="--r:${m.r}deg"><small>GURUVERSE ${m.date}</small><h4>${esc(m.title)}</h4><p>${esc(m.text)}</p></article>`).join('')}render();if(add)add.onclick=()=>{let t=document.getElementById('memoryTitle'),x=document.getElementById('memoryText');if(!t.value.trim()||!x.value.trim()){if(typeof toast==='function')toast('Write a memory first ✦');return}let a=[];try{a=JSON.parse(localStorage.getItem('guru_memories')||'[]')}catch{}a.unshift({title:t.value.trim(),text:x.value.trim(),date:new Date().getFullYear(),r:(Math.random()*8-4).toFixed(1)});localStorage.setItem('guru_memories',JSON.stringify(a.slice(0,30)));t.value='';x.value='';render();if(typeof confetti==='function')confetti()};
const q=document.getElementById('arcadeQuestion'),op=document.getElementById('arcadeOptions'),fb=document.getElementById('arcadeFeedback');let score=+(localStorage.getItem('guru_arcade_score')||0),streak=0,target;const clue=['department leadership','department leadership','Data Structures','Database Systems','Computer Networks','Web Technologies','Operating Systems','Artificial Intelligence','Software Engineering','Cyber Security'];function next(){target=all[Math.floor(Math.random()*all.length)];q.textContent=`Who is the mentor in ${clue[target.id-1]}?`;let c=[target];while(c.length<4){let x=all[Math.floor(Math.random()*all.length)];if(!c.some(y=>y.id===x.id))c.push(x)}c.sort(()=>Math.random()-.5);op.innerHTML=c.map(x=>`<button data-id="${x.id}">${x.name}</button>`).join('');fb.textContent='';document.getElementById('arcadeScore').textContent=`SCORE ${score}`;document.getElementById('arcadeStreak').textContent=`STREAK ${streak}`}if(op)op.onclick=e=>{let b=e.target.closest('button');if(!b)return;let ok=+b.dataset.id===target.id;if(ok){streak++;score+=10+streak;b.classList.add('correct');fb.textContent='CORRECT. Mentor radar: dangerous. ✦';if(typeof confetti==='function'&&streak%3===0)confetti()}else{streak=0;b.classList.add('wrong');fb.textContent=`Not quite. It was ${target.name}.`}localStorage.setItem('guru_arcade_score',score);setTimeout(next,650)};if(q)next();
const tree=document.getElementById('legacyTree');if(tree)tree.innerHTML='<div class="legacy-node root"><strong>ONE LESSON</strong><small>THE SPARK</small></div><div class="legacy-node n1"><strong>SKILL</strong><small>WHAT THEY TAUGHT</small></div><div class="legacy-node n2"><strong>MEMORY</strong><small>WHAT WE REMEMBER</small></div><div class="legacy-node n3"><strong>COURAGE</strong><small>WHAT WE DARED TO TRY</small></div><div class="legacy-node n4"><strong>FUTURE</strong><small>WHAT WE CARRY FORWARD</small></div>';
const ti=document.getElementById('terminalInput'),ts=document.getElementById('terminalScreen');const cmds={'/help':'Commands: /mentors /legacy /secret','/mentors':'11 mentors detected. Mentor profiles unlocked.','/legacy':'Legacy tree online. One lesson → a lifetime.','/secret':'SECRET: tell one teacher thank you today. Then watch the stars.'};if(ti)ti.addEventListener('keydown',e=>{if(e.key!=='Enter')return;let v=ti.value.trim().toLowerCase(),o=document.createElement('div');o.innerHTML=`&gt; ${esc(v)}<br>&gt; ${esc(cmds[v]||'ACCESS DENIED. Try /help.')}`;ts.appendChild(o);ti.value='';ts.scrollTop=ts.scrollHeight});
const cap=document.getElementById('capsuleText'),seal=document.getElementById('sealCapsule'),status=document.getElementById('capsuleStatus');if(localStorage.getItem('guru_capsule')&&cap){cap.value='🔒 SEALED — MESSAGE LOCKED';cap.disabled=true;seal.disabled=true;status.textContent='SEALED UNTIL 05.09.2031'}if(seal)seal.onclick=()=>{if(!cap.value.trim()){if(typeof toast==='function')toast('Write something first.');return}localStorage.setItem('guru_capsule',cap.value);cap.value='🔒 SEALED — MESSAGE LOCKED';cap.disabled=true;seal.disabled=true;status.textContent='SEALED UNTIL 05.09.2031';if(typeof confetti==='function')confetti();if(typeof toast==='function')toast('Time capsule sealed 🔒')};
})();


/* SUPER CINEMATIC INTERACTIONS */
(function(){
  const intro=document.getElementById("cinematicIntro"), bar=document.getElementById("introBar"), stat=document.getElementById("introStatus"), skip=document.getElementById("skipIntro");
  if(intro){
    const steps=["INITIALIZING MEMORY ARCHIVE","11 MENTORS DETECTED","2 DEPARTMENTS ONLINE","LEGACY ENGINE ACTIVE","GURUVERSE READY"];
    let n=0;
    const tick=setInterval(()=>{n++;bar.style.width=(n*20)+"%";stat.textContent=steps[Math.min(n,steps.length-1)];if(n>=5){clearInterval(tick);setTimeout(()=>intro.classList.add("hide"),500)}},420);
    skip.onclick=()=>{clearInterval(tick);intro.classList.add("hide")};
    setTimeout(()=>intro.classList.add("hide"),3600);
  }
  document.querySelectorAll(".universe-jump").forEach(b=>b.onclick=()=>{
    const target=b.dataset.target;
    const ids=target==="IT"?["t5","t6","t7","t8","t9"]:["t1","t2","t3","t4"];
    const first=document.querySelector(`[data-id="${ids[0]}"]`);
    if(first){first.scrollIntoView({behavior:"smooth",block:"center"});first.animate([{outline:"3px solid #c89b5a"},{outline:"0 solid transparent"}],{duration:1200})}
  });
  const reveal=document.getElementById("revealWinner"), stage=document.getElementById("winnerStage"), prompt=document.getElementById("ceremonyPrompt");
  if(reveal && stage){
    reveal.onclick=()=>{
      const winner=all[Math.floor(Math.random()*all.length)], category=document.getElementById("ceremonyCategory").value;
      stage.innerHTML=`<span>✦</span><strong>${winner.name.toUpperCase()}</strong><small>${category.toUpperCase()} • GURUVERSE 2026</small>`;
      stage.classList.remove("celebrate");void stage.offsetWidth;stage.classList.add("celebrate");
      prompt.textContent=`And the award goes to… ${winner.name}.`;
      if(typeof confetti==="function")confetti();
      if(typeof toast==="function")toast("Award ceremony complete ✦");
    };
  }
})();


/* PRESENTATION MODE — guided demo */
(function(){
 const init=()=>{
 const mode=document.getElementById('demoMode'), open=document.getElementById('demoLaunch'), close=document.getElementById('demoClose');
 const title=document.getElementById('demoTitle'), text=document.getElementById('demoText'), ch=document.getElementById('demoChapter'), prog=document.getElementById('demoProgress');
 const prev=document.getElementById('demoPrev'), next=document.getElementById('demoNext');
 if(!mode)return;
 const chapters=[
  ['CHAPTER 01','The people behind it all.','11 mentors. Two departments. One experience built to celebrate the people who shaped us.'],
  ['CHAPTER 02','Meet the leaders.','Dr. Bijendra Gupta Sir leads IT. Prof. Rashmi Kulkarni leads AIML.'],
  ['CHAPTER 03','Enter the department universes.','IT: The Builders. AIML: The Thinkers. Two different worlds, one GuruVerse.'],
  ['CHAPTER 04','Know your mentors.','Open any mentor to reveal their story, subject, DNA and impact.'],
  ['CHAPTER 05','Explore the GuruVerse.','Discover surprise moments and hidden terminal commands.'],
  ['CHAPTER 06','Meet the mentors.','Open any mentor to explore their story, subject and impact.'],
  ['CHAPTER 07','The finale.','A celebration of every mentor who helped shape the journey.']
 ];
 let i=0;
 function render(){const d=chapters[i];ch.textContent=d[0];title.textContent=d[1];text.textContent=d[2];prog.style.width=((i+1)/chapters.length*100)+'%';prev.disabled=i===0;next.textContent=i===chapters.length-1?'CLOSE ✦':'NEXT →'}
 function show(){mode.classList.add('show');mode.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';i=0;render()}
 function hide(){mode.classList.remove('show');mode.setAttribute('aria-hidden','true');document.body.style.overflow='';}
 function go(n){i=Math.max(0,Math.min(chapters.length-1,n));render()}
 if(open)open.onclick=show;if(close)close.onclick=hide;if(prev)prev.onclick=()=>go(i-1);if(next)next.onclick=()=>i===chapters.length-1?hide():go(i+1);
 document.addEventListener('keydown',e=>{if(!mode.classList.contains('show'))return;if(e.key==='Escape')hide();if(e.key==='ArrowRight')next.click();if(e.key==='ArrowLeft')prev.click();});
 };
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
