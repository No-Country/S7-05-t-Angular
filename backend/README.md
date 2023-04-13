
# Managment System No Country

1. Clonar proyecto
2. ```npm install```
3. Clonar el archivo ```.env.example``` y renombrarlo a ```.env``` 
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```
6. Ejecutar las migraciones: ```npx sequelize-cli db:migrate``` 

7. Ejecutar migraciones de los seeders:
    ```npx sequelize-cli db:seed --seed 20230413023626-student-user.js```

8. Levantar el proyecto: ```npm start``` 

9. Endoint:  ```http://localhost:3000/api/``` 


