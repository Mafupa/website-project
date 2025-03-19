document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("yellow-image");

    window.addEventListener("scroll", function () {
        const imageRect = image.getBoundingClientRect(); // Get position

        if (imageRect.top <= 0) {
            // Image reaches the top → Double its size
            image.classList.add("scale-200"); // Tailwind class for 2x size
        } else {
            // Reset size when scrolling back
            image.classList.remove("scale-200");
        }
    });
});
