import { registerNewUser } from "../../scripts/request/register.js";

const form = document.querySelector("form")

const bts = document.querySelectorAll("button")

const divBts = document.querySelector(".div-bts-redirect-home")
const vectClose = document.querySelector("#vectorClose")
const vect = document.querySelector("#vector")

divBts.style.display = "none"

vect.addEventListener("click", () => {
    vect.classList.toggle("none")
    divBts.style.display = "flex"
    vectClose.classList.toggle("none")
})

vectClose.addEventListener("click", () => {
    vect.classList.toggle("none")
    divBts.style.display = "none"
    vectClose.classList.toggle("none")
})


bts.forEach((bt)=>{
    bt.onclick = () =>{
        if(bt.id == "btLogin"){
            window.location.replace(`${bt.dataset.path}`)
        }if(bt.id == "btRegister"){
            window.location.replace(`${bt.dataset.path}`)
        }
    }
})



form.addEventListener("submit", (event) => {
    
    event.preventDefault()
    const body = {
        username: event.target.children[0].value,
        password: event.target.children[2].value,
        email: event.target.children[1].value,
        professional_level: event.target.children[3].value,
    }

    if(body.professional_level == ""){
        body.professional_level = null
    }
    registerNewUser(body)

})