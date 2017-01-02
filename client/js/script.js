if (window.FC === undefined) { window.FC = {}; }

(function() {

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={FC.AppComponent}>
        <ReactRouter.IndexRoute component={FC.SetList} />
        <Route path="/cardlist" component={FC.CardList} />
        <Route path="/create-set" component={FC.SetEditor} />
        <Route path="/set/:setId" component={FC.SetComponent} />
        <Route path="/set/:setId/newcard" component={FC.CardEditor} />
        <Route path="/set/:setId/quizzer" component={FC.Quizzer} />
      </Route>
    </Router>;


  ReactDOM.render(router, mountNode);
})();
