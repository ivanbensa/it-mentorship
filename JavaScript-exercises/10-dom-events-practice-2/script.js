//////////////////////////////   01   //////////////////////////////

const main = document.getElementById("main");

const paragraph = document.createElement("p");

paragraph.innerText = "Welcome!";
paragraph.style.fontSize = "18px";

main.append(paragraph);

//////////////////////////////   02   //////////////////////////////

const main2 = document.getElementById("main2");

const names = ["Petar", "Luka", "Maja"];

for (let name of names) {
    if (name.includes("a")) {
        const paragraph = document.createElement("p");
        paragraph.innerText = name;
        main2.append(paragraph);
    }
}

//////////////////////////////   03   //////////////////////////////

const main3 = document.getElementById("main3");
const score = 88;
const paragraph3 = document.createElement("p");

paragraph3.innerText = score >= 50 ? "Pass" : "Fail";

main3.append(paragraph3);

//////////////////////////////   04   //////////////////////////////

const main4 = document.getElementById("main4");

const numbers = [3, 6, 2, 9, 12, 15];

for (let number of numbers) {
    if (number % 3 === 0) {
        const listItem = document.createElement("li");
        listItem.innerText = `Number ${number} is divisible by 3`;

        main4.append(listItem);
    }
}

//////////////////////////////   05   //////////////////////////////

const main5 = document.getElementById("main5");

const colors = ["red", "blue", "green", "orange", "purple"];

for (let i = 0; i < 5; i++) {
    const span = document.createElement("span");

    span.innerText = `Element ${i + 1}`;
    span.style.color = colors[i];

    main5.append(span);
}

//////////////////////////////   06   //////////////////////////////

const main6 = document.getElementById("main6");

const products = ["Milk", "Bread", "Cheese"];

for (let product of products) {
    const listItem = document.createElement("li");

    listItem.innerText = `In stock: ${product}`;

    main6.append(listItem);
}