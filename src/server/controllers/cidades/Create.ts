import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import * as yup from 'yup';

interface ICidade{
  nome: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const createBodyValidator: RequestHandler = async(req,res,next) => {
  try{    
    await bodyValidation.validate(req.body, { abortEarly:false });
   return next();
  }catch(error){
    const yupError = error as yup.ValidationError;
    const validateErrors: Record<string, string> = {}

    yupError.inner.forEach(error => {
      if(error.path === undefined) return;
      validateErrors[error.path] = error.message;
    })
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validateErrors
    });
  }
}

export const create = async(req: Request<{},{}, ICidade>, res:Response) => {
  return res.status(StatusCodes.ACCEPTED).json(req.body.nome)
}; 