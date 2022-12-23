![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
![NPM ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?logo=postgresql&logoColor=white&style=for-the-badge)
# DFL-Node-5

## Descripción

La tienda de joyas My Precious Spa necesita cambiar su aplicación de escritorio por una moderna y dinámica. Para realizar esta tarea, contactó a un desarrollador Full Stack Developer que desarrolle la API REST de una aplicación cliente para satisfacer las necesidades puntuales de sus usuarios de una forma eficiente, mantenible y eficaz.

Deberás crear una API REST que permita:

1. Límite de recursos
2. Filtro de recursos por campos
3. Paginación
4. Ordenamiento
5. Estructura de datos HATEOAS

Para realizar este desafío necesitarás ejecutar el siguiente script sql en tu terminal psql para crear la base de datos y la tabla que utilizaremos:

```
CREATE DATABASE joyas;
\c joyas;
```


```
CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria
VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);
```

```
INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);
```

## A continuación te mostramos imágenes de consultas HTTP realizadas a las rutas GET correspondientes a los requerimientos de este desafío:

● Consulta de joyas con cláusulas en estructura de datos HATEOAS:
- http://localhost:3000/joyas?limits=3&page=2&order_by=stock_ASC
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/wj2dJQbz/1.png" alt="1"/></a><br/><br/>

● Filtrando las joyas por precio máximo, mínimo, categoría y metal:
- http://localhost:3000/joyas/filtros?precio_min=25000&precio_max=30000&categoria=aros&metal=plata
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/k55PyRkb/2.png" alt="2"/></a><br/><br/>

## Requerimientos
1. Crear una ruta GET /joyas que:
- Devuelva la estructura HATEOAS de todas las joyas almacenadas en la base de datos
- Reciba en la query string los parámetros
- limits: Limita la cantidad de joyas a devolver por página
- page: Define la página
- order_by: Ordena las joyas según el valor de este parámetro, ejemplo: stock_ASC
2. Crear una ruta GET /joyas/filtros que reciba los siguientes parámetros en la query string
- precio_max: Filtrar las joyas con un precio mayor al valor recibido
- precio_min: Filtrar las joyas con un precio menor al valor recibido.
- categoria: Filtrar las joyas por la categoría
- metal: Filtrar las joyas por la categoría
3. Hacer uso de los middlewares como capa de reporte en cada una de las rutas.
4. Usar try catch para capturar los posibles errores durante una consulta y la lógica de cada ruta creada.
5. Usar las consultas parametrizadas para evitar el SQL Injection en la consulta a la base de datos relacionada con la ruta GET /joyas/filtros

## Instalación

```$npm install
$npm install
```

## Levantar Server

```$npm run dev
$npm run dev
```

## Sitio Web Server
```
http://localhost:3000/
```
