import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';

interface IQueryProps{
 page?: number;
 limit?: number;
 filter?: string;
}

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
 page: yup.number().optional().moreThan(0),
 limit: yup.number().optional().moreThan(0),
 filter: yup.string().optional().min(3),
});

export const createQueryValidation = validation('query', queryValidation);

export const getAll = async(req: Request<{},{},{}, IQueryProps>, res:Response) => {
  console.log(req.query)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Não implementado")
}; 