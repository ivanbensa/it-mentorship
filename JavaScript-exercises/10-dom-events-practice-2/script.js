//////////////////////////////   01   //////////////////////////////

const main = document.getElementById("main");

const paragraph = document.createElement("p");

paragraph.innerText = "Welcome!";
paragraph.style.fontSize = "18px";

main.append(paragraph);

const main2 = document.getElementById("main2");

const names = ["Petar", "Luka", "Maja"];

for (let name of names) {
    if (name.includes("a")) {
        const paragraph = document.createElement("p");
        paragraph.innerText = name;
        main2.append(paragraph);
    }
}