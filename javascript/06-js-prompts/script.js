
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

let weather = prompt("Enter the current weather");
weather = weather.toLowerCase();

switch(weather) {
    case "sunny":
        alert("Wear sunglasses 😎");
        break;
    case "rainy":
        alert("Take an umbrella ☔");
        break;
    case "cloudy":
        alert("Maybe it will rain, be prepared 🌂");
        break;
    case "snowy":
        alert("Wear warm clothes ⛄");
        break;
        default:
        alert("Unknown weather condition 🌪️");
};

////////////////////////////////////////////////////////////////////////////////////////////////

let colors = prompt("Enter a few colors").split(",");

for (let i = 0; i < colors.length; i++) {
  let color = colors[i].toLowerCase();

  switch (color) {
    case "red":
      alert("Red is vibrant 🔴");
      break;
    case "blue":
      alert("Blue is calm 🔵");
      break;
    case "white":
      alert("White is pure ⚪");
      break;
    default:
      alert("Color not recognized.");
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////

let userName = prompt("Enter your name:");

if (userName.length < 5) {
  alert("Hello, " + userName + "!");
} else {
  alert("Welcome, " + userName + "!");
};
