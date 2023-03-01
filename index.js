// import data from '../data/gallery.js';
// const { data: initialData } = data;
// // // throttle и debounce (погружение и всплытие событий)
// // // Каждое событие возникает на window - document - html - body ... потом возвращается в обратном порядке.body
// // // Если вешать addEventListener - то событие будет "считано" при фазе всплытия, так как действие будет полностью завершено

// // // window.addEventListener('click', (event) => {
// // //     console.log('click on window',event);
// // //  })

// // // document.querySelector('body').addEventListener('click', (event) => {
// // //    console.log('click on body',event);
// // // })

// // // document.querySelector('form').addEventListener('click', (event) => {
// // //     console.log('click on form',event);
// // //  })

// // //  document.querySelector('button').addEventListener('click', (event) => {
// // //     event.preventDefault()
// // //     console.log('click on button',event);
// // //  })

// // // Делегирование событий, если нужно много слушателей - то нужно отслушиваь событие на родительском элементе, чтобы не занимать память обработчиками

// // import data from "./lesson13/gallary.js";
// // import images from "./lesson13/img.js";
// // // получили данные
// // console.log(data);
// // // делаем деструктуризацию для получения данных, так как изначально они были в свойстве. для того чтобы х извлечь, сделали деструктуризацию и дали другое имя, так как data уже занято
// // const { data: initialData } = data;
// // //после получили объект
// // console.log(initialData);

// // const item = `
// // <li>
// //     <img src='' alt=''>
// //     <h2></h2>
// //     <p></p>
// // <li>`;

// // // для того, чтобы создать разметку нужно сделать перебор объекта, для этого полученный массив перебираем при помощи map, вставляем разметку и при помощи интерполяции добавляем элементы.
// // // Если вывести результат в массив мы получим массив строчных элементов, но для вставки разметки нужно передать строку, поэтому в конце обязательно применяется склейка строки при помощи join()

// // // const result = initialData.map((elem) => {
// // //     const sourse = elem.image;
// // //     return `
// // //     <li>
// // //     <img src=${sourse} alt=${elem.title} width='200'>
// // //     <h2>${elem.title}</h2>
// // //     <p>${elem.text}</p>
// // // <li>
// // // `
// // // }).join('')

// // // console.log(result);

// // // const listElem = document.createElement('ul')
// // // listElem.insertAdjacentHTML('afterbegin', result)
// // // document.querySelector('body').innerHTML = ''
// // // document.querySelector('body').append(listElem)

// // // Лучше делать элементы переиспользуемыми (разметка)

// // const createItem = (src, title, text) => {
// //     return `
// //         <li>
// //             <img src=${src} alt=${title} width='200'/>
// //             <h2>${title}</h2>
// //             <p>${text}</p>
// //         </li>
// //     `
// // }

// // const createImageItem = (src, title = 'default') => {
// //     title = title ? title : 'default'
// //     return `
// //         <li>
// //             <img src=${src} alt=${title} width='100'/>
// //         </li>
// //     `
// // }


// // const createGallery = (imagesArray, createItemElements) => {
// //     // create ul
// //     const listElem = document.createElement('ul');
    
// //     // map imagesArray & create items
// //     const result = imagesArray.map(({image, title, text}) => {
// //         return createItemElements(image, title, text)
// //     }).join('')
    
// //     // insert items into ul 
// //     listElem.insertAdjacentHTML('afterbegin', result)

// //     return listElem;
// // }
// // //Сюда теперь для переиспользования можно добавлтяь любую функцию с разметкой createItem или createImageItem
// // const x = createGallery(initialData, createImageItem);
// // document.querySelector('body').innerHTML = '';
// // // document.querySelector('body').append(x);


// // // AS ELEMENTS
// // const createImgItem = (imagesData) => {
// //     return imagesData.map(({image, title, text}) => {
// //         const item = document.createElement('li');
// //         const img = document.createElement('img');
// //         img.setAttribute('src', image);
// //         img.setAttribute('data-src', image);
// //         title = title ? title : 'default';
// //         img.setAttribute('alt', title);
// //         img.setAttribute('width', '50');

// //         item.appendChild(img)
// //         // console.log(item);
// //         return item
// //     })
// // }

// // const createImagesList = (array = [], callback, handler) => {

// //     // create ul
// //     const listElem = document.createElement('ul');

// //     const res = callback(array);
// //     // console.log(typeof res);

// //     // insert items into ul
// //     if (typeof res === 'string') {
// //         listElem.insertAdjacentHTML('afterbegin', res)
// //     } else if (typeof res === 'object'){
// //         // после перебора возвращается массив, для того чтобы отобразить его нужно распылить
// //         listElem.append(...res);
// //     } else {
// //         listElem.insertAdjacentHTML('afterbegin', '<h1>ERROR</h1>')
// //     }


// //     listElem.addEventListener('click', handler)

// //     return listElem;
// // }

// // const imagesElems = createImagesList(images, createImgItem, clickHandler);
// // // console.log('imagesElems:', imagesElems);
// // document.querySelector('body').append(imagesElems);

// // function clickHandler({target}) {
// //     // console.dir(e.target.nodeName);
// //     if (target.nodeName === 'IMG') {
// //         const fullImage = target.dataset.src;
// //         const altFullImage = target.alt;
// //         console.log({fullImage, altFullImage});
// //         // pass {fullImage, altFullImage} to openModal()
// //     }
// // }



// // cdn contact delivery network - сеть серверов на которых хранятся библиотеки cdnjs - официальный сайт
// // Как выбирать библиотеки на npm: 
// // - когда была последняя публикация
// // - сколько скачиваний за неделю
// // - версии
// // - размер (чем меньше тем лучше)

// // Так можно проверить подключилась ли библиотека lodash, 
// // console.log(_);
// // Посмотреть доступные методы
// // console.dir(_);
// // LODASH https://cdnjs.com/libraries/lodash.js

// // CDN - Content Delivery Network

// //  <script async src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer" ></script>

// // console.log(_)

// // Throttle & Debounce

// // Chatty events:

// // input
// // scroll
// // _.throttle(callback, delay) // right now and not less then after delay

// // node.addEventListener('event-name', _.throttle(callback, delay))

// // _.debounce(callback, delay, options) // only after delay between calls

// // node.addEventListener('event-name', _.debounce(handler, delay))

// // const options = { leading: true, // at start - false by default trailing: false, // at the end - true by default }

// // LAZY-LOADING - to load content (images for ex) only when it need, not at the start loading

// // attr loading in tag img in Safari not working
// // Libriaries:

// // lazysizes https://afarkas.github.io/lazysizes/index.html https://cdnjs.com/libraries/lazysizes ` <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==" crossorigin="anonymous" referrerpolicy="no-referrer"
// // </script>`

// // LQIP (Low Quality Image Placeholder)

// // demo
// // for added class lazyloaded you may add your personal styles

// // vanilla-lazyload https://www.andreaverlicchi.eu/vanilla-lazyload/
// // lozard https://apoorv.pro/lozad.js/




// const input = document.querySelector('[type="text"]')

// window.addEventListener('scroll', () => {
//     console.log('object');
// })


// const handler = e => {
//     console.log(e.target.value);
// }

// const delay = 1000



// //throttle например можно использовать для валидации данных, к примеру юзер вводит пароль с меньшим кол-вом цифр мы ему подсвечиваем, что нужно больше, как ввел достаточно - можно покрасить зеленым/убрать ограничения
// // input.addEventListener('input', _.throttle(handler, delay))
// // H - при вводе отрабатывает первый раз
// // Hello w - сколько влезло  в 1 сек
// // Hello world - после того как допечатали


// // debounce - например получить данные и отправить запрос на бэкенд
// input.addEventListener('input', _.debounce(handler, delay))
// // отсчитывает 1000мс после паузы




// // делаем ленивую загрузку
// const createItem = (src, title, text) => {
//     return `
//         <li>
//             <img src='https://images.pexels.com/photos/1054018/pexels-photo-1054018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
//              data-src=${src} alt=${title} width='200' class='lazyload'/>
//             <h2>${title}</h2>
//             <p>${text}</p>
//         </li>
//     `
// }

// const createGallery = (imagesArray, createItemElements) => {
//     const listElem = document.createElement('ul');
//     const result = imagesArray.map(({image, title, text}) => {
//         return createItemElements(image, title, text)
//     }).join('')
//     listElem.insertAdjacentHTML('afterbegin', result)
//     return listElem;
// }

// const x = createGallery(initialData, createItem);
// document.querySelector('body').innerHTML = '';
// document.querySelector('body').append(x);


import data from './js-hw7/js/01-gallery';
const { data: initialData } = data;

// console.dir(_);
const inp = document.querySelector('[type="text"]');


window.addEventListener('scroll', () => {
    console.log('Scroll');
})


const handler = (event) => {
    console.log(event.target.value);
}

const delay = 1000;



// inp.addEventListener('input', _.throttle(handler, delay));
// H
// Hello w
// Hello world

inp.addEventListener('input', _.debounce(handler, delay));

const createItem = (src, title, text) => {
    return `
        <li>
            <img src='https://images.pexels.com/photos/1054018/pexels-photo-1054018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
             data-src=${src} alt=${title} width='200' class='lazyload'/>
            <h2>${title}</h2>
            <p>${text}</p>
        </li>
    `
}

const createGallery = (imagesArray, createItemElements) => {
    const listElem = document.createElement('ul');
    const result = imagesArray.map(({image, title, text}) => {
        return createItemElements(image, title, text)
    }).join('')
    listElem.insertAdjacentHTML('afterbegin', result)
    return listElem;
}

const x = createGallery(initialData, createItem);
document.querySelector('body').innerHTML = '';
document.querySelector('body').append(x);