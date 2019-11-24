import Router from 'koa-router';
import { BotRoute } from './bot';

export class Route {
  private readonly index = new Router({ prefix: '/api' });
  private readonly bot = new BotRoute().route();

  constructor() {
    this.route();
    this.api();
  }

  public route() {
    return this.index.routes();
  }

  private api() {
    this.index.use(this.bot);
  }
}
