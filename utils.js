export function renderIngredient(li) {
    const newL = document.createElement('li');
    newL.textContent = `Ingredient: ${li.ingredient} Quantity: ${li.quantity} ${li.measurement}`;
    return newL;
}
