import { getTokenLocal } from './localStorage.js'
import { refreshDataUser } from './request/dashboardUser.js'

async function toastEditProfileUser (user) {

    const dataUser = await user

    const view = document.querySelector("body")
    const background = document.createElement("div")
    const toast = document.createElement("div")
    background.classList.add("appear")
/*     toast.classList.add("appear") */

    background.classList.add("background-modal-edit")
    toast.classList.add("body-modal-edit")

    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    const btCloseToast = document.createElement("span")
    const form = document.createElement("form")
    const inputName = document.createElement("input")
    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const btSendEdits = document.createElement("button")

    divTitle.classList.add("div-title-modal-edit-user")
    title.classList.add("title-modal")
    btCloseToast.classList.add("bt-close-modal")
    btSendEdits.classList.add("bt-send-edits-modal")

    title.innerText = "Editar Perfil"
    btCloseToast.innerText = "x"

    inputName.setAttribute("placeholder", "Seu nome")
    inputName.setAttribute("type", "text")
    inputName.setAttribute("value", `${dataUser.username}`)
 

    inputEmail.setAttribute("placeholder", "Seu email")
    inputEmail.setAttribute("type", "email")
    inputEmail.setAttribute("value", `${dataUser.email}`)

    inputPassword.setAttribute("placeholder", "Sua senha")
    inputPassword.setAttribute("required", "required")
    inputPassword.setAttribute("type", "password")

    btSendEdits.innerText = "Editar perfil"

    form.append(inputName, inputEmail, inputPassword, btSendEdits)
    divTitle.append(title, btCloseToast)

    toast.append(divTitle, form)
    background.appendChild(toast)
    view.appendChild(background)

/*     btCloseToast.onclick = () => {

        background.classList.remove("appear")
        toast.classList.remove("appear")
        background.classList.add("desappear")
        toast.classList.add("desappear")
        setTimeout(() => {
            background.innerHTML = ""
            background.classList.add("none")
        }, 1000);
    } */

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const body = {
            username: event.target.children[0].value,
            password: event.target.children[2].value,
            email: event.target.children[1].value
        }

        const token = getTokenLocal()
        await refreshDataUser(body, token.token)


        setTimeout(() => {
            background.classList.remove("appear")
            toast.classList.remove("appear")
            background.classList.add("desappear")
            toast.classList.add("desappear")
        }, 3000);

        setTimeout(() => {
            background.innerHTML = ""
            background.classList.add("none")
        }, 4000);
    })

    btCloseToast.addEventListener("click", () => {

            background.classList.remove("appear")
            background.classList.add("desappear")
            
            setTimeout(() => {
        
                background.removeAttribute("class")
                background.innerHTML = ""
        
            }, 980)
            })

}



function toastOk (type, alert, message) {
        const body = document.querySelector("body")
    
        const div = document.createElement("div")
        const title = document.createElement("p")
        const desc = document.createElement("span")
    
        
        if(type == "success"){
            div.classList.add("div-toast-response-green")
            title.classList.add("title-toast-response-green")
            desc.classList.add("desc-toast-response-green")
            title.innerText = alert
            desc.innerText = message
            
        }else{
            div.classList.add("div-toast-response-red")
            title.classList.add("title-toast-response-red")
            desc.classList.add("desc-toast-response-red")
            title.innerText = alert
            desc.innerText = message
        }
        
        div.append(title, desc)
        body.appendChild(div)
/*         setTimeout(() => {
            window.location.reload()
        }, 4000); */
    
}



export { toastEditProfileUser, toastOk }