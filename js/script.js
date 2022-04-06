//Globals
const navButtons = document.querySelectorAll("nav>div");
const navbar = document.querySelector("nav");
const header = document.querySelector("header");
const sectionTitles = document.querySelectorAll("section.title");
const sectionArray = Array.from(sectionTitles);
const startPosition = navbar.offsetTop;
const observer = new IntersectionObserver(entries => adjustVisibility(entries));

function init(){
    observer.observe(header);

    for(let title of sectionTitles){
        observer.observe(title);
    }
}

function adjustVisibility(entries){
    const mobileView = window.matchMedia("(max-width: 650px)");

    for(let entry of entries){
        if(!mobileView.matches){
            if(entry.target.nodeName === "HEADER"){
                if(entry.intersectionRatio > 0){
                    removeSelected();
                    navbar.classList.remove("sticky");
                } else {
                    navbar.classList.add("sticky");
                }
            }
            if(entry.target.nodeName === "SECTION"){
                let i = sectionArray.indexOf(entry.target);
                if(entry.intersectionRatio > 0){
                    removeSelected();
                    navButtons[i].classList.add("selected");
                }
            }
        }
    }
}

function removeSelected(){
    for(let button of navButtons){
        button.classList.remove("selected");
    }
}

init();