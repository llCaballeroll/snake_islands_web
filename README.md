# Snake Islands · sitio web

Sitio estático de **Snake Islands** (GitHub Pages): portada, press kit, ficha técnica, política de privacidad y términos.
Inglés en la raíz (idioma principal) y español en `/es/`, con selector de idioma y `hreflang` en cada página.

- URL: https://llcaballeroll.github.io/snake_islands_web/
- Privacidad: `privacy.html` · Términos: `terms.html` (la app y las tiendas enlazan estas URLs: **no cambiarlas**). En español: `es/privacy.html` y `es/terms.html`.
- Otras páginas: `presskit.html` (zip en `assets/presskit/`), `technical.html`, `404.html` (usa `<base href="/snake_islands_web/">`), y sus versiones en `es/`.
- Diseño: chasis tipo apple.com, igual que la web de Versa (mosaicos claro/oscuro, tipografía del sistema, un solo color de acción: el verde de la serpiente). Los mosaicos `night` llevan el ambiente del juego (nebulosa y estrellas en CSS, sin imágenes de fondo). Modo claro/oscuro automático con `color-scheme`. Sin fuentes externas ni dependencias.
- Enlaces de tienda y descarga inteligente (manda al App Store o a Google Play según el teléfono): `js/site.js` (`IOS_URL`, `ANDROID_URL`).
- Los enlaces a Inicio van a `index.html` (no a `./`).

## Capturas por idioma

Hoy todas las páginas usan las capturas genéricas `assets/img/shots/<pantalla>.webp` (en español, con marco de iPhone, 600 × 1244).
Pantallas: `home`, `game`, `levels`, `shop`, `eggs`, `fondos`.

Para poner capturas por idioma:

1. Exporta cada una como `assets/img/shots/<en|es>-<pantalla>.webp` (por ejemplo `en-home.webp`), con el mismo tamaño 600 × 1244 y fondo transparente alrededor del marco.
2. En `js/site.js`, agrega la pantalla a `LOCALIZED_SHOTS` (por ejemplo `en: ['home', 'game']`).

Cada `<img data-shot="…">` cambia sola a la versión del idioma de la página; si el archivo no carga, vuelve a la genérica.

## Al actualizar

- Cambia la fecha de `sitemap.xml` y, si tocas privacidad o términos, la fecha "Last updated / Última actualización" en las dos versiones.
- `app-ads.txt` vive en la raíz de `llcaballeroll.github.io` (misma cuenta de AdMob que las otras apps).
