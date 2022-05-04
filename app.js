import { renderIngredient, renderMeals } from './utils.js';

const form = document.getElementById('add-stats');
const ingredientsList = document.getElementById('ingredient-List');
const remove = document.getElementById('remove');
const mealList = document.getElementById('meal-list');
const saveButton = document.getElementById('save-meal');
const mealForm = document.getElementById('mealForm');

// let state

let ingredients = [];
let meals = [];

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
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredient.ingredient && ingredientsList.append(li);
        // ingredientsList.append(li);
    }
}

remove.addEventListener('click', () => {
    ingredients.pop();
    displayIngredientList();
});

function displayMeals() {
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMeals(meal);
        mealList.appendChild(li);
    }
}

saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    const formD = new FormData(mealForm);
    const name = formD.get('meal-name');
    let meal = {
        ingredientCount: ingredients.length,
        name: name,
    };
    meals.push(meal);
    displayMeals();
});

// get user input
// use user input to update state
// update DOM to reflect the new state
