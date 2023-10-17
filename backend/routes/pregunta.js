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

router.post('/getpregunta', async(req, res) => {
  const pregunta = req.body.pregunta;
 
  console.log(pregunta)
  const response = await preguntaSchema.findOne({pregunta})
  .then((result) => {
    console.log(result.pregunta)
 
    console.log("Valido")
    res.json({"respuesta":true})
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
}
);
module.exports = router;