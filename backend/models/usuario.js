import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombreUsuario: String,
    apellidoUsuario: String, 
    correo: String,
    contraseña: {type: String, unique: true},
    carrera: String,
    //preguntasResponidas: {type: Array, default: []},
    id: Number,
    //historialEnsayos: {type: Array, default: []},
},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;