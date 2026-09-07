const apiUrl = "https://www.omdbapi.com/";
let apiKey = "da3ddb98";

let searchInput = document.getElementById("movieSearchInput");
let moviesHolder = document.getElementById("moviesHolder");

document.getElementById("movieSearchForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let search = searchInput.value;
    let response = await fetch(apiUrl + "?apikey=" + apiKey + "&s=" + search);
    let data = await response.json();

    moviesHolder.innerHTML = "";

    for (let movie of data.Search) {
        let movieCard = document.createElement("div");
        movieCard.className = "card col-12 col-md-4 col-lg-3";

        let movieImage = document.createElement("img");
        movieImage.src = movie.Poster;
        movieImage.className = "card-img-top";
        movieImage.alt = movie.Title;

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let movieTitle = document.createElement("h5");
        movieTitle.className = "card-title";
        movieTitle.innerText = movie.Title;

        let movieYear = document.createElement("p");
        movieYear.className = "card-text";
        movieYear.innerText = "Year: " + movie.Year;

        cardBody.append(movieTitle, movieYear);

        movieCard.append(movieImage, cardBody);

        moviesHolder.append(movieCard);
    }
});