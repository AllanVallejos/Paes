import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    email: { type: String, unique: true },
    password: String,
    userName: { type: String, unique: true },
    tipoUsuario: String,
    universidad: String,
    carrera: String,
    preguntasRespondidas: {type: Array, default: []},
    idUsuario: Number,
    historialEnsayos: {type: Array, default: []},
    ensayoPendiente: Array

}, { versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;