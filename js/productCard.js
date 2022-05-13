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

