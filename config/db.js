const mongoose = require('mongoose');

const connectDB = async() => {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    let cadena = process.env.MONGO_URL;
    db = cadena.split('/')[3];
    console.log(`MongoDB Connected: ${connection.connection.host} \nCadena: ${process.env.MONGO_URL}\nBase de datos: ${db}`);
};

module.exports = connectDB;