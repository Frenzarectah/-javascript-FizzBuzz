appending = (thing) =>{                                         //la funzione appending si occupa di costruire l'elemento
    root = document.getElementsByClassName("container");        //span in base alla variabile thing, che conterrà la stringa
    var span = document.createElement("span");                  //elaborata dagli if presenti nella funzione principale fizzbuzz.
    span.innerHTML = thing;                                     //In questo modo si rende piu' snello e capibile il codice,
    root[0].appendChild(span);                                  //soprattutto all'interno del ciclo for
}
fizzbuzz = () =>{
    var btn = document.getElementById("start");                 
    var thing;
    btn.remove();
    var body = document.getElementsByTagName("body");
    body[0].classList.add("listing");
        for(i=1;i<=100;i++){
            if ((i%3==0)&&(i%5==0)) thing ="fizzbuzz";
            else if (i%3==0) thing = "fizz";
            else if (i%5==0) thing ="buzz";
            else thing = i;
            appending(thing);
        }
}

