"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vCatalog = _interopRequireDefault(require("../components/v-catalog"));

var _vCart = _interopRequireDefault(require("../components/v-cart"));

var _vMainPage = _interopRequireDefault(require("../components/main-page/v-main-page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'mainPage',
    component: _vMainPage["default"]
  }, {
    path: '/catalog',
    name: 'catalog',
    component: _vCatalog["default"]
  }, {
    path: '/cart',
    name: 'cart',
    camponent: _vCart["default"],
    props: true
  }]
});
var _default = router;
exports["default"] = _default;