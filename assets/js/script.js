var nameInput = document.querySelector('#name-input');
var enterBtn = document.querySelector('#enter-button');
enterBtn.addEventListener('click',function() {
var inputText = nameInput.value;
    localStorage.setItem('name-input', inputText);
console.log(typeof inputText)
})
var test = localStorage.getItem('name-input')
console.log(test)

  