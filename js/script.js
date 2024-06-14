// //Globals
// const navButtons = document.querySelectorAll("nav>div");
// const navbar = document.querySelector("nav");
// const header = document.querySelector("header");
// const sectionTitles = document.querySelectorAll("section.title");
// const sectionArray = Array.from(sectionTitles);
// const startPosition = navbar.offsetTop;
// const observer = new IntersectionObserver(entries => adjustVisibility(entries));

// function init() {
//     observer.observe(header);

//     for (let title of sectionTitles) {
//         observer.observe(title);
//     }
// }

// function adjustVisibility(entries) {
//     const mobileView = window.matchMedia("(max-width: 650px)");

//     for (let entry of entries) {
//         if (!mobileView.matches) {
//             if (entry.target.nodeName === "HEADER") {
//                 if (entry.intersectionRatio > 0) {
//                     removeSelected();
//                     navbar.classList.remove("sticky");
//                 } else {
//                     navbar.classList.add("sticky");
//                 }
//             }
//             if (entry.target.nodeName === "SECTION") {
//                 let i = sectionArray.indexOf(entry.target);
//                 if (entry.intersectionRatio > 0) {
//                     removeSelected();
//                     navButtons[i].classList.add("selected");
//                 }
//             }
//         }
//     }
// }

// function removeSelected() {
//     for (let button of navButtons) {
//         button.classList.remove("selected");
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     // Modal
//     let modal = document.getElementById("myModal");
//     let modalImg = document.getElementById("img01");
//     let captionText = document.getElementById("caption");

//     // Alle prototypeGallery containers selecteren
//     let imageContainers = document.querySelectorAll('.prototypeGallery');

//     // Event listener toevoegen aan elke prototypeGallery container
//     imageContainers.forEach(container => {
//         container.addEventListener('click', function (event) {
//             if (event.target.tagName === 'IMG') {
//                 modal.style.display = "block";
//                 modalImg.src = event.target.src;
//                 captionText.innerHTML = event.target.alt;
//             }
//         });
//     });

//     modal.addEventListener('click', function (event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     });

//     // Span container
//     let span = document.getElementsByClassName("close")[0];

//     span.onclick = function () {
//         modal.style.display = "none";
//     };
// });

// document.addEventListener("DOMContentLoaded", init);


document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 
  
    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 
  
    const dragStart = (e) => {  
        isDragging = true; 
        carousel.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }; 
  
    const dragging = (e) => { 
        if (!isDragging) return; 
      
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
      
        // Check if the new scroll position exceeds  
        // the carousel boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >=  
            carousel.scrollWidth - carousel.offsetWidth) { 
              
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
      
        // Otherwise, update the scroll position of the carousel 
        carousel.scrollLeft = newScrollLeft; 
    }; 
  
    const dragStop = () => { 
        isDragging = false;  
        carousel.classList.remove("dragging"); 
    }; 
  
    const autoPlay = () => { 
      
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return;  
          
        // Calculate the total width of all cards 
        const totalCardWidth = carousel.scrollWidth; 
          
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
          
        // If the carousel is at the end, stop autoplay 
        if (carousel.scrollLeft >= maxScrollLeft) return; 
          
        // Autoplay the carousel after every 2500ms 
        timeoutId = setTimeout(() =>  
            carousel.scrollLeft += firstCardWidth, 2500); 
    }; 
  
    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () =>  
        clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 
  
    // Add event listeners for the arrow buttons to  
    // scroll the carousel left and right 
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel.scrollLeft += btn.id === "left" ?  
                -firstCardWidth : firstCardWidth; 
        }); 
    }); 
}); 

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();