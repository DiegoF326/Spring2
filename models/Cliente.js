const mongoose = require ('mongoose');


// se coloca el esquema que esta en la base de datos

const clienteSchema = mongoose.Schema({
    nombres:{
        type:String,
        require:true
    },
    apellidos:{
        type:String,
        require:true
    },
    documento:{
        type:Number,
        require:true
    },
    correo:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },
    direccion:{
        type:String,
        require:true
    },
    empresa:{
        type:String,
        require:true
    }
},{ versionkey: false});

module.exports = mongoose.model('clientes', clienteSchema);