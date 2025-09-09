# Simple CRUD App

API REST para la gestión de productos, construida con **Node.js**, **Express** y **MongoDB**.  
Permite **crear, leer, actualizar y eliminar productos** de manera sencilla usando endpoints JSON.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- CommonJS (`require`/`module.exports`)
- Nodemon (para desarrollo)

---

## Estructura del proyecto

simple-crud-app/
│
├─ controllers/ # Lógica de cada endpoint
│ └─ product.controller.js
├─ models/ # Esquemas de la base de datos
│ └─ product.model.js
├─ routes/ # Rutas de la API
│ └─ product.route.js
├─ index.js # Archivo principal del servidor
├─ package.json # Dependencias y scripts
└─ .gitignore # Archivos ignorados por Git


---

## Funcionalidades

El proyecto implementa un **CRUD completo** para productos:

| Método | Endpoint                  | Descripción                       |
|--------|---------------------------|-----------------------------------|
| GET    | `/api/products`           | Obtiene todos los productos      |
| GET    | `/api/products/:id`       | Obtiene un producto por ID       |
| POST   | `/api/products`           | Crea un nuevo producto           |
| PUT    | `/api/products/:id`       | Actualiza un producto existente  |
| DELETE | `/api/products/:id`       | Elimina un producto por ID       |

### Ejemplo de producto (JSON)

```json
{
  "name": "Pizza",
  "quantity": 10,
  "price": 5.99,
  "image": "opcional"
}
