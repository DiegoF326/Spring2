const mongoose = require ('mongoose');


// se coloca el esquema que esta en la base de datos

const pedidoSchema = mongoose.Schema({
    nombreCliente:{
        type:String,
        require:true
    },
    nombreProducto:{
        type:String,
        require:true
    },
    cantidad:{
        type:Number,
        require:true
    },
    valorProducto:{
        type:Number,
        require:true
    },
    valorTotalPed:{
        type:Number,
        require:true
    },
    fechaPedido:{
        type:Date,
        require:true
    }
},{ versionkey: false});

module.exports = mongoose.model('pedidos', pedidoSchema);