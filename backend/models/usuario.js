import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombreUsuario: String,
    apellidoUsuario: String,
    email: { type: String, unique: true },
    password: String,
    carrera: String,
    //preguntasResponidas: {type: Array, default: []},
    id: Number,
    //historialEnsayos: {type: Array, default: []},
    ensayoPendiente: Array

}, { versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;