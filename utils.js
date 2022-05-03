export function renderIngredient(li) {
    const newL = document.createElement('li');
    newL.textContent = `Ingredient: ${li.ingredient} Quantity: ${li.quantity} measurement: ${li.measurement}`;
    return newL;
}