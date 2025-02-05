# ImmpulsaLabs Website

Sitio web de ImmpulsaLabs, especializado en desarrollo de MVPs rápidos y asequibles.

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Requisitos

- Node.js 18.17 o superior
- npm 9.x o superior

## Configuración Local

1. Clonar el repositorio:
```bash
git clone https://github.com/yourusername/impulsa-labs.git
cd impulsa-labs
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env.local` con las siguientes variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
├── app/                # Next.js 14 App Router
│   ├── api/           # API Routes
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # React components
├── lib/              # Utilities and configurations
├── public/           # Static assets
├── styles/           # Global styles
├── types/            # TypeScript types
└── utils/            # Helper functions
```

## Base de Datos

El proyecto utiliza Supabase como base de datos. La estructura de la base de datos se encuentra en `supabase/schema.sql`.

## Despliegue

El proyecto está configurado para ser desplegado en Vercel. Para desplegar:

1. Conectar el repositorio a Vercel
2. Configurar las variables de entorno en Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Desplegar

## Características

- 🚀 Desarrollo de MVP en 4-5 semanas
- 💼 Formulario de captura de leads
- 📱 Integración con WhatsApp
- 📊 Tracking de UTM parameters
- 🔒 Protección CSRF
- 🌐 SEO optimizado

## Seguridad

- CSRF Protection
- Security Headers
- Input Sanitization
- Rate Limiting
- Duplicate Submission Prevention

## Contribuir

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles. 