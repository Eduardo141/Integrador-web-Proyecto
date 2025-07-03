@echo off
echo ========================================
echo  Verificando que backend usar
echo ========================================
echo.

echo Probando Spring Boot backend (puerto 8080):
echo "Testing login with user2..."
curl -X POST "http://localhost:8080/api/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"user2\",\"password\":\"user1234\"}"
echo.
echo.

echo "Testing register endpoint..."
curl -X POST "http://localhost:8080/api/auth/register" -H "Content-Type: application/json" -d "{\"username\":\"testuser3\",\"password\":\"testpass123\"}"
echo.
echo.

echo Probando Node.js backend (puerto 3306):
curl -X POST "http://localhost:3306/api/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"user2\",\"password\":\"user1234\"}"
echo.
echo.

echo Verificando que backend responde en puerto 8080:
curl -X GET "http://localhost:8080/api/products" -H "Content-Type: application/json"
echo.
echo.

echo ========================================
echo El que responda JSON correctamente es el 
echo backend que esta funcionando
echo ========================================
pause
