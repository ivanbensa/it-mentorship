let ads = [
    {
        title: "Skoda octavia 2014",
        price: 9950,
        image: "https://cdn.skoda-storyboard.com/2024/02/03_Skoda_Octavia_Combi_51d65db5.jpg",
    },
    {
        title: "Audi A4", 
        price: 8000,
        image: "https://www.akkompresor.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/WAUZZZF40KA081183_1200_900px.jpeg",
    };
];

let productsElement = document.getElementById("products");

for (let ad in ads) {
   productsElement.innerHTML += 
      ads[ad]["title"] + " " + 
      ads[ad]["price"] + " " + 
      ads[ad]["image"] + "<br/>";
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let movies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 8.7
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.6
    }
];

let mooviesList = document.getElementById("movies");

for (let movie in movies) {
    mooviesList.innerHTML +=
    movies[movie]["title"] + " " +
    movies[movie]["year"] + " - " +
    movies[movie]["rating"] + "⭐ <br/>";

};

////////////////////////////////////////////////////////////////////////////////////////

let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.99
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 10.50
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 9.80
    }
];

let booksList = document.getElementById("books");

for(let book in books) {
    booksList.innerHTML +=
    books[book]["title"] + " , " +
    books[book]["author"] + " - " +
    books[book]["price"] + "$ <br/>";
};
