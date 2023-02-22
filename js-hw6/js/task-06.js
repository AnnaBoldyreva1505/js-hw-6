// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('#validation-input');
console.log(input);

const checkBlur = (event) => {
console.log(event.target.value.length);
if(event.target.value.length === input.getAttribute('data-length')){
    input.classList.add("valid")
    input.classList.remove('invalid');
}else{
    input.classList.add("invalid")
    input.classList.remove('valid');
}
}


input.addEventListener("blur", checkBlur);



// const validateInputLength = (inputElement) => {
//     const inputLength = parseInt(inputElement.getAttribute('data-length'));
//     const inputTextLength = inputElement.value.length;
    
//     if (inputTextLength === inputLength) {
//       inputElement.classList.add('valid');
//       inputElement.classList.remove('invalid');
//     } else {
//       inputElement.classList.add('invalid');
//       inputElement.classList.remove('valid');
//     }
//   };
  
//   const input = document.querySelector('#validation-input');
//   input.addEventListener('blur', (event) => validateInputLength(event.target));
//   Этот код использует новую функцию validateInputLength, которая принимает элемент input в качестве аргумента и проверяет его длину. Затем, на событии blur, вызывается validateInputLength с целевым элементом как аргументом. Таким образом, этот код может работать с любым input элементом, а не только с тем, который имеет id "validation-input".