const mealDbAPI = "https://www.themealdb.com/api/json/v1/1/";
const cocktailDbAPI = "https://www.thecocktaildb.com/api/json/v1/1/";

const data = await getMealDBData("categories.php");

const categorySelect = document.getElementById("foodCategories");
const mealHolder = document.getElementById("mealsHolder");

for (let category of data.categories) {
    appendCategory(category);
}

categorySelect.addEventListener("change", async () => {

    mealHolder.innerHTML = "";

    const mealsJson = await getMealDBData("filter.php?c=" + categorySelect.value);

    for (let meal of mealsJson.meals) {

        let mealDiv = showMeal(meal);

        mealDiv.addEventListener("click", async () => {

            let recipe = await getMealDBData("lookup.php?i=" + meal.idMeal);

            document.getElementById("recipeText").innerText =
                recipe.meals[0].strInstructions;

            const cocktailData = await getCocktailDBData("random.php");
            const cocktail = cocktailData.drinks[0];

            document.getElementById("cocktailName").innerText =
                cocktail.strDrink;

            document.getElementById("cocktailImage").src =
                cocktail.strDrinkThumb;

            document.getElementById("cocktailInstructions").innerText =
                cocktail.strInstructions;

            document.getElementById("popup").style.display = "flex";
        });
    }
});

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});

function showMeal(meal) {
    let mealDiv = document.createElement("div");
    mealDiv.classList = "singleMeal";

    let mealImage = document.createElement("img");
    mealImage.setAttribute("src", meal.strMealThumb);
    mealImage.classList = "mealImage";

    let mealName = document.createElement("h5");
    mealName.innerText = meal.strMeal;

    mealDiv.append(mealImage, mealName);
    mealHolder.append(mealDiv);

    return mealDiv;
}

function appendCategory(category) {
    let categoryElement = document.createElement("option");
    categoryElement.value = category.strCategory;
    categoryElement.innerText = category.strCategory;
    categorySelect.append(categoryElement);
}

async function getMealDBData(endpoint) {
    let response = await fetch(mealDbAPI + endpoint);
    return await response.json();
}


async function getCocktailDBData(endpoint) {
    let response = await fetch(cocktailDbAPI + endpoint);
    return await response.json();
}