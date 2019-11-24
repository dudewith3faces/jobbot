import { filter, T } from '../../config';
import { IRetweet } from '../../Interface';
import { logger } from '../others';
import { BotHandler } from './Handler';

export class BotStream {
  constructor() {
    this.build();
  }
  private build() {
    this.stream();
    logger.info('Bot is live');
  }

  private async stream() {
    try {
      this.filter();
    } catch (e) {
      logger.error(e);
    }
  }

  // private async search({ q, result_type = 'recent' }: Params) {
  //   try {
  //     /**
  //      * Nigeria boundry box gotten from
  //      * https://gist.github.com/graydon/11198540
  //      */
  //     const locations = [
  //       '2.69170169436',
  //       '4.24059418377',
  //       '14.5771777686',
  //       '13.8659239771',
  //     ];
  //     const {
  //       data: { statuses },
  //     }: IParams<ISearch> = (await T.get('search/tweets', {
  //       // @ts-ignore: add location box
  //       locations,
  //       q,
  //       result_type,
  //     })) as any;
  //     logger.info(statuses);
  //     return statuses;
  //   } catch (e) {
  //     logger.error(e);
  //   }
  // }

  private filter() {
    try {
      T.stream('statuses/filter', filter).on('tweet', (tweet: IRetweet) =>
        BotHandler.formatMessage(tweet),
      );
    } catch (e) {
      logger.error(e);
    }
  }
}
