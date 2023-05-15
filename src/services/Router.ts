import Block from './Block';
import Route from './Route';

export default class Router {
  routes: Array<Route>;
  history: History;
  private _currentRoute: Route | null;
  private _rootQuery: string;
  private static __instance: Router;


  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block): Router {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});

    this.routes.push(route);

    return this;
  }

  start() {
    this._onRoute(window.location.pathname);

    window.onpopstate = (event: PopStateEvent) => {
      this._onRoute((event.currentTarget as Window).location.pathname);
    }
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    if (route) {
      this._currentRoute = route;
      route.render();
    }
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }
}
