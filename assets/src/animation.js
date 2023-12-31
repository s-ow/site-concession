function handleScrollAnimation() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function (el) {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('touchmove', handleScrollAnimation);

document.addEventListener('DOMContentLoaded', handleScrollAnimation);

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}