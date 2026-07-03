// ==========================================
// Power Cut & Water Supply Alert System
// script.js
// ==========================================

// Welcome message
console.log("Power Cut & Water Supply Alert System Loaded Successfully!");

// Show alert when page loads
window.onload = function () {
    console.log("Website Loaded");
};

// Navigation Active Button
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button Click Effect
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});

// Fake Notification
function showNotification(message) {
    alert(message);
}
