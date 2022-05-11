const colorNextBtn = document.querySelector('.content-aside-item .forms-color-next');
const colorNextBox = document.querySelector('.content-aside-item .forms-color-hidden');
const mobColorNextBtn = document.querySelector('.mob-content-aside-item .forms-color-next');
const mobColorNextBox = document.querySelector('.mob-content-aside-item .forms-color-hidden');
const filterBurgerBtn = document.querySelector('.filter-mobile-burger');
const filterMenu = document.querySelector('.filter-mob-menu');
const filterCloseBtn = document.querySelector('.filter-close-btn');

//  Color selection
colorNextBtn.addEventListener('click', function() {
    colorNextBtn.style.display = 'none';
    colorNextBox.style.opacity = 1;
    colorNextBox.style.height = '100%';
})

mobColorNextBtn.addEventListener('click', function() {
    mobColorNextBtn.style.display = 'none';
    mobColorNextBox.style.opacity = 1;
    mobColorNextBox.style.height = '100%';
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