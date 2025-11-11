let cities = [
    "All",
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Columbus",
    "Fort Worth",
    "Indianapolis",
    "Charlotte",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "El Paso",
    "Nashville",
    "Detroit",
    "Portland",
    "Las Vegas"
];

let types = [
    "Apartments",
    "Houses",
    "Commercial spaces",
    "Land",
    "Garages/Parking"
];

let options = [
    "Studio",
    "One-bedroom",
    "1.5-bedroom",
    "Two-bedroom",
    "2.5-bedroom",
    "Three-bedroom",
    "3.5-bedroom",
    "Four-bedroom",
    "4.5+ bedrooms"
];

let realEstates = [
    {
        city: "New York",
        option: "Studio",
        type: "Apartments",
        price: 48200,
        size: 25
    },
    {
        city: "Chicago",
        option: null,
        type: "Houses",
        price: 12200,
        size: 85
    },
    {
        city: "Houston",
        option: "Two-bedroom",
        type: "Apartments",
        price: 75500,
        size: 60
    },
    {
        city: "Phoenix",
        option: "Three-bedroom",
        type: "Apartments",
        price: 130000,
        size: 90
    },
    {
        city: "Philadelphia",
        option: "One-bedroom",
        type: "Apartments",
        price: 68000,
        size: 45
    },
    {
        city: "San Antonio",
        option: "Houses",
        type: "Houses",
        price: 210000,
        size: 150
    },
    {
        city: "San Diego",
        option: "2.5-bedroom",
        type: "Apartments",
        price: 95000,
        size: 70
    },
    {
        city: "Dallas",
        option: "Four-bedroom",
        type: "Apartments",
        price: 280000,
        size: 120
    },
    {
        city: "San Jose",
        option: "1.5-bedroom",
        type: "Apartments",
        price: 55000,
        size: 50
    },
    {
        city: "Austin",
        option: "Garages/Parking",
        type: "Garages/Parking",
        price: 10000,
        size: 20
    },
    {
        city: "Jacksonville",
        option: "Apartments",
        type: "Apartments",
        price: 85000,
        size: 65
    },
    {
        city: "San Francisco",
        option: "Two-bedroom",
        type: "Apartments",
        price: 72000,
        size: 55
    }
];

let citiesSelector = document.querySelector("#citiesSelector");
let typesSelector = document.querySelector("#typeSelector");
let roomSelector = document.querySelector("#roomSelector");


for (let option of options) {
    let optionElement = document.createElement("option");
    optionElement.innerHTML = option;
    roomSelector.appendChild(optionElement);
}

for (let type of types) {
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;

    typesSelector.appendChild(typeOption);
}

for (let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;

    citiesSelector.appendChild(cityOption);
  
//////////////////solution////////////////////////////////////
    let cityFound = false;

    for (let estate of realEstates) {
        if (estate.city === city) {
            cityFound = true;
            break;
        }
    }

    if (!cityFound && city !== "All") {
        cityOption.setAttribute("disabled", "true");
    }
  ////////////////////////////////////////////////////////////
}

let currentCity = null;
let currentRoom = null;
let currentType = null;

roomSelector.addEventListener("change", function (event) {
    currentRoom = event.currentTarget.value;
});

typesSelector.addEventListener("change", function (event) {
    currentType = event.currentTarget.value;
});


citiesSelector.addEventListener("change", function (event) {
    currentCity = event.currentTarget.value;

    let allEstates = document.getElementsByClassName("realEstate");

    for (let realEstate of allEstates) {
        let estateCity = realEstate.querySelector(".city").textContent;

        realEstate.classList.remove("hidden");

        if (estateCity !== currentCity && currentCity !== "All") {
            realEstate.classList.add("hidden");
        }
    }
});

for (let estate of realEstates) {

    let estateHolder = document.createElement("div");
    estateHolder.classList.add("realEstate");

    let estateTitle = document.createElement("p");
    estateTitle.innerText = estate.city;
    estateTitle.classList.add("city");

    let estateOption = document.createElement("p");
    if (estate.option == null) {
        estateOption.innerText = "-";
    } else {
        estateOption.innerText = estate.option;
    }

    let estatePrice = document.createElement("p");
    estatePrice.innerText = estate.price + " $";

    let estateSize = document.createElement("p");
    estateSize.innerText = estate.size + " m\u00B2";

    estateHolder.append(estateTitle);
    estateHolder.append(estateOption);
    estateHolder.append(estatePrice);
    estateHolder.append(estateSize);

    document.querySelector("#estates").appendChild(estateHolder);
}
