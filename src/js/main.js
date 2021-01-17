document.querySelector('.contact-form button[type="submit"]')
    .addEventListener('click', (event) => {
        event.preventDefault();
    });

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
    })
})

document.querySelector('.contact-form form input[type="email"]').addEventListener('focus', () => {
    document.querySelector('.contact-form form').classList.add('active');
})

document.querySelector('.contact-form form input[type="email"]').addEventListener('focusout', () => {
    document.querySelector('.contact-form form').classList.remove('active');
})