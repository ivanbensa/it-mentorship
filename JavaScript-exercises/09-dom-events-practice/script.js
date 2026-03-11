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

let roles11 = ["admin","user","guest"];
let ul11 = document.getElementById("roleList11");

for (let i = 0; i < roles11.length; i++) {

	let li = document.createElement("li");

	switch(roles11[i]) {
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

//////////////////////////////   13   //////////////////////////////

//////////////////////////////   14   //////////////////////////////

//////////////////////////////   15   //////////////////////////////

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