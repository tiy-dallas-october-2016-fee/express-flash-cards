if (window.FC === undefined) { window.FC = {}; }

(function() {

  class Quizzer extends React.Component {

    constructor() {
      super();

      this.state = {
        currentCard: 0,
        showFront: true
      }
    }

    componentDidMount() {

      var cb = (set) => {
        console.log('callback', set);

        // copy and shuffle array
        var shuffledCards = _.shuffle(set.cards.splice(0));
        console.log('shuffled', shuffledCards);

        this.setState({
          cards: shuffledCards,
          currentCard: 0,
          showFront: true
        });
      };

      FC.UserData.getSet(this.props.params.setId, cb);

    }

    cardClicked() {
      console.log('clickin that card');

      var copiedState = Object.assign({}, this.state);
      copiedState.showFront = !copiedState.showFront;

      this.setState(copiedState);
    }

    markCorrect() {
      console.log('correct!');

      var currentPosition = this.state.currentCard;
      if (currentPosition + 1 >= this.state.cards.length) {
        ReactRouter.browserHistory.goBack();
        return;
      }

      var copiedState = Object.assign({}, this.state);
      copiedState.currentCard += 1;
      this.setState(copiedState);
    }

    markIncorrect() {
      console.log('incorrect!');
      var copiedState = Object.assign({}, this.state);
      copiedState.currentCard += 1;
      this.setState(copiedState);
    }

    render() {

      var cardShower;
      var cardNavigation;
      if (this.state.cards !== undefined) {
        var currentCard = this.state.cards[this.state.currentCard];
        var textToShow = this.state.showFront ? currentCard.front: currentCard.back;

        cardShower = <div>
          <div>Card count: {this.state.cards.length}</div>
          <div
            className="card"
            onClick={(evt) => { this.cardClicked(evt); }}>
            {textToShow}</div>
        </div>


        cardNavigation = <div className="card-navigation">
          <div className="correct" onClick={() => { this.markCorrect();}}>Correct</div>
          <div className="incorrect" onClick={() => {this.markIncorrect();}}>Incorrect</div>
        </div>;
      }

      return <div className="quizzer">
        The Quizzer

        {cardShower}
        {cardNavigation}
      </div>
    }

  }

  FC.Quizzer = Quizzer;

})();