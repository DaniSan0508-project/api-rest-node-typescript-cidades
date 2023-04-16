import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (_, res)=> {
  return res.send('Olá DEV!');
} );

router.post('/teste', (req, res)=> {
  return res.status(StatusCodes.PAYMENT_REQUIRED).json(req.body);
} );


export { router };