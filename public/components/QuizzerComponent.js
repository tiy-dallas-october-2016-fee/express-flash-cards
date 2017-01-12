"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var QuizzerComponent = function (_React$Component) {
    _inherits(QuizzerComponent, _React$Component);

    function QuizzerComponent() {
      _classCallCheck(this, QuizzerComponent);

      var _this = _possibleConstructorReturn(this, (QuizzerComponent.__proto__ || Object.getPrototypeOf(QuizzerComponent)).call(this));

      _this.state = {
        currentCard: 0,
        showFront: true
      };
      return _this;
    }

    _createClass(QuizzerComponent, [{
      key: "createNewQuizState",
      value: function createNewQuizState(set) {
        var shuffledCards = _.shuffle(set.cards.slice(0));
        return {
          cards: shuffledCards,
          currentCard: 0,
          showFront: true,
          correctCount: 0,
          incorrectCount: 0,
          skippedCount: 0
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var cb = function cb(set) {
          _this2.setState(_this2.createNewQuizState(set));
        };

        FC.UserData.getSet(this.props.params.setId, cb);
      }
    }, {
      key: "cardClicked",
      value: function cardClicked() {
        var copiedState = Object.assign({}, this.state);
        copiedState.showFront = !copiedState.showFront;

        this.setState(copiedState);
      }
    }, {
      key: "markCorrect",
      value: function markCorrect() {

        var card = this.state.cards[this.state.currentCard];
        card.correctCount += 1;
        FC.UserData.incrementCorrectCountOnCard(this.props.params.setId, card.id, function () {});

        var copiedState = Object.assign({}, this.state);
        copiedState.currentCard += 1;
        copiedState.correctCount += 1;
        this.setState(copiedState);
      }
    }, {
      key: "markIncorrect",
      value: function markIncorrect() {
        var card = this.state.cards[this.state.currentCard];
        card.incorrectCount += 1;
        FC.UserData.incrementIncorrectCountOnCard(this.props.params.setId, card.id, function () {});

        var copiedState = Object.assign({}, this.state);
        copiedState.currentCard += 1;
        copiedState.incorrectCount += 1;
        this.setState(copiedState);
      }
    }, {
      key: "skip",
      value: function skip() {
        var copiedState = Object.assign({}, this.state);
        copiedState.currentCard += 1;
        copiedState.skippedCount += 1;
        this.setState(copiedState);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var cardShower;
        var cardNavigation;
        var summary;
        var summaryNavigation;

        if (this.state.cards !== undefined && this.state.currentCard != this.state.cards.length) {
          var currentCard = this.state.cards[this.state.currentCard];
          var textToShow = this.state.showFront ? currentCard.front : currentCard.back;

          cardShower = React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              null,
              "Card count: ",
              this.state.cards.length
            ),
            React.createElement(
              "div",
              {
                className: "card",
                onClick: function onClick(evt) {
                  _this3.cardClicked(evt);
                } },
              textToShow
            )
          );

          cardNavigation = React.createElement(
            "div",
            { className: "card-navigation" },
            React.createElement(
              "div",
              { className: "correct", onClick: function onClick() {
                  _this3.markCorrect();
                } },
              "Correct"
            ),
            React.createElement(
              "div",
              { className: "incorrect", onClick: function onClick() {
                  _this3.markIncorrect();
                } },
              "Incorrect"
            ),
            React.createElement(
              "div",
              { className: "skip", onClick: function onClick() {
                  _this3.skip();
                } },
              "Skip"
            )
          );
        } else {
          summary = React.createElement(FC.QuizSummaryComponent, {
            correct: this.state.correctCount,
            incorrect: this.state.incorrectCount,
            skipped: this.state.skippedCount });

          summaryNavigation = React.createElement(
            "div",
            { className: "summary-choices" },
            React.createElement(
              "div",
              null,
              "Quiz again"
            ),
            React.createElement(
              "div",
              null,
              "Back to set list"
            )
          );
        }

        return React.createElement(
          "div",
          { className: "quizzer" },
          React.createElement(
            "h2",
            null,
            "The Quizzer"
          ),
          summary,
          summaryNavigation,
          cardShower,
          cardNavigation
        );
      }
    }]);

    return QuizzerComponent;
  }(React.Component);

  FC.QuizzerComponent = QuizzerComponent;
})();
//# sourceMappingURL=QuizzerComponent.js.map
