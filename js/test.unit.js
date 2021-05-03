const funct = require('./script');


test('x will be not null', ()=> {
  expect(funct.empty()).toBeTruthy();
  expect(funct.empty("1")).not.toBeTruthy();
  expect(funct.empty(1)).not.toBeTruthy();
});

test('this function will return false if array incomplete', () => {
  arrai = [1,20,"",4,"parola","parola2"];
  expect(funct.submit(arrai)).toBeFalsy();
});

