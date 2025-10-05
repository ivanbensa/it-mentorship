let cars = [
  "Toyota", "Honda", "Nissan", "Mazda", "Subaru",
  "Mitsubishi", "Suzuki", "Lexus", "Acura", "Infiniti",
  "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Porsche",
  "Opel", "Peugeot", "Renault", "Citroen", "Fiat",
  "Alfa Romeo", "Ferrari", "Lamborghini", "Maserati", "Bugatti",
  "Ford", "Chevrolet", "Dodge", "Jeep", "Chrysler",
  "Tesla", "Cadillac", "Buick", "Lincoln", "GMC",
  "Volvo", "Saab", "Koenigsegg", "Scania", "Skoda",
  "Seat", "Hyundai", "Kia", "Genesis", "Daewoo",
  "Tata", "Mahindra", "Aston Martin", "Bentley", "Rolls-Royce"
];

for (let i = 0; i < cars.length; i++) {

    let firstLetter = cars[i][0].toLowerCase()

    if (firstLetter === "a") {
        continue;
    }
    console.log(cars[i])
};

///////////////////////////////////////////////////////////////////////////

let numbers = [3, 15, 23, 32, 89, 6, 10, 66, 120, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " Even");
    } else { 
        console.log(numbers[i] + " Odd");
    }
};

//////////////////////////////////////////////////////////////////////////////

let car = {
    make: "Toyota",
    model: "Avensis",
    year: 2009,
    color: "Silver"
};

for (let property in car) {
    switch (property) {
        case "make":
            console.log("Make: " + car[property]);
            break;
        case "model":
            console.log("Model: " + car[property]);
            break;
        case "year":
            console.log("Year: " + car[property]);
            break;
        case "color":
            console.log("Color: " + car[property]);
            break;
    }
};

///////////////////////////////////////////////////////////////////////////////////

let students = [
    {name: "Ivan", grade: 1},
    {name: "Aleksandra", grade: 49},
    {name: "Tomislav", grade: 50},
    {name: "Ivana", grade: 97},
    {name: "Lorena", grade: 34},
    {name: "Janko", grade: 66},
];

for (let i = 0; i < students.length; i++) {
    let student = students[i];

    if (student.grade >= 50) {
        console.log(student.name + ": Pass");
    } else {
        console.log(student.name + ": Fail");
    }
};

//////////////////////////////////////////////////////////////////////////////////

let grades = [1, 56, 50, 89, 98, 75, 23, 50, 77, 40, 66, 90, 90];

for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (grade > 90) {
        console.log(grade + " : " + "Excellent");
    } else if (grade >= 75 && grade <= 90) {
        console.log(grade + " : " + "Good");
    } else if (grade >= 50 && grade < 75) {
        console.log(grade + " : " + "Average");
    } else {
        console.log(grade + " : " + "Fail");
    }
};

///////////////////////////////////////////////////////////////////////////////////

let fruits = ["Banana", "Lemon", "Apple", "Orange"];

for (let i = 0; i < fruits.length; i++) {

    let fruit = fruits[i];


    switch (fruit) {
        case "Banana":
        case "Lemon":
            console.log(fruit + " is yellow");
            break;
        case "Apple":
            console.log(fruit + " is red");
            break;
        case "Orange":
            console.log(fruit + " is orange");
            break;
    };
};

/////////////////////////////////////////////////////////////////////////////////////////

let book = {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    year: 1937,
    genre: "Fantasy"
};

for (let property in book) {
    if (property === "year") {
        if (book[property] < 2000) {
            console.log(book.title + "-" + book.year + " :Old book");
        } else {
            console.log(book.title + "-" + book.year + " :New book");
        };
    };
};

////////////////////////////////////////////////////////////////////////////////////////

let employees = [
    { name: "Ivan", salary: 68000 },
    { name: "Tomislav", salary: 85000 },
    { name: "Aleksandra", salary: 25000 },
    { name: "Lorena", salary: 70000 },
    { name: "Janko", salary: 40000 }
];

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];

    if (employee.salary > 50000) {
        console.log(employee.name + ": High salary");
    } else if (employee.salary >= 30000 && employee.salary <= 50000) {
        console.log(employee.name + ": Medium salary");
    } else {
        console.log(employee.name + ": Low salary");
    };
};

/////////////////////////////////////////////////////////////////////////////////////////

let cities = ["Miami", "Orlando", "Los Angeles", "Novi Sad", "Belegrade"];

for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();

    switch (city) {
        case "miami":
            console.log("Welcome to Miami");
            break;
        case "orlando":
            console.log("Welcome to Orlando");
            break;
        case "los angeles":
            console.log("Welcome to Los Angeles");
            break;
        case "novi sad":
            console.log("Welcome to Novi Sad");
            break;
        case "belegrade":
            console.log("Welcome to Belgrade");
            break;
    };
};
