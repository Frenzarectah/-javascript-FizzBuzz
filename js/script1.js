/**funzione che verifica se un determinato valore è settato o meno (test unit disponibile)*/
var empty = (x) =>{                                                    
    if ((x === null) || (x === undefined)|| (x ==="")) return true;
    else return false;
}
/**funzione atta unicamente a estrapolare dati dal form e inserili in un array che poi viene restituito in output */
var extractForm = () =>{                                                
    var result= [];                                                      
    result[0] = document.getElementsByClassName("min")[0].value;
    result[1] = document.getElementsByClassName("max")[0].value;
    result[2] = document.getElementsByClassName("div1")[0].value;
    result[3] = document.getElementsByClassName("div2")[0].value;
    result[4] = document.getElementsByClassName("word1")[0].value;
    result[5] = document.getElementsByClassName("word2")[0].value;
    return result;
}
/**funzione che ricevendo un array ed un numero, ne restituisce la parola scelta per i multipli anch'essi scelti 
 * (test unit disponibile)
*/
var createWord = (result,x) =>{
        if ((x%result[2]===0)&&(x%result[3]===0)) return (result[4].concat(result[5]));          
        else if (x%result[2]===0) return result[4];                    
        else if (x%result[3]===0) return result[5];                     
        else return x;
};
/**funzione di validazione del form, restituisce true se form compilato correttamente, altrimenti restituisce
 * una stringa di errori
 */
var checkForm = (result) =>{
    var passed = true;
    var error ="Il form presenta i seguenti errori:\n";
    for(i=0;i<=result.length-1;i++){
        if (empty(result[i]) === true){ 
            passed = false; 
            error += "il "+(i+1)+"° campo è vuoto\n";
        }else if (isNaN(result[i])&&(i!==4)&&(i!==5)){
            passed = false;
            error +="il"+(i+1)+"° campo non è un numero\n";
        }
        }
        if (result[0]>= result[1]){
            passed = false; 
            error +="il 1° campo non puo essere maggiore del 2°!";
        }    
    if (passed == false) return error;
    else return passed;
}
/**funzione creata per formattare correttamente all'interno del dom i risultati */
var appending = (thing) =>{                                         
    root = document.getElementsByClassName("container");        
    var span = document.createElement("span");                  
    span.innerHTML = thing;                                     
    root[0].appendChild(span);                                  
}
/** funzione creata per ciclare i risultati e inserirli nel dom, se qualcosa non va nel verso giusto, stamperà
 * gli errori tramite il richiamo alla funzione createWord
 */
var createLoop = (result) =>{
    if (checkForm(result) == true){ 
        var win = document.getElementsByClassName("window")[0];
        win.style.display = "none";
        var btn = document.getElementById("start");                                                                                                   
        var body = document.getElementsByTagName("body");
        body[0].classList.add("listing");
        for(i=result[0];i<=result[1];i++){
            appending(createWord(result,i));
        }
    }else alert(checkForm(result));
    setTimeout(function(){ window.location.reload();}, 10000);
}

module.exports={empty,createWord,checkForm};