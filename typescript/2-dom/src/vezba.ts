const orders: Order[] = [];

type Currency = "EUR" | "RSD";
type NameFormat = `${string} ${string}`;

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
    fullName: NameFormat,
    locationString: string,
    zip: number,
    productName: string,
    amount: number,
    currency: Currency
): Order {

    const splitName = fullName.split(" ");
    const splitLocation = locationString.split(" ");

    if (splitName.length > 2 || splitLocation.length > 2) {
        throw new Error("Name or location exceeds the limit of 2");
    }

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

function listOrders(orderList: Order[]): void {
    const ordersDiv = document.getElementById("orderList")!;
    ordersDiv.innerHTML = "";

    orderList.forEach(item => {
        const singleOrder: HTMLDivElement = document.createElement("div");

        const singleOrderTitle: HTMLHeadingElement = document.createElement("h1");
        singleOrderTitle.textContent = item.firstName + " " + item.lastName;

        const singleOrderLocation: HTMLParagraphElement = document.createElement("p");
        singleOrderLocation.textContent = item.city + " " + item.country;

        const singleOrderProduct: HTMLParagraphElement = document.createElement("p");
        singleOrderProduct.textContent = item.productName;

        const singleOrderPrice: HTMLSpanElement = document.createElement("span");
        singleOrderPrice.textContent = `${item.amount}`;

        singleOrder.append(
            singleOrderTitle,
            singleOrderLocation,
            singleOrderProduct,
            singleOrderPrice
        );

        ordersDiv.append(singleOrder);
    });
}

function search(searchTerm: string, orderList: Order[]): void {
    const lowerTerm = searchTerm.toLowerCase();

    const filteredOrders = orderList.filter(order => {
        return order.productName.toLowerCase() === lowerTerm;
    });

    listOrders(filteredOrders);
}

const singleOrder = addOrder(
    "Ivan Bensa",
    "Berlin Germany",
    13509,
    "Monitor",
    5000,
    "EUR"
);

const secondOrder = addOrder(
    "Ivan Bensa",
    "Berlin Germany",
    13509,
    "Monitor",
    5000,
    "EUR"
);

orders.push(singleOrder, secondOrder);

console.log(orders);

listOrders(orders);
search("Monitor", orders);

