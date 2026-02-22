//////////////////////////////   01   //////////////////////////////

let number = 7;

if (number > 5) {
	console.log("Number is greater than 5");
}


//////////////////////////////   02   //////////////////////////////

let age = 16;

if (age < 18) {
	console.log("Minor");
} else {
	console.log("Adult");
}

//////////////////////////////   03   //////////////////////////////

let grades = [5, 3, 4, 2, 5];

for (let i = 0; i < grades.length; i++) {
	if (grades[i] >= 4) {
		console.log(grades[i]);
	}
}

//////////////////////////////   04   //////////////////////////////

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		console.log(numbers[i]);
	}
}

//////////////////////////////   05   //////////////////////////////

let names = ["Ana", "Marko", "Jovan"];

for (let i = 0; i < names.length; i++) {
	if (names[i][0] === "A") {
		console.log(names[i]);
	}
}

//////////////////////////////   06   //////////////////////////////

let cities = ["Belgrade", "Novi Sad", "Niš"];

for (let i = 0; i < cities.length; i++) {
	if (cities[i].length > 5) {
		console.log(cities[i]);
	}
}

//////////////////////////////   07   //////////////////////////////

let day = 3;

switch (day) {
	case 1:
		console.log("Monday");
		break;

	case 2:
		console.log("Tuesday");
		break;

	case 3:
		console.log("Wednesday");
		break;
}

//////////////////////////////   08   //////////////////////////////

let color = "green";

switch (color) {
	case "green":
		console.log("Go");
		break;

	case "red":
		console.log("Stop");
		break;

	case "yellow":
		console.log("Caution");
		break;
}

//////////////////////////////   09   //////////////////////////////

let statuses = ["online", "offline", "online"];

for (let i = 0; i < statuses.length; i++) {
	switch (statuses[i]) {
		case "online":
			console.log("User active");
			break;

		case "offline":
			console.log("User not active");
			break;
	}
}

//////////////////////////////   10   //////////////////////////////

let numberEx10 = 0;

if (numberEx10 % 2 === 0) {
	console.log("Even");
} else {
	console.log("Odd");
}

//////////////////////////////   11   //////////////////////////////

let results = [45, 70, 90];

for (let i = 0; i < results.length; i++) {
	if (results[i] >= 60) {
		console.log("Passed");
	} else {
		console.log("Failed");
	}
}

//////////////////////////////   12   //////////////////////////////

let numbersEx12 = [3, 5, 8, 2];
let sum = 0;

for (let i = 0; i < numbersEx12.length; i++) {
	sum += numbersEx12[i];
}

console.log(sum);

//////////////////////////////   13   //////////////////////////////

let numbersEx13 = [1, 2, 3, 4, 5];
let max = numbersEx13[0];

for (let i = 1; i < numbersEx13.length; i++) {
	if (numbersEx13[i] > max) {
		max = numbersEx13[i];
	}
}

console.log(max);

//////////////////////////////   14   //////////////////////////////

let messages = ["Hello", "World", "JS"];

for (let i = 0; i < messages.length; i++) {
	if (messages[i].includes("o")) {
		console.log(messages[i]);
	}
}

//////////////////////////////   15   //////////////////////////////

let points = 85;

if (points >= 80) {
	console.log("Excellent");
} else if (points >= 60) {
	console.log("Good");
} else {
	console.log("Fail");
}

//////////////////////////////   16   //////////////////////////////

let roles = ["admin", "user", "guest"];

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

//////////////////////////////   17   //////////////////////////////

let numbersEx17 = [2, 4, 6, 8];
let i = 0;

while (i < numbersEx17.length) {
	console.log(numbersEx17[i]);
	i++;
}

//////////////////////////////   18   //////////////////////////////

let x = 5;

while (x > 0) {
	console.log(x);
	x--;
}

//////////////////////////////   19   //////////////////////////////

let gradesEx19 = [5, 4, 3, 2, 1];
let sumEx19 = 0;

for (let i = 0; i < gradesEx19.length; i++) {
	sumEx19+= gradesEx19[i];
}

let average = sumEx19 / gradesEx19.length;
console.log(average);

//////////////////////////////   20   //////////////////////////////

let languages = ["JS", "HTML", "CSS"];

for (let i = 0; i < languages.length; i++) {
	switch (languages[i]) {
		case "JS":
			console.log("JavaScript");
			break;

		case "HTML":
			console.log("HTML language");
			break;

		case "CSS":
			console.log("CSS language");
			break;
	}
}

//////////////////////////////   21   //////////////////////////////

let loggedIn = [true, false, true];

for (let i = 0; i < loggedIn.length; i++) {
	if (loggedIn[i]) {
		console.log("Logged in");
	}
	else {
		console.log("Not logged in");
	}
}

//////////////////////////////   22   //////////////////////////////

let time = "night";

switch (time) {
	case "night":
		console.log("Good night");
		break;

	case "morning":
		console.log("Good morning");
		break;

	case "day":
		console.log("Good day");
		break;
}

//////////////////////////////   23   //////////////////////////////

let digits = [1, 2, 3, 4, 5];
let sumEx23 = 0;

for (let i = 0; i < digits.length; i++) {
	if (digits[i] > 3) {
		sumEx23 += digits[i];
	}
}

console.log(sumEx23);

//////////////////////////////   24   //////////////////////////////

let gradesEx24 = [5, 3, 4, 2, 5];
let count = 0;

for (let i = 0; i < gradesEx24.length; i++) {
	if (gradesEx24[i] === 5) {
		count++;
	}
}
console.log(count);

//////////////////////////////   25   //////////////////////////////

let citiesEx25 = ["Belgrade", "Novi Sad", "Nis"];
let found = false;

for (let i = 0; i < citiesEx25.length; i++) {
	if (citiesEx25[i] === "Nis") {
		found = true;
		break;
	}
}

if (found) {
	console.log("Nis is found");
} else {
	console.log("Nis not found");
}

//////////////////////////////   26   //////////////////////////////

let numbersEx26 = [1, 2, 3, 4, 5];
let plus = [];

for (let i = 0; i < numbersEx26.length; i++) {
	plus.push(numbersEx26[i] + 10);
}

console.log(plus);

//////////////////////////////   27   //////////////////////////////

let deviceType = "mobile";
switch (deviceType) {
	case "mobile":
		console.log("Mobile device");
		break;

	case "desktop":
		console.log("Desktop device");
		break;
}

//////////////////////////////   28   //////////////////////////////

let messagesEx28 = ["Hey", "Hi", "Hello"];
let combined = "";

for (let i = 0; i < messagesEx28.length; i++) {
	combined += messagesEx28[i] + " ";
}

console.log(combined);

//////////////////////////////   29   //////////////////////////////

let numbersEx29 = [10, 20, 30];
let divide = [];

for (let i = 0; i < numbersEx29.length; i++) {
	divide.push(numbersEx29[i] / 2);
}

console.log(divide);

//////////////////////////////   30   //////////////////////////////

let gradesEx30 = [5, 3, 4, 2, 5];

for (let i = 0; i < gradesEx30.length; i++) {
	if (gradesEx30[i] >= 5) {
		console.log("Excellent");
	}
	else if (gradesEx30[i] >= 3 && gradesEx30[i] <= 4) {
		console.log("Good");
	}
	else {
		console.log("Fail");
	}
}
