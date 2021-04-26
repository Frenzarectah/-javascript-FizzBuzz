var appending = (thing) =>{                                         //la funzione appending si occupa di costruire l'elemento
    root = document.getElementsByClassName("container");        //span in base alla variabile thing, che conterrà la stringa
    var span = document.createElement("span");                  //elaborata dagli if presenti nella funzione principale fizzbuzz.
    span.innerHTML = thing;                                     //In questo modo si rende piu' snello e capibile il codice,
    root[0].appendChild(span);                                  
}
var fizzbuzz = (array) =>{
    var btn = document.getElementById("start");                                                                    
    btn.remove();                                 
    var body = document.getElementsByTagName("body");
    body[0].classList.add("listing");
        for(i=array[0];i<=array[1];i++){
            if ((i%array[2]==0)&&(i%array[3]==0)) appending("fizzbuzz");          
            else if (i%array[2]==0) appending("fizz");                    
            else if (i%array[3]==0) appending("buzz");                     
            else appending(i);                                                                      
        }                                                      
    setTimeout(function(){ window.location.reload();}, 10000);   
}
var checkForm = () =>{
    var fields = document.getElementsByTagName("input");
    var min = fields.getElementsByClassName("min");
    var max = fields.getElementsByClassName("max");
    var div1 = fields.getElementsByClassName("div1");
    var div2 = fields.getElementsByClassName("div2");
    var 
}