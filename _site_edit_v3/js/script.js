
document.addEventListener('DOMContentLoaded',function(){
  // Smooth scroll for intra-page (in case any hash links appear later)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
    });
  });

  
  const backdrop = document.createElement('div');
  backdrop.className = '_modal_removed';
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="إشعار مؤقت">
      <div class="modal-header">
        <strong>تنبيه</strong>
        <button class="modal-close" aria-label="إغلاق">&times;</button>
      </div>
      <div class="modal-body">
        <p>الصفحة مؤقتة، سيتم تطويرها بشكل كامل.</p>
        <p style="direction:ltr;margin-top:6px;">This page is temporary and will be fully developed soon.</p>
      </div>
    </div>`;
  document.body.appendChild(backdrop);
  // Show on load
  setTimeout(()=>backdrop.classList.add('show'), 250);
  // Close handlers
  backdrop.querySelector('.modal-close').addEventListener('click',()=>backdrop.classList.remove('show'));
  backdrop.addEventListener('click',e=>{ if(e.target===backdrop){ backdrop.classList.remove('show'); }});
});


// Hamburger toggle logic
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  if(toggle && navMenu){
    toggle.addEventListener('click', ()=>{
      navMenu.classList.toggle('show');
    });
  }
});
