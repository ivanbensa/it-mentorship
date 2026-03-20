//////////////////////////////   01   //////////////////////////////

const div1 = document.querySelector("#main1");

const paragraph1 = document.createElement("p");

paragraph1.innerText = "Welcome";
paragraph1.style.fontSize = "18px";

div1.append(paragraph1);

//////////////////////////////   02   //////////////////////////////

const names2 = ["Petar", "Luka", "Maja"];

const container2 = document.querySelector("#main2");

for (const name of names2) {
	if (name.includes("a")) {
		const p2 = document.createElement("p");
		p2.textContent = name;
		container2.append(p2);
	}
}

//////////////////////////////   03   //////////////////////////////

const score3 = 88;

const p3 = document.querySelector("#result3");

if (score3 >= 50) {
	p3.textContent = "Pass";
} else {
	p3.textContent = "Fail";
}

//////////////////////////////   04   //////////////////////////////

const numbers4 = [2, 3, 6, 7, 9, 12, 15, 20, 30];

const list4 = document.querySelector("#list4");

for (const number4 of numbers4) {
	const li4 = document.createElement("li");

	if (number4 % 3 === 0) {
		const li4 = document.createElement("li");
		li4.innerText = "Number " + number4 + " is divisible by 3";
		list4.appendChild(li4);
	}
}

//////////////////////////////   05   //////////////////////////////

//////////////////////////////   05   //////////////////////////////

const container5 = document.querySelector(".container5");

for (let i = 1; i <= 5; i++) {

	const span5 = document.createElement("span");

	if (i === 5) {
		span5.innerText = "Element " + i + ".";
	} else {
		span5.innerText = "Element " + i + ", ";
	}

	if (i === 1) {
		span5.style.color = "red";
	} else if (i === 2) {
		span5.style.color = "blue";
	} else if (i === 3) {
		span5.style.color = "green";
	} else if (i === 4) {
		span5.style.color = "purple";
	} else {
		span5.style.color = "orange";
	}

	container5.append(span5);
}

//////////////////////////////   06   //////////////////////////////

const products6 = ["Milk", "Bread", "Cheese"];

const ul6 = document.querySelector("#products6");

for (const product6 of products6) {

	const li6 = document.createElement("li");

	li6.innerText = "In stock: " + product6;

	ul6.append(li6);
}

//////////////////////////////   07   //////////////////////////////

const title7 = document.querySelector("#title7");

const text7 = "Hello World";

if (text7.length > 5) {
	title7.innerText = "Long title";
} else {
	title7.innerText = "Short title";
}

//////////////////////////////   08   //////////////////////////////

const grades8 = [1, 3, 5, 2, 4];

const pAverage8 = document.querySelector("#average8");

let sum = 0;

for (const grade8 of grades8) {
	sum += grade8;
}

const average8 = sum / grades8.length;

pAverage8.innerText = average8;

//////////////////////////////   09   //////////////////////////////

const cities9 = ["Belgrade", "Novi Sad", "Nis", "Subotica"];

const cityList9 = document.querySelector("#cityList9");

for (const city9 of cities9) {

	if (city9 === "Nis") {
		continue;
	}

	const li = document.createElement("li");
	li.innerText = "City: " + city9;

	cityList9.append(li);
}

//////////////////////////////   10   //////////////////////////////

let colors10 = ["red", "blue", "green", "orange"];
let container10 = document.getElementById("boxes10");

for (let i = 0; i < colors10.length; i++) {
	let div = document.createElement("div");
	div.className = "box";
	div.style.backgroundColor = colors10[i];
	container10.appendChild(div);
}

//////////////////////////////   11   //////////////////////////////

let roles11 = ["admin", "user", "guest"];
let ul11 = document.getElementById("roleList11");

for (let i = 0; i < roles11.length; i++) {

	let li = document.createElement("li");

	switch (roles11[i]) {
		case "admin":
			li.textContent = "Full access";
			break;

		case "user":
			li.textContent = "Limited access";
			break;

		case "guest":
			li.textContent = "Read only";
			break;
	}

	ul11.appendChild(li);
}

//////////////////////////////   12   //////////////////////////////

const input12 = document.querySelector("#textInput12");
const charCount12 = document.querySelector("#charCount12");

input12.addEventListener("input", function() {
	charCount12.innerText = "Characters: " + input12.value.length;
});

//////////////////////////////   13   //////////////////////////////

const button13 = document.querySelector("#toggleBtn13");
const info13 = document.querySelector("#info13");

button13.addEventListener("click", function () {

	if (info13.style.display === "none") {
		info13.style.display = "block";
	} else {
		info13.style.display = "none";
	}

});

//////////////////////////////   14   //////////////////////////////

const digits = [0,1,2,3,4,5,6,7,8,9];

const evenNumbers = document.querySelector("#evenNumbers");

for (const digit of digits) {

	if (digit % 2 === 0) {

		const li = document.createElement("li");
		li.innerText = digit;

		evenNumbers.append(li);
	}
}

//////////////////////////////   15   //////////////////////////////

const colorBox = document.querySelector("#colorBox");

function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return "rgb(" + r + "," + g + "," + b + ")";
}

colorBox.addEventListener("mouseover", function() {
	colorBox.style.backgroundColor = randomColor();
});

colorBox.addEventListener("mouseout", function() {
	colorBox.style.backgroundColor = "white";
});

//////////////////////////////   16   //////////////////////////////

const flexContainer16 = document.querySelector("#flexContainer16");

for (let i = 1; i <= 5; i++) {

	const p16 = document.createElement("p");
	p16.innerText = "Row " + i;

	if (i % 2 === 0) {
		p16.style.fontWeight = "bold";
	}

	flexContainer16.append(p16);
}

//////////////////////////////   17   //////////////////////////////

const grades17 = [5,4,3,2,1];

const result17 = document.querySelector("#result17");

for (const grade17 of grades17) {

	const p17 = document.createElement("p");

	if (grade17 === 5) {
		p17.innerText = "Excellent";
	} else if (grade17 >= 3) {
		p17.innerText = "Good";
	} else {
		p17.innerText = "Fail";
	}

	result17.append(p17);
}

//////////////////////////////   18   //////////////////////////////

const button18 = document.querySelector("#addCard18");
const cards18 = document.querySelector("#cards18");

button18.addEventListener("click", function () {

	const card18 = document.createElement("div");

	const title18 = document.createElement("h2");
	const paragraph18 = document.createElement("p");

	title18.innerText = "Card Title";
	paragraph18.innerText = "Card description";

	card18.append(title18, paragraph18);
	cards18.append(card18);
});

//////////////////////////////   19   //////////////////////////////

const fruits19 = ["Apple","Banana","Pear","Pineapple"];

const ul19 = document.querySelector("#fruitList19");

for (const fruit19 of fruits19) {

	if (fruit19.length > 5) {

		const li19 = document.createElement("li");
		li19.innerText = "Fruit: " + fruit19;

		ul19.append(li19);
	}
}

//////////////////////////////   20   //////////////////////////////

const numbersArray20 = [2,4,6,8];

const numbers20 = document.querySelector("#numbers20");

for (const number20 of numbersArray20) {

	const p20 = document.createElement("p");
	p20.innerText = number20 * number20;

	numbers20.append(p20);
}

//////////////////////////////   21   //////////////////////////////

const input21 = document.querySelector("#focusInput21");

input21.addEventListener("focus", function () {
	input21.style.backgroundColor = "lightgreen";
});

//////////////////////////////   22   //////////////////////////////

const input22 = document.querySelector("#blurInput22");

input22.addEventListener("blur", function () {
	input22.style.backgroundColor = "white";
});

//////////////////////////////   23   //////////////////////////////

const paragraph23 = document.querySelector("#doubleClick23");

paragraph23.addEventListener("dblclick", function () {
	paragraph23.innerText = "Double clicked";
});

//////////////////////////////   24   //////////////////////////////

const grades24 = [3,4,5,2];

const count24 = document.querySelector("#count24");

let counter24 = 0;

for (const grade24 of grades24) {

	if (grade24 > 3) {
		counter24++;
	}
}

count24.innerText = counter24;

//////////////////////////////   25   //////////////////////////////

const hover25 = document.querySelector("#hoverEffect25");

hover25.addEventListener("mouseenter", function () {
	hover25.style.backgroundColor = "blue";
});

hover25.addEventListener("mouseleave", function () {
	hover25.style.backgroundColor = "white";
});

//////////////////////////////   26   //////////////////////////////

//////////////////////////////   27   //////////////////////////////

//////////////////////////////   28   //////////////////////////////

//////////////////////////////   29   //////////////////////////////

//////////////////////////////   30   //////////////////////////////