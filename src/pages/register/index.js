import { registerNewUser } from "../../scripts/request/register.js";

const form = document.querySelector("form")
const bts = document.querySelectorAll("button")

const hidden = "none"
const flex = "flex"
const hamburguer = document.querySelector("#vector")
const close = document.querySelector("#vectorClose")
const divBtsRedirect = document.querySelector(".div-bts-redirect-home")

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle("none")
    close.classList.toggle("none")

    if(divBtsRedirect.style.display = hidden){

        divBtsRedirect.classList.add("appear")
        divBtsRedirect.style.display = flex

    }
})

close.addEventListener("click", () => {

    hamburguer.classList.toggle("none")
    close.classList.toggle("none")

    if(divBtsRedirect.style.display = flex){

        divBtsRedirect.classList.remove("appear")
        divBtsRedirect.classList.add("desappear")

        setTimeout(() => {
            divBtsRedirect.style.display = hidden
        }, 990);
    }
})

bts.forEach((bt)=>{

    bt.onclick = () =>{

        if(bt.id == "btLogin"){

            window.location.replace(`${bt.dataset.path}`)

        }if(bt.id == "btRegister"){

            window.location.replace(`${bt.dataset.path}`)

        }if(bt.id == "return"){

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