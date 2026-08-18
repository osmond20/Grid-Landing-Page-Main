const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const counters = document.querySelectorAll(".counters");
const speed = 100;
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

// Click functionality so that menu closes without onclick menu button event
mainEl.addEventListener("click", () => {
    if(menu.classList.contains("show") === true){
        menu.classList.remove("show");
        menuButton.setAttribute('src', "assets/images/icon-menu.svg");
        mainEl.classList.remove("dim");
        footerEl.classList.remove("dim");
        menu.setAttribute('aria-expanded', false);
    }
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
    counters.forEach((counter, index) =>{

        let target = Number(counter.getAttribute("data-target"));
        let count  = 0;
        const updateCount = () =>{
            const inc = target / speed;

            if(count < target){
                count += inc;

                if(count > target){
                    count = target;
                }

                if(index === 0  || index === 3){
                    counter.textContent = count.toFixed(1);
                }
                else{
                    counter.textContent = Math.floor(count).toLocaleString();
                }

                setTimeout(updateCount, 30);
            }
            else{
            
                if(index === 0 || index === 3){
                    counter.textContent = target.toFixed(1);
                }
                else{
                    counter.textContent = target.toLocaleString();
                }
            }
        };

        updateCount();
    })
})
.catch(err => console.error('feth error', err));



