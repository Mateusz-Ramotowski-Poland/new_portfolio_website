var december2021Elements = document.querySelectorAll('[data-filter="XII/2021"]');
var december2021Button = december2021Elements[0];
var december2021Projects = Array.from(december2021Elements).slice(1);
var march2022Elements = document.querySelectorAll('[data-filter="III/2022"]');
var march2022Button = march2022Elements[0];
var march2022Projects = Array.from(march2022Elements).slice(1);
var april2022Elements = document.querySelectorAll('[data-filter="IV/2022"]');
var april2022Button = april2022Elements[0];
var april2022Projects = Array.from(april2022Elements).slice(1);
var july2022Elements = document.querySelectorAll('[data-filter="VII/2022"]');
var july2022Button = july2022Elements[0];
var july2022Projects = Array.from(july2022Elements).slice(1);
var november2022Elements = document.querySelectorAll('[data-filter="XI/2022"]');
var november2022Button = november2022Elements[0];
var november2022Projects = Array.from(november2022Elements).slice(1);
var april2023Elements = document.querySelectorAll('[data-filter="IV/2023"]');
var april2023Button = april2023Elements[0];
var april2023Projects = Array.from(april2023Elements).slice(1);
var allProjects = [december2021Projects, march2022Projects, april2022Projects, july2022Projects, november2022Projects, april2023Projects];
var allProjectsButton = document.querySelector('[data-filter="all"]');
var allFilterButtons = [december2021Button, march2022Button, april2022Button, july2022Button, november2022Button, april2023Button];
function hideElement(event) {
    event.target.classList.add("hidden");
    event.target.removeEventListener("transitionend", hideElement);
}
function showAllProjects() {
    for (var _i = 0, allProjects_1 = allProjects; _i < allProjects_1.length; _i++) {
        var arr = allProjects_1[_i];
        var _loop_1 = function (project) {
            project.classList.remove("hidden");
            setTimeout(function () {
                project.classList.remove("my-visually-hidden");
            }, 20);
        };
        for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
            var project = arr_1[_a];
            _loop_1(project);
        }
    }
}
function showSelectedProjectsHideOthers(event) {
    var clickedButton = event.target;
    var buttonIndex;
    for (var i = 0; i < allFilterButtons.length; i++) {
        if (clickedButton === allFilterButtons[i]) {
            buttonIndex = i;
        }
    }
    for (var i = 0; i < allProjects.length; i++) {
        if (buttonIndex === i) {
            var _loop_2 = function (project) {
                project.classList.remove("hidden");
                setTimeout(function () {
                    project.classList.remove("my-visually-hidden");
                }, 20);
            };
            for (var _i = 0, _a = allProjects[i]; _i < _a.length; _i++) {
                var project = _a[_i];
                _loop_2(project);
            }
        }
        else {
            for (var _b = 0, _c = allProjects[i]; _b < _c.length; _b++) {
                var project = _c[_b];
                if (!project.classList.contains("hidden")) {
                    project.classList.add("my-visually-hidden");
                    project.addEventListener("transitionend", hideElement);
                }
            }
        }
    }
}
allProjectsButton.addEventListener("click", showAllProjects);
for (var _i = 0, allFilterButtons_1 = allFilterButtons; _i < allFilterButtons_1.length; _i++) {
    var btn = allFilterButtons_1[_i];
    btn.addEventListener("click", showSelectedProjectsHideOthers);
}
