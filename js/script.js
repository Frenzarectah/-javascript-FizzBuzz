appending = (thing) =>{                                         //la funzione appending si occupa di costruire l'elemento
    root = document.getElementsByClassName("container");        //span in base alla variabile thing, che conterrà la stringa
    var span = document.createElement("span");                  //elaborata dagli if presenti nella funzione principale fizzbuzz.
    span.innerHTML = thing;                                     //In questo modo si rende piu' snello e capibile il codice,
    root[0].appendChild(span);                                  //soprattutto all'interno del ciclo for
}
fizzbuzz = () =>{
    var btn = document.getElementById("start");                 // btn fa riferimento all'id start (quindi il bottone di avvio)
    var thing;                                                  //utile sia per avviare il gioco che per eliminarlo dal dom 
    /*btn.classList.add("repos");*/
    btn.remove();                                 //una volta iniziata l'esecuzione
    var body = document.getElementsByTagName("body");
    body[0].classList.add("listing");
        for(i=1;i<=100;i++){
            if ((i%3==0)&&(i%5==0)) thing ="fizzbuzz";          //un for che va da 0 a 100, l'indice fa da riferimento anche per
            else if (i%3==0) thing = "fizz";                    //elaborare correttamente il risultato, se l'indice (i) è divisibile
            else if (i%5==0) thing ="buzz";                     //per 3, la stringa da dare in pasto alla funzione appending sarà fizz
            else thing = i;                                     //per i multipli di 5 sarà buzz e i multipli di entrambi fizzbuzz
            appending(thing);                                   //altrimenti il gioco prevede la stampa del numero in se, quindi semplicemente
        }                                                       //il valore di i in quel momento.
    setTimeout(function(){ window.location.reload();}, 10000);  // aggiunta di un timer interno di 10 secondi dopo il quale si resetta lo schermo 
}

