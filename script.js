const burgerIcon = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('burgerMenu');
const burgerIconClose = document.getElementById('burgerIconClose');

burgerIcon.addEventListener('click', function(event) {
    event.preventDefault();
    burgerMenu.classList.toggle('active');
});

burgerIconClose.addEventListener('click', function(event) {
    event.preventDefault();
    burgerMenu.classList.remove('active');
});

burgerMenu.addEventListener('click', function(event) {
    if (event.target === burgerMenu) {
        burgerMenu.classList.remove('active');
    }
});

document.addEventListener('click', function(event) {
    if (!burgerMenu.contains(event.target) && event.target !== burgerIcon) {
        burgerMenu.classList.remove('hidden');
    }
});
