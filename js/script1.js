var empty = (x) =>{
    if ((x === null) || (x === undefined)|| (x ==="")) return true;
    else return false;
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
var createWord = (result,x) =>{
        if ((x%result[2]===0)&&(x%result[3]===0)) return (result[4].concat(result[5]));          
        else if (x%result[2]===0) return result[4];                    
        else if (x%result[3]===0) return result[5];                     
        else return x;
};
    




module.exports={empty,createWord}