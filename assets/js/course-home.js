// Las rutas están visibles; el índice de bloques se abre al visitar su ancla.
(() => {
  const bloques = document.getElementById('bloques');

  function mostrarAncla() {
    const id = location.hash.slice(1);
    bloques.hidden = id !== 'bloques';
    if (id === 'rutas' || id === 'bloques') {
      requestAnimationFrame(() => document.getElementById(id).scrollIntoView({ block: 'start' }));
    }
  }

  window.addEventListener('popstate', mostrarAncla);
  window.addEventListener('hashchange', mostrarAncla);
  mostrarAncla();
})();
