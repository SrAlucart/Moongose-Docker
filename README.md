# 🐳 Pruebas Contenedores Mongoose y Docker

**Nota:** Este repositorio contiene una **aplicación de prueba** en Node.js con **Express** y **Mongoose** para conectar a MongoDB dentro de un contenedor Docker.  
> El proyecto actual **no** incluye Swagger por defecto: el `index.js` es una app simple para comprobar la conexión y realizar un par de endpoints de ejemplo.

---

## 📌 Qué contiene este proyecto
- `index.js` — punto de entrada (app Express + Mongoose).  
  - Define un modelo `Usuarios` (schema simple con `usuario`, `correo`, `clave`).
  - Endpoints disponibles:
    - `GET /` → lista documentos de la colección `Usuarios`.
    - `GET /crear` → inserta un documento de prueba y devuelve `Ok`.
- `Dockerfile` — imagen ligera para ejecutar la app con Node (usa `node:22-alpine`).
- `package.json` — dependencias: `express`, `mongoose`.

---

## 🧰 Tecnologías
- Node.js (ES Modules)
- Express
- Mongoose (MongoDB)
- Docker

---

## ⚙️ Requisitos previos
- Docker (y `docker run`) o una instancia de MongoDB local en `localhost:27017`.
- Node.js para ejecución local (`npm install` + `node index.js`) si no usas Docker.

---

## 🔧 Instrucciones — Ejecutar con Docker (recomendado)

### 1) Crear una red Docker (opcional pero recomendable)
```bash
docker network create red3
