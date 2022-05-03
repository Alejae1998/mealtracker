import { renderIngredients } from './utiliti'

const form = document.getElementById('add-stats');
const ingredientsList = document.getElementById('ingredient-List');

// let state

let ingredients = [];


// set event listeners 
function renderIngredients() {
  ingredientsList.textContent = '';
  for (let ingredient of ingredients) {
    const li = renderIngredients(ingredient);
    ingredientsList.append(li);
  }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
