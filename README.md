### Servicios del sistema
Este proyecto cuenta con varios servicios. Además de tener el típico frontend y backend, tiene un servicio de manejo de credenciales, [Keycloak](https://www.keycloak.org/) **4.4.0**, y un servicio de manejo de notificaciones, de desarrollo propio. Todo el sistema fue usado exitósamente con Node **10.16.3** y Npm **6.9.0**.

Tanto para el backend como para el frontend deberá crear el archivo `.env` con las variables de entorno de conexión con el resto de los servicios (mongodb, Keycloak y notifier). Hay un archivo `.env.example` a modo de ejemplo en la carpeta de raíz del front y del back. Puede crear el archivo `.env` copiando este.

#### Backend
El backend es una api hecha con [Express](https://expressjs.com/) **4.17.1**. También cuenta con una base de datos MongoDB **3.6.14**.

Para correr la api, primero levantar la BBDD haciendo `docker-compose up`.

Posteriormente instalar los módulos de node necesarios, `npm install`, y levantar la api haciendo `npm run dev`.

Navegar a [http://localhost:9999/](http://localhost:9999/) para verificar que ande (devolverá un json con mensaje de error "Content not found" y status 404, eso significa está andando bien).

#### Frontend
El frontend es una página hecha con [React](https://reactjs.org/) **16.8.6**, con el framework [Next](https://nextjs.org/) **6.1.2**.

Para correrla, primero instalar las dependencias, `npm install`, y después levantar la página haciendo `npm run dev`.

Si todo sale bien, debería hostearse en [http://localhost:3000](http://localhost:3000).

#### Keycloack
Para levantar una instancia de prueba de Keycloak pueden hacer:

`docker run --name keycloak -p 8080:8080 -e "KEYCLOAK_USER=admin" -e "KEYCLOAK_PASSWORD=admin" jboss/keycloak:4.4.0.Final`

(puede tardar mucho en cargar, si se queda en el mensaje `Added 'admin' to '/opt/jboss/...add-user.json', restart server to load user`, esperar unos minutos)

Navegar a [http://localhost:8080](http://localhost:8080) para ingresar a la consola de administración, usando las credenciales `admin`/`admin`.

Primero crear un nuevo *realm* presionando en *Add realm* dentro del menú desplegable principal. Posteriormente ir a la solapa "Login" y habilitar el registro de usuarixs poniendo "User registration" en ON.

Ahora hay que crear 2 clientes (ir a Clients > Create), uno para el frontend otro para el backend:
- El primero debe tener el nombre *my-frontend-kc-client*, "Root URL" la del frontend, que sería http://localhost:3000 en nuestro caso (sin "/" al final!), y "Access Type" en *public* (dentro de "Settings" del cliente).
- Al cliente del backend ponerle como nombre *my-backend-kc-client*, "Root URL" la del backend, que sería http://localhost:9999 en nuestro caso, y "Access Type" en *bearer-only*.

Además, debemos crear un rol para lxs usuarixs que deseemos que puedan crear propuestas nuevas. Para esto ir al menú principal Roles > Add Role, y crear uno con "Role Name" *accountable*. Cuando deseemos darle esta potestad a unx usuarix registradx debemos ir al menú principal Users > Edit (sobre lx usuarix), después a Role Mappings > Available Roles, seleccionar *accountable* y presionar "Add selected".

Finalmente, debemos agregar unos protocol mappers en el cliente de Keycloak del frontend. Para eso vamos a la pestaña "Mappers", dentro del cliente, y creamos los mappers listados en [KEYCLOAK-MAPPERS.md](KEYCLOAK-MAPPERS.md).

### Errores comunes
#### Login del frontend
##### Init 403
Si al cargar el frontend, un request GET con url `.../protocol/openid-connect/login-status-iframe.html/init?client_id=...&origin=...` devuelve 403 Forbidden, tienen mal configurado "Web Origins" del cliente de Keycloak del frontend. Deben ingresar la url del frontend en ese campo. **NOTA** esta url NO debe tener "/" al final, sino no anda.

##### Token 400
Si al intentar iniciar sesión en el frontend, un request POST con url `.../protocol/openid-connect/token` hacia el servidor Keycloak devuelve 400, tienen mal configurado el "Access Type" en confidential, en el cliente de Keycloak del frontend. Cambiar a public.

##### Muchos 403 desde la api del backend
Si hay muchos requests GET a `/api/v1/...` del servidor del backend que devuelven 403 Forbidden puede que hayan configurado mal la url `AUTH_SERVER_URL` en el archivo `.env` del backend. Asegurarse que la url sea la del servidor de Keycloak más `/auth` al final. También puede que estén usando el mismo cliente de Keycloak que el frontend, recuerden que deben usar uno distinto. A veces la url `/api/v1/documents/my-documents` devuelve 403 pero eso puede ser porque lx usuarix no tiene permisos para crear propuestas, no es un error.

##### No muestra el avatar de lx usuarix después de loginear
Esto puede ser debido a una mala configuración en los "Mappers" del cliente de Keycloak del frontend. Verificar que estén todos los ítems iguales que en [KEYCLOAK-MAPPERS.md](KEYCLOAK-MAPPERS.md).
