// script.js
const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        ingredients: ["200g spaghetti", "2 eggs", "100g pancetta", "50g Parmesan cheese", "Salt & pepper"],
        steps: [
            "Boil the spaghetti in salted water.",
            "Cook pancetta in a pan until crispy.",
            "Beat eggs and mix with grated Parmesan cheese.",
            "Drain spaghetti and mix with pancetta and egg mixture.",
            "Serve hot with a sprinkle of black pepper."
        ]
    },
    {
        id: 2,
        title: "Chocolate Cake",
        description: "A moist and rich chocolate cake perfect for celebrations.",
        ingredients: ["200g flour", "200g sugar", "100g cocoa powder", "1 tsp baking powder", "2 eggs", "200ml milk"],
        steps: [
            "Preheat the oven to 180°C.",
            "Mix dry ingredients in a bowl.",
            "Add eggs and milk to create a smooth batter.",
            "Pour into a greased cake tin and bake for 30-35 minutes.",
            "Cool before serving."
        ]
    }
];

// Elements
const recipesContainer = document.getElementById("recipes-container");
const recipeDetailSection = document.getElementById("recipe-detail");
const recipeListSection = document.getElementById("recipe-list");
const recipeTitle = document.getElementById("recipe-title");
const recipeDescription = document.getElementById("recipe-description");
const ingredientsList = document.getElementById("ingredients-list");
const stepsList = document.getElementById("steps-list");
const backBtn = document.getElementById("back-btn");

// Load Recipes
function loadRecipes() {
    recipesContainer.innerHTML = "";
    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.innerHTML = `<h3>${recipe.title}</h3><p>${recipe.description}</p>`;
        card.addEventListener("click", () => showRecipeDetail(recipe.id));
        recipesContainer.appendChild(card);
    });
}

// Show Recipe Detail
function showRecipeDetail(id) {
    const recipe = recipes.find(r => r.id === id);
    recipeTitle.textContent = recipe.title;
    recipeDescription.textContent = recipe.description;

    ingredientsList.innerHTML = recipe.ingredients
        .map(ingredient => `<li>${ingredient}</li>`)
        .join("");

    stepsList.innerHTML = recipe.steps
        .map(step => `<li>${step}</li>`)
        .join("");

    recipeListSection.style.display = "none";
    recipeDetailSection.style.display = "block";
}

// Back to Recipes
backBtn.addEventListener("click", () => {
    recipeListSection.style.display = "block";
    recipeDetailSection.style.display = "none";
});

// Initialize
loadRecipes();
