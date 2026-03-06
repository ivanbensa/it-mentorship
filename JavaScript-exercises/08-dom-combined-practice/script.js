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

const ulEx09 = document.querySelector("#numberListEx9");
const numberEx9 = [2, 4, 6, 8, 10];

for (const numbersEx9 of numberEx9) {
	const li = document.createElement("li");
	li.innerText = numbersEx9 * numbersEx9;
	ulEx09.append(li);
}

//////////////////////////////   10   //////////////////////////////

const divEx10 = document.querySelector("#containerEx10");

for (let i = 1; i <= 5; i++) {
	const paragraph = document.createElement("p");
	paragraph.innerText = "Paragraph " + i;
	divEx10.append(paragraph);
}

//////////////////////////////   11   //////////////////////////////

const rolesEx11 = ["admin", "user", "guest"];

const ulEx11 = document.querySelector("#roleEx11");

for (const roleEx11 of rolesEx11) {

	const li = document.createElement("li");

	switch (roleEx11) {
		case "admin":
			li.innerText = "Admin access";
			break;

		case "user":
			li.innerText = "User";
			break;

		case "guest":
			li.innerText = "Guest";
			break;
	}

	ulEx11.append(li);
}

//////////////////////////////   12   //////////////////////////////

const statusesArrayEx12 = [true,false,true];

const ulEx12 = document.querySelector("#statusesEx12");

for (const statuseArrayEx12 of statusesArrayEx12) {
	const liEx12 = document.createElement("li");

	if (statuseArrayEx12 === true) {
		liEx12.innerText = "Logged in";
	} else {
		liEx12.innerText = "Not logged in";
	}

	ulEx12.append(liEx12);
}

//////////////////////////////   13   //////////////////////////////

const paragraphEx13 = document.querySelector("#textEx13");

paragraphEx13.innerHTML = "<strong>New bold text</strong>";

//////////////////////////////   14   //////////////////////////////

const numbersEx14 = [1,2,3,4,5,6,7,8,9];

const ulEx14 = document.querySelector("#oddNumbersEx14");

for (const numberEx14 of numbersEx14) {
	const liEx14 = document.createElement("li");

	if (numberEx14 % 2 !== 0) {
		liEx14.innerText = numberEx14;
		ulEx14.append(liEx14);
	}
}

//////////////////////////////   15   //////////////////////////////

const paragraphEx15 = document.querySelector(".boxEx15");

const divEx15 = document.createElement("p");

divEx15.innerText = "Hello";
divEx15.style.color = "blue";

paragraphEx15.append(divEx15);

//////////////////////////////   16   //////////////////////////////

const namesArrayEx16 = ["Ana", "Marko", "Jovan"];

const ulEx16 = document.querySelector("#namesEx16");

for (const nameArrayEx16 of namesArrayEx16) {
	const liEx16 = document.createElement("li");

	if (nameArrayEx16.length > 3) {
		liEx16.innerText = nameArrayEx16;
		ulEx16.append(liEx16);
	}
}

//////////////////////////////   17   //////////////////////////////

const divEx17 = document.querySelector("#mainEx17");

const headingEx17 = document.createElement("h2");
const paragraphEx17 = document.createElement("p");

headingEx17.innerText = "Title";
paragraphEx17.innerText = "Paragraph";

divEx17.append(headingEx17, paragraphEx17);

divEx17.getElementsByTagName("p")[0].innerText = "Change paragraph";

//////////////////////////////   18   //////////////////////////////

const numbersEx18 = [10, 20, 30, 40, 50];

const ulEx18 = document.querySelector("#numberListEx18");

for (const numberEx18 of numbersEx18) {
	const liEx18 = document.createElement("li");

	liEx18.innerText = "Number: " + numberEx18;

	ulEx18.append(liEx18);
}

//////////////////////////////   19   //////////////////////////////

const divEx19 = document.querySelector(".containerEx19");

const paragraphEx19 = document.createElement("p");
paragraphEx19.innerText = "Paragraph 1";

divEx19.append(paragraphEx19);

for (let i = 2; i <= 4; i++) {
	const p = document.createElement("p");
	p.innerText = "Paragraph " + i;
	divEx19.append(p);
}

//////////////////////////////   20   //////////////////////////////

const gradesArrayEx20 = [5,4,3,2,1];

const ulEx20 = document.querySelector("#gradesEx20");

for (const gradeArrayEx20 of gradesArrayEx20) {
	const liEx20 = document.createElement("li");

	if (gradeArrayEx20 === 5) {
		liEx20.innerText = "Excellent";
	} else if (gradeArrayEx20 >= 3 ) {
		liEx20.innerText = "good";
	} else {
		liEx20.innerText = "Fail";
	}

	ulEx20.append(liEx20);
}