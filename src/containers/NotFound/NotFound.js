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
      '\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\uFF01'
    ),
    _react2.default.createElement(
      'p',
      null,
      '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7F51\u5740\uFF01'
    )
  );
}
module.exports = exports['default'];