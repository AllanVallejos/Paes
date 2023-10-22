import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const preguntaSchema = new Schema({
    
    categoria: String,
    pregunta: String,
    alternativas: Array,
    correcta:String,
    respuestaUsuario: String,
  

},{ versionKey: false }
);

const pregunta = mongoose.model('pregunta', preguntaSchema);

export default pregunta;