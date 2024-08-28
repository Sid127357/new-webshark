var portfolioBox = document.querySelector(".img-box")
var cursor = document.querySelector(".cursor-view-more");
var mainBox = document.querySelector("main")

mainBox.addEventListener("mousemove", function (ele) {
    gsap.to(cursor,{
        x : ele.x - 50,
        y : ele.y - 50,
        ease:"back.out",
        
    })
})
portfolioBox.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2
    });
    // console.log(event);

});
portfolioBox.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1
    });
    // console.log(event);

});
