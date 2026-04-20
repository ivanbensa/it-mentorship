/*const t = "This is some text";
console.log(t);
const tUpper = t.toUpperCase();
console.log(tUpper);
*/

/*let t = "This is some text";
console.log(t);
t = t.toUpperCase();
console.log(t);
*/

const t = "This is SOME text";
console.log(t);

const tUpper = t.toUpperCase();
console.log(tUpper);

const tLower = t.toLowerCase();
console.log(tLower);

console.log("CharAt", t.charAt(4));
console.log("CharCodeAt", t.charCodeAt(4));

console.log("Includes", t.includes("is"));
console.log("IndexOf", t.indexOf("is"));

console.log("Replace", t.replace("e", "*"));
console.log("Replace (regex):", t.replace(/e/g, "*"));

console.log("Substring:", t.substring(4, 11));