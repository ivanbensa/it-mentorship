//////////////////////////////   01   //////////////////////////////

const divEx1 = document.getElementById("mainEx1");

const paragraphEx1 = document.createElement("p");
paragraphEx1.innerText = "Hello";
paragraphEx1.style.color = "red";

divEx1.appendChild(paragraphEx1);

//////////////////////////////   02   //////////////////////////////

const namesEx2 = ["Ana", "Marko", "Jovan"]
const ulEx2 = document.getElementById("listEx2");

for (let i = 0; i < namesEx2.length; ++i) {
	const lList = document.createElement("li");
	lList.appendChild(document.createTextNode(namesEx2[i]));
	ulEx2.appendChild(lList);
}

//////////////////////////////   03   //////////////////////////////

const numberEx3 = 15;
const paragraphEx3 = document.querySelector("#parEx3");

if (numberEx3 > 10) {
	paragraphEx3.innerText = "Number is greater than 10";
} else {
	paragraphEx3.innerText = "Number is less than or equal to 10";
}

//////////////////////////////   04   //////////////////////////////

const grades = [5, 3, 4, 2, 5];
let sum = 0;

const paragraphEx4 = document.querySelector("#sumEx4");

for (const grade of grades) {
	sum += grade;
}

paragraphEx4.innerText = sum;

//////////////////////////////   05   //////////////////////////////

const divEx5 = document.getElementById("boxEx5");

const headingEx5 = document.createElement("h2");
const paragraphEx5 = document.createElement("p");

headingEx5.innerText = "Title";
paragraphEx5.innerText = "Description";

divEx5.append(headingEx5, paragraphEx5);

//////////////////////////////   06   //////////////////////////////

const cities = ["Belgrade", "Novi Sad", "Niš"];

const ulEx6 = document.querySelector("#citiesEx6");

for (let city of cities) {
	if (city[0] === "N") {
		const liEx6 = document.createElement("li");
		liEx6.innerText = city;
		ulEx6.append(liEx6);
	}
}

//////////////////////////////   07   //////////////////////////////

const divEx7 = document.querySelector(".cardEx7");

const headingEx7 = document.createElement("h3");
const paragraphEx7 = document.createElement("p");

headingEx7.innerText = "Card";
paragraphEx7.innerText = "Card description";

divEx7.append(headingEx7, paragraphEx7);

//////////////////////////////   08   //////////////////////////////

const divEx8 = document.querySelector("#resultEx8");
const pointsEx8 = 75;

if (pointsEx8 >= 75) {
	divEx8.innerText = "Excellent";
} else if (pointsEx8 >= 50) {
	divEx8.innerText = "Good";
} else {
	divEx8.innerText = "Fail";
}

//////////////////////////////   09   //////////////////////////////

//////////////////////////////   09   //////////////////////////////

const ulEx09 = document.querySelector("#numberListEx9");
const numberEx9 = [2, 4, 6, 8, 10];

for (const numbersEx9 of numberEx9) {
	const li = document.createElement("li");
	li.innerText = numbersEx9 * numbersEx9;
	ulEx09.append(li);
}

//////////////////////////////   10   //////////////////////////////

//////////////////////////////   11   //////////////////////////////

//////////////////////////////   12   //////////////////////////////

//////////////////////////////   13   //////////////////////////////

//////////////////////////////   14   //////////////////////////////

//////////////////////////////   15   //////////////////////////////

//////////////////////////////   16   //////////////////////////////

//////////////////////////////   17   //////////////////////////////

//////////////////////////////   18   //////////////////////////////

//////////////////////////////   19   //////////////////////////////

//////////////////////////////   20   //////////////////////////////