//Ternary operator, display value based on condition
function Ride() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough" ;
    document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}

function vote() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote =  (age < 18) ? "You are too young":"You are old enough" ;
    document.getElementById("old_enough").innerHTML = can_vote + " to vote.";
}

// classes and constructors

function Employee(name, age, department, job_title) {
    this.Employee_name = name;
    this.Employee_age = age;
    this.Employee_department = department;
    this.Employee_job_title = job_title;
}

var Mike = new Employee("Mike H", 34, "Software", "Junior Dev" );

function myFunction (){
    document.getElementById("New_n_This").innerHTML = Mike.Employee_name + ", " + Mike.Employee_age + " , "
    + "is a " + Mike.Employee_job_title + " in the " + Mike.Employee_department + " department.";
}

//  Nested function
function nested(){  
    var counter = 1;
    function plus_one(){
        counter += 1;
        return counter;
    }   
    document.getElementById("Para1").innerHTML = plus_one()+ Number(document.getElementById("Para1").innerHTML);
}
