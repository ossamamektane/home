// Current Year
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Fade In Sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Mobile Navigation Close
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector("nav").classList.remove("active");

    });

});

// Contact Form
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
`Thank you!

Your request has been received.

I'll get back to you as soon as possible.`
        );

        form.reset();

    });

}

// Smooth Button Hover
document.querySelectorAll(".button, button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-2px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});
