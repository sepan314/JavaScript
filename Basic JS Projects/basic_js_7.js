// <!-- Local and global variables -->
var sunday = ["S", "u", "n", "d", "a", "y"];

function flip_letters() {
    var start = 3;
    var new_word = [];
    for (i=0; i < sunday.length; i++){
        new_word[i] = sunday[start-1];
        start ++;
        if (start > 6){
            start = 1;
        }
    }
    document.getElementById("original").innerHTML = new_word.join("");
}
console.log(monday);

//  Get Date and if statements
function get_hours(){
    var hours = new Date().getHours();
    if (hours <12){
        document.getElementById("greeting").innerHTML="Good Morning";
    }
    else if (hours<18){
        document.getElementById("greeting").innerHTML="Good Afternoon";
    }
    else{
        document.getElementById("greeting").innerHTML="Good Night";
    }
}

function get_month(){
    if (new Date().getMonth()==12){
        document.getElementById("month").innerHTML="Yes, it is.";
    }
    else{
        document.getElementById("month").innerHTML="No, it is not";
    }
}

function siblings(){
    var num = document.getElementById("siblings").value;
    if (num>0){
        document.getElementById("sibling_status").innerHTML = "You have " + num + " siblings.";
    }
    else {
        document.getElementById("sibling_status").innerHTML = "You are an only child.";
    }
}

// if, else if, else statements
function time_func(){
    var hours = new Date().getHours();
    var reply;
    if (hours <12 == hours >0){
        reply ="It is morning";
    }
    else if (hours<18 == hours > 12){
        reply ="It is afternoon";
    }
    else{
        reply ="It is night";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}

