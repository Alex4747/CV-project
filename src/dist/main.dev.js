"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _store = _interopRequireDefault(require("./vuex/store"));

var _router = _interopRequireDefault(require("./router/router"));

require("material-design-icons-iconfont");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
/* eslint-disable no-new */

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  store: _store["default"],
  router: _router["default"]
}).$mount('#app');