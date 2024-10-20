function grid(){
    for (let i = 0; i < 16; i++) {
        for (let index = 0; index < 16; index++){
            const container = document.querySelector("#container");

            const divs = document.createElement("div");
            divs.classList.add("grid");
            divs.style.color = "blue";
            divs.style.borderColor = "black"

            container.appendChild(divs)
    
        }
        
    }

}

grid();
