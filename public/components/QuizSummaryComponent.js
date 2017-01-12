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
//# sourceMappingURL=QuizSummaryComponent.js.map
