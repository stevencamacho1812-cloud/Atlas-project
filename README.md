# Atlas Project – sitio estático (Vercel)

Sitio sin build: `index.html`, `styles.css`, `app.js` y la carpeta `assets/`.

## Probar en local
Abre `index.html` en el navegador, o corre `npx serve .` dentro de esta carpeta.

## Publicar en Vercel
1. Instala la CLI: `npm i -g vercel`
2. Dentro de esta carpeta: `vercel` (vista previa) y luego `vercel --prod`.
   Cuando pregunte, deja "Framework Preset" en *Other* y sin comando de build.
   También puedes subir la carpeta a GitHub e importarla desde vercel.com/new.

## Cosas para editar
- Número de WhatsApp: constante `WA` al inicio de `app.js` (ahora 573053533404).
- Precios y tallas: constante `S` en `app.js`.
- Nombres y descripciones de los cuadros: arreglo `P` en `app.js`.
