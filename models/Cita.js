const mongoose = require ('mongoose');


// se coloca el esquema que esta en la base de datos

const citaSchema = mongoose.Schema({
    fecha:{
        type:Date,
        require:true
    },
    nombres:{
        type:String,
        require:true
    },
    lugar:{
        type:String,
        require:true
    }
},{ versionkey: false});

module.exports = mongoose.model('citas', citaSchema);