const funct = require('./script1');


test('se una variabile non è settata, ritorna true,altrimenti ritorna false', ()=> {    //function "empty"
  expect(funct.empty()).toBeTruthy();
  expect(funct.empty("1")).toBeFalsy();
  expect(funct.empty(1)).toBeFalsy();
});

test('ritornerà le parole selezionate per ciascun multiplo, altrimenti semplicemente il numero indice',()=>{  //function "createWord"
  array =[1,100,2,3,"word1","word2"];
  expect(funct.createWord(array,2)).toMatch(/word1/);
  expect(funct.createWord(array,3)).toMatch(/word2/);
  expect(funct.createWord(array,6)).toMatch(/word1word2/);
  expect(funct.createWord(array,5)).toBe(5);
});
test('ritornerà true se tutto è compilato a dovere, altrimenti ritornerà la stringa con gli errori',()=>{ //function "checkForm"
  array =[1,100,2,3,"word1","word2"]; 
  expect(funct.checkForm(array)).toBeTruthy(); /**ritorna true se tutto è compilato nel modo corretto */
  array =[1,"",2,3,"word1","word2"];
  expect(funct.checkForm(array)).toMatch(/form/); /**ritorna una stringa di errori se uno/piu campo è vuoto */
  array =[1,100,2,"cinque","word1","word2"];
  expect(funct.checkForm(array)).toMatch(/form/); /**ritorna una stringa di errori se i campi da 1-4 non sono numeri */
});
