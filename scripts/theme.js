let wrap = document.querySelector('.wrap');
let closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    wrap.classList.toggle('theme');
});