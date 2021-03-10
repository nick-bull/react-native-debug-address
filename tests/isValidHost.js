import {isValidHost} from '../src/addresses';

describe('isValidHost', () => {
  it('Validates an ipv4 host', () => {
    const isValidIpv4Host = isValidHost('123.123.123.123');
    expect(isValidIpv4Host).toBe(true);
  });

  it('Validates an ipv6 host', () => {
    const isValidIpv6Host = isValidHost('ef:ef:ef:ef:ef:ef');
    expect(isValidIpv6Host).toBe(true);
  });

  it('Validates localhost', () => {
    const isValidIpv6Host = isValidHost('localhost');
    expect(isValidIpv6Host).toBe(true);
  });

  it('Invalidates a bad host', () => {
    const isValidIpv4Host = isValidHost('f123.123.123.123');
    expect(isValidIpv4Host).toBe(false);
  });

  it('Invalidates an out-of-range ipv4 host', () => {
    const isValidIpv6Host = isValidHost('256.255.255.255');
    expect(isValidIpv6Host).toBe(false);
  });

  it('Invalidates an out-of-range ipv6 host', () => {
    const isValidIpv6Host = isValidHost('1ff:ef:ef:ef:ef:ef');
    expect(isValidIpv6Host).toBe(false);
  });
});
