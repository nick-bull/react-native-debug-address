"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addressValidationErrors = void 0;
var addressValidationErrors = {
  invalidPort: {
    name: 'debugAddress:invalidPort',
    message: 'Invalid port specified for debug address'
  },
  invalidHost: {
    name: 'debugAddress:invalidHost',
    message: 'Invalid host specified for debug address'
  }
};
exports.addressValidationErrors = addressValidationErrors;