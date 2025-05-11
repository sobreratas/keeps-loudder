
const body = document.querySelector("body");

//Click on hamburger and expand menu
const hamburgerContainer = document.querySelector(".hamburger-container");
const menuExpanded = document.querySelector(".menu-expanded");
hamburgerContainer.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("active");
  menuExpanded.classList.toggle("active");
  // hamburgerContainer.style.backgroundColor = "transparent";
  body.classList.toggle("no-scroll");
});

//Click X to close menu
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("active");
    menuExpanded.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
});

//FADE IN - LEFT
const fadeIn = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeInObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});

//FADE IN 2 - MIDDLE
const fadeIn2 = document.querySelectorAll(".fade-in-2");

const fadeIn2Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeIn2Observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn2.forEach((fade2) => {
  fadeIn2Observer.observe(fade2);
});

//FADE IN 3 - MIDDLE
const fadeIn3 = document.querySelectorAll(".fade-in-3");

const fadeIn3Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeIn3Observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn3.forEach((fade3) => {
  fadeIn3Observer.observe(fade3);
});

//RELEASE CLASS INTERSECTION OBSERVER 
const releases = document.querySelectorAll(".release");

const releasesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) releasesObserver.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

releases.forEach(release => {
    releasesObserver.observe(release)
})

//FOOTER COPYRIGHT TEXT
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();


year.innerHTML = currentYear;

//CAROUSEL

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentIndex = 0;
  let currentPercentage = 0

  function showNextSlide() {
      if(currentIndex >= slides.length - 1){
          return;
      } else {
          console.log()
          currentPercentage -= 25
          carousel.style.transform = `translateX(${currentPercentage}%)`;
      }  
  }

  function showPrevSlide() {
      if(currentIndex < 0){
          return;
      } else {
          currentPercentage += 25
          carousel.style.transform = `translateX(${currentPercentage}%)`;
      }  
  }

  prevButton.addEventListener('click', function () {
    if(currentIndex === 1){
      prevButton.style.background = "gray"
    }
      if(currentIndex <= 0){
        prevButton.style.background = "gray"
          return;
      } else {
          currentIndex--;
          console.log(currentIndex)
          showPrevSlide();
          nextButton.style.background = "#fff"
      }
      
  });

  nextButton.addEventListener('click', function () {
    if(currentIndex === slides.length - 5){
      nextButton.style.background = "gray";

    }
      if (currentIndex >= 3) {
          return;
      } else {
          currentIndex++;
          console.log(currentIndex)
          prevButton.style.background = "#fff"
          showNextSlide();
      }

  });
});

//CAROUSEL
const slideContainer = document.querySelector(".slide-container");
const indicatorContainer = document.querySelector(".indicator-container");

const images = [
    { path: 'images/tom-1.jpg' },
    { path: 'images/tom-2.jpg' },
    { path: 'images/tom-3.jpg' },
    { path: 'images/tom-4.jpg' },
    { path: 'images/tom-5.jpg' },
    { path: 'images/tom-6.jpg' },

];

let current = 0;

window.addEventListener('DOMContentLoaded', () => {
    let indicatorMap = images.map(image => {
        return `<div class="indicator"></div>`
    })

    indicatorContainer.innerHTML = indicatorMap.join('');
    let imageMap = images.map(image => {
        return `<img src="${image.path}" alt="">`
    })

    slideContainer.innerHTML = imageMap.join('');

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const indicators = document.querySelectorAll(".indicator");

    indicators[0].classList.add("active");
    prevBtn.classList.add("hidden")
    const prev = () => {
        removeActiveFromIndicator();
        setPrevCurrent();
    }

    const next = () => {
        removeActiveFromIndicator();
        setNextCurrent();
    }

    function removeActiveFromIndicator() {
        indicators.forEach(indicator => {
            indicator.classList.remove("active");
        })
    }

    function setPrevCurrent() {
        if (current === 0) {
            
            nextBtn.classList.remove("hidden")
            current = images.length - 1;
            slideContainer.style.transform = `translateX(-${current * 100}%)`;
            indicators[current].classList.add("active");
        } else {
            current -= 1
            if(current === 0){
                prevBtn.classList.add("hidden")
            }
            nextBtn.classList.remove("hidden")
            slideContainer.style.transform = `translateX(-${current * 100}%)`;
            indicators[current].classList.add("active");
        }
        console.log(current)
    }

    function setNextCurrent() {
        if (current === images.length - 1) {
            nextBtn.classList.add("hidden");
            current = 0;
            slideContainer.style.transform = `translateX(-${current * 100}%)`;
            indicators[current].classList.add("active");
        } else {
            current += 1;
            if (current === images.length - 1) {
                nextBtn.classList.add("hidden"); // Hide next button when on second-to-last image
            }
            prevBtn.classList.remove("hidden"); // Ensure previous button is visible
            slideContainer.style.transform = `translateX(-${current * 100}%)`;
            indicators[current].classList.add("active");
        }
    }

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
});

//other vendors
const intersectRect2 = document.querySelectorAll(".intersect-rect-2");
const slidingBlocks = document.querySelectorAll(".sliding-block");
const halfImages2 = document.querySelectorAll(".half-image-2");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        slidingBlocks.forEach((block) => {
          block.classList.add("show");
        });
        halfImages2.forEach((image) => {
          image.classList.add("show");
        });
        observer2.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

intersectRect2.forEach((halfImage2) => {
  observer2.observe(halfImage2);
});