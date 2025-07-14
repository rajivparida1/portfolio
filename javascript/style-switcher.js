const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
if (styleSwitcherToggle) {
    styleSwitcherToggle.addEventListener('click', () => {
        document.querySelector('.style-switcher').classList.toggle('open');
    });
}

document.addEventListener('click', function(event) {
    const styleSwitcher = document.querySelector('.style-switcher');
    const toggleBtn = document.querySelector('.style-switcher-toggler');
    if (styleSwitcher && toggleBtn && 
        !styleSwitcher.contains(event.target) && 
        !toggleBtn.contains(event.target)) {
        styleSwitcher.classList.remove('open');
    }
});

addEventListener('scroll', () => {
    const styleSwitcher = document.querySelector('.style-switcher');
    if (styleSwitcher && styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
});

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

const dayNight = document.querySelector(".day-night");
if (dayNight) {
    dayNight.addEventListener("click", () => {
        dayNight.querySelector('i').classList.toggle('fa-sun');
        dayNight.querySelector('i').classList.toggle('fa-moon');
        document.body.classList.toggle('light');
    });

    addEventListener('load', () => {
        if (document.body.classList.contains('light')) {
            dayNight.querySelector("i").classList.add('fa-moon');
        } else {
            dayNight.querySelector("i").classList.add("fa-sun");
        }
    });
}
