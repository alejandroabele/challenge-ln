# BFF - Backend for Frontend
Este proyecto es la API que actúa como intermediario entre el frontend de Next.js y el servicio externo. Utiliza Express con Node.js y sigue el patrón BFF (Backend for Frontend).

## Instalación
Sigue estos pasos para levantar la API en modo desarrollo:

1. Clona el repositorio principal:

```sh
git clone https://github.com/alejandroabele/challenge-ln
cd challenge-ln/bff
```
2. Instala las dependencias:
```sh
npm install
```
3. Configura las variables de entorno:
Crea un archivo .env en la raíz del directorio bff con el contenido del archivo bff/.env.development.example.

## Ejecución en Modo Desarrollo
Para levantar la API en modo desarrollo, ejecuta el siguiente comando:
```sh
npm run dev
```
Esto iniciará el servidor de desarrollo y estará disponible en http://localhost:8080.

## Pruebas
Para ejecutar las pruebas unitarias, usa el siguiente comando:

```sh
npm test
```
