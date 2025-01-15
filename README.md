<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Nest: Desarrollo backend escalable con Node (TESLO SHOP)

## Acerca de

Este es un repositorio personal para ejecución del proyecto del curso **NestJS: Desarrollo backend escalable con Node** de **Fernando Herrera** en la plataforma de Udemy. Para acceder al curso completo puede hacer [clic aquí](https://www.udemy.com/course/nest-framework/)

El proyecto desarrollado a continuación explora la creación de un Tienda con funcionalidades básicas y conexión a una base de datos Postgresql para aplicar diferentes conceptos del framework para backend Nest:

**Conceptos aplicados**

- TypeORM
- Postgres
- CRUD
- Constrains
- Validaciones
- Búsquedas
- Paginación
- DTOs
- Entities
- Decoradores de TypeORM para entidades
- Métodos BeforeInsert, BeforeUpdate
- Relaciones
  - De uno a muchos
  - Muchos a uno
- Query Runner
- Query Builder
- Transacciones
- Commits y Rollbacks
- Renombrar tablas
- Creación de un SEED
- Aplanar resultados
- Autenticación
- Autorización
- Json Web Tokens
- Hash de contraseñas
- Nest Passport
- Módulos asíncronos
- Protección de rutas
- Custom Method Decorators
- Custom Class Decorators
- Custom Property Decorators
- Enlazar usuarios con productos
- Bearer Tokens

## Requerimientos

- Node v22.12.0 LTS

## Instalación del proyecto

Para instalar el proyecto siga los siguientes pasos

Instalar módulos o dependencias

```bash
$ npm install
```

Instalar Nest CLI (para desarrollo)

```bash
$ npm i -g @nestjs/cli
```

## Ejecución del proyecto

Para ejecutar el proyecto se deben seguir los siguientes pasos:

1. Levantar la base de datos

```bash
# docker
$ docker compose up -d
```

2. Copiar el archivo `.env.template` a `.env` y configurar las variables de entorno

3. Correr el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

4. Ejecutar el SEED para la carga de datos iniciales en la BD (modo desarrollo)

```
http://localhost:3000/api/v1/seed
```

### Información adicional

Para aprender más acerca de Nest, visite los siguientes recursos:

- Visite la [documentación de NestJS](https://docs.nestjs.com) para aprender más del framework
- Para adquirir cursos oficiales de NestJS, haga clic aquí [clic aquí](https://courses.nestjs.com/).
