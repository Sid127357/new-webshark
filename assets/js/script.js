var portfolioBoxes = document.querySelectorAll(".work-listing-blocks");
var cursor = document.querySelector(".cursor-view-more");

// Loop through each .work-listing-blocks element
portfolioBoxes.forEach(function (portfolioBox) {
    portfolioBox.addEventListener("mousemove", function (ele) {
        gsap.to(cursor, {
            x: ele.clientX - 70,
            y: ele.clientY - 50,
            duration: 0, // Instant transition
            display: "flex"
        });
    });

    portfolioBox.addEventListener("mouseenter", function () {
        cursor.innerHTML = "View Website";
        gsap.to(cursor, {
            duration: 0, // Instant transition
            display: "flex"
        });
    });

    portfolioBox.addEventListener("mouseleave", function () {
        cursor.innerHTML = "";
        gsap.to(cursor, {
            duration: 0, // Instant transition
            display: "none"
        });
    });
});
