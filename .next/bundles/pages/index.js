
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

var _apiUtils = __webpack_require__(563);

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

var LoginPage = function (_React$Component) {
  (0, _inherits3.default)(LoginPage, _React$Component);

  function LoginPage(props) {
    (0, _classCallCheck3.default)(this, LoginPage);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (LoginPage.__proto__ || (0, _getPrototypeOf2.default)(LoginPage)).call(this, props));

    _this2.email = '';
    _this2.password = '';
    return _this2;
  }

  (0, _createClass3.default)(LoginPage, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('form', { onSubmit: function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    e.preventDefault();
                    login(_this3.email.value, _this3.password.value);

                  case 2:
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
          lineNumber: 24
        }
      }, _react2.default.createElement('input', { name: 'email', type: 'text', ref: function ref(elem) {
          _this3.email = elem;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('input', { name: 'password', type: 'password', ref: function ref(elem) {
          _this3.password = elem;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Login'));
    }
  }]);

  return LoginPage;
}(_react2.default.Component);

exports.default = LoginPage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/evanskeete/Code/rickbook/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/evanskeete/Code/rickbook/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = undefined;

var _stringify = __webpack_require__(560);

var _stringify2 = _interopRequireDefault(_stringify);

var _fetchPonyfill = __webpack_require__(562);

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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[564]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz8yOWE0MmQyIiwid2VicGFjazovLy8uL2xpYi9hcGktdXRpbHMuanM/MjlhNDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFFRTs7Ozs7OztBQUVULElBQU07d0VBQVEsaUJBQU8sT0FBTyxVQUFkO1FBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDTSxvQkFBSyxVQUFVLEVBQUUsT0FBRixPQUFTLFVBQVQ7O2VBQTNCO0FBRE0sMkJBR1o7O2dCQUFJLElBQUksSUFDTjs4QkFBTzswQkFHUjtBQUZHO0FBTFE7O2VBQUE7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFSOztpQ0FBQTs0QkFBQTtBQUFBO0FBQU47O0lBVU07cUNBQ0o7O3FCQUFhLE9BQU87d0NBQUE7OzZJQUVsQjs7V0FBSyxRQUNMO1dBQUssV0FBVztXQUNqQjs7Ozs7NkJBRVM7bUJBQ1I7OzZCQUFPLHdCQUFNO2lGQUFVLGtCQUFPLEdBQVA7NEVBQUE7d0JBQUE7bURBQUE7dUJBQ3JCO3NCQUNBOzBCQUFNLE9BQUssTUFBTSxPQUFPLE9BQUssU0FBUzs7dUJBRmpCO3VCQUFBO3FDQUFBOztBQUFBO3lCQUFBO0FBQVY7O2dDQUFBO3FDQUFBO0FBQUE7QUFBTjtvQkFBQTtzQkFJTDtBQUpLO09BQUEsMkNBSUUsTUFBSyxTQUFRLE1BQUssUUFBTyxLQUFLLGFBQUMsTUFBVztpQkFBSyxRQUFjO0FBQXBFO29CQUFBO3NCQUNBO0FBREE7bURBQ08sTUFBSyxZQUFXLE1BQUssWUFBVyxLQUFLLGFBQUMsTUFBVztpQkFBSyxXQUFpQjtBQUE5RTtvQkFBQTtzQkFDQTtBQURBOzBCQUNBLDBCQUFRLE1BQUs7b0JBQWI7c0JBQUE7QUFBQTtTQUVIOzs7OztFQWhCcUIsZ0JBbUJ4Qjs7a0JBQWUsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENSOzs7Ozs7a0JBRVc7SUFBVixvQkFFUjs7QUFBTyxJQUFNLG9CQUFNLGFBQUMsS0FBRDtTQUFTLE1BQU07QUFFbEM7O0FBQU8sSUFBTSxzQkFBTyxjQUFDLEtBQUssTUFBTjtlQUFxQjtZQUV2Qzs7Z0JBRUU7c0JBRUY7QUFIRTtVQUdJLHlCQUFlO0FBTHJCLEdBRGlDO0FBQTVCLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IHBvc3QgfSBmcm9tICdhcGktdXRpbHMuanMnXG5cbmNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBwb3N0KCcvbG9naW4nLCB7IGVtYWlsLCBwYXNzd29yZCB9KVxuXG4gIGlmIChyZXMub2spIHtcbiAgICBSb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9mZWVkJ1xuICAgIH0pXG4gIH1cbn1cblxuY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5lbWFpbCA9ICcnXG4gICAgdGhpcy5wYXNzd29yZCA9ICcnXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8Zm9ybSBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbG9naW4odGhpcy5lbWFpbC52YWx1ZSwgdGhpcy5wYXNzd29yZC52YWx1ZSlcbiAgICB9fT5cbiAgICAgIDxpbnB1dCBuYW1lPSdlbWFpbCcgdHlwZT0ndGV4dCcgcmVmPXsoZWxlbSkgPT4geyB0aGlzLmVtYWlsID0gZWxlbSB9fSAvPlxuICAgICAgPGlucHV0IG5hbWU9J3Bhc3N3b3JkJyB0eXBlPSdwYXNzd29yZCcgcmVmPXsoZWxlbSkgPT4geyB0aGlzLnBhc3N3b3JkID0gZWxlbSB9fSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZ2luPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgc2V0dXBGZXRjaCBmcm9tICdmZXRjaC1wb255ZmlsbCdcblxuY29uc3QgeyBmZXRjaCB9ID0gc2V0dXBGZXRjaCgpXG5cbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsKSA9PiBmZXRjaCh1cmwpXG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybCwgYm9keSkgPT4gZmV0Y2godXJsLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0sXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwaS11dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        