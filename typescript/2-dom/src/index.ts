/*
* PRIMITIVE TYPES:
* - Number
* - String
* - Boolean
* - Symbol
* - Null & undefined
*
* OBJECT TYPES:
* - Objects
* - Arrays
* - Tuples [string, number]
* - Emus
*
* SPECIAL TYPES:
* - Any (iskljucuje proveru tipa)
* - Unknov
*
* FUNCTIONS:
* - Void (neka funkcija ne vraca nista - tacnije nema return)
* - Never (Kod koda koji se nece izvrsiti)
*
* ADVANCNED TYPES:
* - Union types: string\number
* - Intersection types
* - Literal types
* - Interface
* */

// Void - Ova funkcija ne vraca nikakav odgovor
// Void se smatra ako funkcija nema return ili ako je return prazna

function sayHello(message: string|number): void
{
    console.log(message);
    return
}

sayHello("Toma");
sayHello(5);

/*
*  add(5, 10) -> 15
* */

function add(number1: number , number2: number): number
{
    return number1 + number2;
}

add(5, 10);

function addRide(location: string, length: number) {
    return `Finish a ride from ${location} and it took ${length} kilometers`
}

const userInfo: [string, number, boolean] = ["Toma", 55, true];

// X, Y, Ime = 40.7128, -74.0060, "New York City"

type locationType = [number, number, string]

//const location: locationType[] [number, number, string]
const location: locationType[] = [
    [40.7128, -74.0060, "New York City"],
    [45.7128, -22.0060, "Belgrade"],
];
