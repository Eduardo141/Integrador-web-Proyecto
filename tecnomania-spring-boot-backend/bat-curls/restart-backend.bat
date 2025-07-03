@echo off
echo ========================================
echo  Reiniciando Spring Boot Backend
echo ========================================
echo.
echo NOTA: La clave JWT ha sido actualizada
echo Necesitas reiniciar el servidor para que tome efecto
echo.
echo Presiona Ctrl+C en la ventana del servidor y luego
echo ejecuta test-backend.bat nuevamente
echo.
echo Alternativamente, mata el proceso Java:
tasklist | findstr java.exe
echo.
echo Y luego ejecuta:
echo test-backend.bat
echo.
pause
