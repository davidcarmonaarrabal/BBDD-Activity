DROP DATABASE IF EXISTS tienda;

CREATE DATABASE tienda;
USE tienda;


CREATE TABLE productos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE productos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO productos (nombre, descripcion, precio) 
VALUES 
  ('Monitor 17 pulgadas', 'Monitor plano LCD', 110.22),
  ('Teclado', 'Teclado USB en español', 20.12),
  ('Impresora', 'Impresora láser a color', 360.05);

CREATE TABLE clientes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    dni VARCHAR(9),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO clientes (nombre, descripcion, dni) 
VALUES 
  ('David Carmona', 'Pringao', '11111111Q'),
  ('Manue', 'Empresaurio', '09214256A'),
  ('Madre', 'Mi madre', '22222222B');