const btn = document.querySelector('.toggle-btn');
const container = document.querySelector('.nav-links')
const connect = document.querySelector('.connect')

// connect.addEventListener('hover', => {
//     connect.classList.toggle('show-connect')
// })

btn.addEventListener('click', function () {
    btn.classList.toggle('show-link');
    container.classList.toggle('show-nav-link')
});

