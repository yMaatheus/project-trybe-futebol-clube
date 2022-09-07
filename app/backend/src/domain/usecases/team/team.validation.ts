import { StatusCodes } from 'http-status-codes';
import Joi = require('joi');
import AppError from '../../../utils/appError.util';

export const validateTeamId = (id: number) => {
  const schema = Joi.number().required();
  const { error } = schema.validate(id);

  if (error) throw new AppError(StatusCodes.BAD_REQUEST, 'Id is invalid');

  return id;
};

export default validateTeamId;