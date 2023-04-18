import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';

interface ICidade{
  nome: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const createBodyValidation = validation('body', bodyValidation);

export const create = async(req: Request<{},{}, ICidade>, res:Response) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Não implementado")
}; 