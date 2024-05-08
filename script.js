document.addEventListener("DOMContentLoaded", function() {
    const images = [
        {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
        }, {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ];

    const container = document.getElementById('carouselContainer');
    images.forEach((image, index) => {
        let imgContainer = document.createElement('div');
        imgContainer.className = 'imgcontainer';
        imgContainer.innerHTML = creaSchedaImageHtml(image);
        container.appendChild(imgContainer);
    });

    const slides = document.querySelectorAll('.imgcontainer');
    let i = 0;
    slides[i].classList.add('active');

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function() {
        moveSlide(false);
    });

    nextBtn.addEventListener('click', function() {
        moveSlide(true); 
    });

    function moveSlide(isNext) {
        slides[i].classList.remove('active');

        if (isNext) {
            i++;
            if (i >= slides.length) {
                i = 0;
            }
        } else {
            i--;
            if (i < 0) {
                i = slides.length - 1;
            }
        }

        slides[i].classList.add('active');
    }
});