function math_add(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    var final = num2+num2;
    document.getElementById(num).innerHTML = final;
}

function math_sub(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    var final = num2-1;
    document.getElementById(num).innerHTML = final;
}

function math_mul(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    var final = num2*num2;
    document.getElementById(num).innerHTML = final;
}

function math_div(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    var final = num2/2;
    document.getElementById(num).innerHTML = final;
}

function math_com(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    var final = (num2+num2)*3 - num2/2;
    document.getElementById(num).innerHTML = final;
}

function math_mod(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    var final = num2%3;
    document.getElementById(num).innerHTML = final;
}

function math_neg(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    document.getElementById(num).innerHTML = -num2;
}

function math_inc(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    num2 ++;
    document.getElementById(num).innerHTML = num2;
}

function math_dec(num){
    var num2 = Number(document.getElementById(num).innerHTML);
    num2--;
    document.getElementById(num).innerHTML = num2;
}

function math_ran(num){
    document.getElementById(num).innerHTML = Math.round(Math.random()*100);
}