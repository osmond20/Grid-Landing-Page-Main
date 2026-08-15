const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const counters = document.querySelectorAll(".counters");
const speed = 200;
const mainEl = document.querySelector(".main-el");
const footerEl = document.querySelector(".footer-el");

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

    mainEl.classList.toggle("dim");
    footerEl.classList.toggle("dim");
});

//Fetching from JSON
fetch("./stats.json")
.then(res => res.json())
.then(stats =>{
    const arr= stats.stats;
    arr.forEach((stat, index) => {
       counters[index].setAttribute("data-target", stat.value);
       
    });

    // Counter for stats
    counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.textContent;

        const inc = 1 // Slower increment
        const delay = 30; // Faster refresh to make animation smoother

        if(count < target){
            counter.textContent = Math.min(count + inc, target);
            setTimeout(updateCount, delay);
        }
        else
        {
            // Format only the second counter (index 1) with comma
            if(counter === counters[1]){
                counter.textContent = target.toLocaleString();
            } else {
                counter.textContent = target;
            }
        }
    }

        updateCount();
    })
})
.catch(err => console.error('feth error', err));



