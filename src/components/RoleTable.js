'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var onEditor = _ref.onEditor,
      roleColumns = _ref.roleColumns,
      onAddRole = _ref.onAddRole;

  var columns = [{
    title: '角色',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '操作',
    key: '_id',
    render: function render(text, record, index) {
      return _react2.default.createElement(
        _antd.Button,
        { type: 'primary', onClick: function onClick() {
            onEditor(text);
          } },
        '\u7F16\u8F91'
      );
    }
  }];
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: '\u89D2\u8272\u7BA1\u7406' }),
    _react2.default.createElement(
      'div',
      { className: 'add-role' },
      _react2.default.createElement(
        'h2',
        { className: 'displayil' },
        '\u89D2\u8272\u7BA1\u7406'
      ),
      _react2.default.createElement(
        _antd.Button,
        { type: 'primary', className: 'fr', onClick: onAddRole },
        '\u65B0\u589E\u89D2\u8272'
      )
    ),
    _react2.default.createElement(_antd.Table, { columns: columns, dataSource: roleColumns, pagination: false, rowKey: function rowKey(item) {
        return item['_id'];
      } })
  );
};

module.exports = exports['default'];