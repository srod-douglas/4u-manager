import { checkLogin } from "../../scripts/request/login.js"

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
    bt.onclick = () => {

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

function toastOk (type, alert, message) {
    const body = document.querySelector("body")

    const div = document.createElement("div")
    const title = document.createElement("p")
    const desc = document.createElement("span")

    div.classList.add("div-toast-alert")
    div.classList.add("toast-alert")
    title.classList.add("title-toast-alert")
    desc.classList.add("desc-toast-alert")

    if(type == "success"){
        title.innerText = alert
        desc.innerText = message
        
    }else{
        title.innerText = alert
        desc.innerText = message
    }
    
    div.append(title, desc)
    body.appendChild(div)
    setTimeout(() => {
        window.location.reload()
    }, 4000);

}

export { toastOk }