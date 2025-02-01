# Api-Frontend-React

Esta aplicación web es un front-end que consume una API rest de gestión de usuarios (la cual está desarrollada en Spring Boot y se encuentra dentro del repositorio). Esta aplicación está desarrollada con la librería React en su versión 19, y maneja dos módulos: uno de consulta de usuario y otro de modificación y creación de usuario, los cuales se muestran a continuación.

## Listado de usuario
![Image](https://github.com/user-attachments/assets/62485c64-741f-43e5-bbb3-fea815e684a8)

## Creación del nuevo usuario
![Image](https://github.com/user-attachments/assets/60597062-f422-4040-9eaa-fb628b731ea3)

## Actualizacón del usuario
![Image](https://github.com/user-attachments/assets/4e59c08d-63b8-4e85-85de-4828ac9584a0)

<p>
  Como dijimos, esta aplicación está conectada a una API de gestión, y también comprenden una base de datos local, la cual posee los siguientes campos.
</p>

- Nombre
- Apellido
- Documento ID
- Dirección
- Correo

<p>
Ni por parte de la API ni por parte del Front-end se omite la lectura o edición de ninguno de estos campos.
</p>



## Requisitos para la aplicación

<p>
  1. se vende tener instalado Visual Studio Code en su versión más reciente, y adicional a esto, debe contar con lagunas, extensiones tales como Live Server, Prettier Scripts, entre otros
</p>

<p>
  2. Se debe tener instalado de Nod.js versión 22, ya que esta es la que usamos.
</p>

<p>
  3. Contar con el IDE intellij idea, o algún otro IDE que pueda levantar nuestra API.
</p>

<p>
  4. Si se cuenta NetBeans o Eclipse, estos ya deben tener instalado el paquete de Spring Boot.
</p>

<p>
  5. Tener instalado Mysql workbench.
</p>

```xml
<dependencies>
  <!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
  </dependency>
</dependencies>
```
<p>
  Si observamos en el IDE ha descargado automáticamente el archivo que hará la conexión con la base de datos.
</p>

- Tecnología Java aplicada: Maven
- Servidor: Xampp
- Java version "21.0.2" 2024-01-16 LTS
