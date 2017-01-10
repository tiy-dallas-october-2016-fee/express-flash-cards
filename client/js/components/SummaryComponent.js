if (window.FC === undefined) { window.FC = {}; }

(function() {

  class SummaryComponent extends React.Component {

    render() {
      return <div className="quiz-summary-component">
        <h2>Summary</h2>

        <p className="correct">Correct: {this.props.correct}</p>
        <p className="incorrect">Incorrect: {this.props.incorrect}</p>

        <div className="summary-choices">
          <div>Quiz again</div>
          <div>Back to set list</div>
        </div>

      </div>
    }

  }

  FC.SummaryComponent = SummaryComponent;

})();
