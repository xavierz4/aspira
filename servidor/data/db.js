
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/electores', {useNewUrlParser:true});

const electoresSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    cedula : Number,
    edad : Number,
    genero: String,
    email: String,
    rol: String,
    pedidos : Array


});

const Electores = mongoose.model('electores', electoresSchema);
export {Electores};