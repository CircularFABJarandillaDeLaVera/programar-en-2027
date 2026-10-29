// Los paneles se abren por su enlace y conservan las anclas compartidas.
(() => {
  const links = [...document.querySelectorAll('[data-course-panel]')];
  const panels = links.map(link => document.getElementById(link.dataset.coursePanel));
  function showPanel(id, moveFocus = false) {
    panels.forEach(panel => { panel.hidden = panel.id !== id; });
    links.forEach(link => link.setAttribute('aria-expanded', String(link.dataset.coursePanel === id)));
    const panel = panels.find(item => item.id === id);
    if (panel && moveFocus) {
      panel.querySelector('h2').focus({ preventScroll: true });
      panel.scrollIntoView({ block: 'start' });
    }
  }
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const id = link.dataset.coursePanel;
    if (location.hash !== '#' + id) history.pushState(null, '', '#' + id);
    showPanel(id, true);
  }));
  window.addEventListener('popstate', () => showPanel(location.hash.slice(1)));
  window.addEventListener('hashchange', () => showPanel(location.hash.slice(1)));
  showPanel(location.hash.slice(1));
})();
