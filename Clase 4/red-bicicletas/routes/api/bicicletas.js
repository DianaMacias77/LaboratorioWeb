let express = require('express')
let router = express.Router()
let bicicletasControllerAPI = require('../../controllers/api/bicicletasControllerAPI')

router.get('/',bicicletasControllerAPI.bicicleta_list)

module.exports = router