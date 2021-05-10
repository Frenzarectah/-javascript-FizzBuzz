var appending = (thing) =>{                                         
    root = document.getElementsByClassName("container");        
    var span = document.createElement("span");                  
    span.innerHTML = thing;                                     
    root[0].appendChild(span);                                  
}
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
var submit = (result) =>{
    var passed = true;
    var error ="Il form presenta i seguenti errori:\n";
    console.log(result);
    for(i=0;i<=result.length-1;i++){
        if (empty(result[i]) === true){ 
            passed = false; 
            error += "il "+(i+1)+"° campo è vuoto\n";
        }else if (isNaN(result[i])&&(i!==4)&&(i!==5)){
            passed = false;
            error +="il"+(i+1)+" ° campo non è un numero\n";
        }
    }    
        if (passed === true){ 
            fizzbuzz(result);
            return passed;
        } else{ 
            alert(error);
            return passed;
        }
    }

//module.exports = {empty,submit};