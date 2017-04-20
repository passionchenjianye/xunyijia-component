'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(
    'div',
    { style: { padding: '40px' } },
    _react2.default.createElement(
      'h1',
      null,
      '\u65E0\u6743\u9650\u8BBF\u95EE\uFF01'
    ),
    _react2.default.createElement(
      'p',
      null,
      '\u8BF7\u8BBF\u95EE\u6709\u6743\u9650\u7684\u9875\u9762\uFF01'
    )
  );
}
module.exports = exports['default'];