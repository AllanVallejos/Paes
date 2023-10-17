import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombreUsuario: String,
    apellidoUsuario: String, 
    correo: {type:String,unique:true},
    contraseña: String,
    carrera: String,
    universidad: String, 
   

},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;