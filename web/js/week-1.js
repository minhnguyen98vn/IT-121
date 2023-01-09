const firstName = "Marcus", lastName = "King", yearOfStudy = "first year", goal = "to obtain flexible employment that supplements and supports my continuing education.";

function myFullName(){
    document.getElementById("myFullName").innerHTML = string(firstName + " " + lastName);
};

function myYearOfStudy(){
    document.getElementById("myYearOfStudy").innerHTML = yearOfStudy;
};

function myGoal(){
        document.body.getElementsById("myGoal") = goal;
};

function populatePage(){
    myFullName();
    myYearOfStudy();
    myGoal();
}