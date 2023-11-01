import express from 'express';
const router = express.Router();

// importar el modelo nota
import usuarioSchema from '../models/usuario';

router.put('/updateEnsayos', async(req, res) => {
  console.log(req.body)
  const _id = req.body._id;
  const ensayoPendiente = req.body.ensayoPendiente;
  
  const response = await usuarioSchema.findByIdAndUpdate(_id,{$push:{"ensayoPendiente":ensayoPendiente}},{new:true}).then((result) => {
    res.json(result)
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

router.put('/editarUsuario', async (req, res) => {
  const _id = req.body._id;
  const nombreUsuario = req.body.nombreUsuario;
  const email = req.body.email;
  const password = req.body.password;

  // Define un objeto vacío para almacenar las propiedades a actualizar
  const updateData = {};

  if (nombreUsuario !== null && nombreUsuario !== "") {
    updateData.nombreUsuario = nombreUsuario;
  }
  
  if (email !== null && email !== "") {
    updateData.email = email;
  }
  
  if (password !== null && password !== "") {
    // Asegúrate de almacenar la contraseña de forma segura (por ejemplo, con hash)
    updateData.password = password;
  }
  

  // Utiliza findByIdAndUpdate para actualizar el usuario
  const response = await usuarioSchema.findByIdAndUpdate(
    _id,
    { $set: updateData },
    { new: true }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});



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

router.get('/getEnsayos', async (req, res) => {
  try {
    const temas = await temaSchema.find({});
    // Extraer el atributo 'ensayo' del array dentro de 'usuario' para cada resultado
    const ensayos = temas.map(tema => tema.usuario.ensayoPendiente);

    res.json(ensayoPendiente); // Envía como respuesta solo los atributos 'ensayo'
    console.log("Ensayos obtenidos");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener los ensayos" });
  }
});


module.exports = router;