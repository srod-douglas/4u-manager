import { getTokenLocal } from './localStorage.js'
import { renderAllUsers } from './render/dashboardAdmin.js'
import { dataUsers, refreshDataUser } from './request/dashboardAdmin.js'


async function editUserFromAdmin (user) {

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
    
        form.addEventListener("submit", async event => {
            event.preventDefault()
            const body = {
                kind_of_work: event.target.children[0].value,
                professional_level: event.target.children[1].value
            }
            const idUser = user.uuid
            const tokenAdmin = getTokenLocal()
            await refreshDataUser(idUser, body, tokenAdmin.token)
            await renderAllUsers(dataUsers(tokenAdmin.token))
            background.innerHTML = ""
        })
}

function toastResponse (type, alert, message) {
    const body = document.querySelector("body")

    const div = document.createElement("div")
    const title = document.createElement("p")
    const desc = document.createElement("span")

    if(type == "success"){
        title.innerText = alert
        desc.innerText = message
        
    }else{
        title.innerText = alert
        desc.innerText = message
    }

    div.append(title, desc)
    body.appendChild(div)

}

export { toastResponse, editUserFromAdmin }