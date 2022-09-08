const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = function(req, res){
    console.log(Bicicleta.allBicis)
    res.render('bicicletas/index',{bicis: Bicicleta.allBicis})
}

