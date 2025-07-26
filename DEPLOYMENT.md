# 🚀 Guía de Deployment - ExoMascotas

## Netlify (Recomendado para empezar)

### 1. Preparar el proyecto
```bash
# Asegurar que el build funciona
npm run build

# Agregar script de export para sitio estático
npm install --save-dev @netlify/plugin-nextjs
```

### 2. Configurar next.config.ts
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 3. Deploy Steps
1. Subir código a GitHub
2. Conectar repo en [netlify.com](https://netlify.com)
3. Configurar build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

### 4. Configurar dominio personalizado
1. Comprar dominio (Namecheap, GoDaddy, etc.)
2. En Netlify > Domain settings
3. Agregar dominio personalizado
4. Configurar DNS records

---

## Railway (Para cuando necesites backend)

### 1. Setup
```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login y deploy
railway login
railway init
railway up
```

### 2. Variables de entorno
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

---

## Costos Estimados Mensuales

| Servicio | Gratis | Pagado | Límites Gratis |
|----------|--------|--------|----------------|
| **Netlify** | ✅ | $19/mes | 100GB bandwidth |
| **Railway** | $5 crédito | $5/servicio | 500 horas |
| **Render** | ✅ | $7/mes | 750 horas |
| **Cloudflare Pages** | ✅ | $20/mes | Unlimited* |
| **Vercel** | ✅ | $20/mes | 100GB bandwidth |

*Prácticamente unlimited para la mayoría de casos

---

## 📊 Monitoring Recomendado (Gratis)

- **Analytics:** Google Analytics 4
- **Speed:** Google PageSpeed Insights  
- **Uptime:** UptimeRobot (gratis hasta 50 monitores)
- **Errors:** Sentry (gratis hasta 5k errores/mes)

---

## 🎯 Roadmap de Crecimiento

### Fase 1: MVP (Gratis)
- Netlify + GitHub Pages
- Google Analytics
- Google AdSense

### Fase 2: Crecimiento ($5-20/mes)
- Railway con base de datos
- Dominio personalizado (.mx $15/año)
- Email marketing (Mailchimp gratis hasta 2k contactos)

### Fase 3: Escalamiento ($50+/mes)
- CDN premium
- Base de datos dedicada
- Email transaccional
- Backup automatizado