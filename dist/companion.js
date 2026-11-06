(()=>{
const wrap=document.querySelector('#pet-wrap'),pet=document.querySelector('#pet'),home=document.querySelector('.companion-home'),toggle=document.querySelector('#pet-toggle'),message=document.querySelector('#pet-message');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer: fine)').matches;let following=fine&&!reduced,x=0,y=0,tx=0,ty=0,lastMove=Date.now(),timer,frame=0,happyTimer;
function dock(){const r=home.getBoundingClientRect();return{x:Math.max(8,Math.min(innerWidth-102,r.left+r.width/2-47)),y:r.top+ (innerWidth<=700?65:138)}}
function clamp(v,max){return Math.max(8,Math.min(max,v))}function place(){wrap.style.transform=`translate(${x}px,${y}px)`}
function sync(){toggle.textContent=`Following: ${following?'on':'off'}`;toggle.setAttribute('aria-pressed',String(following))}sync();
function targetHome(){const d=dock();tx=d.x;ty=d.y;if(!following||reduced){x=tx;y=ty;place()}}
targetHome();
function speak(text){clearTimeout(timer);message.textContent=text;message.classList.add('show');timer=setTimeout(()=>message.classList.remove('show'),2200)}
function greet(){wrap.classList.remove('sleepy');wrap.classList.add('happy');clearTimeout(happyTimer);happyTimer=setTimeout(()=>wrap.classList.remove('happy'),750);speak(['pika!','♡','pi-ka-chu!'][Math.floor(Math.random()*3)])}
pet.addEventListener('click',greet);document.querySelector('#pet-hi').addEventListener('click',greet);
toggle.addEventListener('click',()=>{following=!following;sync();wrap.classList.remove('walking','sleepy');targetHome();if(following)speak('coming!')});
addEventListener('pointermove',e=>{if(!following||e.pointerType==='touch'||reduced)return;tx=clamp(e.clientX+30,innerWidth-108);ty=clamp(e.clientY+35,innerHeight-125);lastMove=Date.now();wrap.classList.remove('sleepy')},{passive:true});
addEventListener('scroll',()=>{if(!following)targetHome()},{passive:true});addEventListener('resize',()=>{targetHome()});
function tick(){if(document.hidden){frame=0;return}if(following){const dx=tx-x,dy=ty-y,dist=Math.hypot(dx,dy);x+=dx*.065;y+=dy*.065;wrap.classList.toggle('walking',dist>4&&!reduced);if(Date.now()-lastMove>9000&&dist<4)wrap.classList.add('sleepy');place()}frame=requestAnimationFrame(tick)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!frame)tick()});tick();
})();
