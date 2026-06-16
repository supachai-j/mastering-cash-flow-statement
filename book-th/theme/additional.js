/* Mastering the Cash Flow Statement — mermaid init + language switch */
(function () {
  // ---------- Mermaid ----------
  function initMermaid() {
    try {
      if (window.mermaid) {
        window.mermaid.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'loose' });
        var run = window.mermaid.run
          ? window.mermaid.run({ querySelector: 'pre.mermaid' })
          : Promise.resolve(window.mermaid.init(undefined, document.querySelectorAll('pre.mermaid')));
        Promise.resolve(run).then(function () { window.__okfMermaidDone = true; })
          .catch(function () { window.__okfMermaidDone = true; });
      } else { window.__okfMermaidDone = true; }
    } catch (e) { window.__okfMermaidDone = true; }
  }

  // ---------- Language switch (EN root <-> TH under /th/) ----------
  function curFile() {
    var p = location.pathname.split('/');
    var f = p[p.length - 1];
    return f && f.length ? f : 'index.html';
  }
  function isTH() { return location.pathname.indexOf('/th/') !== -1; }
  function addLangSwitch() {
    var bar = document.querySelector('.right-buttons') || document.querySelector('.menu-bar');
    if (!bar || document.querySelector('.lang-switch')) return;
    var btn = document.createElement('button');
    btn.className = 'lang-switch';
    btn.textContent = isTH() ? 'EN' : 'ไทย';
    btn.title = isTH() ? 'Read the English version' : 'อ่านฉบับภาษาไทย';
    btn.addEventListener('click', function () {
      var f = curFile();
      location.href = isTH() ? ('../' + f) : ('th/' + f);
    });
    bar.appendChild(btn);
  }

  // ---------- Expand all <details> (quiz answers) before printing/PDF ----------
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('details').forEach(function (d) { d.open = true; });
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initMermaid(); addLangSwitch(); });
  } else { initMermaid(); addLangSwitch(); }
})();
