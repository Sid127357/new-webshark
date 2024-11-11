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
    // slidesPerView: 3,
    // spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    breakpoints: {
        // For screens smaller than 640px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // For screens between 640px and 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // For screens 1024px and above
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
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

//   Single Service Web development Technologies 

const technologies = [
    { img: './assets/img/technologies/angular.png', color: '#DD00318A', name: 'Angular' },
    { img: './assets/img/technologies/babel.png', color: '#F9DC3E8A', name: 'Babel' },
    { img: './assets/img/technologies/bootstrap.png', color: '#563D7C8A', name: 'Bootstrap' },
    { img: './assets/img/technologies/codeigniter.png', color: '#DD48148A', name: 'CodeIgniter' },
    { img: './assets/img/technologies/cpanel.png', color: '#FF6C2C8A', name: 'cPanel' },
    { img: './assets/img/technologies/css3.png', color: '#1572B68A', name: 'CSS3' },
    { img: './assets/img/technologies/dart.png', color: '#0175C28A', name: 'Dart' },
    { img: './assets/img/technologies/django.png', color: '#092E208A', name: 'Django' },
    { img: './assets/img/technologies/gitlab.png', color: '#FCA1218A', name: 'GitLab' },
    { img: './assets/img/technologies/html5.png', color: '#E34F268A', name: 'HTML5' },
    { img: './assets/img/technologies/java.png', color: '#5382A18A', name: 'Java' },
    { img: './assets/img/technologies/javascript.png', color: '#F7DF1E8A', name: 'JavaScript' },
    { img: './assets/img/technologies/jira.png', color: '#0052CC8A', name: 'Jira' },
    { img: './assets/img/technologies/joomla.png', color: '#F443218A', name: 'Joomla' },
    { img: './assets/img/technologies/jquery.png', color: '#0769AD8A', name: 'jQuery' },
    { img: './assets/img/technologies/less.png', color: '#1D365D8A', name: 'Less' },
    { img: './assets/img/technologies/magento.png', color: '#F46F258A', name: 'Magento' },
    { img: './assets/img/technologies/php.png', color: '#777BB38A', name: 'PHP' },
    { img: './assets/img/technologies/python.png', color: '#3776AB8A', name: 'Python' },
    { img: './assets/img/technologies/react.png', color: '#61DAFB8A', name: 'React' },
    { img: './assets/img/technologies/redux.png', color: '#764ABC8A', name: 'Redux' },
    { img: './assets/img/technologies/sass.png', color: '#CC66998A', name: 'Sass' },
    { img: './assets/img/technologies/swift.png', color: '#FA73438A', name: 'Swift' },
    { img: './assets/img/technologies/vuejs.png', color: '#4FC08D8A', name: 'Vue.js' }
  ];
  
  document.getElementById('technologiesGrid').innerHTML = technologies
    .map(tech => 
      `<div class="tech-card" style="background-color: ${tech.color};">
        <img src="${tech.img}" alt="${tech.name} Logo" class="img-fluid">
        <h3>${tech.name}</h3>
      </div>`
    ).join('');
  
