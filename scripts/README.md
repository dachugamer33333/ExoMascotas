# Scripts de Hotel Data

Este directorio contiene scripts para recopilar datos reales de hoteles.

## Scripts disponibles

### `fetch-hotels.js`

Script para obtener datos reales de hoteles desde APIs públicas.

**Uso:**
```bash
npm run fetch-hotels
```

**Características:**
- 🆓 Usa APIs gratuitas (no requiere registro)
- 🔄 Genera datos de respaldo si las APIs fallan
- 💾 Guarda los datos en `data/hoteles-api.json`
- 🏨 Incluye información de precios, servicios y ubicaciones
- 🐾 Enfocado en hoteles pet-friendly de México

**APIs utilizadas:**
1. **API Gratuita de Hoteles** - `api.makcorps.com/free` (Limitada a 30 hoteles por ciudad)
2. **Datos de respaldo** - Genera datos realistas si la API no está disponible

**Datos generados:**
- Información de hoteles en 10+ ciudades mexicanas
- Precios estimados en MXN
- Servicios y amenidades
- Políticas de mascotas
- Enlaces a reservas
- Ratings y categorías

## Actualización de datos

Los datos se pueden actualizar ejecutando:

```bash
npm run fetch-hotels
```

Recomendamos ejecutar este script:
- 📅 Semanalmente para mantener precios actualizados
- 🏗️ Antes de cada deploy en producción
- 🔧 Cuando se agreguen nuevas ciudades o funcionalidades

## Estructura de datos

Los datos se guardan en formato JSON con la siguiente estructura:

```json
{
  "hoteles": [...],
  "ciudades": [...],
  "categorias": [...],
  "lastUpdated": "2025-01-25T...",
  "source": "descripción de la fuente"
}
```

## Personalización

Para agregar más ciudades, modifica el array `CIUDADES_MEXICO` en `fetch-hotels.js`.

Para usar diferentes APIs, actualiza la configuración en `HOTEL_API_CONFIG`.