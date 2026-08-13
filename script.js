const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.topbar nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.getElementById('contactForm');const status=document.getElementById('formStatus');
form?.addEventListener('submit',async(e)=>{
  e.preventDefault(); const btn=form.querySelector('button[type="submit"]'); const original=btn.innerHTML;
  btn.disabled=true;btn.textContent='Enviando…';status.textContent='';
  const payload=Object.fromEntries(new FormData(form).entries());
  try{
    const r=await fetch('/api/contacto',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    const data=await r.json();
    if(!r.ok) throw new Error(data.error||'No se pudo enviar');
    form.reset();status.textContent='✓ Consulta enviada correctamente. Nos pondremos en contacto contigo.';
  }catch(err){status.textContent='No se pudo enviar la consulta. Puedes llamarnos o escribirnos por WhatsApp.';}
  finally{btn.disabled=false;btn.innerHTML=original;}
});