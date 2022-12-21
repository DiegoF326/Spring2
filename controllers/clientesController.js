const Cliente = require('../models/Cliente');

exports.mostrarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch(error){
        console.log(error);
        res.status(500).send("error al consultar los clientes");
    }
}


exports.agregarClientes = async (req, res) => {

    try{
        let cliente;
        cliente = new Cliente(req.body)

        await cliente.save();
        res.send(cliente);

    }catch(error){
        console.log(error);
        res.status(500).send("error al consultar los clientes");
    }

}


exports.mostrarunCliente = async (req,res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: "no podemos encontrar el cliente"});
        }

        res.send(cliente);

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver un cliente");
    }
}


exports.eliminarClientes = async (req,res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: "no existe el cliente"});
            return
        }

        await Cliente.findOneAndRemove({_id:req.params.id});
        res.json({msg: "el cliente fue eliminado"});

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver un cliente");
    }
}

exports.actualizarClientes = async(req, res) =>{

    try{
        const {nombres, apellidos, documento, correo, telefono, direccion, empresa} = req.body;

        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: "no existe elcliente"});
            return
        }

       cliente.nombres = nombres;
       cliente.apellidos = apellidos;
       cliente.documento = documento;
       cliente.correo = correo;
       cliente.telefono = telefono;
       cliente.direccion = direccion;
       cliente.empresa = empresa;

       cliente = await Cliente.findByIdAndUpdate({_id: req.params.id}, cliente, {new: true});
        res.json(cliente);

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver un cliente");
    }
}