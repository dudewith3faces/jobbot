import { HttpStatus } from '../../constant';
import { BaseError } from './BaseError';

export class UnauthorisedError extends BaseError {
  constructor() {
    super();
    this.status = HttpStatus.UNAUTHORISED;
    this.name = 'NOT_FOUND';
    this.message = { msg: 'You are unathorised to perform this action' };
  }
}
