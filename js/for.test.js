const sum = require('./script');

test('going from 1 to 100', () => {
    expect(sum(1, 2)).toBe(3);
  });
