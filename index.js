import {NativeModules} from 'react-native';

const {DebugAddress} = NativeModules;

/**
 * Sets the debug address for the server
 *
 * @param {string} host The host of the debug server
 * @param {int} port The port of the debug server
 */
export const setDebugAddress = async (host = '127.0.0.1', port = 8081) => {
  const portIdx = host.lastIndexOf(':');
  const isPortInHost = portIdx !== -1;

  const resolvedPort = (isPortInHost) ? host.substring(portIdx + 1) : port;
  const resolvedHost = (isPortInHost) ? host.substring(0, portIdx) : host;

  const isValidPort = resolvedPort > 0 && resolvedPort < 65535;

  if (!isValidPort) {
    throw new Error('Invalid port specified for debug address');
  }

  const isValidOctet = octet => octet >= 0 && octet <= 255;
  
  const hostIpv4Octets = resolvedHost.split('.');
  const isValidIpv4Host = hostIpv4Octets.every(isValidOctet);

  const hostIpv6Octets = resolvedHost.split(':');
  const isValidIpv4Host = hostIpv6Octets.every(isValidOctet);

  const isLocalhost = resolvedHost === 'localhost';

  if (!isValidIpv4Host || !isValidIpv6Host || !isLocalhost) {
    throw new Error('Invalid host specified for debug address');
  }

  await DebugAddress.setDebugAddress(`${resolvedHost}:${resolvedPort}`);
};

/**
 * Gets the debug address for the server
 *
 * @returns {string} The debug address (host and port) for the server
 */
export const getDebugAddress = async () => await DebugAddress.getDebugAddress();

