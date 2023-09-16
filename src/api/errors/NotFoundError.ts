import HttpError from '@/api/errors/HttpError';
import { NOT_FOUND_ERROR } from '@/api/constants';

class NotFoundError extends HttpError {
  constructor(message: string) {
    super('NotFound', NOT_FOUND_ERROR, message);
  }
}

export default NotFoundError;
