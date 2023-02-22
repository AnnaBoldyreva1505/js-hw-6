
const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener("input", (event) => {
// console.log("event", event.data);
// console.log("event target", event.target);
// console.log("currentTarget", event.currentTarget);
if (event.target.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
} else {
     nameOutput.textContent = "Anonymous"   
}


  });


  

