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

    for (let movie of data.Search) {
        moviesHolder.innerHTML += `
        <a 
            href="movie.html?id=${movie.imdbID}" 
            class="card col-12 col-md-4 col-lg-3 p-0 text-decoration-none text-dark"
        >
            
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

        </a>
    `;
    }
});