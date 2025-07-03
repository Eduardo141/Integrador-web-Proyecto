@echo off
echo ========================================
echo  Creando usuarios de prueba via API
echo ========================================
echo.

echo PASO 1: Limpiando usuarios existentes en la base de datos...
echo (Ejecuta esto manualmente en MySQL si es necesario:)
echo DELETE FROM usuarios;
echo.

echo PASO 2: Registrando usuarios con contraseñas correctamente encriptadas...
echo.

echo Registrando usuario: admin / admin
curl -X POST "http://localhost:8080/api/auth/register" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin\"}"
echo.
echo.

echo Registrando usuario: user1 / user1  
curl -X POST "http://localhost:8080/api/auth/register" -H "Content-Type: application/json" -d "{\"username\":\"user1\",\"password\":\"user1\"}"
echo.
echo.

echo Registrando usuario: testuser / testpass
curl -X POST "http://localhost:8080/api/auth/register" -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}"
echo.
echo.

echo PASO 3: Probando login con usuario admin...
curl -X POST "http://localhost:8080/api/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin\"}"
echo.
echo.

echo ========================================
echo Si ves un token JWT, el login funciona!
echo Ahora puedes usar el frontend con:
echo Usuario: admin
echo Password: admin
echo ========================================
pause
