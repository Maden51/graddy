// image Swiper

const swiperImages = new Swiper('.images-wrapper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
    },
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {
        1275: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        677: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        600: {
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        280: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});


const colorsBloc1 = document.querySelector('.tab-colors-1');
const showColorsBtn1 = colorsBloc1.querySelector('.show-colors');
const hiddenColors1 = colorsBloc1.querySelectorAll('.hidden');

showColorsBtn1.addEventListener('click', function() {
    showColorsBtn1.style.display = 'none';
    hiddenColors1.forEach(element => {
        element.classList.remove('hidden');
    });
})

const colorsBloc2 = document.querySelector('.tab-colors-2');
const showColorsBtn2 = colorsBloc2.querySelector('.show-colors');
const hiddenColors2 = colorsBloc2.querySelectorAll('.hidden');

showColorsBtn2.addEventListener('click', function() {
    showColorsBtn2.style.display = 'none';
    hiddenColors2.forEach(element => {
        element.classList.remove('hidden');
    });
})

const colorsBloc3 = document.querySelector('.tab-colors-3');
const showColorsBtn3 = colorsBloc3.querySelector('.show-colors');
const hiddenColors3 = colorsBloc3.querySelectorAll('.hidden');

showColorsBtn3.addEventListener('click', function() {
    showColorsBtn3.style.display = 'none';
    hiddenColors3.forEach(element => {
        element.classList.remove('hidden');
    });
})

const colorsBloc4 = document.querySelector('.tab-colors-4');
const showColorsBtn4 = colorsBloc4.querySelector('.show-colors');
const hiddenColors4 = colorsBloc4.querySelectorAll('.hidden');

showColorsBtn4.addEventListener('click', function() {
    showColorsBtn4.style.display = 'none';
    hiddenColors4.forEach(element => {
        element.classList.remove('hidden');
    });
})

const swiperProducts2 = new Swiper('.products-wrapper-2', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-5',
        prevEl: '.swiper-button-prev-5',
    },
    slidesPerView: 5,
    spaceBetween: 50,
    breakpoints: {
        1275: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        677: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: {
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        280: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        }
    }
});

const swiperProducts3 = new Swiper('.products-wrapper-3', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-6',
        prevEl: '.swiper-button-prev-6',
    },
    slidesPerView: 5,
    spaceBetween: 50,
    breakpoints: {
        1275: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        677: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: {
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        280: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        }
    }
});