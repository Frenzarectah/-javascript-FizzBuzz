var appending = (thing) =>{                                         //la funzione appending si occupa di costruire l'elemento
    root = document.getElementsByClassName("container");        //span in base alla variabile thing, che conterrà la stringa
    var span = document.createElement("span");                  //elaborata dagli if presenti nella funzione principale fizzbuzz.
    span.innerHTML = thing;                                     //In questo modo si rende piu' snello e capibile il codice,
    root[0].appendChild(span);                                  
}
var submit = () =>{
    var passed = true;
    var min = document.getElementsByClassName("min")[0].value;
    var max = document.getElementsByClassName("max")[0].value;
    var div1 = document.getElementsByClassName("div1")[0].value;
    var div2 = document.getElementsByClassName("div2")[0].value;
    var word1 = document.getElementsByClassName("word1")[0].value;
    var word2 = document.getElementsByClassName("word2")[0].value;
    if ((min!="null")&&(max!="null")){
            if(max < min){ passed = false;
                           alert("il primo parametro non può essere inferiore al secondo!");
                           }
    }
     if (min.isNaN == true){ passed = false;
                             alert("il primo parametro dev'essere un numero!");
                            }
     if (max.isNaN == true){ passed = false;
                             alert("il secondo parametro dev'essere un numero!");
                            }
    if (passed == false) alert("ci sono degli errori!");
    else{ 
        result = [min,max,div1,div2,word1,word2];
        fizzbuzz(result);
    }
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
    setTimeout(function(){ window.location.reload();}, 10000);   
}
module.exports = fizzbuzz;