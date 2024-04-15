const mobileburger = document.querySelector('.mobileburger');
const offscreenburger = document.querySelector('.offscreenburger');

mobileburger.addEventListener('click',() => {
    offscreenburger.classList.toggle('active');
    mobileburger.classList.toggle('active');
})

