// while loop
function call_loop(){
    var i = 0;
    var array1 = []
    while (i < 10) {
        array1[i] = i+1;
        i ++;
    }
    document.getElementById("loop").innerHTML = array1
}

// for loop
function for_loop(){
    var month = "February";
    for (i=0; i< month.length; i++ ){
        document.getElementById("f_loop").innerHTML +=  month[i] +"<br>";
    }
}

// array
function array_f(){
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var sent = "I work on ";
    document.getElementById("array_x").innerHTML = sent + days[1];
}

// constants
function const_f(){
    const pho = {noodles: "rice", meat: "pork", broth: "beef"};
    pho.meat = "chicken";
    pho.price = 10;
    document.getElementById("const_p").innerHTML = "My " + pho.meat + " pho cost " + pho.price + " dollars." ;
}

//let
function let_f(){
    var y = 12;
    if (1 == 1){
        let y = 10;
        document.getElementById("let_p").innerHTML = y;
    }
    document.getElementById("let_p2").innerHTML = y;
}

//create object with LET    
let tea = {
    type: "green tea ",
    sweetener: "honey ",
    temp: "hot ",
    size: "large ",
    description: function(){
        return "My tea is a " + this.size + this.temp + this.type + "with " + this.sweetener;
    }
}
document.getElementById("tea_object").innerHTML = tea.description();

//break and continue
function break_f (){
    var a1 = [];
    for (i = 0; i <10; i++){
        if (i == 7){
            break;
        }
        a1.push(i);
    }
    document.getElementById("break_p").innerHTML = a1;
}

function cont_f (){
    var a1 = [];
    for (i = 0; i <10; i++){
        if (i == 5){
            continue;
        }
        a1.push(i);
    }
    document.getElementById("cont_p").innerHTML = a1;
}