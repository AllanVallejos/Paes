import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    email: { type: String, required: true, index: {unique: true}, lowercase: true },
    password: String,
    userName: { type: String, required: true, index: {unique: true} },
    tipoUsuario: String,
    universidad: String,
    carrera: String,
    preguntasRespondidas: {type: Array, default: []},
    idUsuario: Number,
    historialEnsayos: {type: Array, default: []},
    ensayoPendiente: Array,
    created: { type: Date, default: Date.now}
}, { versionKey: false }
);



const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;