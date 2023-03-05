const body = document.querySelector('body');
body.innerHTML = '';
const form = `
    <form class='userDataForm'>
        <label>
            <input type='text' placeholder='name' name='name'/>
        </label>
        <label>
            <input type='text' placeholder='email' name='email'/>
        </label>
        <label>
            <input type='text' placeholder='group' name='group'/>
        </label>
        <button class='sendBtn'>send</button>
    </form>
`
body.insertAdjacentHTML('afterbegin', form);

const myForm = document.querySelector('.userDataForm');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.elements);
})

const user = {
    name: 'Anna',
    age: 35
}

console.log("Object:", user);
console.log(typeof(user));

const userToJson = JSON.stringify(user)

console.log("Получаем строку вместо объекта", userToJson);
console.log(typeof(userToJson));

const parsedJson = JSON.parse(userToJson)
console.log(parsedJson);

const arr = 1

try {
    arr.map((el) => {
        console.log(el);
    })
} catch(error) {
    console.log(error);
}


console.log(localStorage);
//Для записи данных в локальное хранилище через setItem обязательны 2 параметра: дать название ключа и передать сами данные. Данные лучше передавать в JSON, чтоб не забивать память
localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('token', 'sdfghjklkjhgfdsfghjklkuytrdsdftyuklk,mnbv')

// Для удвления части данных нужно передать только ключ
// localStorage.removeItem("token")

// Для полного удаления данных используется метод clear()
// localStorage.clear()

//Для получения данных и локального хранилища нужно использовать метод userFromLS
const userFromLS = localStorage.getItem('user')
console.log(userFromLS);
//ТАк как данные были отправлены в JSON их нужно распарсить (распаковать)
const parseUserFromLS = JSON.parse(userFromLS)
console.log(parseUserFromLS);

// теперь заполним полученными данными элементы формы:
console.log(myForm.elements.name.value);
myForm.elements.name.value = parseUserFromLS.name 

myForm.addEventListener('input', e => {
    const {currentTarget: elements} = e;
    const {name, email, group} = elements
    // console.log("name", name.value);
    // console.log("email", email.value);
    // console.log("group", group.value);

    const obj = {
        name: name.value,
        email: email.value, 
        group: group.value,
    }
    console.log(obj);

const objToJson = JSON.stringify(obj)
console.log(objToJson);
localStorage.setItem("formData", objToJson)
})

const getData = localStorage.getItem('formData')
console.log(getData);

const parseData = JSON.parse(getData)
console.log(parseData);

 
myForm.elements.name.value = parseData.name
myForm.elements.email.value = parseData.email
myForm.elements.group.value = parseData.group

