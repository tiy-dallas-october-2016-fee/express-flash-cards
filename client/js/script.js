if (window.FC === undefined) { window.FC = {}; }

(function() {
  console.log('RR', window.ReactRouter);


  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={FC.AppComponent}>
        <ReactRouter.IndexRoute component={FC.SetList} />
        <Route path="/cardlist" component={FC.CardList} />
        <Route path="/create-set" component={FC.SetEditor} />
      </Route>
    </Router>;


  ReactDOM.render(router, mountNode);
})();
