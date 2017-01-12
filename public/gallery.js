"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var AppComponent = function (_React$Component) {
    _inherits(AppComponent, _React$Component);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          this.props.children
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  FC.AppComponent = AppComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var CardEditorComponent = function (_React$Component) {
    _inherits(CardEditorComponent, _React$Component);

    function CardEditorComponent() {
      _classCallCheck(this, CardEditorComponent);

      return _possibleConstructorReturn(this, (CardEditorComponent.__proto__ || Object.getPrototypeOf(CardEditorComponent)).apply(this, arguments));
    }

    _createClass(CardEditorComponent, [{
      key: "submitCard",
      value: function submitCard(evt) {
        evt.preventDefault();

        var cb = function cb() {
          ReactRouter.browserHistory.goBack();
        };

        FC.UserData.addCardToSet(this.props.params.setId, this.frontInput.value, this.backInput.value, cb);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          { className: "card-editor" },
          React.createElement(
            "h2",
            null,
            "The Card Editor"
          ),
          React.createElement(
            "form",
            { onSubmit: function onSubmit(evt) {
                _this2.submitCard(evt);
              } },
            React.createElement("input", { placeholder: "front", ref: function ref(input) {
                _this2.frontInput = input;
              } }),
            React.createElement("input", { placeholder: "back", ref: function ref(input) {
                _this2.backInput = input;
              } }),
            React.createElement(
              "button",
              null,
              "Save"
            )
          )
        );
      }
    }]);

    return CardEditorComponent;
  }(React.Component);

  FC.CardEditorComponent = CardEditorComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {

  var canvasHeight = 100;
  var canvasTopPadding = 10;
  var canvasHorizontalPadding = 10;
  var canvasBarWidth = 60;
  var availableDrawHeight = 90;
  var correctColor = '#367c27';
  var incorrectColor = '#F00';
  var skippedColor = '#000';

  var QuizSummaryComponent = function (_React$Component) {
    _inherits(QuizSummaryComponent, _React$Component);

    function QuizSummaryComponent() {
      _classCallCheck(this, QuizSummaryComponent);

      return _possibleConstructorReturn(this, (QuizSummaryComponent.__proto__ || Object.getPrototypeOf(QuizSummaryComponent)).apply(this, arguments));
    }

    _createClass(QuizSummaryComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var ctx = this.canvas.getContext('2d');

        this.drawBar(this.props.correct / 10, correctColor, 0, ctx);
        this.drawBar(this.props.incorrect / 10, incorrectColor, 1, ctx);
        this.drawBar(this.props.skipped / 10, skippedColor, 2, ctx);
      }
    }, {
      key: 'drawBar',
      value: function drawBar(percentageHeight, color, spot, ctx) {
        console.log(percentageHeight);

        var barHeight = availableDrawHeight * percentageHeight;
        var xloc = canvasBarWidth * spot + canvasHorizontalPadding * (spot + 1);
        var yloc = canvasHeight - barHeight;

        ctx.fillStyle = color;
        console.log('draw at x', xloc);
        ctx.fillRect(xloc, yloc, canvasBarWidth, barHeight);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React.createElement(
          'div',
          { className: 'quiz-summary-component' },
          React.createElement(
            'h2',
            null,
            'Summary'
          ),
          React.createElement(
            'p',
            { className: 'correct', style: { color: correctColor } },
            'Correct: ',
            this.props.correct
          ),
          React.createElement(
            'p',
            { className: 'incorrect', style: { color: incorrectColor } },
            'Incorrect: ',
            this.props.incorrect
          ),
          React.createElement(
            'p',
            { className: 'skipped', style: { color: skippedColor } },
            'Skipped: ',
            this.props.skipped
          ),
          React.createElement('canvas', { width: '220', height: canvasHeight, ref: function ref(dom) {
              _this2.canvas = dom;
            } })
        );
      }
    }]);

    return QuizSummaryComponent;
  }(React.Component);

  FC.QuizSummaryComponent = QuizSummaryComponent;
})();
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
        var sliceEnd = 10;
        if (shuffledCards.length < 10) {
          slideEnd = shuffledCards.length;
        }
        shuffledCards = shuffledCards.slice(0, sliceEnd);
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SetEditorComponent = function (_React$Component) {
    _inherits(SetEditorComponent, _React$Component);

    function SetEditorComponent() {
      _classCallCheck(this, SetEditorComponent);

      return _possibleConstructorReturn(this, (SetEditorComponent.__proto__ || Object.getPrototypeOf(SetEditorComponent)).apply(this, arguments));
    }

    _createClass(SetEditorComponent, [{
      key: 'submitSet',
      value: function submitSet(evt) {
        evt.preventDefault();

        $.ajax({
          url: '/api/sets',
          method: 'POST',
          data: {
            name: this.nameInput.value,
            description: this.descriptionInput.value
          }
        }).done(function (data) {
          ReactRouter.browserHistory.goBack();
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React.createElement(
          'div',
          { className: 'set-editor' },
          React.createElement(
            'h2',
            null,
            'Set Editor'
          ),
          React.createElement(
            'form',
            { onSubmit: function onSubmit(evt) {
                _this2.submitSet(evt);
              } },
            React.createElement('input', { placeholder: 'name', ref: function ref(input) {
                _this2.nameInput = input;
              } }),
            React.createElement('input', { placeholder: 'description', ref: function ref(input) {
                _this2.descriptionInput = input;
              } }),
            React.createElement(
              'button',
              null,
              'Save'
            )
          )
        );
      }
    }]);

    return SetEditorComponent;
  }(React.Component);

  FC.SetEditorComponent = SetEditorComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SetListComponent = function (_React$Component) {
    _inherits(SetListComponent, _React$Component);

    function SetListComponent() {
      _classCallCheck(this, SetListComponent);

      var _this = _possibleConstructorReturn(this, (SetListComponent.__proto__ || Object.getPrototypeOf(SetListComponent)).call(this));

      _this.state = {
        sets: [],
        sortBy: 'name'
      };
      return _this;
    }

    _createClass(SetListComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.loadSets();
      }
    }, {
      key: 'loadSets',
      value: function loadSets() {
        var _this2 = this;

        FC.UserData.loadSets(function (data) {
          _this2.setState({
            sets: data.sets,
            sortBy: _this2.state.sortBy
          });
        });
      }
    }, {
      key: 'sortByName',
      value: function sortByName() {
        var clonedArray = this.state.sets.slice(0);
        clonedArray = clonedArray.sort(function (a, b) {
          return a.name > b.name;
        });

        this.setState({
          sets: clonedArray,
          sortBy: 'name'
        });
      }
    }, {
      key: 'sortByCardCount',
      value: function sortByCardCount() {
        var clonedArray = this.state.sets.slice(0);
        clonedArray = clonedArray.sort(function (a, b) {
          return a.cards.length < b.cards.length;
        });

        this.setState({
          sets: clonedArray,
          sortBy: 'cardCount'
        });
      }
    }, {
      key: 'deleteSet',
      value: function deleteSet(setId) {
        var _this3 = this;

        $.ajax({
          url: '/api/sets/' + setId,
          method: 'DELETE'
        }).done(function () {
          _this3.loadSets();
        });
      }
    }, {
      key: 'addCards',
      value: function addCards(setId) {
        ReactRouter.hashHistory.push('/set/' + setId);
      }
    }, {
      key: 'navigateToQuiz',
      value: function navigateToQuiz(setId) {
        ReactRouter.hashHistory.push('/set/' + setId + '/quizzer');
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var noSetsMessaging;
        if (this.state.sets.length === 0) {
          noSetsMessaging = React.createElement(
            'p',
            null,
            'You do not have any sets! Create one.'
          );
        }

        var sortingClass = 'sorting ';
        if (this.state.sortBy === 'name') {
          sortingClass += 'by-name';
        } else {
          sortingClass += 'by-count';
        }

        return React.createElement(
          'div',
          { className: 'set-list' },
          React.createElement(
            'h2',
            null,
            'Set List'
          ),
          noSetsMessaging,
          React.createElement(
            ReactRouter.Link,
            { to: '/create-set', className: 'create-set' },
            'Create new set'
          ),
          React.createElement(
            'div',
            { className: sortingClass },
            React.createElement(
              'div',
              { className: 'by-name', onClick: function onClick() {
                  return _this4.sortByName();
                } },
              'by name'
            ),
            React.createElement(
              'div',
              { className: 'by-card-count', onClick: function onClick() {
                  return _this4.sortByCardCount();
                } },
              'by # of cards'
            )
          ),
          React.createElement(
            'ul',
            null,
            this.state.sets.map(function (set, index) {
              return React.createElement(
                'li',
                { key: set.id, className: 'set' },
                React.createElement(
                  'div',
                  { className: 'set-name' },
                  set.name
                ),
                React.createElement(
                  'div',
                  { className: 'number-of-cards' },
                  '# of cards: ',
                  set.cards.length
                ),
                React.createElement(
                  'p',
                  null,
                  set.description
                ),
                React.createElement(
                  'div',
                  { className: 'button delete-set', onClick: function onClick() {
                      _this4.deleteSet(set.id);
                    } },
                  'delete'
                ),
                React.createElement(
                  'div',
                  { className: 'button add-cards', onClick: function onClick() {
                      _this4.addCards(set.id);
                    } },
                  'add cards'
                ),
                React.createElement(
                  'div',
                  { className: 'button quiz', onClick: function onClick() {
                      _this4.navigateToQuiz(set.id);
                    } },
                  'quiz'
                )
              );
            })
          )
        );
      }
    }]);

    return SetListComponent;
  }(React.Component);

  FC.SetListComponent = SetListComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SetViewComponent = function (_React$Component) {
    _inherits(SetViewComponent, _React$Component);

    function SetViewComponent() {
      _classCallCheck(this, SetViewComponent);

      var _this = _possibleConstructorReturn(this, (SetViewComponent.__proto__ || Object.getPrototypeOf(SetViewComponent)).call(this));

      _this.state = {
        name: '',
        cards: []
      };
      return _this;
    }

    _createClass(SetViewComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var cb = function cb(set) {
          _this2.setState({
            name: set.name,
            cards: set.cards
          });
        };

        FC.UserData.getSet(this.props.params.setId, cb);
      }
    }, {
      key: "render",
      value: function render() {

        var cardList;
        if (this.state.cards.length === 0) {
          cardList = React.createElement(
            "div",
            null,
            "You have no cards."
          );
        } else {
          cardList = React.createElement(
            "ul",
            null,
            this.state.cards.map(function (card) {
              return React.createElement(
                "li",
                { key: card.id, className: "card" },
                React.createElement(
                  "div",
                  { className: "front" },
                  "Front: ",
                  card.front
                ),
                React.createElement(
                  "div",
                  { className: "back" },
                  "Back: ",
                  card.back
                )
              );
            })
          );
        }

        return React.createElement(
          "div",
          { className: "set-component" },
          React.createElement(
            "h2",
            null,
            "Set: ",
            this.state.name,
            " (id: ",
            this.props.params.setId,
            ")"
          ),
          React.createElement(
            "div",
            { className: "controls" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/set/' + this.props.params.setId + '/newcard' },
                  "Add a New Card"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/set/' + this.props.params.setId + '/quizzer' },
                  "Quizzer"
                )
              )
            )
          ),
          cardList
        );
      }
    }]);

    return SetViewComponent;
  }(React.Component);

  FC.SetViewComponent = SetViewComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {

  var mountNode = document.querySelector('#react-root');

  var GalleryComponent = function (_React$Component) {
    _inherits(GalleryComponent, _React$Component);

    function GalleryComponent() {
      _classCallCheck(this, GalleryComponent);

      return _possibleConstructorReturn(this, (GalleryComponent.__proto__ || Object.getPrototypeOf(GalleryComponent)).apply(this, arguments));
    }

    _createClass(GalleryComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Gallery'
          ),
          React.createElement(FC.QuizSummaryComponent, {
            correct: 5,
            incorrect: 5,
            skipped: 0
          }),
          React.createElement(FC.QuizSummaryComponent, {
            correct: 2,
            incorrect: 1,
            skipped: 7
          })
        );
      }
    }]);

    return GalleryComponent;
  }(React.Component);

  ReactDOM.render(React.createElement(GalleryComponent, null), mountNode);
})();
//# sourceMappingURL=gallery.js.map
