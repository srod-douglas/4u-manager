





async function renderAllCompanies (response) {
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

}



async function renderAllUsers (data) {
    const users = await data

    const ul = document.querySelector("#registeredUsers")

    users.forEach((user) => {

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
        company.innerText = user.department_uuid

        if(user.department_uuid == null){
            company.innerText = ""
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



export { renderAllCompanies, renderAllUsers }