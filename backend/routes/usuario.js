import express from 'express';
const router = express.Router();

// importar el modelo nota
import usuarioSchema from '../models/usuario';

router.post('/updateEnsayos', async(req, res) => {
  console.log(req.body)
  const _id = req.body._id;
  const ensayoPendiente = req.body.ensayoPendiente;

  const response = await usuarioSchema.findOneAndUpdate({_id:_id},{ensayoPendiente:ensayoPendiente})
  
  .then((result) => {
    console.log(result)
    if(result._id==_id){
      res.json({
        "resplogin":true,
        "usuario":result
       
       })
      
    }
    else{res.json({
      "resplogin":false,
      "usuario":{}

      })
    }    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.post('/addusuario', async(req, res) => {
  const body = req.body;  
 
  const usuario = usuarioSchema(body)       
  await usuario.save().then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.post('/verificarusuario', async(req, res) => {
  console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;

  const response = await usuarioSchema.findOne({email:email})
  
  .then((result) => {
    console.log(result)
    if(result.password==password){
      res.json({
        "resplogin":true,
        "usuario":result
       
       })
      
    }
    else{res.json({
      "resplogin":false,
      "usuario":{}

      })
    }    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);


module.exports = router;