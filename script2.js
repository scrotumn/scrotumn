document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container');
    
    let scrollAmount = 0;
    let isScrolling = false;

    container.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollAmount += event.deltaY;
        if (!isScrolling) {
            isScrolling = true;
            smoothScroll();
        }
    });

    function smoothScroll() {
        if (scrollAmount !== 0) {
            container.scrollLeft += scrollAmount * 0.3; // Adjust the multiplier for speed
            scrollAmount *= 0.9; // Damping effect
            if (Math.abs(scrollAmount) < 0.5) {
                scrollAmount = 0;
                isScrolling = false;
            } else {
                requestAnimationFrame(smoothScroll);
            }
        }
    }
});
