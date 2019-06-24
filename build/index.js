import { Registration } from "./Registration.js";
const button = document.getElementById('myButton');
const msgBox = document.querySelector('.successful-reg');
button.addEventListener('click', (e) => {
    const NAME = document.getElementById('name').value;
    const EMAIL = document.getElementById('mail').value;
    const MESSAGE = document.getElementById('msg').value;
    let registration = new Registration(NAME, EMAIL, MESSAGE);
    msgBox.innerHTML = `${registration.toString()}`;
    e.preventDefault();
});
