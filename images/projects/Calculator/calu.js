var n1
var n2
var op
function number(n){
    var result= document.getElementById("result");
    result.textContent= result.textContent + n;
}
function operadar(operadar) {
    var result= document.getElementById("result");
    n1 = result.textContent;
    result.textContent= result.textContent + operadar;
    op = operadar; 
}
function equal(){
    var result= document.getElementById("result");
    var nresult= result.textContent;
    var data= nresult.split(op);
    n2 = data[1];
    operar();
}
function operar(){
    var result= document.getElementById("result");
    if (op=="+"){
        result.textContent=Number(n1)+Number(n2);  
    }
    if (op=="-"){
        result.textContent=Number(n1)-Number(n2);  
    }
    if (op=="*"){
        result.textContent=Number(n1)*Number(n2);  
    }
    if (op=="/"){
        result.textContent=Number(n1)/Number(n2);  
    }
}
function clear2(){
    var result= document.getElementById("result");
    result.textContent="";
    n1="";
    n2="";
    op="";
}




