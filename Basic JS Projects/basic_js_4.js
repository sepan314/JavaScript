function my_Dict(){
    var Animal = {
        species: "Dog",
        color: "Golden",
        breed: "Shiba Inu",
        age: 5, //number so not in quotation marks
        sound: "Bark!"
    };
    delete Animal.sound;
    document.getElementById("Dictionary").innerHTML = Animal.sound;
}