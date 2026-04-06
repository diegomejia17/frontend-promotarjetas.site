# Promotarjetas Web App 🚀

Una aplicación moderna y rápida para consultar beneficios y promociones bancarias (Single Page Application). Fue diseñada con un alto enfoque en experiencia de usuario, micro-animaciones fluidas y modularidad.

## 🛠 Arquitectura Tecnológica
- **Librería Core:** React 18 + Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 
- **Gestión de Datos:** Custom Hooks (`usePromociones`) con soporte híbrido para JSON estático o APIS reales.

## 🚀 Entorno Local (Desarrollo)

Para probar la plataforma en tu computadora:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Ejecutar servidor local:**
   ```bash
   npm run dev
   ```

*(El proyecto consumirá por defecto la base de datos de ficción ubicada en `/public/api/promociones.json` para facilitar el testing de los componentes).*

---

## 🌎 Despliegue en Producción (Railway / Nixpacks) 

El repositorio está 100% pre-configurado para despliegues automatizados en nubes que soporten **Nixpacks** (Railway, Zeabur, Render, etc). 

Solo hace falta sincronizar la rama `main` hacia tu proveedor en la nube. Nixpacks leerá automáticamente el archivo `nixpacks.toml` que instruye lo siguiente:
1. Utilizar un entorno **Node 20**.
2. Construir los assets de producción de Vite (`npm run build`).
3. Servir estáticamente la aplicación usando el paquete web industrial `serve` (`npm start`).

### Conexión a Backend (Variables de Entorno Secretas)
Para que tu aplicación web consuma tus **endpoints productivos** en lugar de los archivos simulados locales, simplemente debes ir a las configuraciones (Settings/Variables) de tu proveedor en la nube y añadir la variable:

```env
VITE_API_URL="https://mi-backend.com/api/promociones"
```

El Frontend está diseñado para interceptar esta orden y redirigir todo el tráfico gráfico y de navegación hacia tus servidores reales sin necesidad de modificar ni una sola línea de código fuente.