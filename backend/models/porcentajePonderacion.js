import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ponderacionSchema = new Schema({
    
    universidad: String,
    carrera: String,
    nem: Number, 
    p_ranking: Number,
    comp_lectora: Number,
    mat_m1: Number,
    mat_m2: Number,
    ciencias: Number

},{ versionKey: false }
);

const puntajeCorte = mongoose.model('porcentajePonderacion', corteSchema);

export default puntajeCorte;