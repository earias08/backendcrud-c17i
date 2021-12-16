import mongoose from 'mongoose';
//cadena de conexion a la base de datos
// const url = 'mongodb://localhost:27017/crudcafec17i';
const url = 'mongodb+srv://emic17i:cafecrud17i@cluster0.4oulm.mongodb.net/crudcafec17i';

mongoose.connect(url,{useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada')
});
