import express from 'express';
const router = express.Router();

// importar el modelo nota
import preguntaSchema from '../models/pregunta';



router.post('/addpregunta', async(req, res) => {
  const body = req.body;  
 
  const pregunta = preguntaSchema(body)       
  await pregunta.save()
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.get('/getPregunta/:id', async (req, res) => {
  try {
    const pregunta = await Pregunta.findById(req.params.id); // Suponiendo que estás usando Mongoose y MongoDB
    if (!pregunta) {
      return res.status(404).json({ error: 'Pregunta no encontrada' });
    }
    res.json(pregunta);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al buscar la pregunta' });
  }
});

module.exports = router;