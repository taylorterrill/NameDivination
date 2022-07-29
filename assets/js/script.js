// Clears local storage when the page loads
window.onload = () => {
    localStorage.clear();
}

var nameInput = document.querySelector('#name-input');
var enterBtn = document.querySelector('#enter-button');

enterBtn.addEventListener('click',function() {
    var inputText = nameInput.value;
    localStorage.setItem('name-input', inputText);
});


  