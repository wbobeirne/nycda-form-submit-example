// Make a variable for what we desire the entered name to be
var desiredName = "Will";

// Grab our elements from the dom and assign them to variables
var formEl = document.getElementById("name-form");
var nameEl = document.getElementById("name-input");

// Bind an event to handle the form's "submit" event. This is triggered
// by clicking the submit button, or by pressing enter on an input.
formEl.addEventListener("submit", function(event) {
	// If the entered name matches the desired name, let them know!
	if (desiredName === nameEl.value) {
		alert("Damn right it is");
	}
	// Otherwise, tell them it's wrong, and don't let the form submit.
	else {
		alert("Heck no it ain't");
		event.preventDefault();
	}
});
