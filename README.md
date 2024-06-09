# Challenge

## Tabla de contenidos
- [Descripción](#descripción)
- [Arquitectura](#arquitectura)
- [Requerimientos](#requerimientos)
- [Instalación](#instalación)
- [Estructura y Organización del Proyecto](#estructura-y-organización-del-proyecto)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
- [Autor](#autor)

## Descripción
Este proyecto consiste en una aplicación desarrollada con Next.js para visualizar artículos. La aplicación se apoya en una API construida con Express y Node.js, que sigue el patrón de diseño BFF (Backend for Frontend). Esta API se encarga de obtener los datos de un servicio externo y procesarlos antes de enviarlos al frontend.

Este diseño arquitectónico permite escalar y desacoplar la lógica de la obtención de los datos de la capa de presentación, facilitando el mantenimiento y la evolución del sistema. Además, promueve una mayor flexibilidad al poder modificar cada capa de manera independiente.

Puedes encontrar la aplicación desplegada en producción en el siguiente enlace: [Challenge-ln](https://front-alejandroabele-alejandroabeles-projects.vercel.app/)

## Arquitectura

![image](https://github.com/alejandroabele/challenge-ln/assets/71268932/06420689-2c23-43a6-8a8f-0429d3c71049)

- Navegador (Browser):
El navegador recibe la URL ingresada por el usuario y, en respuesta, envía una solicitud HTTP al servidor de Next.js.

- Servidor Next.js:
El servidor de Next.js recibe la solicitud del navegador y, posteriormente, se comunica con el BFF (Backend for Frontend) para obtener los datos necesarios. Una vez que los datos han sido procesados, el servidor renderiza la página HTML del lado del servidor y la devuelve al navegador.

- API Node (BFF - Backend for Frontend):
La API Node (BFF) recibe la solicitud del servidor de Next.js y consulta un servicio externo para obtener los datos requeridos. Después de procesar y transformar los datos según sea necesario, la API Node devuelve los datos al servidor.

**Ventajas:**
- Escalabilidad La arquitectura dividida en capas permite escalar cada componente de manera independiente según sea necesario.
- Modificabilidad Facilita la modificación y evolución del sistema, ya que cambios en la obtención de datos pueden realizarse sin afectar la capa de presentación.
- Seguridad: Delegar la lógica de autenticación a servicios externos o un API Gateway en una capa distinta a la de presentación mejora la seguridad del sistema.
- Rendimiento Al procesar la información del lado del servidor, se puede mejorar la velocidad de carga de la aplicación y reducir la carga en el cliente.
- Desacoplamiento La creación de una capa de BFF resulta en una arquitectura desacoplada, lo que facilita el mantenimiento y la escalabilidad del sistema.

**Desventajas:**
- Gestión de Repositorios: Al dividir la aplicación en dos repositorios distintos (Frontend y BFF), se pueden requerir procesos de despliegue diferentes, lo que añade complejidad.
- Costo de Infraestructura: Mantener infraestructura separada para el servidor de Next.js y la API de Express puede resultar más costoso en términos de recursos y mantenimiento.
- 
## Tecnologías Utilizadas y Practicas de Desarrollo

- **Frontend**: Next.js, React
- **Backend**: Node.js, Express
- **Pruebas Unitarias**: Jest, React Testing Library
- **Patrón BFF (Backend for Frontend):** Permite desacoplar la lógica de obtención de datos de la capa de presentación. 
- **Patrón Repository:** Utilizado en el BFF para aislar la lógica de negocio de la lógica de obtención de datos.
- **Convenciones de Nomenclatura**:
  - **Nombres de Archivos**: Kebab case
  - **Nombres de Componentes**: Pascal case
  - **Nombres de Funciones**: Camel case

## Requerimientos
Para ejecutar este proyecto, necesitas tener instalado lo siguiente:

- Docker
- Docker Compose

## Estructura y Organización del Proyecto

El proyecto se organiza como un monorepo, con la siguiente estructura en la raíz del directorio:

/challenge-ln  
├── front  
│   ├── src  
│   │   ├── app  
│   │   ├── components  
│   │   ├── helpers  
│   │   └── ...  
│   ├── public  
│   ├── Dockerfile  
│   ├── package.json  
│   └── ...  
├── bff  
│   ├── src  
│   │   ├── controllers  
│   │   ├── routes  
│   │   └── services  
│   ├── Dockerfile  
│   ├── package.json  
│   └── ...  
└── docker-compose.yml  

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/alejandroabele/challenge-ln
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd challenge-ln
   ```
3. Crea un archivo .env en la raíz del frontend (front) con el contenido del archivo front/.env.docker.example.
4. Crea un archivo .env en la raíz del backend (bff) con el contenido del archivo bff/.env.development.example.
5. Ejecuta el comando para construir las imágenes de Docker:
   ```sh
   docker compose build
   ```
6. Luego, puedes iniciar los servicios con Docker Compose:
      ```sh
   docker compose up
   ```
Esto iniciará tanto el backend (en el puerto 8080) como el frontend (en el puerto 3000). La aplicación estará disponible en http://localhost:3000.

# Ejecución de Pruebas
Puedes ejecutar los tests unitarios de la aplicación utilizando Docker Compose. A continuación, se detallan los pasos para construir y ejecutar los tests:

1. Ejecuta el comando para construir las imágenes de Docker
```sh
docker-compose -f docker-compose-test.yml build
```
2. Iniciar los servicios con Docker Compose
```sh
docker-compose -f docker-compose-test.yml up
```
Este comando levantará los contenedores definidos en el archivo docker-compose-test.yml y ejecutará los tests dentro de ellos. Verás la salida de los tests en la consola.

# Autor

Alejandro Abele 
alejandroabele@hotmail.com.ar
