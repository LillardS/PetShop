// navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// form

let text = document.getElementById('data1');
let email = document.getElementById('data2');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', print);

function print (e) {
    e.preventDefault();
    console.log(text.value);
    console.log(email.value);
    text.value = "";
    email.value = "";
}