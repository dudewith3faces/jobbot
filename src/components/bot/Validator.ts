import { BadRequest } from '../others';

export class Validator {
  public static tweet(status: string) {
    status = status ? status : '';

    if (status.length > 240) throw new BadRequest({ msg: 'Tweet is too long' });
  }
}
