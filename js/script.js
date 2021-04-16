fizzbuzz = () =>{
    var btn = document.getElementById("start");
    var thing;
    btn.remove();
    var body = document.getElementsByTagName("body");
    body[0].classList.add("listing");
    for(i=1;i<=30;i++){
        if ((i%3==0)&&(i%5==0)) thing ="fizzbuzz";
        else if (i%3==0) thing = "fizz";
        else if (i%5==0) thing ="buzz";
        else thing = i;
        appending(thing);
    }

}
appending = (thing) =>{
    root = document.getElementsByClassName("container");
    var span = document.createElement("span");
    span.classList.add("textOrbitron","textOrbitron--25");
    span.innerHTML = thing;
    root[0].appendChild(span);
}