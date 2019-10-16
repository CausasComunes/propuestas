### Servicios del sistema
Este proyecto cuenta con varios servicios. Además de tener el típico frontend y backend, tiene un servicio de manejo de credenciales, [Keycloak](https://www.keycloak.org/) **4.4.0**, y un servicio de manejo de notificaciones, de desarrollo propio. Todo el sistema fue usado exitósamente con Node **10.16.3** y Npm **6.9.0**.

#### Backend
El backend es una api hecha con [Express](https://expressjs.com/) **4.17.1**. También cuenta con una base de datos MongoDB **3.6.14**. Para correr la api, primero levantar la BBDD haciendo `docker-compose up`. Posteriormente instalar los módulos de node necesarios, `npm install`, y levantar la api haciendo `npm run dev`. Navegar a [http://localhost:9999/](http://localhost:9999/) para verificar que ande (devolverá un json con mensaje de error).

#### Keycloack
`docker run --rm --name keycloak -p 8080:8080 -e "KEYCLOAK_USER=admin" -e "KEYCLOAK_PASSWORD=admin" jboss/keycloak:4.4.0.Final`

#### Frontend
El frontend es una página hecha con [React](https://reactjs.org/) **16.8.6**, con el framework [Next](https://nextjs.org/) **6.1.2**. Para correrla, primero instalar las dependencias, `npm install`, y después levantar la página haciendo `npm run dev`. Si todo sale bien, debería hostearse en [http://localhost:3000](http://localhost:3000).
