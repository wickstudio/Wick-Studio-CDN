const $ = (s) => document.querySelector(s);
const baseUrlEl = $('#base-url');
const yearEl = $('#year');
const apiHealthCard = $('#api-health');
const apiHealthText = $('#api-health-text');
const menuToggle = $('#menu-toggle');
const siteNav = $('#site-nav');

yearEl.textContent = new Date().getFullYear();

function showOperational(){
  apiHealthCard.querySelector('.dot').classList.remove('orange','red');
  apiHealthCard.querySelector('.dot').classList.add('green');
  apiHealthText.textContent = 'Operational';
}

showOperational();

if(menuToggle){
  menuToggle.addEventListener('click', ()=>{
    if(siteNav.style.display === 'flex'){
      siteNav.style.display = 'none';
    } else {
      siteNav.style.display = 'flex';
      siteNav.style.flexDirection = 'column';
      siteNav.style.gap = '10px';
      siteNav.style.position = 'absolute';
      siteNav.style.top = '58px';
      siteNav.style.right = '16px';
      siteNav.style.background = '#0b0f1dcc';
      siteNav.style.backdropFilter = 'blur(8px)';
      siteNav.style.border = '1px solid #1f2540';
      siteNav.style.padding = '10px 12px';
      siteNav.style.borderRadius = '12px';
    }
  });
}

document.querySelectorAll('.copy-btn').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    try{await navigator.clipboard.writeText(btn.dataset.copy); btn.textContent='Copied'; setTimeout(()=>btn.textContent='Copy',1200);}catch(_){btn.textContent='Copy failed'}
  });
});