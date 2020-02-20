function My_First_Function() {
    var str="Blue!";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}

function Concatenate() {
    var sen = "I love";
    sen += " coding!";
    document.getElementById("bText").innerHTML = sen;
}

function turn_text_big(str) {
    document.getElementById(str).style.fontSize = "200%";
}