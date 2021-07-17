const btn = document.querySelector('.toggle-btn');
const container = document.querySelector('.nav-links')

btn.addEventListener('click', function () {
    btn.classList.toggle('show-link');
    container.classList.toggle('show-nav-link')
})
