# Portafolio Web de Carlos Nadal - Analista de Ciberseguridad

Este repositorio contiene el código fuente completo del portafolio web de Carlos Nadal, diseñado con un estilo minimalista moderno y vibra hacker para destacar su perfil como analista de ciberseguridad.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para la construcción de interfaces de usuario
- **TypeScript**: Superset de JavaScript que añade tipado estático
- **Tailwind CSS**: Framework de CSS utilitario para diseño rápido y responsivo
- **Vite**: Herramienta de construcción que proporciona un entorno de desarrollo rápido
- **Shadcn/ui**: Componentes de UI reutilizables y accesibles
- **PNPM**: Gestor de paquetes rápido y eficiente en disco

## Estructura del Proyecto

```
portfolio-carlos-nadal/
├── public/                # Archivos estáticos
├── src/                   # Código fuente
│   ├── assets/            # Imágenes y recursos estáticos
│   ├── components/        # Componentes React
│   │   ├── layout/        # Componentes de estructura (Navbar, Footer)
│   │   ├── sections/      # Secciones principales del portafolio
│   │   └── ui/            # Componentes de UI reutilizables
│   ├── hooks/             # Hooks personalizados de React
│   ├── lib/               # Utilidades y funciones auxiliares
│   ├── App.tsx            # Componente principal de la aplicación
│   ├── index.css          # Estilos globales
│   └── main.tsx           # Punto de entrada de la aplicación
├── tailwind.config.js     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
├── package.json           # Dependencias y scripts
└── vite.config.ts         # Configuración de Vite
```

## Instrucciones para Desplegar Localmente

### Requisitos Previos

- Node.js (versión 18 o superior)
- PNPM (recomendado) o NPM

### Pasos para Instalación

1. **Clonar o descomprimir el repositorio**

   ```bash
   # Si lo has descargado como ZIP, descomprímelo
   # Si lo clonas desde un repositorio:
   git clone <url-del-repositorio>
   cd portfolio-carlos-nadal
   ```

2. **Instalar dependencias**

   ```bash
   # Con PNPM (recomendado)
   pnpm install

   # O con NPM
   npm install
   ```

3. **Iniciar servidor de desarrollo**

   ```bash
   # Con PNPM
   pnpm run dev

   # O con NPM
   npm run dev
   ```

4. **Acceder al sitio**
   
   Abre tu navegador y visita: `http://localhost:5173/`

### Compilar para Producción

```bash
# Con PNPM
pnpm run build

# O con NPM
npm run build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

## Instrucciones para Despliegue en Producción

### Opción 1: Netlify (Recomendado)

1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Desde el dashboard, haz clic en "New site from Git" o sube directamente la carpeta `dist` después de compilar
3. Sigue las instrucciones para conectar tu repositorio o subir los archivos
4. Configura el comando de build como `pnpm run build` y el directorio de publicación como `dist`

### Opción 2: Vercel

1. Crea una cuenta en [Vercel](https://vercel.com/)
2. Importa tu proyecto desde GitHub o sube los archivos directamente
3. Vercel detectará automáticamente que es un proyecto React/Vite

### Opción 3: GitHub Pages

1. Compila el proyecto: `pnpm run build`
2. Instala gh-pages: `pnpm add -D gh-pages`
3. Añade a package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
4. Ejecuta: `pnpm run deploy`

## Personalización

### Modificar Contenido

Los textos y contenidos se encuentran en los componentes de la carpeta `src/components/sections/`. Cada sección (Hero, About, Skills, etc.) tiene su propio archivo donde puedes modificar el contenido.

### Cambiar Estilos

1. **Colores**: Los colores principales están definidos como variables CSS en `src/index.css`. Puedes modificarlos para cambiar la paleta de colores.

2. **Tipografía**: Las fuentes están importadas en `src/index.css` y configuradas en `tailwind.config.js`. Puedes cambiarlas según tus preferencias.

3. **Componentes**: Cada componente tiene sus propios estilos usando clases de Tailwind CSS. Puedes modificarlos directamente en los archivos de componentes.

### Añadir Nuevas Secciones

1. Crea un nuevo componente en `src/components/sections/`
2. Importa y añade el componente en `src/App.tsx`
3. Añade un nuevo enlace en la navegación (`src/components/layout/Navbar.tsx`)

## Contacto y Soporte

Si tienes alguna pregunta o necesitas ayuda con la personalización o despliegue, no dudes en contactarme.

---

Desarrollado con ❤️ para Carlos Nadal
