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
            divs.onmouseover = () => divs.style.backgroundColor = "black"
            divs.onmouseout = () => divs.style.backgroundColor = "white"

            container.appendChild(divs)
        }
        
    }

}

function gridSizeChooser(){
    const divContainer = document.querySelector("#container")

    //Removes previous grid
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
      }

    let size = parseInt(prompt("Choose size 1-100"))

    //Replaces new grid with new one
    if (size <= 100){
        for (let i = 0; i < size; i++) {
            const divContainer = document.querySelector("#container")

            const divHolder = document.createElement("div");
            divHolder.setAttribute("id", "holder"+i)

            divContainer.appendChild(divHolder)

            for (let index = 0; index < size; index++){
                const container = document.querySelector("#holder"+i);

                const divs = document.createElement("div");
                divs.classList.add("grid"+i);
                divs.onmouseover = () => divs.style.backgroundColor = "black"
                divs.onmouseout = () => divs.style.backgroundColor = "white"

                container.appendChild(divs)
            }
            
        }
    }
    else alert("Number is too big or small")



}


grid();
