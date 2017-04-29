'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _fetchPonyfill = require('fetch-ponyfill');

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