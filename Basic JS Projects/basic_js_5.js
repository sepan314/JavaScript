document.write(typeof "5" + "<br>");

function isnan(){
    document.getElementById("nan").innerHTML = 0/0;
}

function inf(){
    document.getElementById("inf").innerHTML = 4E310;
}

function neginf(){
    document.getElementById("neginf").innerHTML = -4E310;
}

document.write("3 is greater than 2: " +  (3>2));

console.log(10+10);
console.log(10 != 10);

document.write("<br>" + "10" + 10 + "<br>");
document.write("comparison using == <br>");
document.write("dog" == "dog", "<br>");
document.write("cat" == "dog", "<br>");
document.write("comparison using === <br>");
document.write("42" === "42", "<br>");
document.write("cat" === 42, "<br>");
document.write(42 === "42", "<br>");
document.write("cat" === "dog", "<br>");
document.write("comparison using AND <br>");
document.write(3<5 && 5<8, "<br>");
document.write(3<5 && 5>8, "<br>");
document.write("comparison using OR <br>");
document.write(4<7 ||  7>9, "<br>");
document.write(4>7 ||  7>9, "<br>");
document.write("comparison using NOT <br>");
document.write("fish" != "bird", "<br>");
document.write(0 != 0, "<br>");