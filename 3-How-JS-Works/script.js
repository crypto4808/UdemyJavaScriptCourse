///////////////////////////////////////
// Lecture: Hoisting

/*In the creation phase of the execution context, in this case the global
execution context, the function decleration is stored in the variable Object
even before the age is calculated 
So we can first use the function and then declare it
*/

/*

//Below is an example of a function DECLERATION* 

calculateAge(1965); //Works if called here


function calculateAge(year){
    console.log(2016 - year);
}


//calculateAge(1965); //Works if called here as well


//Below is an example of a function EXPRESSION*

//retiremant(1990); //Doesn't work if called here

var retiremant = function(year){
    console.log(65-(2016 - year));
}

retiremant(1990); //Works if called here


//Operating on variables
//console.log(age) // Prints undefined 

var age = 23;
//console.log(age) //prints the age properly



function foo() {
    var age = 65;
    console.log(age);
}


foo(); //Prints the age variable from it's own execution context that's on TOP of the global exectution context 
console.log(age);  //prints the age variable from the global execution context  


*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


*/ 

// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d); //no access to b,c
        console.log(a + d); //Only access to a,d

}




///////////////////////////////////////
// Lecture: The this keyword









