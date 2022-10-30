import { getTokenLocal } from './localStorage.js'
import { refreshDataUser } from './request/dashboardUser.js'

/* function toast (message){
    
} */

async function toastEditProfileUser (user) {

    const dataUser = await user

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

    btCloseToast.onclick = () => {
        background.innerHTML = ""
        window.location.reload()
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const body = {
            username: event.target.children[0].value,
            email: event.target.children[1].value,
            password: event.target.children[2].value
        }
        const token = getTokenLocal()
        refreshDataUser(JSON.stringify(body), token.token)
        background.innerHTML = "" /* CHANGE TO CLASS HIDDEN */
        window.location.reload()
    })

}



function editUserFromAdmin (user) {
console.log(user)
    const body = document.querySelector("body")

    const background = document.createElement("div")
    background.classList.add("toast-background")
    const toast = document.createElement("div")
    toast.classList.add("toast-body")

    const divTitle = document.createElement("div")
    divTitle.classList.add("div-title")
    const title = document.createElement("h2")
    const btCloseModal = document.createElement("button")
    
    const divForm = document.createElement("div")
    divForm.classList.add("div-form")
    const form = document.createElement("form")

    const selectKind = document.createElement("select")
    const optionPresential = document.createElement("option")
    const optionHome = document.createElement("option")
    const optionHybrid = document.createElement("option")

    selectKind.setAttribute("name", "kind")
    selectKind.id = "kind"
    optionPresential.setAttribute("value", "presencial")
    optionHome.setAttribute("value", "home office")
    optionHybrid.setAttribute("value", "hibrido")

    optionPresential.innerText = "presencial"
    optionHome.innerText = "home office"
    optionHybrid.innerText = "hibrido"

    const selectLevel = document.createElement("select")
    const optionInter = document.createElement("option")
    const optionJr = document.createElement("option")
    const optionFull = document.createElement("option")
    const optionSenior = document.createElement("option")
    
    const btSubmit = document.createElement("button")

    selectLevel.setAttribute("name", "level")
    selectLevel.id = "level"
    optionInter.setAttribute("value", "estágio")
    optionJr.setAttribute("value", "júnior")
    optionFull.setAttribute("value", "pleno")
    optionSenior.setAttribute("value", "sênior")

    optionInter.innerText = "estágio"
    optionJr.innerText = "júnior"
    optionFull.innerText = "pleno"
    optionSenior.innerText = "sênior"

    title.innerText = "Editar Usuário"
    btCloseModal.innerText = "x"

    btSubmit.innerText = "Editar"

    selectKind.append(optionPresential, optionHome, optionHybrid)
    selectLevel.append(optionInter, optionJr, optionFull, optionSenior)

    form.append(selectKind, selectLevel, btSubmit)
    divForm.appendChild(form)

    divTitle.append(title, btCloseModal)
        
    toast.append(divTitle, divForm)
    background.appendChild(toast)
    body.appendChild(background)
}

export { toastEditProfileUser, editUserFromAdmin }