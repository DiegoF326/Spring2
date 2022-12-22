const mongoose = require ('mongoose');
require('dotenv').config();

const conectarBD = () => {
    // Conectar con mongoDB
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log (" esta conectada la base de datos mongodb"))
    .catch((err) => console.error(err));
}

module.exports= conectarBD;