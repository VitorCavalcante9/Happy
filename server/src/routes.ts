import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;

/*
{
	"name": "Lar das meninas",
	"latitute": -27.2104339,
	"longitude": -49.629111,
	"about": "tchola",
	"instructions": "se vira",
	"opening_hours": "8 até o fim da sua vida",
	"open_on_weekends": true
}
*/