const colorNextBtn = document.querySelector('.forms-color-next');
const colorNextBox = document.querySelector('.forms-color-hidden');
const filterBurgerBtn = document.querySelector('.filter-mobile-burger');
const filterMenu = document.querySelector('.filter-mob-menu');
const filterCloseBtn = document.querySelector('.filter-close-btn');

//  Color selection
colorNextBtn.addEventListener('click', function() {
    colorNextBtn.style.display = 'none';
    colorNextBox.style.opacity = 1;
    colorNextBox.style.height = '100%';
})

// filter-mobile-menu

filterBurgerBtn.addEventListener('click', function() {
    filterMenu.classList.add('active');
    document.body.classList.add('_lock');
});

filterCloseBtn.addEventListener('click', function() {
    filterMenu.classList.remove('active');
    document.body.classList.remove('_lock');
})