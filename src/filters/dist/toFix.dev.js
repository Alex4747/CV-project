"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toFix;

function toFix(value) {
  value = parseFloat(value);
  return value.toFixed(2);
}