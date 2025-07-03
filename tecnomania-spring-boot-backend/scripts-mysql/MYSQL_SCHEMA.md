# Estructura de Base de Datos MySQL - TecnoMania

Este documento describe la estructura de las tablas MySQL necesarias para el sistema TecnoMania, basado en los modelos y formularios de la aplicación.

## 📋 Estructura de Tablas

### 1. Tabla `usuarios`

```sql
CREATE TABLE usuarios (
    id BIGINT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_creacion DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);
```

**Campos:**
- `id`: Identificador único (clave primaria)
- `username`: Nombre de usuario único
- `password`: Contraseña encriptada con BCrypt
- `fecha_creacion`: Fecha y hora de creación del usuario

### 2. Tabla `productos`

```sql
CREATE TABLE productos (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    color VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (id)
);
```

**Campos:**
- `id`: Identificador único del producto
- `name`: Nombre del producto
- `price`: Precio del producto (hasta 10 dígitos, 2 decimales)
- `color`: Color del producto
- `stock`: Cantidad disponible en inventario

### 3. Tabla `empleados`

```sql
CREATE TABLE empleados (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
```

**Campos:**
- `id`: Identificador único del empleado
- `name`: Nombre completo del empleado
- `specialty`: Especialidad o área de trabajo
- `salary`: Salario del empleado
- `status`: Estado del empleado (Activo, Inactivo, etc.)

### 4. Tabla `proveedores`

```sql
CREATE TABLE proveedores (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phones JSON,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
```

**Campos:**
- `id`: Identificador único del proveedor
- `name`: Nombre del proveedor
- `phones`: Lista de teléfonos en formato JSON (ej: ["123456789", "987654321"])
- `status`: Estado del proveedor (Activo, Inactivo, etc.)

### 5. Tabla `eventos`

```sql
CREATE TABLE eventos (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATETIME(6) NOT NULL,
    description TEXT,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);
```

**Campos:**
- `id`: Identificador único del evento
- `name`: Nombre del evento
- `location`: Ubicación donde se realizará el evento
- `date`: Fecha y hora del evento
- `description`: Descripción opcional del evento
- `created_at`: Fecha de creación del registro
- `updated_at`: Fecha de última actualización

## 🔧 Script Completo de Creación

```sql
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS tecnomaniadb;
USE tecnomaniadb;

-- Tabla usuarios
CREATE TABLE usuarios (
    id BIGINT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_creacion DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);

-- Tabla productos
CREATE TABLE productos (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    color VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla empleados
CREATE TABLE empleados (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla proveedores
CREATE TABLE proveedores (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phones JSON,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla eventos
CREATE TABLE eventos (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATETIME(6) NOT NULL,
    description TEXT,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);
```

## 📊 Datos de Ejemplo

### Usuarios de prueba
```sql
-- IMPORTANTE: Estas contraseñas están encriptadas con BCrypt
-- Las contraseñas originales son: admin=admin, user1=user1, testuser=testpass
INSERT INTO usuarios (username, password) VALUES 
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.'),
('user1', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.'),
('testuser', '$2a$10$N9qo8uLOickgx2ZMRZoMye7VhYRAILqF3aEQ9QaZkuqYE9p9VGE0S');
```

**Credenciales de acceso:**
- Usuario: `admin` / Contraseña: `admin`
- Usuario: `user1` / Contraseña: `user1`
- Usuario: `testuser` / Contraseña: `testpass`

### Productos de ejemplo
```sql
INSERT INTO productos (name, price, color, stock) VALUES 
('iPhone 15', 999.99, 'Negro', 50),
('Samsung Galaxy S24', 849.99, 'Azul', 30),
('MacBook Pro', 1299.99, 'Plateado', 15),
('AirPods Pro', 249.99, 'Blanco', 100);
```

### Empleados de ejemplo
```sql
INSERT INTO empleados (name, specialty, salary, status) VALUES 
('Juan Pérez', 'Técnico de Reparación', 1200.00, 'Activo'),
('María García', 'Vendedor', 1000.00, 'Activo'),
('Carlos López', 'Soporte Técnico', 1100.00, 'Activo');
```

### Proveedores de ejemplo
```sql
INSERT INTO proveedores (name, phones, status) VALUES 
('Apple Inc', '["1-800-APL-CARE", "555-0123"]', 'Activo'),
('Samsung Electronics', '["1-800-SAMSUNG", "555-0456"]', 'Activo'),
('Distribuidora Tech', '["0999123456", "0987654321"]', 'Activo');
```

### Eventos de ejemplo
```sql
INSERT INTO eventos (name, location, date, description) VALUES 
('Lanzamiento iPhone 16', 'Centro de Convenciones', '2025-09-15 18:00:00', 'Evento de presentación del nuevo iPhone'),
('Capacitación Técnica', 'Oficina Principal', '2025-07-10 14:00:00', 'Curso de reparación de dispositivos móviles'),
('Feria Tecnológica', 'Expo Center', '2025-08-20 09:00:00', 'Exhibición de nuevas tecnologías');
```

## 🔍 Índices Recomendados

```sql
-- Índices para optimizar consultas frecuentes
CREATE INDEX idx_productos_name ON productos(name);
CREATE INDEX idx_productos_color ON productos(color);
CREATE INDEX idx_empleados_specialty ON empleados(specialty);
CREATE INDEX idx_empleados_status ON empleados(status);
CREATE INDEX idx_proveedores_status ON proveedores(status);
CREATE INDEX idx_eventos_date ON eventos(date);
CREATE INDEX idx_eventos_location ON eventos(location);
```

## 📝 Notas Importantes

1. **Contraseñas**: Se almacenan encriptadas usando BCrypt con Spring Security
2. **JSON en MySQL**: La columna `phones` usa tipo JSON nativo de MySQL 5.7+
3. **Timestamps**: MySQL maneja automáticamente `created_at` y `updated_at`
4. **Decimales**: Los precios y salarios usan DECIMAL(10,2) para precisión monetaria
5. **Codificación**: Usar UTF8MB4 para soporte completo de caracteres Unicode

## 🚀 Configuración Recomendada

Para conectar desde Spring Boot, usar esta configuración en `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tecnomaniadb?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=your_password_here
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.show-sql=true
```
