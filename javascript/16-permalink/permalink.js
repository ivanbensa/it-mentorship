let params = new URLSearchParams(window.location.search);

let recipeId = params.get("id");
let recipeElement = document.getElementById("recipe");

fetch("https://dummyjson.com/recipes/" + recipeId)
    .then(response => response.json())
    .then(function (data) {
        let recipeName = document.createElement("h1");
        recipeName.innerText = data.name;

        recipeElement.append(recipeName);
    });

let recipesSelect = document.getElementById("tagsHolder");

fetch("https://dummyjson.com/recipes/tags")
    .then(response => response.json())
    .then(function (data) {
        for (let tag of data) {
            let tagElement = document.createElement("option");

            tagElement.innerText = tag;
            tagElement.value = tag;

            recipesSelect.append(tagElement);
        }
    });

recipesSelect.addEventListener("change", function () {
    window.location = "index.html?tag=" + this.value;
});