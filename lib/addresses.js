"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddressParts = exports.isValidHost = exports.isValidPort = void 0;

var isValidPort = function isValidPort(port) {
  return port > 0 && port < 65535;
};

exports.isValidPort = isValidPort;

var isValidOctet = function isValidOctet(octet) {
  return octet >= 0 && octet <= 255;
};

var isValidIpv4 = function isValidIpv4(ip) {
  var octets = ip.split('.');

  if (octets.length !== 4) {
    return false;
  }

  var numericalOctets = octets.map(Number);
  return numericalOctets.every(isValidOctet);
};

var isValidIpv6 = function isValidIpv6(ip) {
  var octets = ip.split(':');

  if (octets.length !== 6) {
    return false;
  }

  var hexOctets = octets.map(function (octet) {
    return "0x".concat(octet);
  });
  var numericalOctets = hexOctets.map(Number);
  return numericalOctets.every(isValidOctet);
};

var isValidHost = function isValidHost(host) {
  return isValidIpv4(host) || isValidIpv6(host) || host === 'localhost';
};

exports.isValidHost = isValidHost;

var getAddressParts = function getAddressParts(address) {
  var portIdx = address.lastIndexOf(':');
  var isPortInAddress = portIdx !== -1;
  var rawHost = isPortInAddress ? address.substring(0, portIdx) : address;
  var port = isPortInAddress ? Number(address.substring(portIdx + 1)) : undefined;
  var isMaybeWrappedIpv6 = /^\[/.test(rawHost) && /\]$/.test(rawHost);
  var host = isMaybeWrappedIpv6 ? rawHost.slice(1, -1) : rawHost;

  if (isMaybeWrappedIpv6 && !isValidIpv6(host)) {
    throw new Error("Invalid IPv6 '".concat(maybeIpv6, "'"));
  }

  if (!isValidHost(host)) {
    throw new Error("Invalid host '".concat(host, "'"));
  }

  if (port !== undefined && !isValidPort(port)) {
    throw new Error("Invalid port '".concat(port, "'"));
  }

  return {
    host: host,
    port: port
  };
};

exports.getAddressParts = getAddressParts;