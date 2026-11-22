// Snake Islands: descarga inteligente, capturas por idioma y aparición suave.
(function () {
  var IOS_URL = 'https://apps.apple.com/app/id6759359511';
  var ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.luiscaballero.snakeislands';

  // Capturas por idioma ya subidas a assets/img/shots/ con el nombre <idioma>-<pantalla>.webp
  // (pantallas: home, game, levels, shop, eggs, fondos). Agrega aquí la pantalla cuando
  // exista el archivo; mientras no esté en la lista se usa la genérica <pantalla>.webp.
  var LOCALIZED_SHOTS = {
    en: ['home', 'game', 'levels', 'shop', 'eggs', 'fondos'],
    es: ['home', 'game', 'levels', 'shop', 'eggs', 'fondos']
  };

  var ua = navigator.userAgent || '';
  var isAndroid = /android/i.test(ua);
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var lang = (document.documentElement.lang || 'en').slice(0, 2);

  // "Descargar" lleva directo a la tienda del teléfono; en computadora baja a los botones.
  var mine = isIOS ? IOS_URL : isAndroid ? ANDROID_URL : '';
  document.querySelectorAll('[data-smart-download]').forEach(function (btn) {
    if (mine) { btn.href = mine; btn.target = '_blank'; btn.rel = 'noopener'; }
  });

  // En Android, Google Play va primero.
  if (isAndroid) {
    document.querySelectorAll('.stores').forEach(function (row) {
      var a = row.querySelector('[data-store="android"]');
      if (a) row.insertBefore(a, row.firstChild);
    });
  }

  // Capturas por idioma con respaldo: si el archivo no carga, vuelve a la genérica.
  var available = LOCALIZED_SHOTS[lang] || [];
  document.querySelectorAll('img[data-shot]').forEach(function (img) {
    var name = img.dataset.shot;
    if (available.indexOf(name) === -1) return;
    var generic = img.getAttribute('src');
    img.addEventListener('error', function onErr() {
      img.removeEventListener('error', onErr);
      img.src = generic;
    });
    img.src = generic.replace(/[^/]+\.webp$/, lang + '-' + name + '.webp');
  });

  // Aparición al entrar en pantalla (el CSS solo anima si no se pidió movimiento reducido).
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
