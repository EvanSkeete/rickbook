
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(49);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(65);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(48);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _taggedTemplateLiteral2 = __webpack_require__(249);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(441);

var _document2 = _interopRequireDefault(_document);

var _StyleSheet = __webpack_require__(555);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _styledComponents = __webpack_require__(554);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/evanskeete/Code/rickbook/pages/_document.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n  font-family: "Helvetica Nueue", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n'], ['\n  margin: 0;\n  font-family: "Helvetica Nueue", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n']);

var Body = _styledComponents2.default.body(_templateObject);

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Rickbook')), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var renderPage = _ref.renderPage;
        var page, styles;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = renderPage();
                styles = _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _StyleSheet2.default.rules().map(function (rule) {
                      return rule.cssText;
                    }).join('\n') }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                });
                return _context.abrupt('return', (0, _extends3.default)({}, page, { styles: styles }));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/evanskeete/Code/rickbook/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/evanskeete/Code/rickbook/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(237);


/***/ })

},[567]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/ODMxYTEwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDd0I7Ozs7QUFDeEI7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVQLElBQU0sT0FBTywyQkFBTyxLQUFwQjs7SUFNcUI7Ozs7Ozs7Ozs7OzZCQVVqQjs2QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHOztvQkFBRDtzQkFDRTtBQURGO0FBQUEseUJBQ0U7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUVGLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRzs7b0JBQUQ7c0JBQ0E7QUFEQTtBQUFBLDBCQUNDOztvQkFBRDtzQkFJUDtBQUpPO0FBQUE7Ozs7OztZQWhCd0I7Ozs7O21CQUN4Qjt1QkFDQTtrRUFDRywyQkFBMkIsNkJBQW1CLFFBQVEsSUFBSTs2QkFBUSxLQUFLO0FBQXBDLHVCQUE2QyxLQUFLLEtBQTVEOzhCQUFoQztnQ0FBQTtBQUFBO2lCQUFBOzRFQUVVLFFBQU0sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5rQjs7a0JBQW5CLFciLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgc3R5bGVTaGVldCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL1N0eWxlU2hlZXQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmJvZHlgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE51ZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVuZGVyUGFnZSB9KSB7XG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoKVxuICAgIGNvbnN0IHN0eWxlcyA9IChcbiAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlU2hlZXQucnVsZXMoKS5tYXAocnVsZSA9PiBydWxlLmNzc1RleHQpLmpvaW4oJ1xcbicpIH19IC8+XG4gICAgKVxuICAgIHJldHVybiB7IC4uLnBhZ2UsIHN0eWxlcyB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlJpY2tib29rPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Qm9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvQm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        