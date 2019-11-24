import { BaseContext } from 'koa';
import { postSecret } from '../../config';
import { IContext, IResponse } from '../../interface';
import { UnauthorisedError } from '../others';
import { BotHandler } from './Handler';
import { Validator } from './Validator';

export class BotController {
  /**
   * FIXME: remove test route once other routes are added.
   * test with mocha, and chai
   */
  public static test(ctx: BaseContext) {
    try {
      const res = {} as IResponse;

      res.msg = 'auth test route work';

      ctx.status = 200;
      ctx.body = res;
    } catch (e) {
      throw e;
    }
  }

  public static async postTweet(ctx: IContext) {
    const { status } = ctx.request.body;
    try {
      if (ctx.request.header.postSecret !== postSecret)
        throw new UnauthorisedError();
      Validator.tweet(status);

      await BotHandler.postTweet({ status });

      ctx.status = 200;
      ctx.body = { msg: 'Tweet sent!' };
    } catch (e) {
      throw e;
    }
  }
}
