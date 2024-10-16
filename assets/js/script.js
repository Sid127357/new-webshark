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
        cursor.innerHTML = "<span class='view-website-btn'>View Website</span>";
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

var swiper = new Swiper(".latestNews", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
  });

// Single Course Testimonial Slider
var swiper = new Swiper('.singleCourseTesti', {
    loop: true, 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    // grabCursor: true, 
  });