"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDebugPort = exports.setDebugPort = exports.getDebugAddress = exports.setDebugAddress = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _reactNative = require("react-native");

var _addresses = require("./addresses");

var _addressErrors = require("./addressErrors");

var DebugAddress = _reactNative.NativeModules.DebugAddress;
/**
 * Sets the debug address for the server
 *
 * @param {string} host The host of the debug server
 * @param {int} port The port of the debug server
 */

var setDebugAddress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(address) {
    var _ref2, host, port;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = typeof address === 'string' ? (0, _addresses.getAddressParts)(address) : address, host = _ref2.host, port = _ref2.port;

            if ((0, _addresses.isValidPort)(port)) {
              _context.next = 3;
              break;
            }

            throw new Error(_addressErrors.addressErrors.invalidPort);

          case 3:
            if ((0, _addresses.isValidHost)(host)) {
              _context.next = 5;
              break;
            }

            throw new Error(_addressErrors.addressErrors.invalidHost);

          case 5:
            _context.next = 7;
            return DebugAddress.setDebugAddress("".concat(host, ":").concat(port));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setDebugAddress(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Gets the debug address for the server
 *
 * @returns {string} The debug address (host and port) for the server
 */


exports.setDebugAddress = setDebugAddress;

var getDebugAddress = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return DebugAddress.getDebugAddress();

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDebugAddress() {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Sets the debug port for the server
 *
 * @param {int} port The port of the debug server
 */


exports.getDebugAddress = getDebugAddress;

var setDebugPort = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(port) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (_addresses.isValidPort) {
              _context3.next = 2;
              break;
            }

            throw new Error(errors.port);

          case 2:
            _context3.next = 4;
            return DebugAddress.setDebugAddress(port);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function setDebugPort(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Gets the debug port for the server
 *
 * @returns {int} The port of the debug server
 */


exports.setDebugPort = setDebugPort;

var getDebugPort = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var debugAddress, _getAddressParts, port;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getDebugAddress();

          case 2:
            debugAddress = _context4.sent;
            _getAddressParts = (0, _addresses.getAddressParts)(debugAddress), port = _getAddressParts.port;
            return _context4.abrupt("return", port);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getDebugPort() {
    return _ref5.apply(this, arguments);
  };
}();

exports.getDebugPort = getDebugPort;