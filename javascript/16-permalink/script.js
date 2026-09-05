let recipesHolder = document.getElementById("recipes");
let recipesSelect = document.getElementById("tagsHolder");

let params = new URLSearchParams(window.location.search);
let selectedTag = params.get("tag");

if (selectedTag) {
    fetch("https://dummyjson.com/recipes/tag/" + selectedTag)
        .then(response => response.json())
        .then(function (data) {
            for (let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        });
} else {
    fetch("https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc")
        .then(response => response.json())
        .then(function (data) {
            for (let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        });
}

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
    let apiUrl = "https://dummyjson.com/recipes/tag/" + this.value;

    fetch(apiUrl)
        .then(response => response.json())
        .then(function (data) {
            recipesHolder.innerHTML = "";

            for (let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        });
});

function appendCookingRecipe(recipe) {
    let cookingInstructions = buildInstructionsElement(recipe.instructions);

    let singleRecipe = document.createElement("div");

    let recipeTitle = document.createElement("h1");
    recipeTitle.innerText = recipe.name;

    let recipeCuisine = document.createElement("p");
    recipeCuisine.innerText = recipe.cuisine;

    let permalinkElement = document.createElement("a");
    permalinkElement.innerText = "Show recipe";
    permalinkElement.href = "permalink.html?id=" + recipe.id;

    singleRecipe.append(recipeTitle, recipeCuisine, cookingInstructions, permalinkElement);

    recipesHolder.append(singleRecipe);
}

function buildInstructionsElement(instructions) {
    let recipeInstructions = document.createElement("ul");

    for (let instruction of instructions) {
        let instructionElement = document.createElement("li");
        instructionElement.innerText = instruction;

        recipeInstructions.append(instructionElement);
    }

    return recipeInstructions;
}