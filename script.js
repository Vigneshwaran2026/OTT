
document.addEventListener("DOMContentLoaded", function(){

    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i){

        slides.forEach((slide) => {
            slide.classList.remove("active");

            let content = slide.querySelector(".hero-content");
            if(content){
                content.style.animation = "none";
                content.style.opacity = "0";
            }
        });

        let activeSlide = slides[i];
        activeSlide.classList.add("active");

        // FORCE animation restart
        let content = activeSlide.querySelector(".hero-content");
        if(content){
            setTimeout(()=>{
                content.style.animation = "contentReveal 1s ease forwards";
            }, 300);
        }
    }

    function nextSlide(){
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    // start auto slider
    setInterval(nextSlide, 5000);

});


// HEADER SCROLL EFFECT
window.addEventListener("scroll", ()=>{
    let header = document.getElementById("header");
    if(window.scrollY > 50){
        header.style.background = "#000";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
    }
});

const featured = document.querySelector(".featured");

window.addEventListener("scroll", () => {
    const top = featured.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
        featured.style.opacity = "1";
        featured.style.transform = "translateY(0)";
    }
});


const trailer = document.querySelector(".upcoming-trailer");

window.addEventListener("scroll", ()=>{
    let pos = trailer.getBoundingClientRect().top;

    if(pos < window.innerHeight - 100){
        trailer.classList.add("show");
    }
});


/* SCROLL ANIMATION (SECTION FADE IN) */
const top10 = document.querySelector(".top10");

window.addEventListener("scroll", ()=>{
    let pos = top10.getBoundingClientRect().top;

    if(pos < window.innerHeight - 100){
        top10.classList.add("show");
    }
});


/* AUTO SCROLL TOP 10 */
document.addEventListener("DOMContentLoaded", function(){

    const row = document.querySelector(".top10-row");

    let scrollAmount = 0;
    let interval;

    function autoScroll(){
        scrollAmount += 1; // speed

        // RESET LOOP
        if(scrollAmount >= row.scrollWidth - row.clientWidth){
            scrollAmount = 0;
        }

        row.scrollLeft = scrollAmount; // 🔥 FIXED (no blur)
    }

    function startScroll(){
        interval = setInterval(autoScroll, 20); // smooth speed
    }

    function stopScroll(){
        clearInterval(interval);
    }

    // HOVER PAUSE
    row.addEventListener("mouseenter", stopScroll);
    row.addEventListener("mouseleave", startScroll);

    // START
    startScroll();

});

// SET TARGET = TODAY + 30 DAYS
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30);

function updateCountdown(){

    const now = new Date().getTime();
    const gap = targetDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// RUN EVERY SECOND
setInterval(updateCountdown, 1000);

const container = document.querySelector(".testimonial-container");

let scroll = 0;

function slideTestimonials(){
    scroll += 1;

    if(scroll >= container.scrollWidth - container.clientWidth){
        scroll = 0;
    }

    container.scrollLeft = scroll;
}

setInterval(slideTestimonials, 30);


document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));

});

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");
    const auth = document.getElementById("authButtons");

    if (!toggle || !nav || !auth) return;

let mobileMenu = document.querySelector(".mobile-menu");

if (!mobileMenu) {
    mobileMenu = document.createElement("div");
    mobileMenu.classList.add("mobile-menu");

    const navClone = nav.cloneNode(true);
    const authClone = auth.cloneNode(true);

    mobileMenu.appendChild(navClone);
    mobileMenu.appendChild(authClone);

    document.body.appendChild(mobileMenu);
}
    // 🔥 TOGGLE MENU
    toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
        toggle.classList.toggle("active"); // ✅ hamburger → X

        if (mobileMenu.classList.contains("show")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    // 🔥 CLOSE ONLY WHEN CLICK OUTSIDE (NOT INSIDE CONTENT)
    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove("show");
            toggle.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    // 🔥 CLOSE WHEN CLICK ON LINK
    mobileMenu.querySelectorAll("a, button").forEach(item => {
        item.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
            toggle.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

});


window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".loader-wrapper").style.opacity = "0";
        setTimeout(() => {
            document.querySelector(".loader-wrapper").style.display = "none";
        }, 500);
    }, 2500);
});