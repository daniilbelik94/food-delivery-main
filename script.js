document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".backdrop");

    const openButtons = document.querySelectorAll(".button__section-one, .section__button");
    const closeButton = document.querySelector(".modal-close__btn");


    function openModal() {
        modal.classList.add("is-open");
        body.classList.add("modal-open"); 
    }

    function closeModal() {
        modal.classList.remove("is-open");
        body.classList.remove("modal-open"); 
    }

    openButtons.forEach(function (button) {
        button.addEventListener("click", openModal);
    });

    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
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
