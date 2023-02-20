// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesUl = document.querySelector('#categories')
const categoriesLi = document.querySelectorAll('.item')


categoriesLi.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Category:', item.lastElementChild.children.length);
})


// const categories = categoriesUl.children.length
// console.log('Number of categories:', categories);

// const a = categoriesUl.firstElementChild
// const b = a.firstElementChild.textContent
// console.log("Category:", b);
// const c = a.lastElementChild.children.length
// console.log("Elements:",c);

// const g = a.nextElementSibling  
// const h = g.firstElementChild.textContent
// console.log("Category:", h);
// const i = g.lastElementChild.children.length
// console.log("Elements:",i);

// const d = categoriesUl.lastElementChild
// const e = d.firstElementChild.textContent
// console.log("Category:", e);
// const f = d.lastElementChild.children.length
// console.log("Elements:",f);




