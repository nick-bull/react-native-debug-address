import {NativeModules} from 'react-native';

import {
  getAddressParts,
  isValidHost,
  isValidIpv4,
  isValidIpv6,
  isValidPort,
} from './addresses';
import {addressErrors} from './addressErrors';

const {DebugAddress} = NativeModules;

/**
 * Sets the debug address for the server
 *
 * @param {string} host The host of the debug server
 * @param {int} port The port of the debug server
 */
export const setDebugAddress = async (address) => {
  const {host, port} = (typeof address === 'string') ? getAddressParts(address) : address;
  const processedAddress = port ? `${host}:${port}` : host;

  await DebugAddress.setDebugAddress(processedAddress);
};

/**
 * Gets the debug address for the server
 *
 * @returns {string} The debug address (host and port) for the server
 */
export const getDebugAddress = async () => await DebugAddress.getDebugAddress();

/**
 * Sets the debug port for the server
 *
 * @param {int} port The port of the debug server
 */
export const setDebugPort = async (port) => {
  if (!isValidPort) {
    throw new Error(errors.port);
  }

  await DebugAddress.setDebugAddress(port);
};

/**
 * Gets the debug port for the server
 *
 * @returns {int} The port of the debug server
 */
export const getDebugPort = async () => {
  const debugAddress = await getDebugAddress();
  const {port} = getAddressParts(debugAddress);

  return port;
};
