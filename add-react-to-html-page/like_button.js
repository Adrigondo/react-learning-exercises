'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RCE = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = {
      isActive: false
    };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'onClickButton',
    value: function onClickButton() {
      this.setState({
        isActive: !this.state.isActive
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return RCE('button', {
        onClick: function onClick() {
          _this2.onClickButton();
        },
        id: this.props.buttonID
      },
      // this.props.buttonName,
      RCE(function (props) {
        var name = _this2.props.buttonName;
        if (_this2.state.isActive) {
          name += " clicked :)";
        }
        return RCE('span', {}, name);
      }));
    }
  }]);

  return LikeButton;
}(React.Component);

function ButtonsContainer(props) {
  return RCE('div', {}, RCE(LikeButton, { buttonID: 1, buttonName: "Button A" }), RCE(LikeButton, { buttonID: 2, buttonName: "Button B" }), RCE(LikeButton, { buttonID: 3, buttonName: "Button C" }));
}

var domContainer = document.querySelector('#like_button_container');
var root = ReactDOM.createRoot(domContainer);
root.render(RCE(ButtonsContainer));

document.querySelectorAll(".button_container_js").forEach(function (domContainer) {
  var buttonID = parseInt(domContainer.dataset.button_id);
  var buttonName = domContainer.dataset.button_name;
  var root = ReactDOM.createRoot(domContainer);
  root.render(RCE(LikeButton, {
    buttonID: buttonID,
    buttonName: buttonName
  }));
});