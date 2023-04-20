const december2021Elements = document.querySelectorAll('[data-filter="XII/2021"]');
const december2021Button = december2021Elements[0];
const december2021Projects = Array.from(december2021Elements).slice(1);
const march2022Elements = document.querySelectorAll('[data-filter="III/2022"]');
const march2022Button = march2022Elements[0];
const march2022Projects = Array.from(march2022Elements).slice(1);
const april2022Elements = document.querySelectorAll('[data-filter="IV/2022"]');
const april2022Button = april2022Elements[0];
const april2022Projects = Array.from(april2022Elements).slice(1);
const july2022Elements = document.querySelectorAll('[data-filter="VII/2022"]');
const july2022Button = july2022Elements[0];
const july2022Projects = Array.from(july2022Elements).slice(1);
const november2022Elements = document.querySelectorAll('[data-filter="XI/2022"]');
const november2022Button = november2022Elements[0];
const november2022Projects = Array.from(november2022Elements).slice(1);
const allProjects = [december2021Projects, march2022Projects, april2022Projects, july2022Projects, november2022Projects];
const allProjectsButton = document.querySelector('[data-filter="all"]');
const allFilterButtons = [december2021Button, march2022Button, april2022Button, july2022Button, november2022Button];

function hideElement(event) {
  event.target.classList.add("hidden");
  event.target.removeEventListener("transitionend", hideElement);
}

function showAllProjects() {
  for (const arr of allProjects) {
    for (const project of arr) {
      project.classList.remove("hidden");
      setTimeout(function () {
        project.classList.remove("my-visually-hidden");
      }, 20);
    }
  }
}

function showSelectedProjectsHideOthers(event) {
  const clickedButton = event.target;
  let buttonIndex;
  for (let i = 0; i < allFilterButtons.length; i++) {
    if (clickedButton === allFilterButtons[i]) {
      buttonIndex = i;
    }
  }
  for (let i = 0; i < allProjects.length; i++) {
    if (buttonIndex === i) {
      for (const project of allProjects[i]) {
        project.classList.remove("hidden");
        setTimeout(function () {
          project.classList.remove("my-visually-hidden");
        }, 20);
      }
    } else {
      for (const project of allProjects[i]) {
        if (!project.classList.contains("hidden")) {
          project.classList.add("my-visually-hidden");
          project.addEventListener("transitionend", hideElement);
        }
      }
    }
  }
}

allProjectsButton.addEventListener("click", showAllProjects);

for (const btn of allFilterButtons) {
  btn.addEventListener("click", showSelectedProjectsHideOthers);
}
