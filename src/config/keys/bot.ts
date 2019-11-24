import { config } from 'dotenv';
import { Params } from 'twit';

config();

const {
  access_token,
  access_token_secret,
  consumer_key,
  consumer_secret,
  trackTweet,
  postSecret,
} = process.env;

if (!access_token || !access_token_secret || !consumer_key || !consumer_secret)
  throw new Error('Provide twitter consumer keys and access token');

const twitKeys = {
  access_token,
  access_token_secret,
  consumer_key,
  consumer_secret,
};

const track = trackTweet.split('|');

const screenName = 'abothasnoface';

const filter: Params = {
  // lat: 6.5244,
  // long: 3.3792,
  // @ts-ignore: add location box; Nigeria location box
  locations: [
    '2.69170169436',
    '4.24059418377',
    '14.5771777686',
    '13.8659239771',
  ],
  result_type: 'mixed',
  track,
};

export { screenName, filter, twitKeys, postSecret };
