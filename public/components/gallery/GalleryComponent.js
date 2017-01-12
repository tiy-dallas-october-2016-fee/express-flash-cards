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
//# sourceMappingURL=GalleryComponent.js.map
