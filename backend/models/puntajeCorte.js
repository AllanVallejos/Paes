import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const corteSchema = new Schema({
    
    universidad: String,
    carrera: String,
    corte: Number, 

},{ versionKey: false }
);

const puntajeCorte = mongoose.model('puntajeCorte', corteSchema);

export default puntajeCorte;