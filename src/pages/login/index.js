import { checkLogin } from "../../scripts/request/login.js"

const form = document.querySelector("form")
const bts = document.querySelectorAll("button")

bts.forEach((bt)=>{
    bt.onclick = (event) => {
        event.preventDefault()
        const redirect = bt.dataset.path
        if(redirect !== undefined){
            window.location.replace(redirect)
        }
    }
})


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const body = {
        email: event.target.children[0].value,
        password: event.target.children[1].value,
    }
    checkLogin(body)
})