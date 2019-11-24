import { screenName, T } from '../../config';
import { IRetweet, IStatus, ITweet } from '../../Interface';
import { logger } from '../others';
import tweets from './tweets';

export class BotHandler {
  public static async postTweet({ status }: IStatus) {
    try {
      await new Promise((resolve) =>
        setTimeout(async () => {
          await T.post('statuses/update', { status });
          return resolve();
        }, Math.floor(Math.random() * 300000)),
      );
      return;
    } catch (e) {
      throw e;
    }
  }

  public static async formatMessage({
    retweeted_status,
    ...other
  }: IRetweet): Promise<void> {
    let status;
    try {
      if (other.user.screen_name.toLowerCase() === screenName) return;

      switch (Boolean(retweeted_status)) {
        case true:
          break;
        case false: {
          status = this.handleTweet(other);
          break;
        }
      }
      if (!status) return;

      await this.postTweet({ status });
      return;
    } catch (e) {
      throw e;
    }
  }

  private static handleTweet({
    text,
    user: { screen_name },
  }: ITweet): string | undefined {
    let status;
    if (screenName.toLowerCase() === screen_name.toLowerCase()) return;

    if (text.toLowerCase().includes('#jobbot')) return;

    const umemployReg = /ˆ(?=.*nysc)(?=.*depression)(?=.*job)/gim;
    if (umemployReg.test(text)) {
      const i = Math.floor(Math.random() * tweets.unemployment.length);
      status = tweets.unemployment[i].replace(/\?/, `@${screen_name}`);
    }

    /*
     * const jobReg =
     * /ˆ((?=.*(#)?hiring)|((?=.*(#)?vacant)((?=.*(#)?position)|(?=.*(#)?role)|(?=.*(#)?job))))/gim;
     */
    const jobReg = /hiring|vacancies|vacany|send your cv|send your resume/;

    if (jobReg.test(text)) {
      status = text + `\n\nBy @${screen_name} #jobBot.`;
      if (status.length > 240) status = text + ' #jobBot.';
    }
    return status;
  }
}
