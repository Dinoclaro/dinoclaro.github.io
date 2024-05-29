/* Hamburger Menu Animation */

function toggleNavbar() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show-nav");
}

/* Scroll Animation */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.toggle('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenTop = document.querySelectorAll('.hiddenTop');
const hiddenRight = document.querySelectorAll('.hiddenRight');
const hiddenBottom = document.querySelectorAll('.hiddenBottom');
const hiddenLeft = document.querySelectorAll('.hiddenLeft');
hiddenTop.forEach((el) => observer.observe(el));
hiddenRight.forEach((el) => observer.observe(el));
hiddenBottom.forEach((el) => observer.observe(el));
hiddenLeft.forEach((el) => observer.observe(el));

/* Circle Animation */
const circleContainer = document.getElementById('circle-container'); // Get the circle container element
let isCursorInside = false; // Flag variable to track if cursor is inside the circle container

// Add event listeners for mouseenter and mouseleave
circleContainer.addEventListener('mouseenter', function() {
    // Add 'hovered' class when mouse enters the container
    this.classList.add('hovered');
});

circleContainer.addEventListener('click', function() {
    this.classList.toggle('hovered');
});

/* Button for cards */
function toggleContent(button) {
    var content = button.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "-";
    } else {
        content.style.display = "none";
        button.textContent = "+";
    }
}

/* Open PDFS */
function openPDF(pdfUrl) {
    window.open(pdfUrl, '_blank');}