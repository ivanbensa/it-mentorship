type Currency = "EUR" | "RSD";

type Order = {
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    zip: number;
    productName: string;
    amount: number;
    currency: Currency;
};

function addOrder(
    fullName: string,
    locationString: string,
    zip: number,
    productName: string,
    amount: number,
    currency: Currency
): Order {

    const splitName = fullName.split(" ");
    const splitLocation = locationString.split(" ");

    return {
        firstName: splitName[0]!,
        lastName: splitName[1]!,
        city: splitLocation[0]!,
        country: splitLocation[1]!,
        zip: zip,
        productName: productName,
        amount: amount,
        currency: currency
    };
}

const order = addOrder(
    "Ivan Bensa",
    "Berlin, Germany",
    13509,
    "Monitor",
    5000,
    "EUR"
);

console.log(order);