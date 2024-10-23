/*const button = document.querySelector("#gridSelector")

button.onclick = gridSizeChooser();

function gridSizeChooser(){
    let number = prompt("Choose size of grid (1-100)")
    parseInt(number)
    return number
}*/

function grid(){
    for (let i = 0; i < gridSizeChooser(); i++) {
        const divContainer = document.querySelector("#container")

        const divHolder = document.createElement("div");
        divHolder.setAttribute("id", "holder"+i)

        divContainer.appendChild(divHolder)

        for (let index = 0; index < gridSizeChooser(); index++){
            const container = document.querySelector("#holder"+i);

            const divs = document.createElement("div");
            divs.classList.add("grid"+i);
            divs.onmouseover = () => divs.style.backgroundColor = "black"
            divs.onmouseout = () => divs.style.backgroundColor = "white"

            container.appendChild(divs)
        }
        
    }

}

//gridSizeChooser();
grid();
