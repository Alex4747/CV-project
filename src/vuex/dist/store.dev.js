"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: []
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX: function SET_SEARCH_VALUE_TO_VUEX(state, value) {
      state.searchValue = value;
    },
    SWITCH_MOBILE: function SWITCH_MOBILE(state) {
      state.isMobile = true;
      state.isDesktop = false;
    },
    SWITCH_DESKTOP: function SWITCH_DESKTOP(state) {
      state.isMobile = false;
      state.isDesktop = true;
    },
    SET_PRODUCTS_TO_STATE: function SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
    SET_CART: function SET_CART(state, product) {
      if (state.cart.length) {
        var isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });

        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: function REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    },
    INCREMENT: function INCREMENT(state, index) {
      state.cart[index].quantity++;
    },
    DECREMENT: function DECREMENT(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    }
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX: function GET_SEARCH_VALUE_TO_VUEX(_ref, value) {
      var commit = _ref.commit;
      commit('SET_SEARCH_VALUE_TO_VUEX', value);
    },
    GET_PRODUCTS_FROM_API: function GET_PRODUCTS_FROM_API(_ref2) {
      var commit = _ref2.commit;
      return (0, _axios["default"])('http://localhost:3000/products', {
        method: "GET"
      }).then(function (products) {
        commit("SET_PRODUCTS_TO_STATE", products.data);
        return products;
      })["catch"](function (error) {
        console.log(error);
        return error;
      });
    },
    ADD_TO_CART: function ADD_TO_CART(_ref3, product) {
      var commit = _ref3.commit;
      commit('SET_CART', product);
    },
    INCREMENT_CART_ITEM: function INCREMENT_CART_ITEM(_ref4, index) {
      var commit = _ref4.commit;
      commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM: function DECREMENT_CART_ITEM(_ref5, index) {
      var commit = _ref5.commit;
      commit('DECREMENT', index);
    },
    DELETE_FROM_CART: function DELETE_FROM_CART(_ref6, index) {
      var commit = _ref6.commit;
      commit('REMOVE_FROM_CART', index);
    },
    SET_MOBILE: function SET_MOBILE(_ref7) {
      var commit = _ref7.commit;
      commit('SWITCH_MOBILE');
    },
    SET_DESKTOP: function SET_DESKTOP(_ref8) {
      var commit = _ref8.commit;
      commit('SWITCH_DESKTOP');
    }
  },
  getters: {
    SEARCH_VALUE: function SEARCH_VALUE(state) {
      return state.searchValue;
    },
    PRODUCTS: function PRODUCTS(state) {
      return state.products;
    },
    CART: function CART(state) {
      return state.cart;
    },
    IS_MOBILE: function IS_MOBILE(state) {
      return state.isMobile;
    },
    IS_DESKTOP: function IS_DESKTOP(state) {
      return state.isDesktop;
    }
  }
});
var _default = store;
exports["default"] = _default;