const Cita = require('../models/Cita');

exports.mostrarCitas = async (req, res) => {
    try {
        const citas = await Cita.find();
        res.json(citas);

    } catch(error){
        console.log(error);
        res.status(500).send("error al consultar las citas");
    }
}


exports.agregarCitas = async (req, res) => {

    try{
        let cita;
        cita = new Cita(req.body)

        await cita.save();
        res.send(cita);

    }catch(error){
        console.log(error);
        res.status(500).send("error al consultar las citas");
    }

}


exports.mostrarunaCita = async (req,res) => {
    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: "no podemos encontrar la cita"});
        }

        res.send(cita);

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver una cita");
    }
}


exports.eliminarCitas = async (req,res) => {
    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: "no existe la cita"});
            return
        }

        await Cita.findOneAndRemove({_id:req.params.id});
        res.json({msg: "la cita fue eliminada"});

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver una cita");
    }
}

exports.actualizarCitas = async(req, res) =>{

    try{
        const {fecha, nombres, lugar} = req.body;

        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: "no existe el cita"});
            return
        }

        cita.fecha = fecha;
        cita.nombres = nombres;
        cita.lugar = lugar;

        cita = await Cita.findByIdAndUpdate({_id: req.params.id}, cita, {new: true});
        res.json(cita);

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver una cita");
    }
}