const funct = require('./script1');

test('x will be not null', ()=> {    //function "empty"
  expect(funct.empty()).toBeTruthy();
  expect(funct.empty("1")).toBeFalsy();
  expect(funct.empty(1)).toBeFalsy();
});

test('this function will return the indicated words for every multiplies',()=>{  //function "createWord"
  array =[1,100,2,3,"word1","word2"];
  expect(funct.createWord(array,2)).toMatch(/word1/);
  expect(funct.createWord(array,3)).toMatch(/word2/);
  expect(funct.createWord(array,6)).toMatch(/word1word2/);
  expect(funct.createWord(array,5)).toBe(5);
});












/*test('this function will return false if array incomplete or field NaN', () => {
  array = [1,"ciao",2,4,"parola","parola2"];
  expect(funct.submit(array)).toBeFalsy();
  array = [1,"",2,4,"parola","parola2"];
  expect(funct.submit(array)).toBeFalsy();
  array = [1,100,2,3,"parola1","parola2"];
  expect(funct.submit(array)).toBeTruthy();
});*/

