// Sample recipe data (your JSON array)
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://static.toiimg.com/thumb/53222760.cms?imgsize=312586&width=800&height=800",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

// Elements
const recipesContainer = document.getElementById("recipesContainer");
const searchInput = document.getElementById("searchInput");
const showAllBtn = document.getElementById("showAllBtn");
const showVegBtn = document.getElementById("showVegBtn");
const showNonVegBtn = document.getElementById("showNonVegBtn");
const above45Filter = document.getElementById("above45");
const below40Filter = document.getElementById("below40");
const mobileDrawer = document.getElementById("mobileDrawer");

// Initialize recipe cards
function initializeRecipes() {
    recipesContainer.innerHTML = "";
    recipes.forEach((recipe, index) => {
        const card = createRecipeCard(recipe, index);
        recipesContainer.appendChild(card);
    });
}

// Create a recipe card
function createRecipeCard(recipe, index) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
        <img src="${recipe.imageSrc}" alt="${recipe.name}">
        <h2>${recipe.name}</h2>
        <p>Type: ${recipe.type}</p>
        <p>Time: ${recipe.time}</p>
        <p>Rating: ${recipe.rating}</p>
        <button class="like-button" data-index="${index}">${recipe.isLiked ? "❤️" : "🤍"}</button>
    `;

    // Add click event listener to the like button
    card.querySelector(".like-button").addEventListener("click", () => {
        toggleLike(index);
    });

    return card;
}

// Toggle the "liked" status of a recipe
function toggleLike(index) {
    recipes[index].isLiked = !recipes[index].isLiked;
    initializeRecipes();
}

// Filter recipes by name
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    renderFilteredRecipes(filteredRecipes);
});

// Filter recipes by type
showAllBtn.addEventListener("click", () => {
    renderFilteredRecipes(recipes);
});

showVegBtn.addEventListener("click", () => {
    const filteredRecipes = recipes.filter(recipe => recipe.type === "veg");
    renderFilteredRecipes(filteredRecipes);
});

showNonVegBtn.addEventListener("click", () => {
    const filteredRecipes = recipes.filter(recipe => recipe.type === "non-veg");
    renderFilteredRecipes(filteredRecipes);
});

// Filter recipes by rating
above45Filter.addEventListener("change", () => {
    const filteredRecipes = recipes.filter(recipe => recipe.rating >= 4.5);
    renderFilteredRecipes(filteredRecipes);
});

below40Filter.addEventListener("change", () => {
    const filteredRecipes = recipes.filter(recipe => recipe.rating < 4.0);
    renderFilteredRecipes(filteredRecipes);
});

// Render filtered recipes
function renderFilteredRecipes(filteredRecipes) {
    recipesContainer.innerHTML = "";
    filteredRecipes.forEach((recipe, index) => {
        const card = createRecipeCard(recipe, index);
        recipesContainer.appendChild(card);
    });
}

// Toggle mobile drawer
document.addEventListener("DOMContentLoaded", () => {
    mobileDrawer.innerHTML = `
        <button id="mobileFilterBtn">Filter</button>
        <!-- Add other mobile content as needed -->
    `;

    const mobileFilterBtn = document.getElementById("mobileFilterBtn");
    mobileFilterBtn.addEventListener("click", () => {
        mobileDrawer.classList.toggle("opened");
    });
});

// Initialize recipes on page load
initializeRecipes();
