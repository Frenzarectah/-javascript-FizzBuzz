const funct = require('./script');


test('x will be not null', ()=> {
  expect(funct.empty()).toBeTruthy();
  expect(funct.empty("1")).not.toBeTruthy();
  expect(funct.empty(1)).not.toBeTruthy();
});

