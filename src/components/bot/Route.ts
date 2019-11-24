import Router from 'koa-router';
import { BotController } from './Controller';

export class BotRoute {
  private readonly router = new Router({ prefix: '/bot' });
  constructor() {
    this.get();
    this.post();
    this.delete();
    this.route();
  }

  public route() {
    return this.router.routes();
  }

  private get() {
    /*
     * @route  api/auth/test
     * @desc   Test auth route
     * */
    this.router.get('/test', BotController.test);
  }

  private post() {
    // put post routes here
    this.router.post('/new', BotController.postTweet);
  }

  private delete() {
    // put delete routes here
  }
}
