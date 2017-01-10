"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SummaryComponent = function (_React$Component) {
    _inherits(SummaryComponent, _React$Component);

    function SummaryComponent() {
      _classCallCheck(this, SummaryComponent);

      return _possibleConstructorReturn(this, (SummaryComponent.__proto__ || Object.getPrototypeOf(SummaryComponent)).apply(this, arguments));
    }

    _createClass(SummaryComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "quiz-summary-component" },
          React.createElement(
            "h2",
            null,
            "Summary"
          ),
          React.createElement(
            "p",
            { className: "correct" },
            "Correct: ",
            this.props.correct
          ),
          React.createElement(
            "p",
            { className: "incorrect" },
            "Incorrect: ",
            this.props.incorrect
          ),
          React.createElement(
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
          )
        );
      }
    }]);

    return SummaryComponent;
  }(React.Component);

  FC.SummaryComponent = SummaryComponent;
})();
//# sourceMappingURL=SummaryComponent.js.map
