import express from 'express';
const router = express.Router();

import temaSchema from '../models/foro';



router.post('/addTemaForo', async(req, res) => {
  const body = req.body;
  const foro = temaSchema(body)       
  await foro.save().then((result) => {
    res.json(result)
    console.log("Tema de foro añadido")
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.get('/getTemas', async(req, res) => {
  //obtener temas del foro
  await temaSchema.find({}).then((result) => {
    res.json(result)
    console.log("Temas de foro obtenidos")
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
}
);

module.exports = router;