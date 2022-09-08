let express = require('express')
let router = express.Router()
let bicicletaController = require('../controllers/bicicleta')

router.get('/', bicicletaController.bicicleta_list)

module.exports = router