const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');
const a = ingredients.map(element => {
  const addElement = document.createElement("li");
  addElement.classList.add("item");
  addElement.textContent = element;
  return addElement;
});

 ingredientsList.append(...a);


// const ingredientsEl = document.querySelector('#ingredients')
// console.log(ingredientsEl);

// const newArr = []

// const a = ingredients.forEach(elem => {
//  const createEl = document.createElement("li")
//  createEl.textContent = elem
//  createEl.classList.add("item");
//  console.log(createEl);
//  newArr.push(createEl)
//  return createEl
// })

// ingredientsEl.append(...newArr);



