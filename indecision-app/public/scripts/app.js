'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);

    // initialize state to handle tracked data
    _this.state = {
      name: 'Julie',
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      /**
       * setState is used to update state, you can't
       * just affect the object directly and have it 
       * re-render
       * 
       * the prevState object is passed in by default, so 
       * you can specify it and use it
       * 
       * you'll return an object setting any of the various state
       * values to update
       */
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count > 0 ? prevState.count - 1 : prevState.count
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      // don't care about prevState for this one
      this.setState(function () {
        return { count: 0 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container mt-5' },
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
