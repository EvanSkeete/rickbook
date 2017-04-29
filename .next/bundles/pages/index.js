
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(49);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(48);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(83);

var _index2 = _interopRequireDefault(_index);

var _apiUtils = __webpack_require__(575);

var _baseComponents = __webpack_require__(574);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/evanskeete/Code/rickbook/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/evanskeete/Code/rickbook/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginPageContainer = exports.PageContainer = exports.SubmitButton = exports.FormInput = exports.LoginForm = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(249);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(554);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: #CCC;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  width: 60%;\n'], ['\n  background: #CCC;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  width: 60%;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background: #FFF;\n  border: 1px solid #929292;\n  box-sizing: border-box;\n  color: #333;\n  font-size: 1.5rem;\n  height: 3rem;\n  line-height: 3rem;\n  margin-bottom: 1rem;\n  padding: 0 2rem;\n  font-weight: 300;\n'], ['\n  background: #FFF;\n  border: 1px solid #929292;\n  box-sizing: border-box;\n  color: #333;\n  font-size: 1.5rem;\n  height: 3rem;\n  line-height: 3rem;\n  margin-bottom: 1rem;\n  padding: 0 2rem;\n  font-weight: 300;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background: #FFF;\n  border: 1px solid #929292;\n  box-sizing: border-box;\n  color: #333;\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 300;\n  height: 3rem;\n  line-height: 3rem;\n  margin-bottom: 1rem;\n  padding: 0 2rem;\n'], ['\n  background: #FFF;\n  border: 1px solid #929292;\n  box-sizing: border-box;\n  color: #333;\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 300;\n  height: 3rem;\n  line-height: 3rem;\n  margin-bottom: 1rem;\n  padding: 0 2rem;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n'], ['\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n'], ['\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n']);

var LoginForm = exports.LoginForm = _styledComponents2.default.form(_templateObject);

var FormInput = exports.FormInput = _styledComponents2.default.input(_templateObject2);

var SubmitButton = exports.SubmitButton = _styledComponents2.default.button(_templateObject3);
var PageContainer = exports.PageContainer = _styledComponents2.default.div(_templateObject4);

var LoginPageContainer = exports.LoginPageContainer = _styledComponents2.default.div(_templateObject5);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/evanskeete/Code/rickbook/client/base-components.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/evanskeete/Code/rickbook/client/base-components.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = undefined;

var _stringify = __webpack_require__(571);

var _stringify2 = _interopRequireDefault(_stringify);

var _fetchPonyfill = __webpack_require__(573);

var _fetchPonyfill2 = _interopRequireDefault(_fetchPonyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _setupFetch = (0, _fetchPonyfill2.default)(),
    fetch = _setupFetch.fetch;

var get = exports.get = function get(url) {
  return fetch(url);
};

var post = exports.post = function post(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: (0, _stringify2.default)(body)
  });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/evanskeete/Code/rickbook/lib/api-utils.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/evanskeete/Code/rickbook/lib/api-utils.js"); } } })();

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(570);


/***/ })

},[576]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9iMWUyMTVkIiwid2VicGFjazovLy8uL2NsaWVudC9iYXNlLWNvbXBvbmVudHMuanM/YjFlMjE1ZCIsIndlYnBhY2s6Ly8vLi9saWIvYXBpLXV0aWxzLmpzP2IxZTIxNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBRUU7O0FBTVA7Ozs7Ozs7QUFHRixJQUFNO3dFQUFRLGlCQUFPLE9BQU8sVUFBZDtRQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ00sb0JBQUssVUFBVSxFQUFFLE9BQUYsT0FBUyxVQUFUOztlQUEzQjtBQURNLDJCQUdaOztnQkFBSSxJQUFJLElBQ047OEJBQU87MEJBR1I7QUFGRztBQUxROztlQUFBO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBUjs7aUNBQUE7NEJBQUE7QUFBQTtBQUFOOztJQVVNOzhDQUNKOzs4QkFBYSxPQUFPO3dDQUFBOzsrSkFFbEI7O1dBQUssUUFDTDtXQUFLLFdBQVc7V0FDakI7Ozs7OzZCQUVTO21CQUNSOzs2QkFBUSwyQ0FBVSxXQUFVLGNBQWE7aUZBQVUsa0JBQU8sR0FBUDs0RUFBQTt3QkFBQTttREFBQTt1QkFDakQ7c0JBQ0E7NEJBQVEsSUFBSSxPQUFLLE9BQU8sT0FDeEI7MEJBQU0sT0FBSyxNQUFNLE9BQU8sT0FBSyxTQUFTOzt1QkFIVzt1QkFBQTtxQ0FBQTs7QUFBQTt5QkFBQTtBQUFWOztnQ0FBQTtxQ0FBQTtBQUFBO0FBQWxDO29CQUFBO3NCQU1MO0FBTks7T0FBQSxrQkFNSjtjQUVDO2NBQ0E7a0JBQVUsa0JBQUMsTUFBVztpQkFBSyxRQUFjO0FBSDNDOztvQkFBQTtzQkFNQTtBQU5BO0FBQ0UsMEJBS0Q7Y0FFQztjQUNBO2tCQUFVLGtCQUFDLE1BQVc7aUJBQUssV0FBaUI7QUFIOUM7b0JBQUE7c0JBS0E7QUFMQTtBQUNFLDBCQUlELDhDQUFhLE1BQUs7b0JBQW5CO3NCQUFBO0FBQUE7U0FHSDs7Ozs7RUE1QjhCLGdCQUFNOztBQStCdkMsSUFBTSxZQUFZO3lCQUNmOztnQkFBRDtrQkFDRTtBQURGO0FBQUEscUJBQ0c7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxtQ0FDRzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBO0FBS047O2tCQUFlLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEZjs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxnQ0FBWSwyQkFBTyxLQVFoQzs7QUFBTyxJQUFNLGdDQUFZLDJCQUFPLE1BYWhDOztBQUFPLElBQU0sc0NBQWUsMkJBQU8sT0FhbkM7QUFBTyxJQUFNLHdDQUFnQiwyQkFBTyxJQVVwQzs7QUFBTyxJQUFNLGtEQUFxQiwyQkFBTyxJQUFsQyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOzs7Ozs7a0JBRVc7SUFBVixvQkFFUjs7QUFBTyxJQUFNLG9CQUFNLGFBQUMsS0FBRDtTQUFTLE1BQU07QUFFbEM7O0FBQU8sSUFBTSxzQkFBTyxjQUFDLEtBQUssTUFBTjtlQUFxQjtZQUV2Qzs7Z0JBRUU7c0JBRUY7QUFIRTtVQUdJLHlCQUFlO0FBTHJCLEdBRGlDO0FBQTVCLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IHBvc3QgfSBmcm9tICdhcGktdXRpbHMuanMnXG5pbXBvcnQge1xuICBGb3JtSW5wdXQsXG4gIExvZ2luRm9ybSxcbiAgTG9naW5QYWdlQ29udGFpbmVyLFxuICBQYWdlQ29udGFpbmVyLFxuICBTdWJtaXRCdXR0b25cbn0gZnJvbSAnYmFzZS1jb21wb25lbnRzLmpzJ1xuXG5jb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgcG9zdCgnL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSlcblxuICBpZiAocmVzLm9rKSB7XG4gICAgUm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvZmVlZCdcbiAgICB9KVxuICB9XG59XG5cbmNsYXNzIExvZ2luRm9ybUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuZW1haWwgPSBudWxsXG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGxcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxMb2dpbkZvcm0gY2xhc3NOYW1lPSdsb2dpbi1mb3JtJyBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc29sZS5sb2codGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZClcbiAgICAgIGxvZ2luKHRoaXMuZW1haWwudmFsdWUsIHRoaXMucGFzc3dvcmQudmFsdWUpXG4gICAgfX0+XG5cbiAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIGlubmVyUmVmPXsoZWxlbSkgPT4geyB0aGlzLmVtYWlsID0gZWxlbSB9fVxuICAgICAgLz5cblxuICAgICAgPEZvcm1JbnB1dFxuICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgIGlubmVyUmVmPXsoZWxlbSkgPT4geyB0aGlzLnBhc3N3b3JkID0gZWxlbSB9fSAvPlxuXG4gICAgICA8U3VibWl0QnV0dG9uIHR5cGU9J3N1Ym1pdCc+bG9naW48L1N1Ym1pdEJ1dHRvbj5cblxuICAgIDwvTG9naW5Gb3JtPlxuICB9XG59XG5cbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IChcbiAgPFBhZ2VDb250YWluZXI+XG4gICAgPExvZ2luUGFnZUNvbnRhaW5lcj5cbiAgICAgIDxMb2dpbkZvcm1Db250YWluZXIgLz5cbiAgICA8L0xvZ2luUGFnZUNvbnRhaW5lcj5cbiAgPC9QYWdlQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IExvZ2luRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzcmVtO1xuICB3aWR0aDogNjAlO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUlucHV0ID0gc3R5bGVkLmlucHV0YFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTI5MjkyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MjkyOTI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBoZWlnaHQ6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAwIDJyZW07XG5gXG5leHBvcnQgY29uc3QgUGFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuYFxuXG5leHBvcnQgY29uc3QgTG9naW5QYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9iYXNlLWNvbXBvbmVudHMuanMiLCJpbXBvcnQgc2V0dXBGZXRjaCBmcm9tICdmZXRjaC1wb255ZmlsbCdcblxuY29uc3QgeyBmZXRjaCB9ID0gc2V0dXBGZXRjaCgpXG5cbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsKSA9PiBmZXRjaCh1cmwpXG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybCwgYm9keSkgPT4gZmV0Y2godXJsLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0sXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwaS11dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        