### Platform services
This project has a couple of services. It has the typical frontend and backend, but also a credential management system,  [Keycloak](https://www.keycloak.org/) **4.4.0**, and a notification management service. All the system was successfully tested with Node **10.16.3** and Npm **6.9.0**.

#### Backend
The backend is an API built with [Express](https://expressjs.com/) **4.17.1**. It also has a MongoDB **3.6.14** database. To run the API, first run the DB doing `docker-compose up`. Afterwards install all the necessary modules, `npm install`, and run the API doing `npm run dev`. Navigate to [http://localhost:9999/](http://localhost:9999/) and check that there are no errors (it should show a json message with… an error, that’s OK)

In the file `.env` in the root directory of the backend are the connection configurations, used to connect with the other services (mongodb, Keycloak and notifier).

#### Frontend
The frontend is a website built with [React](https://reactjs.org/) **16.8.6**, with the [Next](https://nextjs.org/) **6.1.2** framework. To run it, install all dependencies, `npm install`, and then start the website doing `npm run dev`. If everything went well it should host in [http://localhost:3000](http://localhost:3000).

In the `.env` file in the root directory of the backend there are the connection configurations, used to connect with the other services (mongodb, Keycloak and notifier).

#### Keycloack
To make a simple test with Keycloak you can do:

`docker run --name keycloak -p 8080:8080 -e "KEYCLOAK_USER=admin" -e "KEYCLOAK_PASSWORD=admin" jboss/keycloak:4.4.0.Final`

(this can take a long time to load itself, if its stuck in the message `Added 'admin' to '/opt/jboss/...add-user.json', restart server to load user` just wait a couple of minutes)

Navigate to [http://localhost:8080](http://localhost:8080) to login into the administration console, using `admin`/`admin` as credentials. Now, you have to create 2 clients (go to Clients > Create), one is for the frontend and the other for the backend:

The first one should be named *prueba*, “Root URL” the one of the frontend, that is  http://localhost:3000 in our case, and Access Type" to *public* (inside "Settings" of our client).

The backend client should be names *prueba-backend*, "Root URL" the one of the backend, that is  http://localhost: 9999 in our case, and Access Type" to *bearer-only*.

Also, we should create a role for the users we wish to give permission to upload content. For this go to the main menu Roles > Add Role, and create one with "Role Name" *accountable*. When we wish to give a user this upload permission, we should go to the main menu Users > Edit (the user we want), then go to Role Mappings > Available Roles, select *accountable* and press "Add selected".

Finally, we should add some protocol mappers to the frontend client. For this, we go to the “Mappers” tab inside our client, and create the mappers listed in [KEYCLOAK-MAPPERS.md](KEYCLOAK-MAPPERS.md).

### Common errors
#### Frontend login
##### Init 403
If upon loading the frontend, a GET request with URL `.../protocol/openid-connect/login-status-iframe.html/init? You should input the frontend URL in that field.
**NOTE** that URL SHOULD NOT end with "/".

##### Token 400
If upon trying to login to the frontend, a POST request with URL `.../protocol/openid-connect/token` to the Keycloack server get a 400 response, you have misconfigured "Access Type" as confidential in the frontend Keycloack client. Change it to public.

##### Lots of 403 from the backend API
If lots of GET requests to `/api/v1/...` of the backend server get 403 Forbidden you may have misconfigured `AUTH_SERVER_URL` in the backend’s file `.env`. Make sure that URL to be the one of the Keycloack server plus `/auth` at the end. It may also be that you are pointing to the same Keycloack client that the frontend; remember that each one has a separate one. Sometimes the URL `/api/v1/documents/my-documents` gives a 403 but that is because the user doesn’t have upload permission, is not an error.

##### User avatar doesn’t appear after login
This may be caused by a misconfiguration of the frontend Keycloack client’s "Mappers". Check that everything is set accordingly to [KEYCLOAK-MAPPERS.md](KEYCLOAK-MAPPERS.md).
