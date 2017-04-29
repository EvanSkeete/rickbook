'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginPageContainer = exports.PageContainer = exports.SubmitButton = exports.FormInput = exports.LoginForm = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

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