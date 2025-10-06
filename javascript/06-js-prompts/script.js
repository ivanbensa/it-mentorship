
let name = prompt("Enter your name");
name = name.toLowerCase();

let names = ["admin", "administrator", "toma"];

if (names.includes(name)) {
    alert("Welcome, administrator");
} else {
    alert("You do not have access to the site");
};

//////////////////////////////////////////////////////////////////////////////////////

if (grade > 90) {
  alert("Excellent");
} else if (grade >= 75) {
  alert("Good");
} else if (grade >= 50) {
  alert("Average");
} else {
  alert("Fail");
};

///////////////////////////////////////////////////////////////////////////////////////

let shoppingList = prompt("Enter what you want to buy").split(",");

for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i].toLocaleLowerCase();

    switch(item) {
            case "apple":
            case "banana":
            case "orange":
                alert("Buy fruits");
            break;
            case "carrot":
            case "potato":
            case "onion":
                alert("Buy vegetables");
            break;
            case "beer":
            case "rakija":
            case "watter":
                alert("Buy drinks");
            break;
            default:
                alert("Currently out of stock");
    };
};

////////////////////////////////////////////////////////////////////////////////////////////
