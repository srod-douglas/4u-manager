





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

        btView.src = '../../assets/img/eye-solid.svg'
        btView.alt = 'Icone de visualização'

        btEdit.src = '../../assets/img/pen-to-square-solid.svg'
        btEdit.alt = 'Icone de editar'

        btDelete.src = '../../assets/img/trash-can-solid.svg'
        btDelete.alt = 'Icone de excluir'

        divBts.append(btView, btEdit, btDelete)
        divInfos.append(departmentName, departmentDescription, companyName)

        card.append(divInfos, divBts)

        ul.appendChild(card)

    })

}

export { renderAllCompanies }