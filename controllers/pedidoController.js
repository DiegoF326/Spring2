const Pedido = require('../models/Pedido');

exports.mostrarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);

    } catch(error){
        console.log(error);
        res.status(500).send("error al consultar los pedidos");
    }
}


exports.agregarPedidos = async (req, res) => {

    try{
        let pedido;
        pedido = new Pedido(req.body)

        await pedido.save();
        res.send(pedido);

    }catch(error){
        console.log(error);
        res.status(500).send("error al consultar los pedidos");
    }

}


exports.mostrarunPedido = async (req,res) => {
    try {
        let pedido = await Pedido.findById(req.params.id);

        if(!pedido){
            res.status(404).json({msg: "no podemos encontrar el pedido"});
        }

        res.send(pedido);

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver un pedido");
    }
}


exports.eliminarPedidos = async (req,res) => {
    try {
        let pedido = await Pedido.findById(req.params.id);

        if(!pedido){
            res.status(404).json({msg: "no existe el pedido"});
            return
        }

        await Pedido.findOneAndRemove({_id:req.params.id});
        res.json({msg: "el pedido fue eliminado"});

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver un pedido");
    }
}

exports.actualizarPedidos = async(req, res) =>{

    try{
        const {nombreCliente, nombreProducto, cantidad, valorProducto, valorTotalPed, fechaPedido} = req.body;

        let pedido = await Pedido.findById(req.params.id);

        if(!pedido){
            res.status(404).json({msg: "no existe el pedido"});
            return
        }

        pedido.nombreCliente = nombreCliente;
        pedido.nombreProducto = nombreProducto;
        pedido.cantidad = cantidad;
        pedido.valorProducto = valorProducto;
        pedido.valorTotalPed = valorTotalPed;
        pedido.fechaPedido = fechaPedido;

        pedido = await Pedido.findByIdAndUpdate({_id: req.params.id}, pedido, {new: true});
        res.json(pedido);

    } catch(error){
        console.log(error);
        res.status(500).send("error al ver un pedido");
    }
}