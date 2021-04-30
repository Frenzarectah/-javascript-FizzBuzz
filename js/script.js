var appending = (thing) =>{                                         //la funzione appending si occupa di costruire l'elemento
    root = document.getElementsByClassName("container");        //span in base alla variabile thing, che conterrà la stringa
    var span = document.createElement("span");                  //elaborata dagli if presenti nella funzione principale fizzbuzz.
    span.innerHTML = thing;                                     //In questo modo si rende piu' snello e capibile il codice,
    root[0].appendChild(span);                                  
}
var notnull = (x) =>{
    if (x !== "null") return true;
}
var is_NaN = (x) =>{
    if (isNaN(x))  return true;
}
var submit = () =>{
    var passed = true;
    var error ="Il form presenta i seguenti errori:\n";
    var result= [];
    result[0] = document.getElementsByClassName("min")[0].value;
    result[1] = document.getElementsByClassName("max")[0].value;
    result[2] = document.getElementsByClassName("div1")[0].value;
    result[3] = document.getElementsByClassName("div2")[0].value;
    result[4] = document.getElementsByClassName("word1")[0].value;
    result[5] = document.getElementsByClassName("word2")[0].value;
    console.log(result);
    for(i=0;i<=result.length-1;i++){
            console.log(result[i]);
        if (empty(result[i]) === true){ 
            passed = false; 
            error += "il "+(i+1)+"° campo è vuoto\n";
        }else if (isNaN(result[i])&&(i!==4)&&(i!==5)){
            passed = false;
            error +="il"+(i+1)+"° campo non è un numero\n";
        }
    }    
        if (passed === true) fizzbuzz(result);
        else alert(error);
    }

var fizzbuzz = (result) =>{
    var win = document.getElementsByClassName("window")[0];
    win.style.display = "none";
    var btn = document.getElementById("start");      
    console.log(result[0]);                                                                                              
    var body = document.getElementsByTagName("body");
    body[0].classList.add("listing");
        for(i=result[0];i<=result[1];i++){
            if ((i%result[2]==0)&&(i%result[3]==0)) appending(result[4].concat(result[5]));          
            else if (i%result[2]==0) appending(result[4]);                    
            else if (i%result[3]==0) appending(result[5]);                     
            else appending(i);                                                                      
        }                                                      
    //setTimeout(function(){ window.location.reload();}, 10000);   
}
/**FUNCTION PROVIDED WITH TEST UNIT */
var empty = (x) =>{
    if ((x === null) || (x === undefined)|| (x ==="")) return true;
    else return false;
}

module.exports = {empty};