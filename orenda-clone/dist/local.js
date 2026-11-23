const menu = document.querySelector('#mobile-menu');
const trigger = document.querySelector('#menu-icon');
let shade;
function closeMenu() { menu?.classList.remove('local-open'); trigger?.setAttribute('aria-expanded','false'); shade?.remove(); }
trigger?.setAttribute('aria-expanded','false');
trigger?.addEventListener('click', event => { event.preventDefault(); if(menu.classList.contains('local-open')) return closeMenu(); menu.classList.add('local-open'); trigger.setAttribute('aria-expanded','true'); shade=document.createElement('div'); shade.className='local-menu-shade'; shade.addEventListener('click',closeMenu); document.body.append(shade); });
document.querySelector('#menu-icon-close')?.addEventListener('click',event=>{event.preventDefault();closeMenu();trigger.focus();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();document.querySelectorAll('.local-open').forEach(el=>el.classList.remove('local-open'));trigger?.focus();}});
document.querySelectorAll('#main-nav li:has(> .sub-menu) > a').forEach(link=>{link.setAttribute('aria-expanded','false');link.addEventListener('click',event=>{if(link.getAttribute('href')==='#'||event.target.classList.contains('child-arrow')){event.preventDefault();const expanded=link.parentElement.classList.toggle('local-open');link.setAttribute('aria-expanded',String(expanded));}});});
document.querySelectorAll('.tf_swiper-wrapper').forEach(wrapper=>{
 const slides=[...wrapper.children];if(slides.length<2)return;
 let current=0; const controls=document.createElement('div');controls.className='local-slider-controls';
 const dots=slides.map((slide,index)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`Show testimonial ${index+1}`);button.addEventListener('click',()=>show(index));controls.append(button);return button;});
 function show(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{slide.hidden=i!==current;});dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===current)));}
 wrapper.parentElement.after(controls);show(0);
});
document.querySelectorAll('a[href="#header"]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
