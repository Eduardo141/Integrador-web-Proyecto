# Port MongoDB Backend to Spring Boot Backend

Este proyecto es el port del backend de MongoDB con JavaScript a Spring Boot con Java.

## 🏗️ Arquitectura Migrada

### Modelos Convertidos:
- **Usuario**: Equivalente al modelo `User` de MongoDB
- **Producto**: Equivalente al modelo `Product` de MongoDB
- **Empleado**: Equivalente al modelo `Employee` de MongoDB
- **Proveedor**: Equivalente al modelo `Supplier` de MongoDB
- **Evento**: Equivalente al modelo `Event` de MongoDB

### Endpoints Convertidos:
- **Auth**: `/api/auth/login`, `/api/auth/register`
- **Productos**: `/api/products` (GET, POST, PUT, DELETE)
- **Empleados**: `/api/employees` (GET, POST, PUT, DELETE)
- **Proveedores**: `/api/suppliers` (GET, POST, PUT, DELETE)
- **Eventos**: `/api/events` (GET, POST, PUT, DELETE)

## 📋 Configuración

### Base de Datos
El proyecto está configurado para usar MySQL en lugar de MongoDB:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tecnomaniadb
spring.datasource.username=root
spring.datasource.password=
```

### Puerto del Servidor
```properties
server.port=8080
server.servlet.context-path=/api
```

## 🚀 Cómo Ejecutar

1. **Asegurar que MySQL esté ejecutándose**
2. **Crear la base de datos**:
   ```sql
   CREATE DATABASE tecnomaniadb;
   ```

3. **Compilar el proyecto**:
   ```bash
   mvn clean compile
   ```

4. **Ejecutar la aplicación**:
   ```bash
   mvn spring-boot:run
   ```

La aplicación estará disponible en: `http://localhost:8081/api`

## 🔄 Cambios Principales del Port

### De MongoDB a MySQL/JPA:
- Modelos Mongoose → Entidades JPA con `@Entity`
- `_id` → `@Id @GeneratedValue`
- Validaciones Mongoose → Anotaciones Jakarta Validation
- Timestamps automáticos → `@PrePersist` y `@PreUpdate`

### De Express.js a Spring Boot:
- Rutas Express → Controladores REST con `@RestController`
- Middleware CORS → Configuración CORS en Spring
- Manejo de errores → `ResponseEntity` con códigos HTTP
- JSON automático → Spring Boot serializa automáticamente

### Autenticación:
- JWT con jsonwebtoken → JWT con jjwt
- bcrypt.js → BCryptPasswordEncoder (preparado para Security)
- Middleware auth → Configuración preparada para Spring Security

## 📁 Estructura del Proyecto

```
src/main/java/com/example/demo/
├── configuracion/
│   └── CorsConfig.java          # Configuración CORS
├── controlador/
│   ├── AuthController.java      # Autenticación
│   ├── ProductoController.java  # Productos
│   ├── EmpleadoController.java  # Empleados
│   ├── ProveedorController.java # Proveedores
│   └── EventoController.java    # Eventos
├── dto/
│   ├── LoginRequest.java
│   ├── RegisterRequest.java
│   └── LoginResponse.java
├── modelo/
│   ├── Usuario.java
│   ├── Producto.java
│   ├── Empleado.java
│   ├── Proveedor.java
│   └── Evento.java
├── repositorio/
│   ├── UsuarioRepository.java
│   ├── ProductoRepository.java
│   ├── EmpleadoRepository.java
│   ├── ProveedorRepository.java
│   └── EventoRepository.java
├── servicio/
│   ├── UsuarioService.java
│   ├── ProductoService.java
│   ├── EmpleadoService.java
│   ├── ProveedorService.java
│   └── EventoService.java
└── util/
    └── JwtUtil.java             # Utilidades JWT
```

## 🔧 Dependencias Agregadas

Las siguientes dependencias se agregaron al `pom.xml`:
- Spring Boot Security (para futuras mejoras de seguridad)
- JWT (jjwt) para autenticación
- Lombok para reducir boilerplate
- Validation para validaciones

## 📝 Notas del Port

1. **Compatibilidad de API**: Los endpoints mantienen la misma estructura que el backend de MongoDB
2. **Tipos de Datos**: 
   - `String` arrays (phones) se almacenan como JSON string en MySQL
   - `Date` de JavaScript → `LocalDateTime` de Java
   - `Number` de JavaScript → `BigDecimal` para precios, `Integer` para stock
3. **Validaciones**: Se mantienen las mismas validaciones pero usando Jakarta Validation
4. **CORS**: Configurado para permitir requests desde `localhost:3241` y `localhost:3000`

## 🔜 Próximos Pasos Recomendados

1. **Implementar Spring Security completo** para autenticación JWT
2. **Agregar manejo de excepciones global** con `@ControllerAdvice`
3. **Implementar paginación** en los endpoints de listado
4. **Agregar logging** con SLF4J
5. **Crear tests unitarios** con JUnit y Mockito
6. **Dockerizar la aplicación**
