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

const number = 15;

if (number % 3 === 0) {
	console.log("Number is divisible by 3");
} else {
	console.log("Number is not divisible by 3");
}

//////////////////////////////   17   //////////////////////////////

const gradesEx17 = [1, 2, 3, 4, 5];

for (let i = 0; i < gradesEx17.length; i++) {
	if (gradesEx17[i] === 5) {
		console.log("Excellent");
	} else if (gradesEx17[i] === 3 || gradesEx17[i] === 4) {
		console.log("Good");
	} else if (gradesEx17[i] === 1 || gradesEx17[i] === 2) {
		console.log("Fail");
	}
}

//////////////////////////////   18   //////////////////////////////

const cities = ["Belgrade","Novi Sad","Niš","Subotica"];

for (let i = 0; i < cities.length; i++) {
	if (cities[i][0] === "N") {
		console.log(cities[i]);
	}
}

//////////////////////////////   19   //////////////////////////////

const numbersEx19 = [1, 2, 3, 4, 5];
let sumEx19 = 0;

for (let i = 0; i < numbersEx19.length; i++) {
	if (numbersEx19[i] % 2 === 0) {
		sumEx19 += numbersEx19[i];
	}
}

console.log(sumEx19);

//////////////////////////////   20   //////////////////////////////

const pointsEx20 = 72;

if (pointsEx20 >= 72) {
	console.log("Excellent");
} else if (pointsEx20 >= 50) {
	console.log("Good");
} else {
	console.log("Fail");
}

//////////////////////////////   21   //////////////////////////////

const roles = ["admin", "user", "guest"];

for (let i = 0; i < roles.length; i++) {
	switch (roles[i]) {
		case "admin":
			console.log("Admin access");
			break;
		case "user":
			console.log("User");
			break;
		case "guest":
			console.log("Guest");
			break;
	}
}

//////////////////////////////   22   //////////////////////////////

let numbersEx22 = [3, 7, 2, 8, 5];
let largestNumbers = numbersEx22[0];

for (let i = 0; i < numbersEx22.length; i++) {
	if (numbersEx22[i] > largestNumbers) {
		largestNumbers = numbersEx22[i];
	}
}

console.log(largestNumbers);

//////////////////////////////   23   //////////////////////////////

const temperatures = [12, 25, 30, 18];

for (let i = 0; i < temperatures.length; i++) {
	if (temperatures[i] > 25) {
		console.log("Hot");
	} else if (temperatures[i] >= 15) {
		console.log("Moderate");
	} else {
		console.log("Cold");
	}
}

//////////////////////////////   24   //////////////////////////////

const messagesEx24 = ["Hello", "World", "JS", "Bye"];
let allMessages = "";

for (let i = 0; i < messagesEx24.length; i++) {
	allMessages += messagesEx24[i] + " ";
}

console.log(allMessages);

//////////////////////////////   25   //////////////////////////////

const type = "desktop";

switch (type) {
	case "desktop":
		console.log("Desktop device");
		break;
	case "mobile":
		console.log("Mobile device");
		break;
}

//////////////////////////////   26   //////////////////////////////

const numbersEx26 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbersEx26.length; i++) {
	numbersEx26[i] = numbersEx26[i] * numbersEx26[i];
}
console.log(numbersEx26);

//////////////////////////////   27   //////////////////////////////

const gradesEx27 = [5, 3, 4, 2, 5, 3, 1];
let countEx27 = 0;

for (let i = 0; i < gradesEx27.length; i++) {
	if (gradesEx27[i] >= 4) {
		countEx27++;
	}
}

console.log(countEx27);

//////////////////////////////   28   //////////////////////////////

const citiesEx28 = ["Belgrade", "Novi Sad", "Nis"];
let found = false;

for (let i = 0; i < citiesEx28.length; i++) {
	if (citiesEx28[i] === "Nis") {
		found = true;
		break;
	}
}

if (found) {
	console.log("Nis found");
} else {
	console.log("Nis not found");
}

//////////////////////////////   29   //////////////////////////////

//////////////////////////////   30   //////////////////////////////