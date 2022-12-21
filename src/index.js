const express = require ('express');
const conectarBD = require('../config/bd');
const cors = require('cors');

//crear el servidor
const app = express();
const port = 5000;

// Enlazar la coneccion
conectarBD();
app.use(cors());
app.use(express.json());

app.use('/api/proveedor', require ('../routes/proveedor'));
app.use('/api/cliente', require ('../routes/cliente'));
app.use('/api/pedido', require ('../routes/pedido'));
app.use('/api/cita', require ('../routes/cita'));

//mostrar un mensaje en el navegador
app.get('/' , (req,res) =>{
    res.send("Bienvenido el servidor esta configurado, esto se muestra en el navegador");
});


app.listen(port, () => console.log(" servidor conectado al puerto", port))