import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const temasSchema = new Schema({
    nombreTema: String
},{ versionKey: false }
);
const foro = mongoose.model('foro', temasSchema);

export default foro;