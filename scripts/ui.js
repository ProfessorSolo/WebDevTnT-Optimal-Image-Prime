
// ui.js — tiny, accessible tabs + helpers
(function(){
  // Tabs: data-tabs wraps a group; buttons [role=tab], panels [role=tabpanel]
  document.querySelectorAll('[data-tabs]').forEach(initTabs);

  function initTabs(root){
    const tablist = root.querySelector('[role="tablist"]');
    const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
    const panels = Array.from(root.querySelectorAll('[role="tabpanel"]'));

    // IDs
    tabs.forEach((tab, i)=>{
      tab.id = tab.id || `${root.id || 'tabs'}-tab-${i}`;
      tab.setAttribute('aria-selected', i===0 ? 'true':'false');
      tab.setAttribute('tabindex', i===0 ? '0':'-1');
    });
    panels.forEach((p, i)=>{
      p.id = p.id || `${root.id || 'tabs'}-panel-${i}`;
      p.hidden = i!==0;
    });

    // Wiring
    tabs.forEach((tab, i)=>{
      tab.addEventListener('click', ()=>activate(i));
      tab.addEventListener('keydown', (e)=>{
        if(e.key==='ArrowRight'){ e.preventDefault(); activate((i+1)%tabs.length,true); }
        if(e.key==='ArrowLeft'){ e.preventDefault(); activate((i-1+tabs.length)%tabs.length,true); }
      });
    });

    function activate(index, focusTab=false){
      tabs.forEach((t,i)=>{
        const selected = i===index;
        t.setAttribute('aria-selected', selected ? 'true':'false');
        t.setAttribute('tabindex', selected ? '0':'-1');
      });
      panels.forEach((p,i)=> p.hidden = i!==index);
      if(focusTab) tabs[index].focus();
    }
  }

  // Optional: data-year update for footer
  const y = document.querySelector('[data-year]');
  if(y) y.textContent = new Date().getFullYear();
})();
