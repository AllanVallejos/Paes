import express from 'express';
const router = express.Router();

// importar el modelo nota
import preguntaSchema from '../models/pregunta';
import pregunta from '../models/pregunta';



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

router.get('/getpreguntabyid/:id', async(req, res) => {
  const preguntaid = req.params.id;
 
  console.log(req.params)
  const response = await preguntaSchema.findOne({_id:preguntaid})
  .then((result) => {
    console.log(result)
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
}
);

router.get('/getpreguntas/:categoria', async(req, res) => {
  const categoria = req.params.categoria;
  const preguntasArray = [];
  const alternativasArray = [];
  console.log(req.params)
  const response = await preguntaSchema.find({categoria:categoria})
  .then((result) => {
    console.log(result)
    /* result.forEach(function(preguntaPuntual) {
      console.log(preguntaPuntual.pregunta);
      console.log(preguntaPuntual.alternativas);
      preguntasArray.push(preguntaPuntual.pregunta);
      alternativasArray.push(preguntaPuntual.alternativas)
    }); */
    res.json(result);
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
    
  }); 
}
);
module.exports = router;