@echo off
echo ========================================
echo  Generando hashes BCrypt para usuarios
echo ========================================
echo.

echo Generando hash para password: admin
curl -X POST "http://localhost:8080/api/auth/generate-hash" -H "Content-Type: application/json" -d "{\"password\":\"admin\"}"
echo.
echo.

echo Generando hash para password: user1
curl -X POST "http://localhost:8080/api/auth/generate-hash" -H "Content-Type: application/json" -d "{\"password\":\"user1\"}"
echo.
echo.

echo Generando hash para password: testpass
curl -X POST "http://localhost:8080/api/auth/generate-hash" -H "Content-Type: application/json" -d "{\"password\":\"testpass\"}"
echo.
echo.

echo Generando hash para password: 123456
curl -X POST "http://localhost:8080/api/auth/generate-hash" -H "Content-Type: application/json" -d "{\"password\":\"123456\"}"
echo.
echo.

echo ========================================
echo Copia los hashes generados y actualiza
echo el archivo update-users.sql
echo ========================================
pause
