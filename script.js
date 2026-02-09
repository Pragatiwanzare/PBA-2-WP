// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Alert on menu item click
function orderItem(itemName) {
    alert("You selected: " + itemName + " ☕\nOrdering feature coming soon!");
}

// Dynamic footer year
const year = new Date().getFullYear();
document.getElementById("footer-text").innerHTML =
    `© ${year} The Coffee Stop. All rights reserved.`;

// Console welcome message
console.log("Welcome to The Coffee Stop ☕");
