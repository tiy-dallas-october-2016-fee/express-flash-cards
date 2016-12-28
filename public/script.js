'use strict';

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  console.log('RR', window.ReactRouter);

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(
      Route,
      { path: '/', component: FC.AppComponent },
      React.createElement(ReactRouter.IndexRoute, { component: FC.SetList }),
      React.createElement(Route, { path: '/cardlist', component: FC.CardList })
    )
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=script.js.map
