import { renderIngredient } from './utils.js';

const form = document.getElementById('add-stats');
const ingredientsList = document.getElementById('ingredient-List');
const remove = document.getElementById('remove');

// let state

let ingredients = [];

// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formD = new FormData(form);
    const ingredient = formD.get('ingredient');
    const quantity = formD.get('quantity');
    const measurement = formD.get('measurement');
    const recipe = { ingredient: ingredient, quantity: quantity, measurement: measurement };
    ingredients.push(recipe);
    displayIngredientList();
    form.reset();
});

function displayIngredientList() {
    ingredientsList.textContent = '';
    console.log(ingredients);
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientsList.append(li);
    }
}

remove.addEventListener('click', () => {
    ingredients.pop();
    displayIngredientList();
});


// get user input
// use user input to update state
// update DOM to reflect the new state
