import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

interface TValidation {
  (field: 'body' | 'header' | 'params' | 'query',  scheme: Schema<any>): RequestHandler;
}

export const validation: TValidation = (field, scheme) => {
  return async (req,res,next) => {
    try{    
      await scheme.validate(req[field], { abortEarly:false });
     return next();
    }catch(error){
      const yupError = error as ValidationError;
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
}