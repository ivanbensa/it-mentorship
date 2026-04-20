const price = 100;
let region = "CA";
region = region.toUpperCase();

if (region === "UK") {
    console.log("Price for UK:", price * 1.15);
    console.log("Tax:", price * 0.15);
} else if (region === "US" || region === "CA") {
    console.log("Price for US/CA:", price * 1.13);
    console.log("Tax:", price * 0.13);
} else if (region === "RS") {
    console.log("Price for RS:", price * 1.2);
    console.log("Tax:", price * 0.2);
} else if (region === "REST") {
    console.log("Price for the rest of the world:", price * 1.25);
    console.log("Tax:", price * 0.25);
} else {
    console.log("The value you entered is not a valid region.");
}
