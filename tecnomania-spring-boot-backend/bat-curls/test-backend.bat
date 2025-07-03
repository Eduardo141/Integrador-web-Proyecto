@echo off
echo ========================================
echo  TecnoMania Spring Boot Backend
echo ========================================
echo.
echo Iniciando servidor Spring Boot en puerto 8080...
echo URL base de la API: http://localhost:8080/api
echo.
echo Endpoints disponibles:
echo  - POST http://localhost:8080/api/auth/login
echo  - POST http://localhost:8080/api/auth/register
echo  - POST http://localhost:8080/api/auth/create-test-user
echo  - GET  http://localhost:8080/api/products
echo.
echo IMPORTANTE: Asegurate de que MySQL este ejecutandose en puerto 3306
echo.
cd /d "c:\Users\Diego Moscaiza\Desktop\WebAdmin TecnoMania\springboot-backend"
mvn spring-boot:run
