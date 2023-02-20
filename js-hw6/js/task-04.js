// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')
console.log(value);

console.log(decrement);
console.log(increment);

let counterValue = 0

const plus = () => {
    counterValue +=1
    value.textContent = counterValue
}

const minus = () => {
    counterValue -=1
    value.textContent = counterValue
}

decrement.addEventListener('click', minus)
increment.addEventListener('click', plus)

console.log(counterValue);





