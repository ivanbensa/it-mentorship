const apiUrl = "https://www.omdbapi.com/";
let apiKey = "da3ddb98";

let searchInput = document.getElementById("movieSearchInput");
let moviesHolder = document.getElementById("moviesHolder");
let movieSearchForm = document.getElementById("movieSearchForm");

movieSearchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    let search = searchInput.value;
    let response = await fetch(apiUrl + "?apikey=" + apiKey + "&s=" + search);
    let data = await response.json();



    if (data.Response === "False") {
        alert("Movie not found. Please try again.");
        searchInput.value = "";
        return;
    }

    moviesHolder.innerHTML = "";

/*

////////////////    My first solution ... :D

    for (let movie of data.Search) {
        let movieCard = document.createElement("div");
        movieCard.className = "card col-12 col-md-4 col-lg-3 p-0";

        let movieImage = document.createElement("img");
        movieImage.style.height = "500px";
        movieImage.style.objectFit = "cover";
        movieImage.src = movie.Poster;
        movieImage.className = "card-img-top";
        movieImage.alt = movie.Title;

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.className = "card-body bg-warning d-flex flex-column";

        let movieTitle = document.createElement("h5");
        movieTitle.className = "card-title";
        movieTitle.innerText = movie.Title;

        let movieYear = document.createElement("p");
        movieYear.className = "card-text mt-auto";
        movieYear.innerText = "Year: " + movie.Year;

        cardBody.append(movieTitle, movieYear);

        movieCard.append(movieImage, cardBody);

        moviesHolder.append(movieCard);
    }
 */

    for (let movie of data.Search) {
        moviesHolder.innerHTML += `
        <div class="card col-12 col-md-4 col-lg-3 p-0">
            
            <img 
                src="${movie.Poster}" 
                class="card-img-top" 
                alt="${movie.Title}"
                style="height: 500px; object-fit: cover;"
            >

            <div class="card-body bg-warning d-flex flex-column">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text mt-auto">Year: ${movie.Year}</p>
            </div>

        </div>
    `;
    }
});