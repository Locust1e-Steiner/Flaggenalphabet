FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY server.js ./
# ICS-Flaggen JS aus dem root js/ Verzeichnis in public/js/ kopieren
COPY js/ ./public/js/
# Danach public/ (inkl. africa-data.js, country-app.js, index.html, style.css) überschreiben/ergänzen
COPY public/ ./public/

EXPOSE 3000

CMD ["node", "server.js"]
