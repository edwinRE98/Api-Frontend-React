# Api-Frontend-React

This web application is a front-end that consumes a rest user management API (which is developed in Spring Boot and is located within the repository). This application is developed with the React library in version 19, and handles two modules: one for user query and another for user modification and creation, which are shown below.

## User list
![Image](https://github.com/user-attachments/assets/62485c64-741f-43e5-bbb3-fea815e684a8)

## Creation of the new user
![Image](https://github.com/user-attachments/assets/60597062-f422-4040-9eaa-fb628b731ea3)

## User update
![Image](https://github.com/user-attachments/assets/4e59c08d-63b8-4e85-85de-4828ac9584a0)

<p>
  As we said, this application is connected to a management API, and also includes a local database, which has the following fields.
</p>

- Nombre
- Apellido
- Documento ID
- Dirección
- Correo

<p>
Neither the API nor the Front-end omits the reading or editing of any of these fields.
</p>

## Application requirements

<p>
  1. It is sold to have Visual Studio Code installed in its most recent version, and in addition to this, it must have loopholes, extensions such as Live Server, Prettier Scripts, among others
</p>

<p>
  2. You must have Node.js version 22 installed, since this is the one we use.
</p>

<p>
  3. Have the intellij idea IDE, or some other IDE that can build our API.

</p>

<p>
  4. If you have NetBeans or Eclipse, they must already have the Spring Boot package installed.
</p>

<p>
  5. Have Mysql workbench installed.
</p>

## Technology stack

- Axios: to make HTTP requests and manage responses.

- React Router: allows us to manage client-side routing.

- Boostrap versión 4.
