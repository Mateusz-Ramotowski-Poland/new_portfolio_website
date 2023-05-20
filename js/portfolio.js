const december2021Elements = document.querySelectorAll('[data-time-filter="XII/2021"]');
const december2021Button = december2021Elements[0];
const december2021Projects = Array.from(december2021Elements).slice(1);
const march2022Elements = document.querySelectorAll('[data-time-filter="III/2022"]');
const march2022Button = march2022Elements[0];
const march2022Projects = Array.from(march2022Elements).slice(1);
const april2022Elements = document.querySelectorAll('[data-time-filter="IV/2022"]');
const april2022Button = april2022Elements[0];
const april2022Projects = Array.from(april2022Elements).slice(1);
const july2022Elements = document.querySelectorAll('[data-time-filter="VII/2022"]');
const july2022Button = july2022Elements[0];
const july2022Projects = Array.from(july2022Elements).slice(1);
const november2022Elements = document.querySelectorAll('[data-time-filter="XI/2022"]');
const november2022Button = november2022Elements[0];
const november2022Projects = Array.from(november2022Elements).slice(1);
const april2023Elements = document.querySelectorAll('[data-time-filter="IV/2023"]');
const april2023Button = april2023Elements[0];
const april2023Projects = Array.from(april2023Elements).slice(1);
const allProjects = [december2021Projects, march2022Projects, april2022Projects, july2022Projects, november2022Projects, april2023Projects];
const allTimeProjectsButton = document.querySelector('[data-time-filter="all time"]');
const allTimeFilterButtons = [
    december2021Button,
    march2022Button,
    april2022Button,
    july2022Button,
    november2022Button,
    april2023Button,
    allTimeProjectsButton,
];
const htmlCssButton = document.querySelector('[data-technology-filter="only html,css"]');
const htmlCssJsButton = document.querySelector('[data-technology-filter="only html,css,js"]');
const htmlSassTsButton = document.querySelector('[data-technology-filter="only html,sass,ts"]');
const reactTsButton = document.querySelector('[data-technology-filter="react,ts"]');
const allTechnologiesProjectsButton = document.querySelector('[data-technology-filter="all technologies"]');
const allTechnologyFilterButtons = [htmlCssButton, htmlCssJsButton, htmlSassTsButton, reactTsButton, allTechnologiesProjectsButton];
let timeFilterSpecified = "all time";
let technologyFilterSpecified = "all technologies";
function hideElement(event) {
    event.target.classList.add("hidden");
    event.target.removeEventListener("transitionend", hideElement);
}
function hideProject(project) {
    if (!project.classList.contains("hidden")) {
        project.classList.add("my-visually-hidden");
        project.addEventListener("transitionend", hideElement);
    }
}
function showProject(project) {
    project.classList.remove("hidden");
    setTimeout(function () {
        project.classList.remove("my-visually-hidden");
    }, 20);
}
function showAllProjects() {
    for (const arr of allProjects) {
        for (const project of arr) {
            showProject(project);
        }
    }
}
function highlightChosenFilter(filterCategory, clickedButton) {
    for (const timeBtn of filterCategory) {
        if (timeBtn !== clickedButton) {
            timeBtn.classList.remove("chosen-filter");
        }
        else {
            timeBtn.classList.add("chosen-filter");
        }
    }
}
function showFilteredProjects(event) {
    const clickedButton = event.target;
    if (clickedButton.dataset.technologyFilter) {
        technologyFilterSpecified = clickedButton.dataset.technologyFilter;
        highlightChosenFilter(allTechnologyFilterButtons, clickedButton);
    }
    if (clickedButton.dataset.timeFilter) {
        timeFilterSpecified = clickedButton.dataset.timeFilter;
        highlightChosenFilter(allTimeFilterButtons, clickedButton);
    }
    if (timeFilterSpecified === "all time" && technologyFilterSpecified === "all technologies") {
        showAllProjects();
    }
    if (timeFilterSpecified === "all time" && technologyFilterSpecified !== "all technologies") {
        for (const projectsArr of allProjects) {
            for (const project of projectsArr) {
                if (technologyFilterSpecified === project.dataset.technologyFilter) {
                    showProject(project);
                }
                else {
                    hideProject(project);
                }
            }
        }
    }
    if (timeFilterSpecified !== "all time" && technologyFilterSpecified === "all technologies") {
        for (const projectsArr of allProjects) {
            for (const project of projectsArr) {
                if (timeFilterSpecified === project.dataset.timeFilter) {
                    showProject(project);
                }
                else {
                    hideProject(project);
                }
            }
        }
    }
    if (timeFilterSpecified !== "all time" && technologyFilterSpecified !== "all technologies") {
        for (const projectsArr of allProjects) {
            for (const project of projectsArr) {
                if (timeFilterSpecified === project.dataset.timeFilter) {
                    if (technologyFilterSpecified === project.dataset.technologyFilter) {
                        showProject(project);
                    }
                    else {
                        hideProject(project);
                    }
                }
                else {
                    hideProject(project);
                }
            }
        }
    }
}
for (const btn of allTechnologyFilterButtons) {
    btn.addEventListener("click", showFilteredProjects);
}
for (const btn of allTimeFilterButtons) {
    btn.addEventListener("click", showFilteredProjects);
}
//# sourceMappingURL=portfolio.js.map