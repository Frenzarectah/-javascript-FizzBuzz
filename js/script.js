var appending = (thing) =>{                                         //la funzione appending si occupa di costruire l'elemento
    root = document.getElementsByClassName("container");        //span in base alla variabile thing, che conterrà la stringa
    var span = document.createElement("span");                  //elaborata dagli if presenti nella funzione principale fizzbuzz.
    span.innerHTML = thing;                                     //In questo modo si rende piu' snello e capibile il codice,
    root[0].appendChild(span);                                  
}
var fizzbuzz = () =>{
    var win = document.getElementsByClassName("window")[0];
    win.style.display = "none";
    var min = document.getElementsByClassName("min")[0].value;
    var max = document.getElementsByClassName("max")[0].value;
    var div1 = document.getElementsByClassName("div1")[0].value;
    var div2 = document.getElementsByClassName("div2")[0].value;
    var word1 = document.getElementsByClassName("word1")[0].value;
    var word2 = document.getElementsByClassName("word2")[0].value;
    var btn = document.getElementById("start");      
    console.log(min);                                                                                              
    var body = document.getElementsByTagName("body");
    body[0].classList.add("listing");
        for(i=min;i<=max;i++){
            if ((i%div1==0)&&(i%div2==0)) appending(word1.concat(word2));          
            else if (i%div1==0) appending(word1);                    
            else if (i%div2==0) appending(word2);                     
            else appending(i);                                                                      
        }                                                      
    setTimeout(function(){ window.location.reload();}, 10000);   
}