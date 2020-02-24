//String methods

function finish(){
    var part1 = "I have a";
    var part2 = " computer.";
    var end = part1.concat(part2);
    document.getElementById("strings").innerHTML = end;
}

function slice_string() {
    var sent = "Slicing strings";
    var sliced = sent.slice(2,7);
    document.getElementById("slice").innerHTML = sliced;
}

function num_str() {
    var num = 25;
    document.getElementById("ns").innerHTML = num.toString();
}

function precision() {
    var num = 25.125937;
    document.getElementById("prec_num").innerHTML = num.toPrecision(5);
}