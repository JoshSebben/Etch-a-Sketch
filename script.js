function grid(){
    for (let i = 0; i < 16; i++) {
        const divContainer = document.querySelector("#container")

        const divHolder = document.createElement("div");
        divHolder.setAttribute("id", "holder"+i)

        divContainer.appendChild(divHolder)

        for (let index = 0; index < 16; index++){
            const container = document.querySelector("#holder"+i);

            const divs = document.createElement("div");
            divs.classList.add("grid"+i);

            container.appendChild(divs)
        }
        
    }

}

grid();
