const apiUrl = "https://www.omdbapi.com/";
const apiKey = "da3ddb98";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const response = await fetch(apiUrl + "?apikey=" + apiKey + "&i=" + id + "&plot=full");
const movie = await response.json();

const movieHolder = document.getElementById("movieHolder");

movieHolder.innerHTML = `
    <div class="card mx-auto" style="max-width: 800px;">
        <div class="row g-0">

            <div class="col-md-5">
                <img
                    src="${movie.Poster}"
                    class="img-fluid rounded-start"
                    alt="${movie.Title}"
                >
            </div>

            <div class="col-md-7">
                <div class="card-body">
                    <h1 class="card-title">${movie.Title}</h1>

                    <p class="card-text">
                        <strong>Year:</strong> ${movie.Year}
                    </p>

                    <p class="card-text">
                        <strong>Runtime:</strong> ${movie.Runtime}
                    </p>

                    <p class="card-text">
                        <strong>IMDb Rating:</strong> ${movie.imdbRating}
                    </p>

                    <p class="card-text">
                        <strong>Genre:</strong> ${movie.Genre}
                    </p>

                    <p class="card-text">
                        <strong>Plot:</strong> ${movie.Plot}
                    </p>

                    <button onclick="history.back()" class="btn btn-warning">
    Back
</button>
                </div>
            </div>

        </div>
    </div>
`;