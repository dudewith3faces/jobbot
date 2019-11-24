import { BotStream, Emit, Events, Route } from './components';
import { allMiddleware, app, hostname, listener, PORT } from './config';

export default class App {
  private readonly route = new Route().route();
  constructor() {
    this.build();
  }

  private build(): void {
    this.event();
    this.middleware();
    this.bot();
    this.api();
    this.listen();
  }

  private middleware(): void {
    app.use(allMiddleware);
  }

  private api(): void {
    app.use(this.route);
  }

  private event(): void {
    (() => new Events())();
  }

  private bot(): void {
    (() => new BotStream())();
  }

  private listen(): void {
    try {
      app.listen(PORT, hostname, listener);
    } catch (e) {
      Emit.error(e);
    }
  }
}
