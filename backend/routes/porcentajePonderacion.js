import express from 'express';
const router = express.Router();

// importar el modelo nota
import ponderacionSchema from '../models/porcentajePonderacion';

router.post('/addporcentajePonderacion', async (req, res) => {
	const body = req.body;

	const ponderacion = ponderacionSchema(body)
	await ponderacion.save()
		.then((result) => {
			res.json(result)

		})
		.catch((err) => {
			console.log(err)
			res.json(err)
		});
}
);

module.exports = router;