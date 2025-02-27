// About us Auto Type

var txtArray = ['A group of creative rebels, embracing challenges with innovation and passion.', 'Another message!', 'Auto typing in a loop!'];
var i = 0;
var txtIndex = 0;
var speed = 100;
var isDeleting = false;
function typeWriter() {
  var currentTxt = txtArray[txtIndex];

  if (!isDeleting && i < currentTxt.length) {
    document.getElementById("demo").innerHTML = currentTxt.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && i > 0) {
    document.getElementById("demo").innerHTML = currentTxt.substring(0, i - 1);
    i--;
    setTimeout(typeWriter, speed);
  } else if (i === currentTxt.length && !isDeleting) {
    isDeleting = true;
    setTimeout(typeWriter, 1000);
  } else if (i === 0 && isDeleting) {
    isDeleting = false;
    txtIndex = (txtIndex + 1) % txtArray.length;
    setTimeout(typeWriter, 500);
  }
}
typeWriter();

// Clients Banner
// Array of image URLs (replace with your actual image URLs)
const imageUrls = [
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e099cb2c22455ad9fe_client-01.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e160d9158dfee47b1c_client-02.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e12d697c22f4e4b148_client-03.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/654475de0188162db6224bcb_client-04.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e1fa9c3abad04c5d25_client-05.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e25634a435d83f8303_client-06.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e260d9158dfee47bc2_client-07.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e346135bc56aa46c5c_client-08.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e2e67f3d8bb8acbc05_client-09.svg",
  "https://assets-global.website-files.com/6512ad7e5488b0eed8d386c6/651800e31b5b8c2eda464231_client-10.svg",
];

// Configuration
const gridSize = 10;
const minChangeDuration = 3500; 
const maxChangeDuration = 10000; 
const transitionDuration = 1500; 


function getRandomImageUrl(currentUrl) {
  let newUrl;
  do {
    newUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  } while (newUrl === currentUrl && imageUrls.length > 1);
  return newUrl;
}

function changeLogo(logoElement) {
  const currentUrl = logoElement.src;
  const newImageUrl = getRandomImageUrl(currentUrl);
  
  const newImage = new Image();
  newImage.src = newImageUrl;
  
  newImage.onload = () => {
    logoElement.style.opacity = '0';
    setTimeout(() => {
      logoElement.src = newImageUrl;
      logoElement.style.opacity = '1';
    }, transitionDuration);
  };

  newImage.onerror = (err) => {
    console.error('Error loading image:', err);
  };
}

function scheduleLogoChange(logoElement) {
  const changeTime = Math.random() * (maxChangeDuration - minChangeDuration) + minChangeDuration;
  
  setTimeout(() => {
    changeLogo(logoElement);
    scheduleLogoChange(logoElement);
  }, changeTime);
}

function initializeGrid() {
  const logoElements = document.querySelectorAll('.grid-client .client-image');
  
  logoElements.forEach((logoElement) => {
    const originalSrc = logoElement.src;
    
    logoElement.src = getRandomImageUrl(originalSrc);
    
    logoElement.style.transition = `opacity ${transitionDuration}ms ease-in-out`;
    
    logoElement.style.width = '100%';
    logoElement.style.height = 'auto';
    
    scheduleLogoChange(logoElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initializeGrid, 100);
});


// -----------------------------------
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollSmoother, SplitText, TweenLite, TimelineMax);
gsap.defaults({ ease: "none" });
gsap.config({ nullTargetWarn: false });


let device_width = window.innerWidth;

TweenLite.set(".flip-cards", { perspective: 1000 });
TweenLite.set(".flip-card", { transformStyle: "preserve-3d" });
TweenLite.set(".flip-card-front", { rotationY: -180 });
TweenLite.set([".flip-card-back", ".flip-card-front"], { backfaceVisibility: "hidden" });

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 2, // time for the content to catch up to the scroll position
  smoothTouch: 0.1, // Better not to use it or use a small value
  effects: true, // add some effects \(-_-)/
});
const pulses = gsap.timeline({
  defaults: {
    duration: 0.05,
    autoAlpha: 1,
    scale: 2,
    transformOrigin: 'center',
    ease: "elastic(2.5, 1)"
  }
})

const main = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#linesvg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }
})
  .from(".theLine", { drawSVG: 0 }, 0)

  .add(pulses, 0);
gsap.to(".bg-video", {
  opacity: 0,
  x: 0,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".bg-video",
    markers: "true",
    start: "250", // Start the animation when 80% of the section is visible// End the animation when 20% of the section is visible
    end: "300",
    scrub: true // Smooth scrolling
  },
  duration: 1,
  ease: "ease.out",
  stagger: 0.2,
});
gsap.to(".text", {
  opacity: 0,
  x: 0,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".text",
    markers: "true",
    start: "300", // Start the animation when 80% of the section is visible// End the animation when 20% of the section is visible
    end: "350",
    scrub: true // Smooth scrolling
  },
  duration: 1,
  ease: "ease.out",
  stagger: 0.2,
});
gsap.to(".slide-subtitle", {
  opacity: 0,
  x: 0,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-heading",
    markers: "true",
    start: "300", // Start the animation when 80% of the section is visible// End the animation when 20% of the section is visible
    end: "350",
    scrub: true // Smooth scrolling
  },
  duration: 1,
  ease: "ease.out",
  stagger: 0.2,
});


gsap.from(".about-heading", {
  opacity: 0,
  x: 1500,
  y: 0,
});
gsap.to(".about-heading", {
  opacity: 1,
  x: 100,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-heading",
    markers: "true",
    start: "80", // Start the animation when 80% of the section is visible
    end: "bottom 80%", // End the animation when 20% of the section is visible
    scrub: true // Smooth scrolling
  },
  duration: 0.6,
  ease: "ease.out1",
  stagger: 0.2,
});
gsap.from(".about-heading1", {
  opacity: 0,
  x: 1500,
  y: 0,
});
gsap.to(".about-heading1", {
  opacity: 1,
  x: 0,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-heading1",
    markers: "true",
    start: "80", // Start the animation when 80% of the section is visible
    end: "bottom 80%", // End the animation when 20% of the section is visible
    scrub: true // Smooth scrolling
  }, duration: 0.6,
  ease: "ease.out1",
  stagger: 0.2,
});







// --- ORANGE PANEL ---

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".orangeWrapper",
    scrub: true,
    pin: true,

    start: "-50%",
    end: "200%"
  }
})

  .from(".orange", {
    scale: 1,
    ease: "none"
  })

  .from(".line-2", {
    scale: 1,
    ease: "none",

    transformOrigin: "bottom center"
  }, 0)

  .to(".orange", {
    scale: 1.5,
    ease: "none",
    duration: 1,
    y: 30,
    xPercent: 60
  })

  .to(".line-2", {
    scale: 1.5,
    ease: "none",
    y: 30,
    duration: 1,
    transformOrigin: "center center"
  }, 0)



let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector(".work-img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-main",
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });

  tl.from(image, 1, {
    scale: 0.9,
    duration: 1,
    ease: Power2.out
  }).to(image, 1, {
    scale: 1,
    duration: 1,
    ease: Power2.out
  });
});


let revealContainers1 = document.querySelectorAll(".reveal1");

revealContainers1.forEach((container) => {
  let image = container.querySelector(".work-img");
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-main1",
      toggleActions: "restart none none reset"
    }
  });

  tl1.set(container, { autoAlpha: 1 });

  tl1.from(image, 1, {
    scale: 0.9,
    duration: 1,
    ease: Power2.out
  }).to(image, 1, {
    scale: 1,
    duration: 1,
    ease: Power2.out
  });

});


let revealContainers2 = document.querySelectorAll(".reveal2");

revealContainers2.forEach((container) => {
  let image = container.querySelector(".work-img");
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-main2",
      toggleActions: "restart none none reset"
    }
  });

  tl2.set(container, { autoAlpha: 1 });

  tl2.from(image, 1, {
    scale: 0.9,
    duration: 1,
    ease: Power2.out
  }).to(image, 1, {
    scale: 1,
    duration: 1,
    ease: Power2.out
  });
});


let loop = horizontalLoop(".image", { speed: 1, repeat: -1, paddingRight: 25 });

function setDirection(value) {
  if (loop.direction !== value) {
    gsap.to(loop, { timeScale: value, duration: 0.3, overwrite: true });
    loop.direction = value;
  }
}

Observer.create({
  target: window,
  type: "wheel,scroll,touch",
  onDown: () => setDirection(1),
  onUp: () => setDirection(-1)
})



function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    }
  });
  gsap.set(items, { x: 0 });
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = vars => toIndex(curIndex + 1, vars);
  tl.previous = vars => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}



let expertanimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".expert-area",
    toggleClass: "expert-heading",
    toggleActions: "restart pause resume pause"
  }
});



let split2 = new SplitText(".expert-heading", { type: "chars" })
expertanimation.from(split2.chars, {
  opacity: 0,
  y: 50,
  ease: "back(4)",
  stagger: {
    from: "start", //try "center" and "edges"
    each: 0.05
  }
})


expertanimation.from(".expert-heading", {
  x: -300,
  duration: 0.5,
  ease: "expo.out"
}, 0);


gsap.from('.flip-card1', {
  rotation: 0,
  duration: 0.5,
  ease: "none",
  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-350%",
    end: "-250%",
    toggleActions: "restart pause resume pause",
    scrub: true,
    markers: "true",

  }
})
gsap.to('.flip-card1', {
  rotation: 20,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    end: "-220%",
    scrub: true,
    markers: "true",
  }
})
gsap.to('.flip-card1', {
  x: -350,
  y: 0,
  rotation: 1,
  duration: 0.5,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-210%",
    end: "-190%",
    scrub: true,
    markers: "true",
  }
})

TweenLite.to('.flip-card1', {
  rotationX: 0,
  rotation: 0,
  rotationY: -180,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-170%",
    end: "-140%",
    scrub: true,
    markers: "true",
  }
})

gsap.from('.flip-card2', {
  rotation: 0,
  duration: 0.5,
  ease: "none",
  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-350%",
    end: "-250%",
    toggleActions: "restart pause resume pause",
    scrub: true,
    markers: "true",

  }
})

gsap.to('.flip-card2', {
  rotation: 15,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    end: "-220%",
    scrub: true
  }
})
gsap.to('.flip-card2', {
  x: 0,
  y: 0,
  rotation: 1,
  duration: 0.5,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-210%",
    end: "-190%",
    scrub: true
  }
})

TweenLite.to('.flip-card2', {
  rotationX: 0,
  rotation: 0,
  rotationY: -180,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-170%",
    end: "-140%",
    scrub: true
  }
})


gsap.from('.flip-card3', {
  rotation: 0,
  duration: 0.5,
  ease: "none",
  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-350%",
    end: "-250%",
    toggleActions: "restart pause resume pause",
    scrub: true,
    markers: "true",

  }
})

gsap.to('.flip-card3', {
  rotation: 10,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    end: "-220%",
    scrub: true
  }
})
gsap.to('.flip-card3', {
  x: 350,
  rotation: 1,
  duration: 0.5,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-210%",
    end: "-190%",
    scrub: true
  }
})

TweenLite.to('.flip-card3', {
  rotationX: 0,
  rotation: 0,
  rotationY: -180,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-170%",
    end: "-140%",
    scrub: true
  }
})

gsap.from('.flip-card4', {
  rotation: 0,
  duration: 0.5,
  ease: "none",
  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-350%",
    end: "-250%",
    toggleActions: "restart pause resume pause",
    scrub: true,
    markers: "true",

  }
})
gsap.to('.flip-card4', {
  rotation: 5,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    end: "-220%",
    scrub: true
  }
})
gsap.to('.flip-card4', {
  x: 700,
  y: 0,
  rotation: 1,

  duration: 0.5,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",
    start: "-210%",
    end: "-190%",
    scrub: true
  }
})

TweenLite.to('.flip-card4', {

  rotation: 0,

  rotationY: -180,
  duration: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".flip-cards",

    start: "-170%",
    end: "-140%",
    scrub: true
  }
})


let vid = document.getElementById("main_video");

function setPlaySpeed() {
  vid.playbackRate = 2.0;
}



// 38. Portfolio Animation
if (device_width > 767) {
  let portfolioline = gsap.timeline({
    scrollTrigger: {
      trigger: ".portfolio__area",
      start: "-05%",
      pin: ".portfolio__text",
      end: "bottom bottom",
      markers: true,
      pinSpacing: false,
      anticipatePin: 4,
      scrub: 1,
    }
  })

  portfolioline.to(".portfolio__text", {
    scale: 2,
    opacity: 1,
    duration: 1
  })
  portfolioline.to(".portfolio__text", {
    scale: 2,
    duration: 1
  })
  portfolioline.to(".portfolio__text", {
    scale: 1,
    duration: 1
  })
}


let portfolio_lists = gsap.utils.toArray(".portfolio__item")
portfolio_lists.forEach((portfolio, i) => {
  gsap.set(portfolio, { opacity: 1 })
  let t1 = gsap.timeline()

  t1.set(portfolio, {
    position: "relative",
  })
  t1.to(portfolio, {
    scrollTrigger: {
      trigger: portfolio,
      scrub: 2,
      duration: 1.5,
      start: "top bottom+=100",
      end: "bottom bottom",
      markers: false
    },
    scale: 1,
    opacity: 1,
    rotateX: 0,
  })
});

$(document).ready(function () {
  // When the modal is shown
  $('#videoModal').on('shown.bs.modal', function (e) {
    // Play the video
    $('#clientv')[0].play();
    // Set volume
    $('#clientv')[0].volume = 0.5; // Example: set volume to half (50%)
  });

  // When the modal is hidden
  $('#videoModal').on('hidden.bs.modal', function (e) {
    // Pause the video
    $('#clientv')[0].pause();
  });
});

