let cars = [
  {
    name: "Tesla Model S",
    price: 89999,
    image: "https://placehold.co/600x400",
    productionYear: 2023
  },
  {
    name: "Audi RS7 Sportback",
    price: 130000,
    image: "https://placehold.co/600x400",
    productionYear: 2025
  },
    {
    name: "BMW i8 Roadster",
    price: 160000,
    image: "https://placehold.co/600x400",
    productionYear: 2025
  },
  {
    name: "BMW 3 Series",
    price: 42000,
    image: "https://placehold.co/600x400",
    productionYear: 2022
  },
  {
    name: "Mercedes-Benz C-Class",
    price: 45000,
    image: "https://placehold.co/600x400",
    productionYear: 2022
  },
    {
    name: "Tesla Model 3 Highland",
    price: 49999,
    image: "https://placehold.co/600x400",
    productionYear: 2025
  },
  {
    name: "Audi A4",
    price: 40000,
    image: "https://placehold.co/600x400",
    productionYear: 2021
  },
  {
    name: "Volkswagen Golf",
    price: 30000,
    image: "https://placehold.co/600x400",
    productionYear: 2020
  },
    {
    name: "Ferrari Roma",
    price: 250000,
    image: "https://placehold.co/600x400",
    productionYear: 2025
  },
  {
    name: "Porsche 911",
    price: 120000,
    image: "https://placehold.co/600x400",
    productionYear: 2023
  },
  {
    name: "Ford Mustang",
    price: 55000,
    image: "https://placehold.co/600x400",
    productionYear: 2021
  },
  {
    name: "Lamborghini Huracán",
    price: 210000,
    image: "https://placehold.co/600x400",
    productionYear: 2024
  }
];

let currentYear = new Date().getFullYear();

for(let car of cars) {

    let div = document.createElement("div");

    let image = document.createElement ("img");
    image.src = car.image;

    let paragraph = document.createElement("p");
    paragraph.textContent = car.name + " - ";

    let span = document.createElement("span");
    span.textContent = car.price + "$";
    paragraph.appendChild(span);


    let year = document.createElement("p");
    year.textContent = car.productionYear;
    
    if (car.productionYear === currentYear) {
        let newCar = document.createElement("span");
        newCar.textContent = "NEW🆕";
        newCar.classList.add("newModel");
        year.appendChild(newCar);
    } else {
        year.textContent = car.productionYear;
    };


    div.appendChild(image);
    div.appendChild(paragraph);
    div.appendChild(year);

    document.querySelector("#products").appendChild(div);
};
