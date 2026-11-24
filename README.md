# Mi Portafolio

Portafolio personal de **Miguel Morillo (Akisolu)**, publicado en
**https://akisolu.github.io/portafolio/** de forma independiente al perfil de
GitHub (https://github.com/Akisolu).

Sitio estático: HTML5 semántico, CSS3 (variables, Grid y Flexbox) y JavaScript
vanilla. Sin frameworks, fuentes externas ni dependencias de ejecución.

## Estructura

```
index.html                  Página única (5 secciones), SEO/OG y JSON-LD
404.html                    Página de error con el mismo estilo visual
css/styles.css              Tokens de diseño y layout
js/main.js                  Filtros de proyectos, nav activa, año
assets/                     Todos los recursos binarios e imágenes
  og-image.png              Imagen 1200x630 para compartir en redes
  cv-miguel-morillo.pdf     CV conectado en el botón "Descargar CV"
  favicon.svg / favicon.ico Iconos vectorial e ICO
  favicon-16x16.png         Icono PNG 16x16
  favicon-32x32.png         Icono PNG 32x32
  apple-touch-icon.png      Icono 180x180 para iOS
  android-chrome-*.png      Iconos 192x192 y 512x512 para Android
  README.md                 Índice de recursos
site.webmanifest            Manifiesto PWA
.github/workflows/deploy.yml Deploy automático a GitHub Pages
.nojekyll                   Desactiva el procesamiento Jekyll
.gitignore                  Ignora el archivo local `a` (brief original)
```

El `<head>` incluye meta tags SEO, Open Graph, Twitter Card, iconos en varios
formatos, manifiesto PWA y datos estructurados `Person` de schema.org. La imagen
OG y los iconos se generaron con Pillow de forma puntual (desinstalado después);
no hay dependencias en el repositorio. `twitter:site` queda pendiente del handle
real de X.

El archivo `a` de la raíz contiene el brief original. Se conserva en local pero
está excluido por `.gitignore`: no se sube ni se publica. Elimínalo cuando ya
no lo necesites.

## Probar en local

Con Python (viene instalado en la mayoría de los sistemas):

```bash
python -m http.server 8000
```

Abre http://localhost:8000 . También funciona abriendo `index.html`
directamente en el navegador, porque todas las rutas son relativas.

## Desplegar en GitHub Pages

### Opción A: GitHub Actions (incluida)

1. Sube el repositorio a `github.com/Akisolu/portafolio` en la rama `main`.
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` se ejecuta en cada `push` a `main`.
4. El sitio queda en https://akisolu.github.io/portafolio/ .

### Opción B: sin workflow

**Settings → Pages → Build and deployment → Source: Deploy from a branch →
`main` / `/ (root)` → Save.** El archivo `.nojekyll` ya está incluido.

## Pendiente

- `twitter:site`: añadir el handle real de X cuando esté disponible (placeholder
  comentado en el `<head>` de `index.html`).

## Enlaces

- Repositorio: https://github.com/Akisolu/portafolio
- Perfil: https://github.com/Akisolu
- EGC: https://github.com/Fmarzochi/EGC
- Hall of Fame: https://fmarzochi.github.io/EGCSite/contributors/Akisolu/
