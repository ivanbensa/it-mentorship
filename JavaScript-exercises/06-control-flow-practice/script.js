//////////////////////////////   01   //////////////////////////////

let temperature = 15;

if (temperature > 25) {
	console.log("Hot");
} else if (temperature >= 15) {
	console.log("Moderate");
} else {
	console.log("Cold");
}

//////////////////////////////   02   //////////////////////////////

let points = [45, 78, 90, 62];

for (let i = 0; i < points.length; i++) {
	if (points[i] >= 60) {
		console.log("Passed");
	} else {
		console.log("Failed");
	}
}

//////////////////////////////   03   //////////////////////////////

//////////////////////////////   03   //////////////////////////////

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 === 0) {
		console.log(numbers[i]);
	}
}

//////////////////////////////   04   //////////////////////////////

let names = ["Ana","Marko","Jovan","Ivana"];

for (let i = 0; i < names.length; i++) {
	if (names[i].length >= 4) {
		console.log(names[i]);
	}
}

//////////////////////////////   05   //////////////////////////////

let year = 2026;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
	console.log("This is Leap Year");
} else {
	console.log("This is not leap year");
}


//////////////////////////////   06   //////////////////////////////

let grades = [5,4,3,2,1,2];
let count = 0;

for (let i = 0; i < grades.length; i++) {
	if (grades[i] === 2) {
		count++;
	}
}

console.log(count);

//////////////////////////////   07   //////////////////////////////

let day = "Saturday";

switch (day) {
	case "Monday":
	case "Tuesday":
	case "Wednesday":
	case "Thursday":
	case "Friday":
		console.log("Workday");
		break;
	case "Saturday":
	case "Sunday":
		console.log("Weekend");
		break;

}

//////////////////////////////   08   //////////////////////////////

let statuses = ["online", "offline", "offline", "online", "offline"];

for (let i = 0; i < statuses.length; i++) {
	switch (statuses[i]) {
		case "online":
			console.log("Active");
			break;
		case "offline":
			console.log("Not active");
			break;
	}
}

//////////////////////////////   09   //////////////////////////////

let numbersEx09 = [5,8,12,3];
let smallestNumbers = numbersEx09[0];

for (let i = 0; i < numbersEx09.length; i++) {
	if (numbersEx09[i] < smallestNumbers) {
		smallestNumbers = numbersEx09[i];
	}
}

console.log(smallestNumbers);

//////////////////////////////   10   //////////////////////////////

let gradesEx10 = [5,3,4,2,5];
let sum = 0;

for (let i = 0; i < gradesEx10.length; i++) {
		sum += gradesEx10[i];
}

console.log(sum);

//////////////////////////////   11   //////////////////////////////

let time = "morning";

switch (time) {
	case "morning":
		console.log("Good morning");
		break;
	case "day":
		console.log("Good afternoon");
		break;
	case "night":
		console.log("Good night");
		break;
}

//////////////////////////////   12   //////////////////////////////

let languages = ["JS", "HTML", "CSS", "Python"];

for (let i = 0; i < languages.length; i++) {
	switch (languages[i]) {
		case "JS":
			console.log("JavaScript");
			break;
		case "HTML":
			console.log("HyperText Markup Language");
			break;
		case "CSS":
			console.log("Cascading Style Sheets");
			break;
		case "Python":
			console.log("Python programming language (Monty PYTHON’s Flying Circus 😄)");
			break;
	}
}

//////////////////////////////   13   //////////////////////////////

const numbersEx13 = [2, 4, 6, 8, 10];

for (let i = 0; i < numbersEx13.length; i++) {
	numbersEx13[i] /= 2;
}

console.log(numbersEx13);

//////////////////////////////   14   //////////////////////////////

const messages = ["Hello", "Hi", "Hey", "Bye"];

for (let i = 0; i < messages.length; i++) {
	if (messages[i].length > 2) {
		console.log(messages[i]);
	}
}

//////////////////////////////   15   //////////////////////////////

const loggedIn = [true,false,true,false];

for (let i = 0; i < loggedIn.length; i++) {
	if (loggedIn[i] === true) {
		console.log("Logged in");
	} else {
		console.log("Not logged in");
	}
}

//////////////////////////////   16   //////////////////////////////

//////////////////////////////   17   //////////////////////////////

//////////////////////////////   18   //////////////////////////////

//////////////////////////////   19   //////////////////////////////

//////////////////////////////   20   //////////////////////////////

//////////////////////////////   21   //////////////////////////////

//////////////////////////////   22   //////////////////////////////

//////////////////////////////   23   //////////////////////////////

//////////////////////////////   24   //////////////////////////////

//////////////////////////////   25   //////////////////////////////

//////////////////////////////   26   //////////////////////////////

//////////////////////////////   27   //////////////////////////////

//////////////////////////////   28   //////////////////////////////

//////////////////////////////   29   //////////////////////////////

//////////////////////////////   30   //////////////////////////////