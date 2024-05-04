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
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}