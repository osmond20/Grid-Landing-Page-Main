const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// Menu functionality
menuButton.addEventListener("click", () =>{
    // stores the boolean result of the toggle
    const isOpen = menu.classList.toggle("show");
    // evaluates the result
    if(isOpen === true){
        menuButton.setAttribute('src', "assets/images/icon-close.svg");
        menu.setAttribute('aria-expanded', isOpen);
    }
    else{
        menuButton.setAttribute('src', "assets/images/icon-menu.svg");
    } 
});