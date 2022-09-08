let Bicicleta =function(id,color,modelo,ubicacion){
    this.id=id
    this.color=color
    this.modelo=modelo
    this.ubicacion=ubicacion
}

Bicicleta.prototype.toString = function(){
    return 'id: ${this.id} | color: ${this.color}'
}

Bicicleta.allBicis=[]

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici)
}

let b1 = new Bicicleta(1,'rojo','BMX', [-34.6012421,58.381654])
let b2 = new Bicicleta(2,'negra','ruta', [-33.6012424,-68.381654])

Bicicleta.add(b1)
Bicicleta.add(b2)

module.exports=Bicicleta
