import { getTokenLocal } from './localStorage.js'
import { renderAllUsers } from './render/dashboardAdmin.js'

import { 
    createDepartment, 
    dataUsers, 
    deleteDataUser, 
    deleteDepartment, 
    departmentsFromCompanySelected, 
    refreshDataUser, 
    editDescriptionDepartment,
    usersNotWorking,
    admitUser
} from './request/dashboardAdmin.js'



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
    setTimeout(() => {
        window.location.reload()
    }, 4000);

}

function toastDeleteUser (user) {

    const body = document.querySelector("body")
    const background = document.createElement("div")
    const toast = document.createElement("div")

    background.classList.add("background-delete-user")
    toast.classList.add("toast-delete-user")

    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    const btCloseModal = document.createElement("span")
    const btDeleteUser = document.createElement("button")

    divTitle.classList.add("div-title-delete-user")
    title.classList.add("title-delete-user")
    btCloseModal.classList.add("bt-cancel-delete-user")
    btDeleteUser.classList.add("bt-confirm-delete-user")

    title.innerText = `Realmente deseja remover o usuário ${user.username}?`
    btCloseModal.innerText = "x"

    btDeleteUser.innerText = "Confirmar"

    divTitle.append(title, btCloseModal)
    toast.append(divTitle, btDeleteUser)

    background.appendChild(toast)

    body.appendChild(background)

    btDeleteUser.onclick = () => {
        deleteDataUser(user.uuid)
        background.innerHTML = ""
        setTimeout(() => {
            window.location.reload()
        }, 4000);
    }
}


function toastDeleteDepartment (idDepartment, nameDepartment) {
    const body = document.querySelector("body")
    const background = document.createElement("div")
    const toast = document.createElement("div")

    background.classList.add("background-delete-department")
    toast.classList.add("toast-delete-department")

    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    const btCloseModal = document.createElement("span")
    const btDeleteDepartment = document.createElement("button")

    divTitle.classList.add("div-title-delete-department")
    title.classList.add("title-delete-department")
    btCloseModal.classList.add("bt-cancel-delete-department")
    btDeleteDepartment.classList.add("bt-confirm-delete-department")

    title.innerText = `Realmente deseja deletar o departamento ${nameDepartment} e demitir seus funcionários?`
    btCloseModal.innerText = "x"

    btDeleteDepartment.innerText = "Confirmar"

    divTitle.append(title, btCloseModal)
    toast.append(divTitle, btDeleteDepartment)

    background.appendChild(toast)

    body.appendChild(background)

    btDeleteDepartment.onclick = () => {
        deleteDepartment(idDepartment)
        background.innerHTML = ""
        setTimeout(() => {
            window.location.reload()
        }, 4000);
    }
}


async function toastCreateDepartment (allCompanies) {
    let failed = new Array
    const companies = await allCompanies

    const body = document.querySelector("body")
    const background = document.createElement("div")
    const toast = document.createElement("div")
    const divForm = document.createElement("div")

    background.classList.add("background-new-department")
    toast.classList.add("toast-new-department")
    divForm.classList.add("div-inputs-new-department")

    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    const btCloseModal = document.createElement("span")
    const btConfirmNewDepartment = document.createElement("button")

    divTitle.classList.add("div-title-new-department")
    title.classList.add("title-new-department")
    btCloseModal.classList.add("bt-cancel-new-department")
    btConfirmNewDepartment.classList.add("bt-confirm-new-department")

    title.innerText = "Criar Departamento"
    btCloseModal.innerText = "x"
    btConfirmNewDepartment.innerText = "Criar o departamento"

    const form = document.createElement("form")
    const inputName = document.createElement("input")
    const inputDescription = document.createElement("input")

    inputName.setAttribute("placeholder", "Nome do departamento")
    inputName.setAttribute("required", "required")
    inputDescription.setAttribute("placeholder", "Descrição")
    inputDescription.setAttribute("required", "required")

    const select = document.createElement("select")
    const optionInit = document.createElement("option")
    
    select.setAttribute("name", "company")
    select.setAttribute("id", "company")
    optionInit.innerText = "Selecionar empresa"
    optionInit.id = "invalid"

    select.appendChild(optionInit)


    companies.forEach((company)=>{
        
        const option = document.createElement("option")
        option.setAttribute("value", `${company.uuid}`)
        option.id = `${company.uuid}`
        option.innerText = `${company.name}`
        select.appendChild(option)
    })
    form.append(inputName, inputDescription, select, btConfirmNewDepartment)
    divForm.appendChild(form)
    divTitle.append(title, btCloseModal)
    toast.append(divTitle, divForm)
    background.appendChild(toast)
    body.appendChild(background)



    form.addEventListener("submit", async (event) =>{
        event.preventDefault()

        let newName = event.target.children[0].value
        let description = event.target.children[1].value
        let choice = event.target.children[2].value

        let verifyDepartmentInChoose = await departmentsFromCompanySelected(choice)

            verifyDepartmentInChoose.forEach(async (depart) => {

                let formatName = await depart.name.toLowerCase().replace(" ", "").replace("ã", "a").replace("ç", "c")

                let formatNewName = await newName.toLowerCase().replace(" ", "").replace("ã", "a").replace("ç", "c").replace(".", "")

                if(formatName === formatNewName){
                    failed.push("Fail")

                }

            })
            setTimeout(() => {
                
                if(failed.includes("Fail")){
                    toastResponse("Fail", "O departamento já existe.", "Por favor, crie um departamento inexistente.")
                }else{
                    toastResponse("Success", "Solicitação bem sucedida!", "Departamento criado com sucesso.")

                    const body = {
                        name: newName,
                        description: description,
                        company_uuid: choice
                    }
                    createDepartment(body)
                    setTimeout(() => {
                        window.location.reload()
                    },4000)
                }
            }, 100);
    })
}


function toastEditDescriptionDepartment (oldValues, idDepartment) {
    const body = document.querySelector("body")
    const background = document.createElement("div")
    const toast = document.createElement("div")
    const divForm = document.createElement("div")

    background.classList.add("background-edit-department")
    toast.classList.add("toast-edit-department")
    divForm.classList.add("div-input-edit-department")

    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    const btCloseModal = document.createElement("span")
    const btConfirmEdit = document.createElement("button")

    divTitle.classList.add("div-title-edit-department")
    title.classList.add("title-edit-department")
    btCloseModal.classList.add("bt-cancel-edit-department")
    btConfirmEdit.classList.add("bt-confirm-edit-department")

    title.innerText = "Editar Departamento"
    btCloseModal.innerText = "x"
    btConfirmEdit.innerText = "Salvar alterações"

    const form = document.createElement("form")
    const inputDescription = document.createElement("input")

/*     inputDescription.innerText = oldValues */
    inputDescription.setAttribute("placeholder", `Insira uma nova descrição`)
    inputDescription.setAttribute("value", oldValues)
    inputDescription.setAttribute("required", "required")

    divTitle.append(title, btCloseModal)
    form.append(inputDescription, btConfirmEdit)
    divForm.appendChild(form)

    toast.append(divTitle, divForm)

    background.appendChild(toast)
    body.appendChild(background)


    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const body = {
            description: inputDescription.value
        }
        editDescriptionDepartment(body, idDepartment)
    })

}


async function toastViewDepartment (department) {

    const body = document.querySelector("body")
    const background = document.createElement("div")
    const toast = document.createElement("div")

    background.classList.add("background-view-department")
    toast.classList.add("toast-view-department")

    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    const btCloseModal = document.createElement("span")
    
    divTitle.classList.add("div-title-view-department")
    title.classList.add("title-view-department")
    btCloseModal.classList.add("bt-close-view-department")
    
    title.innerText = department.name
    btCloseModal.innerText = "x"
    

    const divContainerLeft = document.createElement("div")
    const desc = document.createElement("p")
    const company = document.createElement("span")

    divContainerLeft.classList.add("div-view-container-left")
    desc.classList.add("description-container-left")
    company.classList.add("company-container-left")

    desc.innerText = department.description
    company.innerText = department.companies.name

    const divContainerRight = document.createElement("div")
    const select = document.createElement("select")
    const optionInit = document.createElement("option")
    const btContract = document.createElement("button")

    divContainerRight.classList.add("div-view-container-right")
    btContract.classList.add("bt-contract")
    btContract.setAttribute("disabled", "disabled")
    btContract.id = "choose"
    btContract.innerText = "Contratar"

    select.setAttribute("name", "users")
    optionInit.setAttribute("value", "default")
    optionInit.innerText = "Selecionar usuário"

    select.appendChild(optionInit)

    const dataUsersNotWorking = await usersNotWorking()

    dataUsersNotWorking.forEach((user) => {

        const option = document.createElement("option")
        if(user.username !== "ADMIN"){

            option.setAttribute("value", `${ user.username}`)
            option.innerText = user.username
            option.id =  user.uuid

            select.appendChild(option)
            
        }else{}
    })

    divContainerRight.append(select, btContract)
    body.appendChild(divContainerRight)

    select.addEventListener("change", event =>{

        const departmentId = department.uuid

        if(select.selectedIndex != 0){

            btContract.removeAttribute("disabled", "disabled")

            const idUser = select.selectedOptions[0].id
            console.log(idUser)
            btContract.onclick = (event) => {
                event.preventDefault()

                const body = {
                    user_uuid: idUser,
                    department_uuid: departmentId
                }

                admitUser(body)
            }
 
        }else{
            btContract.setAttribute("disabled", "disabled")
        }

    })
}



export { toastResponse, editUserFromAdmin, toastDeleteUser, toastDeleteDepartment, toastCreateDepartment, toastEditDescriptionDepartment,toastViewDepartment }