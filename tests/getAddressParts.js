import {getAddressParts} from '../src/addresses.js';

const validPort = 1234;
const invalidPort = 123456;

const ipv4Host = '123.123.123.123'; 
const invalidIpv4Host = '1123.123.123.123';

const ipv6Host = 'ef:ef:ef:ef:ef:ef';
const invalidIpv6Host = '1ef:ef:ef:ef:ef:ef';

const ipv4Address = `${ipv4Host}:${validPort}`; 
const ipv6Address = `[${ipv6Host}]:${validPort}`;

const invalidIpv4AddressHost = `${invalidIpv4Host}:${validPort}`; 
const invalidIpv6AddressHost = `[${invalidIpv6Host}]:${validPort}`;

const invalidIpv4AddressPort = `${ipv4Host}:${invalidPort}`; 
const invalidIpv6AddressPort = `[${ipv6Host}]:${invalidPort}`;

describe('getAddressParts', () => {
  it('Gets the host from an IPv4 host', () => {
    const {host} = getAddressParts(ipv4Host);
    expect(host).toEqual(ipv4Host);
  });

  it('Gets the host from an IPv6 host', () => {
    const {host} = getAddressParts(ipv6Address);
    expect(host).toEqual(ipv6Host);
  });

  it('Gets the port from an IPv4 address', () => {
    const {port} = getAddressParts(ipv4Address);
    expect(port).toEqual(1234);
  });

  it('Gets the host from an IPv4 address', () => {
    const {host} = getAddressParts(ipv4Address);
    expect(host).toEqual(ipv4Host);
  });

  it('Gets the port from an IPv6 address', () => {
    const {port} = getAddressParts(ipv6Address);
    expect(port).toEqual(1234);
  });

  it('Gets the host from an IPv6 address', () => {
    const {host} = getAddressParts(ipv6Address);
    expect(host).toEqual(ipv6Host);
  });

  it('Throws for an invalid IPv4 host', () => {
    expect(() => getAddressParts(invalidIpv4Host)).toThrow();
  });

  it('Throws for an invalid IPv6 host', () => {
    expect(() => getAddressParts(invalidIpv6Host)).toThrow();
  });

  it('Throws for an invalid IPv4 address host', () => {
    expect(() => getAddressParts(invalidIpv4AddressHost)).toThrow();
  });

  it('Throws for an invalid IPv6 address host', () => {
    expect(() => getAddressParts(invalidIpv6AddressHost)).toThrow();
  });

  it('Throws for an invalid IPv4 address port', () => {
    expect(() => getAddressParts(invalidIpv4AddressPort)).toThrow();
  });

  it('Throws for an invalid IPv6 address port', () => {
    expect(() => getAddressParts(invalidIpv6AddressPort)).toThrow();
  });
});
