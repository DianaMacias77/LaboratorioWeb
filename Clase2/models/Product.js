// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('products');
}

// models/Products.js
// ...
// Almacen en la base de datos el producto
exports.create = (product) => {
  return knex('products')
    .insert({
      name: product.name,
      price: product.price,
      description: product.description
    });
}

// models/Product.js

// ...

// Obtiene la información de un producto por su id
exports.find = (id) => {
  return knex
    .select('*')
    .from('products')
    .where('id', id)
    .first();
}

exports.delete = (id) => {
  return knex('products')
    .delete()
    .where('id', id);
}