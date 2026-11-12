# Portfolio de Claudio Aguirre

Sitio web personal de una sola página para presentar mi perfil como estudiante de Desarrollo de Software, mis proyectos, mi formación y mis datos de contacto. Se desarrolló como entrega académica de Ingeniería de Software y Diseño de Interfaz.

> Estado de la publicación: **pendiente**. Este README se actualizará con el enlace cuando el sitio esté desplegado en Vercel.

## Tecnologías

- React 19 + Vite
- Tailwind CSS 4
- Framer Motion (entrada del hero, aparición al hacer scroll, barra de progreso)
- Lucide React y React Icons (iconos)
- Fuentes autoalojadas con Fontsource: Barlow Semi Condensed e IBM Plex Sans

## Requisitos

- Node.js 20 o superior
- npm

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Vite muestra la dirección local (normalmente http://localhost:5173).

## Construcción de producción

```bash
npm run build
npm run preview   # opcional: probar la versión compilada
```

La salida queda en la carpeta `dist/`.

## Estructura de carpetas

```
.
├── index.html                 # SEO básico, metadatos y datos estructurados
├── public/
│   ├── CV-Claudio-Aguirre.pdf # CV descargable
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── main.jsx               # Punto de entrada (respeta prefers-reduced-motion)
    ├── App.jsx                # Composición de secciones
    ├── index.css              # Tema (colores, tipografías) y utilidades
    ├── data/content.js        # Todo el contenido editable: textos, enlaces, proyectos
    ├── hooks/useActiveSection.js
    ├── components/            # Navbar, Hero, About, Skills, Projects, Education, Contact, Footer...
    └── assets/
        ├── claudio.webp       # Foto original, solo recortada y redimensionada
        ├── manos-conectadas-logo.png
        └── projects/          # Capturas reales de los proyectos (ver abajo)
```

## Capturas de los proyectos

Las tarjetas muestran un espacio marcado como **“Captura pendiente”** hasta que existan imágenes reales. Para incorporarlas, guardalas con estos nombres (png, jpg o webp) en `src/assets/projects/`:

- `manos-conectadas.png`
- `autoquote-mvp.png`

No hay que modificar código: se detectan al ejecutar `npm run dev` o `npm run build`.

## Editar el contenido

Textos, enlaces, tecnologías y proyectos están en `src/data/content.js`.

## Formulario de contacto

El formulario valida nombre, email y mensaje, y luego abre la aplicación de correo del visitante con el texto preparado (`mailto:`). **No envía mensajes por sí mismo** y la interfaz lo indica. Para un envío real habría que conectar un servicio como EmailJS o Formspree.

## Despliegue en Vercel

1. Subí el código a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/Fermaster19/<nombre-del-repo>.git
   git push -u origin main
   ```
2. Entrá a [vercel.com](https://vercel.com), iniciá sesión con GitHub y elegí **Add New → Project**.
3. Importá el repositorio. Vercel detecta Vite automáticamente:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Presioná **Deploy**.
5. Cuando esté publicado, copiá la URL en este README.

## Accesibilidad

HTML semántico, enlace para saltar al contenido, foco visible, navegación por teclado, etiquetas en el formulario, textos alternativos, contraste revisado y animaciones reducidas con `prefers-reduced-motion`.
