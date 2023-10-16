import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombreNombre: String,
    apellidoPaterno: String, 
    appellidoMaterno: String,
    email: String,
    password: String,
    userName: String,
    universidad: String,
    carrera: String,
    preguntasResponidas: {type: Array, default: []},
    id: Number,
    historialEnsayos: {type: Array, default: []},
},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;