import { BaseContext } from 'koa';
import { PromiseResponse } from 'twit';

export interface IContext extends BaseContext {
  request: { body?: { status: string }; header: { postSecret: string } };
}

export interface IResponse {
  msg: string;
}

export interface ILog {
  dirname: string;
  filename: string;
  level: string;
}

export interface IStatus {
  status: string;
}

// @ts-ignore
export interface IParams<T> extends PromiseResponse {
  data: T;
}

export interface ISearch extends ISearchMetadata {
  statuses: ITweet[];
}

export interface ITweet {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: ITweetEntities;
  metadata: ITweetMetadata;
  source: string;
  in_reply_to_status_id: number;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id: number;
  in_reply_to_user_id_str: string;
  in_reply_to_screen_name: string;
  user: IUser;
  geo: undefined;
  coordinates: undefined;
  place: undefined;
  contributors: undefined;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string;
}

export interface IURL {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface ITweetEntities {
  hashtags: string[];
  urls: URL[];
  user_mentions: IUserMention[];
  symbols: string[];
}

export interface ITweetMetadata {
  iso_language_code: string;
  result_type: string;
}

export interface IUser {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: IUserEntities;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: string;
  time_zone: string;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: string;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
}

export interface IUserEntities {
  description: IDescription;
}

export interface IDescription {
  urls: IURL[];
}

export interface ISearchMetadata {
  search_metadata: ISearchMetadataClass;
}

export interface ISearchMetadataClass {
  completed_in: number;
  max_id: number;
  max_id_str: string;
  next_results: string;
  query: string;
  refresh_url: string;
  count: number;
  since_id: number;
  since_id_str: string;
}

/* RETWEET */

export interface IRetweet extends ITweet {
  retweeted_status: IRetweetedStatus;
}

export interface IUserMention {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

export interface IRetweetedStatus extends ITweet {
  extended_tweet: IExtendedTweet;
  entities: ITweetEntities;
}

export interface IExtendedTweet {
  full_text: string;
  display_text_range: number[];
  entities: ITweetEntities;
}
