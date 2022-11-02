import { registerNewUser } from "../../scripts/request/register.js";

const form = document.querySelector("form")

const bts = document.querySelectorAll("button")



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