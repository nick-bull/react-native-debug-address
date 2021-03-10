import {isValidPort} from '../src/addresses';

describe('Addresses', () => {
  it('Validates a port', () => {
    expect(isValidPort(1234)).toBe(true);
  });

  it('Validates a port from a string', () => {
    expect(isValidPort('1234')).toBe(true);
  });

  it('Invalidates a port', () => {
    expect(isValidPort('f1234')).toBe(false);
  });

  it('Invalidates an out-of-range port', () => {
    expect(isValidPort(-1)).toBe(false);
    expect(isValidPort(65536)).toBe(false);
  });
});
