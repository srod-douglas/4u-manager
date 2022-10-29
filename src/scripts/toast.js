import { getTokenLocal } from './localStorage.js'
import { refreshDataUser } from './request/dashboardUser.js'

function toast (message){
    
}

async function toastEditProfileUser (user) {
    const dataUser = await user

    console.log('to recebendo')
    const view = document.querySelector("body")
    const background = document.createElement("div")
    const toast = document.createElement("div")

    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    const btCloseToast = document.createElement("button")
    const form = document.createElement("form")
    const inputName = document.createElement("input")
    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const btSendEdits = document.createElement("button")



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


    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const body = {
            username: event.target.children[0].value,
            email: event.target.children[1].value,
            password: event.target.children[2].value
        }
        const token = getTokenLocal()
        refreshDataUser(JSON.stringify(body), token.token)
    })

}

export { toastEditProfileUser }