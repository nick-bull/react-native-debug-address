export const isValidPort = (port) => port > 0 && port < 65535;

const isValidOctet = (octet) => octet >= 0 && octet <= 255;
const isValidIpv4 = (ip) => {
  const octets = ip.split('.');
  if (octets.length !== 4) {
    return false;
  }

  const numericalOctets = octets.map(Number);

  return numericalOctets.every(isValidOctet);
};
const isValidIpv6 = (ip) => {
  const octets = ip.split(':');
  if (octets.length !== 6) {
    return false;
  }

  const hexOctets = octets.map(octet => `0x${octet}`);
  const numericalOctets = hexOctets.map(Number);

  return numericalOctets.every(isValidOctet);
};
export const isValidHost = (host) =>
  isValidIpv4(host) || isValidIpv6(host) || host === 'localhost';

export const getAddressParts = (address) => { 
  const portIdx = address.lastIndexOf(':'); 
  const isPortInAddress = portIdx !== -1; 
 
  const rawHost = (isPortInAddress) ? address.substring(0, portIdx) : address; 
  const port = (isPortInAddress) ? Number(address.substring(portIdx + 1)) : undefined;
 
  const isMaybeWrappedIpv6 = /^\[/.test(rawHost) && /\]$/.test(rawHost);
  const host = (isMaybeWrappedIpv6) ? rawHost.slice(1, -1) : rawHost;

  if (isMaybeWrappedIpv6 && !isValidIpv6(host)) {
    throw new Error(`Invalid IPv6 '${maybeIpv6}'`);
  }

  if (!isValidHost(host)) {
    throw new Error(`Invalid host '${host}'`);
  }
  if (port !== undefined && !isValidPort(port)) {
    throw new Error(`Invalid port '${port}'`);
  }

  return {host, port}; 
};

