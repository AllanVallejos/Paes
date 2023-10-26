import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();

const URL='mongodb+srv://zumbaleprimo23:eptHrvruOwgTiGDF@paes.tb7y3ti.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

const options = {useNewUrlParser: true};
// Or using promises
mongoose.connect(URL, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
const corsOptions = {
  origin: 'http://localhost:8080/', 
  optionsSuccessStatus: 200 // 
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/usuario'));
app.use('/api', require('./routes/pregunta'));
app.use('/api', require('./routes/foro'));
app.use('/api', require('./routes/puntajeCorte'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 8080);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});


