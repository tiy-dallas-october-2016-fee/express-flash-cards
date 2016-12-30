'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SetList = function (_React$Component) {
    _inherits(SetList, _React$Component);

    function SetList() {
      _classCallCheck(this, SetList);

      var _this = _possibleConstructorReturn(this, (SetList.__proto__ || Object.getPrototypeOf(SetList)).call(this));

      _this.state = {
        sets: []
      };
      return _this;
    }

    _createClass(SetList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        console.log('component did mount');

        $.ajax({
          url: '/api/sets'
        }).done(function (data) {
          console.log('data back from get', data);
          _this2.setState({
            sets: data.sets
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('rendering set list', this.state.sets.length);

        var noSetsMessaging;
        if (this.state.sets.length === 0) {
          noSetsMessaging = React.createElement(
            'p',
            null,
            'You do not have any sets! Create one.'
          );
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
            { to: '/create-set' },
            'Create new set'
          ),
          React.createElement(
            'ul',
            null,
            this.state.sets.map(function (set) {
              return React.createElement(
                'li',
                { className: 'set', key: set.id },
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
                )
              );
            })
          )
        );
      }
    }]);

    return SetList;
  }(React.Component);

  FC.SetList = SetList;
})();
//# sourceMappingURL=SetList.js.map
