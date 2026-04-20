const a = 5;
const b = 7;
const c = "7";

console.log(a + b);
console.log(a + c);
console.log(a + Number(c));
console.log(String(a) + b);

console.log(parseInt("5"));
console.log(parseFloat("5"));

const d = a > b ? "Yes" : "No";
console.log("d:", d);

let age = 13;
const f = age < 18 ? "Minor" : "Adult";
console.log(f);
