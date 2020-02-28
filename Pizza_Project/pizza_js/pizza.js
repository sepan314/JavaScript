function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //calculate total 
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("subtotal: " + runningTotal + ".00");
    var vegResults = getVeg();
    vegNum = vegResults[0];
    vegName = vegResults [1];
    var meatResults = getMeat();
    meatNum = meatResults[0];
    meatName = meatResults [1];
    runningTotal = runningTotal + meatNum + meatNum;

    console.log("Purchase Total w/ meat and veg: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML=text1 + vegName + "<br>" + meatName;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}

function getVeg() { //returns number/names of veg choices
    var resultsVeg = [];
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("veg");
    for (var i=0; i < vegArray.length; i++) {
        if (vegArray[i].checked) {
            selectedVeg.push(vegArray[i].value);
        }
    }
    var vegCount = selectedVeg.length;
    if (vegCount > 1) {
        vegTotal = (vegCount - 1); //one free veg
    } else {
        vegTotal = 0;
    }
    resultsVeg = [vegTotal, selectedVeg];
    console.log("selected veg item: "+ selectedVeg + ". Count: " + vegCount);
    console.log(vegCount + " veg - 1 free veg = " + "$" + vegTotal + ".00");
    //return how many veg selected
    return resultsVeg;
    
}

function getMeat() { //returns number/names of meat choices
    var resultsMeat=[];
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var i=0; i < meatArray.length; i++) {
        if (meatArray[i].checked) {
            selectedMeat.push(meatArray[i].value);
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1); //one free meat
    } else {
        meatTotal = 0;
    }
    console.log("selected meat item: "+ selectedMeat + ". Count: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
    resultsMeat = [meatTotal, selectedMeat];
     
    return resultsMeat;
}