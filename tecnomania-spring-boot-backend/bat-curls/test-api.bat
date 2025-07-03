@echo off
echo Testing TecnoMania API Endpoints...
echo.

echo 1. Registrando usuario de prueba con endpoint oficial...
curl -X POST "http://localhost:8080/api/auth/register" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"123456\"}"
echo.
echo.

echo 2. Registrando otro usuario de prueba...
curl -X POST "http://localhost:8080/api/auth/register" -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}"
echo.
echo.

echo 3. Intentando login con primer usuario...
curl -X POST "http://localhost:8080/api/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"123456\"}"
echo.
echo.

echo 4. Intentando login con segundo usuario...
curl -X POST "http://localhost:8080/api/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}"
echo.
echo.

echo 5. Probando endpoint de productos...
curl -X GET "http://localhost:8080/api/products" -H "Content-Type: application/json"
echo.
echo.

echo 6. Creando usuario usando endpoint temporal (respaldo)...
curl -X POST "http://localhost:8080/api/auth/create-test-user" -H "Content-Type: application/json"
echo.
echo.

echo 7. Login con usuario temporal...
curl -X POST "http://localhost:8080/api/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"123456\"}"
echo.
echo.

pause
