const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const counters = document.querySelectorAll(".counters");
const speed = 200;

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

//Fetching from JSON

// Counter for stats
counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.textContent;

        const inc = 1;
        const delay = 20;

        if(count < target){
            counter.textContent = Math.min(count + inc, target);
            setTimeout(updateCount, delay);
        }
        else
        {
            count.textContent = target;
        }
    }

    updateCount();
})

