'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var btnContent = _ref.btnContent,
      cancelAdd = _ref.cancelAdd,
      tips = _ref.tips;

  var arr = [];
  if (tips) {
    arr.push(_react2.default.createElement(_antd.Alert, { key: '0', message: tips, type: 'info', showIcon: true }));
  }
  arr.push(_react2.default.createElement(
    'div',
    { key: '1', style: { 'textAlign': 'center' } },
    _react2.default.createElement(
      _antd.Button,
      { type: 'default', style: {
          marginRight: 40
        }, onClick: cancelAdd },
      '\u53D6\u6D88'
    ),
    _react2.default.createElement(
      _antd.Button,
      { type: 'primary', htmlType: 'submit' },
      btnContent
    )
  ));
  return arr;
};

module.exports = exports['default'];