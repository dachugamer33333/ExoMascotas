# 🐾 PetViajes - Plataforma de Hoteles Pet-Friendly

Una plataforma web responsive desarrollada en Next.js para ayudar a los usuarios a encontrar hoteles que aceptan mascotas en México.

## 🎯 Características

- **Landing Page** atractiva con llamadas a la acción claras
- **Página de Hoteles** con tarjetas informativas de cada alojamiento
- **Diseño Responsive** optimizado para dispositivos móviles y desktop
- **Componentes Reutilizables** para una arquitectura limpia
- **SEO Optimizado** con metadatos apropiados
- **Datos JSON** fácilmente actualizables

## 🛠️ Tecnologías Utilizadas

- **Next.js 15.4.4** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Inter Font** - Tipografía desde Google Fonts

## 🎨 Paleta de Colores

| Elemento | Color HEX | Uso |
|----------|-----------|-----|
| Principal verde | #16A34A | Botones, títulos activos |
| Verde hover | #15803D | Hover y sombras |
| Fondo claro | #F9FAFB | Fondo de páginas |
| Texto principal | #1F2937 | Texto general |
| Cards/fondo blanco | #FFFFFF | Contenedores principales |

## 🚀 Instalación y Uso

1. **Instala las dependencias**
```bash
npm install
```

2. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
```

3. **Abre tu navegador**
Ve a [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
hotpet/
├── src/
│   └── app/
│       ├── hoteles/
│       │   └── page.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── HotelCard.tsx
├── data/
│   └── hoteles.json
├── public/
│   └── images/
└── package.json
```

## 📄 Datos de Hoteles

Los datos de los hoteles se encuentran en `data/hoteles.json`. Cada hotel incluye:

- **nombre**: Nombre del hotel
- **ciudad** y **estado**: Ubicación
- **politica**: Política de mascotas específica
- **descripcion**: Descripción del hotel
- **precio**: Rango de precios
- **servicios**: Array de servicios disponibles
- **enlace**: URL externa (Booking.com u otros)

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## 🌐 Deploy

Este proyecto está listo para ser desplegado en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**
- Cualquier plataforma que soporte Next.js

## 🔮 Funcionalidades Futuras

- Filtro por ciudad/estado
- Sistema de búsqueda
- Integración real con APIs de hoteles
- Sistema de reseñas
- Mapas interactivos
- Blog de viajes con mascotas

## 📝 Licencia

Este proyecto fue creado como MVP para PetViajes.

---

**¡Desarrollado con ❤️ para los amantes de las mascotas que viajan!** 🐕🐱✈️
