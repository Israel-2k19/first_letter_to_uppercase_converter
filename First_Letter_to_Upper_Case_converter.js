//To convert the string case from any case format to first letter uppercase string set

//Step 1: collect user data using a prompt function and create a variable to store user data for future recall in the console

	var firstName = prompt("What is your First Name?");

	var secondName = prompt("What is your Surname?");


	//Step 2: create a slice function that isolates the first letter of the two name variables

	var firstChar1 = firstName.slice(0,1); 
	var firstChar2 = secondName.slice(0,1);

	//Step 3: convert the isolated first letter variables to upper-case letters

	firstChar1 = firstChar1.toUpperCase();
	firstChar2 = firstChar2.toUpperCase();

	//Step 4: isolate the other characters of the string after the first character

	var otherChar1 = firstName.slice(1,secondName.length);
	var otherChar2 = secondName.slice(1,secondName.length);
	
	//Step 5: convert the isolated otherChar variables into lower case letters

	otherChar1 = otherChar1.toLowerCase();
	otherChar2 = otherChar2.toLowerCase();

	//Step 6; concatenate the firstChar and otherChar variables into one variable
	
	var name1Solution = firstChar1 + otherChar1;
	var name2Solution = firstChar2 + otherChar2;

	//Step 7; create an alert to say "hello" to your new subscriber

	alert("Hello, " + name1Solution + " " + name2Solution + " Welcome to my channel!");