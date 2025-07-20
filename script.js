var typed = new Typed(".typing", {
    strings: ["Frontend Developer", "Penetration Tester", "Ethical Hacker"],
    typeSpeed: 100,
    backSpeed: 60, 
    loop: true
});

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function (e) {
        e.preventDefault();
        removeBackSection();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);
        updateURLHash(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

function updateURLHash(element) {
    const target = element.getAttribute("href");
    window.history.pushState(null, "", target);
}

window.addEventListener("popstate", () => {
    const hash = window.location.hash || "#home";
    const targetSection = document.querySelector(hash);
    if (targetSection) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        targetSection.classList.add("active");
        updateNavByHash(hash);
    }
});

function updateNavByHash(hash) {
    for (let i = 0; i < totalNavList; i++) {
        const navLink = navList[i].querySelector("a");
        navLink.classList.remove("active");
        if (navLink.getAttribute("href") === hash) {
            navLink.classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = parseInt(this.getAttribute("data-section-index"));
    const sectionId = this.getAttribute("href");

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    document.querySelector(sectionId).classList.add("active");

    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);

    updateURLHash(this);
});


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
