import express from 'express';
const router = express.Router();

// importar el modelo nota
import corteSchema from '../models/puntajeCorte';
import puntajeCorte from '../models/puntajeCorte';

router.post('/addPuntajeCorte', async (req, res) => {
	const body = req.body;

	const corte = corteSchema(body)
	await corte.save()
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