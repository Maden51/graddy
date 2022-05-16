const select = document.getElementById('select');
const hiddenBlock = document.querySelector('.orders-delivery-selected');
const hiddenCart = document.querySelector('.company-map');
const btns = document.querySelectorAll('.counter-btn');
const resetBtns = document.querySelectorAll('.amount-text');

/* Hide/Show block */
select.addEventListener('change', function (){
    if (select.value === "1"){
        hiddenCart.style.display = "block";
        hiddenBlock.style.display = "none";
    }
    if (select.value === "2"){
        hiddenBlock.style.display = "block";
        hiddenCart.style.display = "none";
    }
})



/* Counter */
btns.forEach(btn =>{
    btn.addEventListener('click', function (){
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter-value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === "plus") {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
    })
})

resetBtns.forEach(e => {
    e.addEventListener('click', function() {
        const inp = this.parentElement.querySelector('.counter-value');
        inp.value = 0;
    });
})

/* mob Counter */

const mobBtns = document.querySelectorAll('.mob-btn-counter');
const mobRstBtns = document.querySelectorAll('.mob-cart-item-reset');

mobBtns.forEach(e => {
    e.addEventListener('click', function() {
        const direction = this.dataset.direction;
        const inp = this.parentElement.parentElement.querySelector('.form-control');
        const currentValue = +inp.value;
        let newValue;

        if (direction === "plus") {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
    })
})

mobRstBtns.forEach(e => {
    e.addEventListener('click', function() {
        const inp = this.parentElement.querySelector('.form-control');
        inp.value = 0;
    });
})