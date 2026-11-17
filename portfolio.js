// Highlight the selected navigation section when a link is clicked.
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelectorAll("nav a").forEach(function (item) {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});