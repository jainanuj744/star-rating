let star_container = document.querySelector(".star_container");
let star = document.querySelectorAll(".star");
let rating = document.querySelector(".rating");
let previous = 0;

star_container.addEventListener("click",function(e){
    let current = e.target.dataset.pos;
    
    for(let i=0;i<previous;i++){
        star[i].classList.remove("green");
    }

    for(let i=0;i<current;i++){
        star[i].classList.add("green");
    }
    rating.innerHTML = current;
    previous = current;
    

})

star_container.addEventListener("mouseover",function(e){
    let current = e.target.dataset.pos;
    
    for(let i=0;i<star.length;i++){
        star[i].classList.remove("green");
    }

    for(let i=0;i<current;i++){
        star[i].classList.add("green");
    }
})

star_container.addEventListener("mouseleave",function(e){
    
    for(let i=0;i<star.length;i++){
        star[i].classList.remove("green");
    }

    for(let i=0;i<previous;i++){
        star[i].classList.add("green");
    }
    

})