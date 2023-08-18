## Simple CRUD system using Postgres, TypeORM and Docker

## General info
This project provides examples of a simple and base CRUD system
using libraries such as NestJs, Postgres and TypeORM.

## Dockerize the application
```
$ touch Dockerfile .dockerignore docker-compose.yml
$ docker compose up -d db
$ docker ps -a
$ docker compose build
```
## TablePlus
Open the TablePlus application and connect to the database, by creating a new "Postgres" connection.
You can use the UI and set:
* Host: localhost
* Port: 5432
* Username: postgres
* Password: postgres
* Database: postgres
## Setup and Build the Nest app image
To build the Nest app image, we will use the docker compose command:
```
$ docker compose build
```

Run the Nest app service
```
$ docker compose up 
```

To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

You can add to a TablePlus different tasks (array of tasks with properties: "name" and "discription") and use this CRUD system to add, change and edit them! 