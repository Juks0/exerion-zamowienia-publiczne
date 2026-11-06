/* Storefront Premium: pole JS własnego modułu integracji. Bez znaczników script. */
(() => {
  function init() {
    const root = document.getElementById('exerion-instytucje');
    if (!root) return false;
    if (root.dataset.exiReady) return true;
    root.dataset.exiReady = '1';
    root.classList.add('exi-enhanced');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const track = root.querySelector('.exi-brand-logos');
    if (track) {
      const controls = [-1, 1].map(direction => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'exi-brands-arrow';
        button.textContent = direction < 0 ? '‹' : '›';
        button.setAttribute('aria-label', direction < 0 ? 'Poprzednie marki' : 'Następne marki');
        button.setAttribute('aria-controls', track.id);
        button.addEventListener('click', () => {
          const max = Math.max(0, track.scrollWidth - track.clientWidth);
          const item = track.querySelector('.exi-brand-logo');
          const step = item.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0);
          const target = direction > 0 && track.scrollLeft >= max - 2 ? 0
            : direction < 0 && track.scrollLeft <= 2 ? max
            : Math.max(0, Math.min(max, track.scrollLeft + direction * step));
          track.scrollTo({left:target, behavior:reduced.matches ? 'auto' : 'smooth'});
        });
        if(direction < 0) track.before(button); else track.after(button);
        return button;
      });
      const resize = () => controls.forEach(b => { b.hidden = track.scrollWidth <= track.clientWidth + 2; });
      if ('ResizeObserver' in window) new ResizeObserver(resize).observe(track);
      else window.addEventListener('resize', resize);
      resize();
      track.addEventListener('keydown', event => {
        if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
        event.preventDefault(); controls[event.key === 'ArrowLeft' ? 0 : 1].click();
      });
    }
    return true;
  }
  if(!init()) {
    const observer=new MutationObserver(()=>{if(init()) observer.disconnect();});
    observer.observe(document.documentElement,{childList:true,subtree:true});
    window.addEventListener('pagehide',()=>observer.disconnect(),{once:true});
  }
})();
