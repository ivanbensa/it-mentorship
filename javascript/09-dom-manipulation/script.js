let realEstates = [
  {
    city: "New York",
    option: "Studio",
    type: "Apartments",
    price: 50000,
    size: 30
  },
  {
    city: "Los Angeles",
    option: "null",
    type: "Houses",
    price: 120000,
    size: 150
  },
  {
    city: "Chicago",
    option: "Two-bedroom apartment",
    type: "Apartments",
    price: 65000,
    size: 55
  },
  {
    city: "Houston",
    option: "Three-bedroom apartment",
    type: "Apartments",
    price: 82000,
    size: 80
  },
  {
    city: "San Francisco",
    option: "Four-bedroom apartment",
    type: "Apartments",
    price: 155000,
    size: 120
  },
  {
    city: "Miami",
    option: "One-bedroom apartment",
    type: "Apartments",
    price: 90000,
    size: 45
  },
  {
    city: "Dallas",
    option: "House with yard",
    type: "Houses",
    price: 130000,
    size: 200
  },
  {
    city: "Seattle",
    option: "Two and a half bedroom apartment",
    type: "Apartments",
    price: 78000,
    size: 70
  },
  {
    city: "Boston",
    option: "Office space - downtown",
    type: "Commercial properties",
    price: 250000,
    size: 180
  },
  {
    city: "Las Vegas",
    option: "Land plot",
    type: "Land",
    price: 60000,
    size: 400
  },
  {
    city: "San Diego",
    option: "Garage",
    type: "Garages/Parking",
    price: 20000,
    size: 20
  },
  {
    city: "Denver",
    option: "Three and a half bedroom apartment",
    type: "Apartments",
    price: 97000,
    size: 95
  }
];

let estatesContainer = document.querySelector("#estates");

for (let estate of realEstates) {
  let estateDiv = document.createElement("div");
  estatesContainer.appendChild(estateDiv);

  let estateTitle = document.createElement("h1");
  estateTitle.innerText = estate.type + " / " + estate.city;
  estateDiv.appendChild(estateTitle);

  let estateOption = document.createElement("p");
  if (estate.option === "null") {
    estateOption.innerText = " -- ";
  } else {
    estateOption.innerText = estate.option;
  }
  estateDiv.appendChild(estateOption);

  let estatePrice = document.createElement("p");
  estatePrice.innerText = estate.price + " $";
  estateDiv.appendChild(estatePrice);

  let estateSize = document.createElement("p");
  estateSize.innerText = estate.size + " m\u00B2";
  estateDiv.appendChild(estateSize);
};

