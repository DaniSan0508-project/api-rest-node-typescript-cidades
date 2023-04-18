import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (_, res)=> {
  return res.send('Olá DEV!');
} );

router.post('/cidades', CidadesController.createBodyValidation ,CidadesController.create);
router.get('/cidades', CidadesController.createQueryValidation ,CidadesController.create);


export { router };