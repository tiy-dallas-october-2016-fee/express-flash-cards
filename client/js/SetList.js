if (window.FC === undefined) { window.FC = {}; }

(function() {

  class SetList extends React.Component {

    constructor() {
      super();

      this.state = {
        sets: []
      }
    }

    componentDidMount() {
      console.log('component did mount');
      this.loadSets();
    }

    loadSets() {

      FC.UserData.loadSets((data) => {
        this.setState({
          sets: data.sets
        });
      });
            
    }

    deleteSet(setId) {
      console.log('deleting set');

      $.ajax({
        url: '/api/sets/' + setId,
        method: 'DELETE'
      })
      .done(() => {
        console.log('done deleting');
        this.loadSets();
      });
    }

    addCards(setId) {
      ReactRouter.hashHistory.push('/set/' + setId);
    }

    render() {
      console.log('rendering set list', this.state.sets.length);

      var noSetsMessaging;
      if (this.state.sets.length === 0) {
        noSetsMessaging = <p>You do not have any sets! Create one.</p>
      }

      return <div className="set-list">
        <h2>Set List</h2>

        {noSetsMessaging}

        <ReactRouter.Link to="/create-set">Create new set</ReactRouter.Link>

        <ul>
        {this.state.sets.map((set) => {
          return <li className="set" key={set.id}>
            <div className="set-name">{set.name}</div>
            <div className="number-of-cards"># of cards: {set.cards.length}</div>
            <p>{set.description}</p>

            <div className="delete-set" onClick={() => {this.deleteSet(set.id)}}>delete</div>
            <div className="add-cards" onClick={() => {this.addCards(set.id)}}>add cards</div>

          </li>
        })}
        </ul>
      </div>;
    }
  }

  FC.SetList = SetList;
})();
