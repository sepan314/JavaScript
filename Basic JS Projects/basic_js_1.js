var a = "apple", b = "banana", c = "carrot";
var a = a.fontcolor("red"), b = b.fontcolor("yellow"), c = c.fontcolor("orange");
document.write(a + b + c);

function My_First_Function() {
    var str="Green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}