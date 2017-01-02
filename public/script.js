"use strict";

if (window.FC === undefined) {
  window.FC = {};
}

(function () {

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(
      Route,
      { path: "/", component: FC.AppComponent },
      React.createElement(ReactRouter.IndexRoute, { component: FC.SetList }),
      React.createElement(Route, { path: "/cardlist", component: FC.CardList }),
      React.createElement(Route, { path: "/create-set", component: FC.SetEditor }),
      React.createElement(Route, { path: "/set/:setId", component: FC.SetComponent }),
      React.createElement(Route, { path: "/set/:setId/newcard", component: FC.CardEditor }),
      React.createElement(Route, { path: "/set/:setId/quizzer", component: FC.Quizzer })
    )
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=script.js.map
