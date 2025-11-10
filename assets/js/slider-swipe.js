/*
Add swipe feature to cycle slider.
Requires a slider with class '.slider-cycle' containing slides with sub elements with class '.slide-textbox'.
*/
function touchStart(event) {
    isDragging = true;
    preventRedirect = false;

    startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    prevTranslate = currentTranslate;
}

function touchMove(event) {
    preventRedirect = true;

    if (!isDragging)
        return;

    const currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;
}

function touchEnd() {
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100) {
        document.getElementById("controllerNext").click();
    }
    else if (movedBy > 100) {
        document.getElementById("controllerPrev").click();
    }
    currentTranslate = 0;
}

function click(event) {
    if (preventRedirect) {
        event.preventDefault();
        /*return false;*/
    }
}


const slider = document.querySelector('.slider-cycle');
const slides = document.querySelectorAll('.slide-textbox');

let startX;
let isDragging = false;
let preventRedirect = false;
let currentIndex = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchmove', touchMove);
slider.addEventListener('touchend', touchEnd);

slider.addEventListener('mousedown', touchStart);
slider.addEventListener('mousemove', touchMove);
slider.addEventListener('mouseup', touchEnd);
slider.addEventListener('mouseleave', touchEnd);

slides.forEach(slide => {
    slide.addEventListener('click', click);
});
