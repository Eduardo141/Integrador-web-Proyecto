@echo off
echo ========================================
echo  TecnoMania Backend - Compilacion
echo ========================================
echo.
echo Compilando proyecto...
cd /d "c:\Users\Diego Moscaiza\Desktop\WebAdmin TecnoMania\springboot-backend"
mvn clean compile
echo.
echo ========================================
echo Compilacion completada.
echo Ahora ejecuta test-backend.bat para iniciar el servidor
echo ========================================
pause
