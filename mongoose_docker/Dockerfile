# Explicación línea por línea del Dockerfile

FROM node:22-alpine
# Usa la imagen base de Node.js versión 22 sobre Alpine Linux (ligera y rápida).

RUN mkdir -p /home/app
# Crea el directorio /home/app dentro del contenedor.

COPY . /home/app
# Copia todos los archivos del proyecto local al directorio /home/app del contenedor.

EXPOSE 3000
# Expone el puerto 3000 para que la aplicación sea accesible desde fuera del contenedor.

CMD ["node", "/home/app/index.js"]
# Comando por defecto: ejecuta el archivo index.js con Node.js