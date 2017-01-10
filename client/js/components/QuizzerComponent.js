if (window.FC === undefined) { window.FC = {}; }

(function() {

  class QuizzerComponent extends React.Component {

    constructor() {
      super();

      this.state = {
        currentCard: 0,
        showFront: true
      }
    }

    createNewQuizState(set) {
      var shuffledCards = _.shuffle(set.cards.slice(0));
      return {
        cards: shuffledCards,
        currentCard: 0,
        showFront: true,
        correctCount: 0,
        incorrectCount: 0
      };
    }

    componentDidMount() {

      var cb = (set) => {
        this.setState(this.createNewQuizState(set));
      };

      FC.UserData.getSet(this.props.params.setId, cb);

    }

    cardClicked() {
      var copiedState = Object.assign({}, this.state);
      copiedState.showFront = !copiedState.showFront;

      this.setState(copiedState);
    }

    markCorrect() {

      var card = this.state.cards[this.state.currentCard];
      card.correctCount += 1;
      FC.UserData.incrementCorrectCountOnCard(this.props.params.setId, card.id, () => {});

      var copiedState = Object.assign({}, this.state);
      copiedState.currentCard += 1;
      copiedState.correctCount += 1;
      this.setState(copiedState);
    }

    markIncorrect() {
      var card = this.state.cards[this.state.currentCard];
      card.incorrectCount += 1;
      FC.UserData.incrementIncorrectCountOnCard(this.props.params.setId, card.id, () => {});

      var copiedState = Object.assign({}, this.state);
      copiedState.currentCard += 1;
      copiedState.incorrectCount += 1;
      this.setState(copiedState);
    }

    render() {
      var cardShower;
      var cardNavigation;
      var summary;

      if (this.state.cards !== undefined && this.state.currentCard != this.state.cards.length) {
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
      else {
        summary = <FC.SummaryComponent
          correct={this.state.correctCount}
          incorrect={this.state.incorrectCount} />
      }

      return <div className="quizzer">
        <h2>The Quizzer</h2>

        {summary}
        {cardShower}
        {cardNavigation}
      </div>
    }

  }

  FC.QuizzerComponent = QuizzerComponent;

})();
