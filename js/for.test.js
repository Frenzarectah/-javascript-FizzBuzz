const sum = require('./script');
const notnull = require('./script');
const is_NaN = require('./script');

test('somma prova', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('x will be not null', ()=> {
  expect(notnull(1)).not.toBeNull();
  expect(notnull("1")).not.toBeNull();
});

test('x have to be a number',()=>{
  expect(is_NaN("ciao")).toBeTruthy();
});
