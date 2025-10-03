let name = "admin";
let password = "secretPassword";

if (name == "admin" && password == "secretPassword") {
    console.log("Welcome back");
} else if(name == "toma" && password == "secretPassword") {
    console.log("Welcome Presidente");
} else {
    console.log("Wrong username or password");
};

//////////////////////////////////////////////////////////////////////////////////

   let age = 35;

   if(age == 35) {
    console.log("The perfect age");
   } else if(age < 18) {
    console.log("Minor");
   } else {
    console.log("Adult");
   };

/////////////////////////////////////////////////////////////////////////////////////

   let numbers = [3, 15, 23, 45, 89];
    
    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length -1];

    let sum = firstNumber + lastNumber;

    if (sum > 50) {
            console.log("The sum of the first and last number is greater than 50.");
        } else if (sum === 50) {
            console.log("The sum of the first and last number is exactly 50.");
        } else {
            console.log("The sum of the first and last number is less than 50.");
        };

////////////////////////////////////////////////////////////////////////////////////////////

let fruit = "apple";

if (fruit == "apple") {
    console.log("This is an apple.");
} else if (fruit == "banana") {
    console.log("This is a banana.");
} else if (fruit == "plum") {
    console.log("This is a plum.");
} else {
    console.log("Some other fruit.");
};
