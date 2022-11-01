import { allDepartments, dataCompanies, departmentsFromCompanySelected } from "../request/dashboardAdmin.js"
import { getTokenLocal } from '../localStorage.js'
import { toastViewDepartment } from '../toastAdmin.js'


async function renderAllDepartaments (response) {
    const data = await response

    const ul = document.querySelector("#departments")
    ul.innerHTML = ""
    data.forEach((companie) => {
        
    
        const card = document.createElement("li")
        const divInfos = document.createElement("div")
        const divBts = document.createElement("div")

        const departmentName = document.createElement("h3")
        const departmentDescription = document.createElement("p")
        const companyName = document.createElement("span")
        
        const btView = document.createElement("img")
        const btEdit = document.createElement("img")
        const btDelete = document.createElement("img")

        departmentName.innerText = companie.name
        departmentDescription.innerText = companie.description
        companyName.innerText = companie.companies.name

        btView.classList.add("bt-view-department")
        btView.src = '../../assets/img/eye-solid.svg'
        btView.alt = 'Icone de visualização'
        btView.id = companie.uuid

        btEdit.classList.add("bt-edit-department")
        btEdit.src = '../../assets/img/pen-to-square-solid.svg'
        btEdit.alt = 'Icone de editar'
        btEdit.id = companie.uuid

        btDelete.classList.add("bt-del-department")
        btDelete.dataset.path = `${departmentName.innerText}`
        btDelete.src = '../../assets/img/trash-can-solid.svg'
        btDelete.alt = 'Icone de excluir'
        btDelete.id = companie.uuid

        divBts.append(btView, btEdit, btDelete)
        divInfos.append(departmentName, departmentDescription, companyName)

        card.append(divInfos, divBts)

        ul.appendChild(card)

    })
}


async function renderAllUsers (data) {
    const users = await data
 
    const ul = document.querySelector("#registeredUsers")
    ul.innerHTML = ""

    users.forEach( async (user) => {

        const card = document.createElement("li")
        const divInfos = document.createElement("div")
        const divBts = document.createElement("div")

        const name = document.createElement("h2")
        const level = document.createElement("p")
        const company = document.createElement("span")

        const btEdit = document.createElement("img")
        const btDel = document.createElement("img")

        name.innerText = user.username
        level.innerText = user.professional_level

        if(user.department_uuid == null){
            company.innerText = ""
        }else{
            const token = getTokenLocal()

            let departmentsTest = await allDepartments(token.token)

            departmentsTest.forEach(async (companyUser) => {

                if(user.department_uuid === companyUser.uuid)

                company.innerText = await companyUser.companies.name
  
            })
        }

        btEdit.classList.add("bt-edit-user")
        btEdit.src = '../../assets/img/pen-to-square-solid.svg'
        btEdit.alt = 'Icone para editar'
        btEdit.id = user.uuid

        btDel.classList.add("bt-del-user")
        btDel.src = '../../assets/img/trash-can-solid.svg'
        btDel.alt = 'Icone para excluir'
        btDel.id = user.uuid

        if(!user.is_admin){
            divBts.append(btEdit, btDel)
            divInfos.append(name, level, company)
            card.append(divInfos, divBts)
            ul.appendChild(card)
        }else{
           
        }

    })

}


async function filterCompanies (dataCompanies) {
    const data = await dataCompanies
    const select = document.querySelector("#companies")

    data.forEach(async (company) => {
        
            const option = document.createElement("option")
            option.setAttribute("value", `${company.uuid}`)
            option.innerText = await company.name

            select.appendChild(option)
        })
    
    select.addEventListener("change", async event => {
        const idDepartment = event.target.value
        console.log(idDepartment)
        const data = await departmentsFromCompanySelected(idDepartment)
        const token = getTokenLocal()
        if(data.length == 0){
            renderInfoNoDepartments()
        }else{
            await renderFilteredDepartment(data)
        }
    })
}


async function renderFilteredDepartment (response) {
    const data = await response

    const ul = document.querySelector("#departments")
    ul.innerHTML = ""

    data.forEach((companie) => {
        
        const card = document.createElement("li")
        const divInfos = document.createElement("div")
        const divBts = document.createElement("div")

        const departmentName = document.createElement("h3")
        const departmentDescription = document.createElement("p")
        const companyName = document.createElement("span")
        
        const btView = document.createElement("img")
        const btEdit = document.createElement("img")
        const btDelete = document.createElement("img")

        departmentName.innerText = companie.name
        departmentDescription.innerText = companie.description
        companyName.innerText = companie.companies.name

        btView.classList.add("bt-view-department")
        btView.src = '../../assets/img/eye-solid.svg'
        btView.alt = 'Icone de visualização'
        btView.id = companie.uuid

        btEdit.classList.add("bt-edit-department")
        btEdit.src = '../../assets/img/pen-to-square-solid.svg'
        btEdit.alt = 'Icone de editar'
        btEdit.id = companie.uuid

        btDelete.classList.add("bt-del-department")
        btDelete.src = '../../assets/img/trash-can-solid.svg'
        btDelete.alt = 'Icone de excluir'
        btDelete.id = companie.uuid

        divBts.append(btView, btEdit, btDelete)
        divInfos.append(departmentName, departmentDescription, companyName)

        card.append(divInfos, divBts)

        ul.appendChild(card)

    })
    const token = getTokenLocal()
    const btsViewerDepartments = document.querySelectorAll(".bt-view-department")
    btsViewerDepartments.forEach((bt) => {
        bt.addEventListener("click",async (event) => {
            
            event.preventDefault()
            
            const allDepts = await allDepartments(token.token)
            allDepts.forEach(async(department) => {
                const idDepartment = await department.uuid
                if(idDepartment == event.target.id){

                    toastViewDepartment(department)
                }
            })
        }
    )})
}


function renderInfoNoDepartments () {
    const ul = document.querySelector("#departments")
    ul.innerHTML = ""
    const title = document.createElement("h2")
    title.innerText = "A empresa não possui departamentos."
    ul.appendChild(title)
}


export { renderAllDepartaments, renderAllUsers, filterCompanies, renderFilteredDepartment }