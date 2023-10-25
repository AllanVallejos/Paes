import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const temasSchema = new Schema({
    nombreTema: String,
    //comentariosTema: [{type: Schema.Types.ObjectId, ref: 'comentario'}]
},{ versionKey: false }
);

// const comentariosSchema = new Schema({
//     nombreUsuario: String,
//     comentario: String
// },{ versionKey: false }
// );

//const comentario = mongoose.model('comentario', comentariosSchema);
const foro = mongoose.model('foro', temasSchema);

export default foro;