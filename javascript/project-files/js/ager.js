//Create a variable targeting the submit button on the page using the document's getElementById method
var submit = document.getElementById("action");

//The reusable function to call on clicking the submit button
var ager = function() {
	//Storing age from user input
	age = prompt("How old are you?");

    //Evaluating the age variable; NOTE: currently lacking validation
	if(age >= 13) {
        alert("Welcome to the site");
    } else {
        alert("You're not old enough to access this site");
    }
    
    //logging the age value to the console
    console.log(age);

}

//Function call on the submit button
submit.onclick = ager;
