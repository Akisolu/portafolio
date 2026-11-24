# Recursos

Carpeta de recursos del sitio.

## `img/`

Todas las imágenes e iconos:

- `og-image.png`: imagen 1200×630 usada en `og:image` y `twitter:image`.
- `favicon.svg`: icono vectorial (navegadores modernos).
- `favicon.ico`: icono ICO para Google y navegadores antiguos.
- `favicon-16x16.png`, `favicon-32x32.png`: tamaños PNG para pestañas.
- `apple-touch-icon.png`: 180×180 para "Añadir a pantalla de inicio" en iOS.
- `android-chrome-192x192.png`, `android-chrome-512x512.png`: iconos PWA.

## Documentos

- `cv-miguel-morillo.pdf`: CV final, enlazado desde el botón *Descargar CV* de `index.html`.

Si se regeneran las imágenes, se usa Pillow solo de forma temporal y se desinstala
después. Se mantiene la paleta `#0d1117` / `#77e6e5` / `#ea79a7` y no se usan
guiones largos en ningún texto. Si se conservan los nombres de archivo, no hace
falta tocar `index.html`, `404.html` ni `site.webmanifest`.
