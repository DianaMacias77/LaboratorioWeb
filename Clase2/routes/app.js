// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let ProductsController = require('../controllers/ProductsController')
let PagesController = require('../controllers/PagesController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

// Exporta las configuraciones
module.exports = router;
// routes/app.js

// ...

// Identifica la ruta /products/create y la envía al controlador
router.get('/products/create', ProductsController.create);
// Almacena el producto
router.post('/products', ProductsController.store);
router.get('/products/:id', ProductsController.show);
router.get('/products/:id/edit', ProductsController.edit);
router.delete('/products/:id', ProductsController.delete);
// ...