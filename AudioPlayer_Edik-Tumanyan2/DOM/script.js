// DOM
let para = document.getElementsByTagName("p")

//console.log(para[1]);

// for(let i = 0 ; i < para.length ; i++){
//     para[i].style.backgroundColor = "aqua"
//     para[i].style.fontSize = "50px"
//     para[i].style.textAlign = "center"
// }





///

let numbers = [5,-46,35,96,-69,12,1,-72,0]
let main = document.getElementsByClassName("main")
//console.log(main);
main[0].style.display = "flex"
for(let i = 0 ; i < numbers.length ; i++){
        let h1 = document.createElement("h1")
        main[0].appendChild(h1)
        h1.innerHTML = numbers[i]
        h1.style.margin = "10px"
        if(numbers[i] > 0){
            h1.style.color = "blue"
        }
        else if(numbers[i] < 0){
            h1.style.color = "red"
        } else {
            h1.style.color = "gray"
        }

}



//addEventListener

let button = document.createElement("Button")
document.body.appendChild(button)
button.style.height = "50px"
button.style.width = "80px"
button.textContent = "Change"

function change() {
    let letters = document.getElementsByTagName("h1")

    for(let i = 0  ; i < letters.length ; i++){
                letters[i].style.fontSize = "80px"
                let elem = letters[i]
                if(elem.style.color == "red"){
                    elem.style.color = "blue"
                } else if(elem.style.color == "blue"){
                    elem.style.color = "red"
                }
                if(elem.innerHTML == 0){
                    main[0].removeChild(elem)
                }
    }
    main[0].classList.toggle("mystyle")
}

button.addEventListener("click",change)