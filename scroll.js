
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Add event listener for scrolling
window.addEventListener("scroll", () => {
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide) => {
        if (isInViewport(slide)) {
            slide.classList.add("animate"); // Add animation class
        }
    });
});
