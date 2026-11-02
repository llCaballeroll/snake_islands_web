// Snake Islands: animaciones de entrada y botón de descarga inteligente.
(function () {
  var IOS_URL = 'https://apps.apple.com/mx/app/snake-islands/id6759359511';
  var ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.luiscaballero.snakeislands&hl=es_MX';

  var ua = navigator.userAgent || '';
  var isAndroid = /android/i.test(ua);
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  // El botón "Descargar" lleva directo a la tienda del teléfono; en computadora baja a los botones.
  document.querySelectorAll('[data-smart-download]').forEach(function (btn) {
    if (isIOS) btn.href = IOS_URL;
    else if (isAndroid) btn.href = ANDROID_URL;
    if (isIOS || isAndroid) { btn.target = '_blank'; btn.rel = 'noopener'; }
  });

  // En el teléfono, la tienda que le corresponde va primero.
  if (isAndroid) {
    document.querySelectorAll('.store-row').forEach(function (row) {
      var a = row.querySelector('[href*="play.google.com"]');
      if (a) row.insertBefore(a, row.firstChild);
    });
  }

  // Animación al aparecer en pantalla.
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
