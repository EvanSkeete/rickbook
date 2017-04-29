'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _apiUtils = require('../lib/api-utils.js');

var _baseComponents = require('../client/base-components.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/evanskeete/Code/rickbook/pages/index.js?entry';

var login = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(email, password) {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _apiUtils.post)('/login', { email: email, password: password });

          case 2:
            res = _context.sent;

            if (res.ok) {
              _index2.default.push({
                pathname: '/feed'
              });
            }

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var LoginFormContainer = function (_React$Component) {
  (0, _inherits3.default)(LoginFormContainer, _React$Component);

  function LoginFormContainer(props) {
    (0, _classCallCheck3.default)(this, LoginFormContainer);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (LoginFormContainer.__proto__ || (0, _getPrototypeOf2.default)(LoginFormContainer)).call(this, props));

    _this2.email = null;
    _this2.password = null;
    return _this2;
  }

  (0, _createClass3.default)(LoginFormContainer, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_baseComponents.LoginForm, { className: 'login-form', onSubmit: function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    e.preventDefault();
                    console.log(_this3.email, _this3.password);
                    login(_this3.email.value, _this3.password.value);

                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this3);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }(), __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_baseComponents.FormInput, {
        name: 'email',
        type: 'text',
        innerRef: function innerRef(elem) {
          _this3.email = elem;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_baseComponents.FormInput, {
        name: 'password',
        type: 'password',
        innerRef: function innerRef(elem) {
          _this3.password = elem;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_baseComponents.SubmitButton, { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'login'));
    }
  }]);

  return LoginFormContainer;
}(_react2.default.Component);

var LoginPage = function LoginPage() {
  return _react2.default.createElement(_baseComponents.PageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement(_baseComponents.LoginPageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(LoginFormContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  })));
};

exports.default = LoginPage;