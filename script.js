/* =========================================================
   EDIT-ME ZONE — personalise everything here
   ========================================================= */
const LOVE_LETTER_TEXT =
`Happy birthday to the best thing that has ever happened to me. ❤️

I hope this year gives you everything you deserve, and even more. ✨

Ee andhamaina prapancham loki ninnu teesukochina mee parents ki first of all, Thank You. ❤️

Vallu ninnu ee prapancham loki teesukochaaru...
kaani nuvvu naa prapanchanni intha andhanga marchesaav. ❤️

Every Year,
Every Month,
Every Week,
Every Day,
Every Hour,
Every Minute,
Every Second...

Nee meedha naa love perigipothune undi.❤️♾️

Nuvvu naa life loki vachina tarvatha prapancham emi maaraledhu...
kaani aa prapanchanni choose naa vidhanam maatram maaripoyindi.

Mundhu happiness ante ento vere laga anipinchedi...
ippudu nuvvu navvutunte, naatho maatladutunte,
nee tho oka small moment spend chesthunte...
ave naaku happiest moments aipoyayi. ❤️

Nee andham gurinchi entha cheppina thakkuve...
kaani nee face kanna,
nee smile kanna,
nee heart and nee way of caring naaku inka ekkuva ishtam. 🫶🏻

Nuvvu perfect ani nenu cheppanu...
nenu kuda perfect kaadu.

Kaani mana imperfections tho kuda
mana story ni beautiful ga build cheskovali ani korukuntunna. ❤️

I don't need a perfect love story...

I just want our story,

with you,
with me,
and countless beautiful memories. ❤️

Nee life lo enni birthdays vachina,
prathi birthday nee life lo inka ekkuva happiness,
success, peace and love teesukuraavali ani korukuntunna. ✨

Nee dreams anni nijam avvali.
Nee face meedha aa beautiful smile eppudu undaali.
Nuvvu entha dooram vellina,
nee pakkana ninnu support chese person ga
nenu eppudu undaali ani korukuntunna. ❤️

And finally...

I love you more than yesterday,
but less than tomorrow. ❤️♾️

Happy Birthday, My Love. ❤️

Nuvvu naa favourite person,
naa happiest feeling,
naa beautiful memory,
and naa future lo nenu choodalanukune person. ❤️

I Love You. Always & Forever. ❤️♾️

`;
// ^ PLACEHOLDER: replace with your own message. Line breaks are kept as-is.

const NUMBER_OF_PHOTO_SLOTS = 4; // PLACEHOLDER: change count, then add real
                                   // photos via the .photo-slot CSS rule above

// const LOVE_REASONS = [
//   "The way you laugh at your own jokes before you even finish them",
//   "How you remember the tiniest details about people you barely know",
//   "Your terrible, wonderful singing in the car",
//   "The way you make any place feel like home",
//   "How brave you are, even on days you don't feel it",
//   "Simply, everything"
// ];
const LOVE_REASONS = [

  "The way you laugh at your own jokes before you even finish them 😂❤️",

  "How you remember the tiniest little things I tell you 🥹❤️",

  "Your cute smile that can instantly make my day better 😊❤️",

  "The way you annoy me and somehow still make me love you more 😂🫶🏻",

  "The strongest girl I know, with the most beautiful smile ❤️",

  "How you care for the people you love, even in your own little ways 🥹❤️",

  "Simply, everything about you. I just love you. ❤️♾️"

];
// ^ PLACEHOLDER: replace with your own reasons — one lantern is released per line.

const BALLOON_MESSAGES = [
  "You are my peace",
  "My favorite place is with you",
  "I still choose you",
  "You make my world softer",
  "I love the life we are making",
  "Always, with you"
];
// ^ Romantic one-line notes for each balloon pop.

const CANDLE_WISHES = [
  "Forever",
  "Us",
  "Always"
];
// ^ Tiny wishes revealed as each candle is blown out.

/* =========================================================
   FLOATING HEARTS / STARS BACKGROUND (canvas)
   ========================================================= */
(function heartsBackground(){
  const canvas = document.getElementById('heartsCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function makeParticle(){
    return {
      x: Math.random() * w,
      y: h + 20 + Math.random() * h,
      size: 6 + Math.random() * 14,
      speed: 0.3 + Math.random() * 0.9,
      drift: (Math.random() - 0.5) * 0.6,
      alpha: 0.15 + Math.random() * 0.35,
      kind: Math.random() < 0.3 ? 'star' : (Math.random() < 0.55 ? 'petal' : 'heart'),
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      hue: Math.random() < 0.5 ? '#c73a5c' : '#d9b04c'
    };
  }
  const COUNT = reduceMotion ? 0 : 30;
  for(let i=0;i<COUNT;i++) particles.push(makeParticle());

  function drawHeart(x, y, size, color, alpha){
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.scale(size/16, size/16);
    ctx.beginPath();
    ctx.moveTo(0, 4);
    ctx.bezierCurveTo(0, -2, -8, -2, -8, 4);
    ctx.bezierCurveTo(-8, 10, 0, 13, 0, 18);
    ctx.bezierCurveTo(0, 13, 8, 10, 8, 4);
    ctx.bezierCurveTo(8, -2, 0, -2, 0, 4);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }
  function drawStar(x, y, size, color, alpha){
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    for(let i=0;i<5;i++){
      const ang = (Math.PI*2/5)*i - Math.PI/2;
      const ang2 = ang + Math.PI/5;
      ctx.lineTo(x + Math.cos(ang)*size, y + Math.sin(ang)*size);
      ctx.lineTo(x + Math.cos(ang2)*size*0.45, y + Math.sin(ang2)*size*0.45);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  function drawPetal(x, y, size, rot, color, alpha){
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.ellipse(0, 0, size*0.42, size*0.85, 0, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  function tick(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
      p.y -= p.speed;
      p.x += p.drift;
      p.rot += p.rotSpeed;
      if(p.y < -20){ Object.assign(p, makeParticle(), {y: h + 20}); }
      if(p.kind === 'star') drawStar(p.x, p.y, p.size*0.5, p.hue, p.alpha);
      else if(p.kind === 'petal') drawPetal(p.x, p.y, p.size, p.rot, '#e8607e', p.alpha);
      else drawHeart(p.x, p.y, p.size, p.hue, p.alpha);
    });
    requestAnimationFrame(tick);
  }
  tick();

  // one-off burst used by love meter / hug button
  window.burstHearts = function(x, y, n){
    n = n || 18;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:25;';
    document.body.appendChild(wrap);
    for(let i=0;i<n;i++){
      const el = document.createElement('div');
      el.textContent = Math.random() < 0.5 ? '💖' : '💕';
      const dx = (Math.random()-0.5) * 240;
      const dur = 1.1 + Math.random()*0.9;
      el.style.cssText = `position:absolute;left:${x}px;top:${y}px;font-size:${16+Math.random()*18}px;
        transform:translate(-50%,-50%);opacity:1;transition:transform ${dur}s ease-out, opacity ${dur}s ease-out;`;
      wrap.appendChild(el);
      requestAnimationFrame(()=>{
        el.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% - ${180+Math.random()*160}px)) rotate(${(Math.random()-0.5)*60}deg)`;
        el.style.opacity = '0';
      });
    }
    setTimeout(()=> wrap.remove(), 2200);
  };

  // gentle falling-petal flourish used on every phase transition
  window.burstPetals = function(n){
    if(reduceMotion) return;
    n = n || 9;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:25;overflow:hidden;';
    document.body.appendChild(wrap);
    for(let i=0;i<n;i++){
      const el = document.createElement('div');
      el.textContent = Math.random() < 0.5 ? '🌸' : '🌺';
      const startX = Math.random() * window.innerWidth;
      const dx = (Math.random()-0.5) * 120;
      const dur = 2 + Math.random()*1.2;
      const delay = Math.random()*0.3;
      el.style.cssText = `position:absolute;left:${startX}px;top:-30px;font-size:${14+Math.random()*12}px;
        opacity:0.9;transition:transform ${dur}s ease-in ${delay}s, opacity ${dur}s ease-in ${delay}s;`;
      wrap.appendChild(el);
      requestAnimationFrame(()=>{
        el.style.transform = `translate(${dx}px, ${window.innerHeight + 60}px) rotate(${(Math.random()-0.5)*180}deg)`;
        el.style.opacity = '0';
      });
    }
    setTimeout(()=> wrap.remove(), 3600);
  };
})();

/* =========================================================
   CONFETTI (pure canvas, no external library)
   ========================================================= */
function fireConfetti(){
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#c73a5c', '#f3b6c4', '#d9b04c', '#6b3f6e', '#fbeee7'];
  let pieces = [];
  for(let i=0;i<120;i++){
    pieces.push({
      x: Math.random()*canvas.width,
      y: -20 - Math.random()*canvas.height*0.4,
      size: 5 + Math.random()*6,
      color: colors[Math.floor(Math.random()*colors.length)],
      vy: 2 + Math.random()*3,
      vx: (Math.random()-0.5)*2.4,
      rot: Math.random()*Math.PI,
      vr: (Math.random()-0.5)*0.3
    });
  }
  let frame = 0;
  function loop(){
    frame++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size*0.6);
      ctx.restore();
    });
    if(frame < 160) requestAnimationFrame(loop);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  loop();
}

/* =========================================================
   PHASE NAVIGATION
   ========================================================= */
function goToPhase(n){
  const next = document.getElementById('phase'+n);
  const current = document.querySelector('.phase.visible');

  if(current && current !== next){
    current.classList.remove('visible');
    current.classList.add('leaving');
    setTimeout(()=>{
      current.classList.remove('leaving');
    }, 420);
  }

  next.classList.add('visible');
  document.body.dataset.phase = n;
  document.querySelectorAll('#progressDots .stud').forEach(d=>{
    d.classList.toggle('active', Number(d.dataset.i) <= n);
  });
  document.querySelectorAll('#progressDots .seg').forEach(s=>{
    s.classList.toggle('active', Number(s.dataset.i) <= n);
  });
  if(window.burstPetals) window.burstPetals(9);
  if(n === 8) startTypewriter();
}

/* =========================================================
   PHASE 1 — LOVE METER
   ========================================================= */
(function(){
  const slider = document.getElementById('loveSlider');
  const valueEl = document.getElementById('meterValue');
  const msgEl = document.getElementById('meterMsg');
  const nextHint = document.getElementById('toPhase2');
  let unlocked = false;
  let previousValue = Number(slider.value);
  let pauseTimer;

  const messages = [
    [0, "Zero na ?"],
    [25, "Anthena?"],
    [50, "Half- Half love entooo..."],
    [75, "Inkochem akkuvaga preminchuga "],
    [100, "100% love ante... pelli ki consider cheyachu ninnu"]
  ];

  function messageFor(v){
    let m = messages[0][1];
    for(const [t, txt] of messages) if(v >= t) m = txt;
    return m;
  }

  slider.addEventListener('input', ()=>{
    const v = Number(slider.value);
    const pct = (v/slider.max)*100;
    slider.style.setProperty('--fill', pct+'%');
    valueEl.textContent = v;
    clearTimeout(pauseTimer);

    if(v >= Number(slider.max)){
      msgEl.textContent = "100% love ante... pelli ki consider cheyachu ninnu";
    }else if(v === 0){
      msgEl.textContent = "Zero na? Come on, be honest...";
    }else if(v > previousValue){
      msgEl.textContent = "That's more like it... keep going ❤️";
    }else if(v < previousValue){
      msgEl.textContent = "Ayyo, taking some love back? 😭";
    }

    if(v > 0 && v < Number(slider.max)){
      pauseTimer = setTimeout(()=>{
        msgEl.textContent = "I know there is more love in there...";
      }, 500);
    }

    previousValue = v;
    if(v >= 100 && !unlocked){
      unlocked = true;
      nextHint.classList.add('show');
      const rect = slider.getBoundingClientRect();
      window.burstHearts(rect.left + rect.width/2, rect.top, 22);
    }
  });

  nextHint.addEventListener('click', ()=> goToPhase(2));
})();

/* =========================================================
   PHASE 2 — BALLOON POP
   ========================================================= */
(function(){
  const field = document.getElementById('balloonField');
  const hint = document.getElementById('balloonHint');
  const caption = document.getElementById('balloonCaption');
  const nextHint = document.getElementById('toPhase3');
  const total = 6;
  let remaining = total;
  let idx = 0;

  function spawnBalloon(){
    if(remaining <= 0) return;

    const balloon = document.createElement('div');
    balloon.className = `balloon b${(idx % total) + 1}`;
    balloon.dataset.b = String((idx % total) + 1);
    balloon.innerHTML = '<span class="heart"></span><span class="knot"></span>';

    const maxX = Math.max(20, field.clientWidth - 60);
    const maxY = Math.max(30, field.clientHeight - 90);
    balloon.style.left = `${20 + Math.random() * (maxX - 20)}px`;
    balloon.style.top = `${20 + Math.random() * (maxY - 20)}px`;

    balloon.addEventListener('click', ()=>{
      if(balloon.classList.contains('popped')) return;
      balloon.classList.add('popped');
      remaining--;

      caption.classList.remove('show');
      void caption.offsetWidth;
      caption.textContent = BALLOON_MESSAGES[idx % BALLOON_MESSAGES.length];
      caption.classList.add('show');
      idx++;

      hint.textContent = remaining > 0
        ? `${remaining} balloon${remaining>1?'s':''} left to pop`
        : 'all popped — my heart included 💘';

      setTimeout(()=>{
        balloon.remove();
        if(remaining > 0){
          spawnBalloon();
        } else {
          setTimeout(()=> nextHint.classList.add('show'), 500);
        }
      }, 260);
    });

    field.appendChild(balloon);
  }

  spawnBalloon();
  nextHint.addEventListener('click', ()=> goToPhase(3));
})();

/* =========================================================
   PHASE 3 — CAKE / CANDLES
   ========================================================= */
(function(){
  const candles = document.querySelectorAll('.candle');
  const cake = document.querySelector('.cake');
  const hint = document.getElementById('cakeHint');
  const banner = document.getElementById('bdayBanner');
  const nextHint = document.getElementById('toPhase4');
  const enableMic = document.getElementById('enableMic');
  const micStatus = document.getElementById('micStatus');
  let remaining = candles.length;
  let audioContext;
  let analyser;
  let microphoneStream;
  let blowStartedAt = 0;
  let lastBlowAt = 0;

  function blowCandle(candle){
    if(candle.classList.contains('blown')) return;
    candle.classList.add('blown');
    remaining--;

    const candleIndex = [...candles].indexOf(candle);
    const wish = CANDLE_WISHES[candleIndex] || 'Love';
    banner.textContent = wish;
    banner.classList.add('show');

    hint.textContent = remaining > 0
      ? `${remaining} candle${remaining>1?'s':''} left to blow out`
      : 'the wish is already coming true ✨';
    if(remaining === 0){
      cake.classList.add('celebrated');
      if(microphoneStream) microphoneStream.getTracks().forEach(track => track.stop());
      setTimeout(()=>{
        fireConfetti();
        banner.textContent = 'Forever • Us • Always';
        banner.classList.add('show');
        nextHint.classList.add('show');
      }, 300);
    }
  }

  function listenForBlows(){
    if(!analyser || remaining === 0) return;
    const samples = new Uint8Array(analyser.fftSize);
    analyser.getByteTimeDomainData(samples);
    let peak = 0;
    samples.forEach(sample => { peak = Math.max(peak, Math.abs(sample - 128)); });
    const now = performance.now();
    if(peak > 32){
      if(!blowStartedAt) blowStartedAt = now;
      if(now - blowStartedAt > 90 && now - lastBlowAt > 700){
        lastBlowAt = now;
        blowStartedAt = 0;
        blowCandle([...candles].find(candle => !candle.classList.contains('blown')));
      }
    } else if(now - blowStartedAt > 180){
      blowStartedAt = 0;
    }
    requestAnimationFrame(listenForBlows);
  }

  enableMic.addEventListener('click', async ()=>{
    if(!navigator.mediaDevices?.getUserMedia){
      micStatus.textContent = 'Microphone is not supported here. Tap the candles instead.';
      return;
    }
    try{
      microphoneStream = await navigator.mediaDevices.getUserMedia({audio: true});
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      audioContext.createMediaStreamSource(microphoneStream).connect(analyser);
      enableMic.textContent = 'Microphone enabled';
      enableMic.disabled = true;
      micStatus.textContent = 'Blow gently toward the microphone';
      listenForBlows();
    } catch(error){
      micStatus.textContent = 'Microphone access was blocked. Tap the candles instead.';
    }
  });

  candles.forEach(c=>{
    c.addEventListener('click', ()=>{
      blowCandle(c);
    });
  });

  nextHint.addEventListener('click', ()=> goToPhase(4));
})();

/* =========================================================
   PHASE 4 — MEMORY MATCH
   ========================================================= */
(function(){
  const grid = document.getElementById('matchGrid');
  const hint = document.getElementById('matchHint');
  const complete = document.getElementById('matchComplete');
  const nextHint = document.getElementById('toPhase5');
  const ICONS = ['❤️','💍','🌙','🌹','💌','🫶'];

  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  }

  const deck = shuffle([...ICONS, ...ICONS]);
  let firstCard = null, secondCard = null, lock = false, matched = 0;

  deck.forEach(icon=>{
    const card = document.createElement('div');
    card.className = 'match-card';
    card.innerHTML = `
      <div class="inner">
        <div class="match-face pattern">✦</div>
        <div class="match-face icon">${icon}</div>
      </div>`;
    card.dataset.icon = icon;
    card.addEventListener('click', ()=> flip(card));
    grid.appendChild(card);
  });

  function flip(card){
    if(lock || card === firstCard || card.classList.contains('matched')) return;
    card.classList.add('flipped');

    if(!firstCard){
      firstCard = card;
      return;
    }
    secondCard = card;
    lock = true;

    if(firstCard.dataset.icon === secondCard.dataset.icon){
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      matched++;
      hint.textContent = matched < ICONS.length
        ? `${matched} of ${ICONS.length} pairs found`
        : 'every piece of my heart, found ✨';
      resetTurn();
      if(matched === ICONS.length){
        setTimeout(()=>{
          complete.classList.add('show');
          nextHint.classList.add('show');
        }, 500);
      }
    } else {
      setTimeout(()=>{
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetTurn();
      }, 800);
    }
  }

  function resetTurn(){
    firstCard = null;
    secondCard = null;
    lock = false;
  }

  nextHint.addEventListener('click', ()=> goToPhase(5));
})();

/* =========================================================
   PHASE 5 — CONSTELLATION OF WISHES
   ========================================================= */
(function(){
  const canvas = document.getElementById('starCanvas');
  const ctx = canvas.getContext('2d');
  const hint = document.getElementById('starHint');
  const complete = document.getElementById('starComplete');
  const nextHint = document.getElementById('toPhase6');
  const W = canvas.width, H = canvas.height;
  const N = 14;
  const cx = W/2, cy = H/2 + 6, scale = 8.6;

  // heart-shaped constellation points, sampled around a parametric heart curve
  const points = [];
  for(let i=0;i<N;i++){
    const t = (i/N) * Math.PI * 2;
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = 13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t);
    points.push({ x: cx + hx*scale/16*16*0.72, y: cy - hy*scale/16*16*0.72*0.9, lit: false });
  }
  // background twinkle field
  const bg = [];
  for(let i=0;i<45;i++){
    bg.push({ x: Math.random()*W, y: Math.random()*H, r: 0.6+Math.random()*1.2, phase: Math.random()*Math.PI*2 });
  }

  let remaining = N;
  let t0 = performance.now();

  function litNeighborSegments(){
    const segs = [];
    for(let i=0;i<N;i++){
      const a = points[i], b = points[(i+1)%N];
      if(a.lit && b.lit) segs.push([a,b]);
    }
    return segs;
  }

  function draw(now){
    ctx.clearRect(0,0,W,H);
    // twinkling background stars
    bg.forEach(s=>{
      const a = 0.25 + 0.25*Math.sin((now/900)+s.phase);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(240,220,255,${a})`;
      ctx.fill();
    });
    // connecting segments between lit neighbours
    ctx.strokeStyle = 'rgba(217,176,76,0.85)';
    ctx.lineWidth = 1.6;
    litNeighborSegments().forEach(([a,b])=>{
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    });
    // if fully complete, soft glow fill
    if(remaining === 0){
      ctx.save();
      ctx.beginPath();
      points.forEach((p,i)=> i===0 ? ctx.moveTo(p.x,p.y) : ctx.lineTo(p.x,p.y));
      ctx.closePath();
      const g = ctx.createRadialGradient(cx,cy,4,cx,cy,70);
      g.addColorStop(0, 'rgba(199,58,92,0.45)');
      g.addColorStop(1, 'rgba(199,58,92,0)');
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    }
    // constellation points
    points.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.lit ? 4.2 : 3, 0, Math.PI*2);
      ctx.fillStyle = p.lit ? '#fdeeb8' : 'rgba(255,255,255,0.35)';
      ctx.shadowColor = p.lit ? 'rgba(253,238,184,0.9)' : 'transparent';
      ctx.shadowBlur = p.lit ? 10 : 0;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  canvas.addEventListener('click', (e)=>{
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    let best = -1, bestD = 30;
    points.forEach((p,i)=>{
      if(p.lit) return;
      const d = Math.hypot(p.x-x, p.y-y);
      if(d < bestD){ bestD = d; best = i; }
    });
    if(best >= 0){
      points[best].lit = true;
      remaining--;
      hint.textContent = remaining > 0 ? `${remaining} star${remaining>1?'s':''} left to light` : 'the sky is complete ✨';
      if(remaining === 0){
        setTimeout(()=>{
          complete.classList.add('show');
          nextHint.classList.add('show');
        }, 500);
      }
    }
  });

  nextHint.addEventListener('click', ()=> goToPhase(6));
})();

/* =========================================================
   PHASE 6 — ENVELOPE
   ========================================================= */
(function(){
  const envelope = document.getElementById('envelope');
  const envHint = document.getElementById('envHint');
  const nextHint = document.getElementById('toPhase7');
  envelope.addEventListener('click', ()=>{
    if(envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    envHint.textContent = 'sealed with love';
    setTimeout(()=> nextHint.classList.add('show'), 700);
  });
  nextHint.addEventListener('click', ()=> goToPhase(7));
})();

/* =========================================================
   PHASE 7 — FLOATING LANTERNS
   ========================================================= */
(function(){
  const sky = document.getElementById('lanternSky');
  const hint = document.getElementById('lanternHint');
  const caption = document.getElementById('lanternCaption');
  const nextHint = document.getElementById('toPhase8');
  const total = LOVE_REASONS.length;
  let released = 0;

  // static twinkling starfield, generated once
  for(let i=0;i<24;i++){
    const star = document.createElement('div');
    star.className = 'sky-star';
    star.style.left = (Math.random()*96 + 2) + '%';
    star.style.top = (Math.random()*70 + 4) + '%';
    star.style.animationDelay = (Math.random()*2.4) + 's';
    const size = 1 + Math.random()*1.6;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    sky.appendChild(star);
  }

  function releaseLantern(clientX){
    if(released >= total) return;
    const rect = sky.getBoundingClientRect();
    const x = clientX != null ? clientX - rect.left : rect.width/2 + (Math.random()*60-30);
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    lantern.innerHTML = '<span class="cap top"></span><span class="body"></span><span class="cap bottom"></span><span class="tassel"></span>';
    lantern.style.left = Math.max(8, Math.min(rect.width - 38, x - 15)) + 'px';
    lantern.style.setProperty('--sway', (Math.random()*36 - 18) + 'px');
    lantern.style.animationDuration = (4.2 + Math.random()*1.6) + 's';
    sky.appendChild(lantern);
    lantern.addEventListener('animationend', ()=> lantern.remove());

    caption.classList.remove('show');
    // restart the fade-in transition
    void caption.offsetWidth;
    caption.textContent = LOVE_REASONS[released];
    caption.classList.add('show');

    released++;
    hint.textContent = released < total
      ? `${total - released} lantern${(total-released)>1?'s':''} left to release`
      : 'the sky is full of light ✨';

    if(released === total){
      setTimeout(()=> nextHint.classList.add('show'), 900);
    }
  }

  sky.addEventListener('click', (e)=> releaseLantern(e.clientX));
  sky.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); releaseLantern(null); }
  });

  nextHint.addEventListener('click', ()=> goToPhase(8));
})();

/* =========================================================
   PHASE 8 — LETTER TYPEWRITER + HUG + GALLERY
   ========================================================= */
let typewriterStarted = false;
function startTypewriter(){
  if(typewriterStarted) return;
  typewriterStarted = true;
  const body = document.getElementById('letterBody');
  const signEl = document.getElementById('letterSign');
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  const text = LOVE_LETTER_TEXT;
  let i = 0;
  body.textContent = '';
  body.appendChild(cursor);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion){
    body.textContent = text;
    signEl.style.opacity = 1;
    return;
  }

  function type(){
    if(i < text.length){
      body.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
      setTimeout(type, 18 + Math.random()*22);
    } else {
      signEl.style.transition = 'opacity .8s ease';
      signEl.style.opacity = 1;
    }
  }
  setTimeout(type, 400);
}

document.getElementById('hugBtn').addEventListener('click', (e)=>{
  const rect = e.target.getBoundingClientRect();
  window.burstHearts(rect.left + rect.width/2, rect.top, 30);
});

document.getElementById('restartBtn').addEventListener('click', ()=> window.location.reload());

/* gallery modal */
(function(){
  const grid = document.getElementById('galleryGrid');
  for(let i=0;i<NUMBER_OF_PHOTO_SLOTS;i++){
    const slot = document.createElement('div');
    slot.className = 'photo-slot';
    slot.textContent = '';
    grid.appendChild(slot);
  }
  const modal = document.getElementById('galleryModal');
  document.getElementById('galleryBtn').addEventListener('click', ()=> modal.classList.add('show'));
  document.getElementById('closeGallery').addEventListener('click', ()=> modal.classList.remove('show'));
  modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.classList.remove('show'); });
})();

/* =========================================================
   MUSIC TOGGLE
   ========================================================= */
(function(){
  const btn = document.getElementById('musicBtn');
  const audio = document.getElementById('bgMusic');
  audio.volume = 0.3; // Set default volume to 50%
  let playing = false;
  btn.addEventListener('click', ()=>{
    if(!audio.currentSrc && !audio.querySelector('source').src){
      // No audio source has been set yet — see the PLACEHOLDER comment
      // near the <audio id="bgMusic"> tag to add your song.
      btn.textContent = playing ? '🔇' : '🔈';
      playing = !playing;
      return;
    }
    if(playing){ audio.pause(); btn.textContent = '🔇'; }
    else { audio.play().catch(()=>{}); btn.textContent = '🔊'; }
    playing = !playing;
  });
})();

/* =========================================================
   SUBTLE 3D CARD TILT (desktop / fine-pointer only)
   ========================================================= */
(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if(reduceMotion || !finePointer) return;

  document.querySelectorAll('.glass').forEach(card=>{
    card.addEventListener('pointermove', (e)=>{
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg)`;
    });
    card.addEventListener('pointerleave', ()=>{
      card.style.transform = '';
    });
  });
})();
