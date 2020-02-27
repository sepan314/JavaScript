// switch
function color_f(){
    var color_output;
    var colors= document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors){
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Yellow":
            color_output = "Yellow" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output = "Blue" + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as written.";
    }
    document.getElementById("output").innerHTML = color_output;

}

// get elements by class name
function func_f(){
    var a = document.getElementsByClassName("p_text");
    a[0].innerHTML = "Bye";
}

// canvas
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
// linear gradient
var grd = ctx.createLinearGradient(0, 0, 400, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
//circle    
ctx.fillRect(10, 10, 480, 230);
ctx.beginPath();
ctx.arc(250, 125, 80, 0, 2 * Math.PI);
ctx.stroke();