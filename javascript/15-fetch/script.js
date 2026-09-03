let productsHolder = document.getElementById("products");
let inputText = document.getElementById("inputText");
let btn = document.getElementById("btn");

fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")
    .then(function (response){
        return response.json()
    })
    .then(function(data) {
        for (let product of data.products) {
            appendProductToHolder(product)
        }
    })

function appendProductToHolder(product) {
    let singleProduct = document.createElement("div");

    let productTitle = document.createElement("h1");
    productTitle.innerText = product.title;

    let productCategory = document.createElement("p");
    productCategory.innerText = product.category;

    let productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    singleProduct.append(productTitle, productCategory, productPrice);

    productsHolder.append(singleProduct);
}

btn.addEventListener("click", searchProducts);
inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchProducts();
    }
});

function searchProducts() {
    let inputTextSearch = inputText.value;

    fetch("https://dummyjson.com/products/search?q=" + inputTextSearch)
        .then(function (response){
            return response.json()
        })

        .then(function(data) {
            productsHolder.innerHTML = "";
            for (let product of data.products) {
                appendProductToHolder(product)
            }
        })
}