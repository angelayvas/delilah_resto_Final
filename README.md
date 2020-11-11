# **DELILAH RESTÓ**.

**  API para restaurante.**
El proyecto consiste en una API Rest, que permite al usuario administrar una lista de usuarios, productos y pedidos de un restaurante.
La API permite la conexión con una base de datos MySQL para almacenar y administrar la database para almacenar y administrar los datos de Resto.



caracteristicas:

- Registro e inicio de sesión de usuarios.
- Validación de roles (administrador o no)
- Funciones CRUD de los productos
- Funciones CRUD de pedidos



##  especificaciones para abrir el API

- [Documentos para abrir el API](/spec.yml)

## Empecemos

### Link para clonar el repositorio:

```
$ git clone https://github.com/
```

o descargarlo en  Github

### Instalar dependencias:

```
$ npm install
```


### configuracion Database :

#### o configuracion automatica :

- ejecute el servidor  MySQL .

- Crear una base de datos desde MySQL usando la línea de comandos o la utilidad destktop.

- Abra el archivo `config.js` (` db / sequelize / config.js`) donde puede editar:

  1. Host y puerto de la base de datos al que debe conectarse la API
  2. Nombre de la base de datos.
  3. Usuario y contraseña de la base de datos para conectarse.
 

```
$ cd db/db-setup
$ node index.js

```
Esto creará el esquema de la base de datos, las tablas e importará datos de ejemplo de usuarios y productos. Puede ** editar ** información de ejemplo reemplazando los archivos `products.csv` y / o ʻusers.csv` en` db / datasets`


#### configuracion manual:
Si la configuración automática falla, puede hacer lo siguiente:


1. Initialize the MySQL server.
2. Cree una base de datos llamada **delilah_resto** desde la linea de comandos del escritorio.
3. Cree el esquema y las tablas , e insete los datos manualmente , utiliando las  _queries_ existentes  `dbCreators.sql`.

Antes de comenzar a usar el servidor, no olvide editar el archivo `config.js` (` db / sequelize / config.js`) con:

1. Host y puerto de la base de datos al que debe conectarse la API
2. Nombre de la base de datos.
3. Usuario y contraseña de la base de datos para conectarse.


## ejecuta la API

```
$ cd server
$ node index.js
```
## Dependencias utilizadas

- body-parser versión 1.19.0.
- cors versión 2.8.5.
- csv-parser versión 2.3.2.
- versión express 4.17.1.
- jsonwebtoken versión 8.5.1.
- mysql2 versión 2.1.0.
- secuenciar la versión 5.21.5.
