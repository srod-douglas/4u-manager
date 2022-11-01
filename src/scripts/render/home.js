import { sectors, companies } from "../request/filter.js";

function renderCompaniesHome () {
    const reference = document.querySelector("#registeredCompanies")
    reference.innerHTML = ""
    companies.forEach((companie)=>{

        const li = document.createElement("li")
        const name = document.createElement("h1")
        const opening = document.createElement("p")
        const sector = document.createElement("span")
        li.classList.add("card-company-home")
        name.classList.add("name-company")
        opening.classList.add("open-hour-company")
        sector.classList.add("sector-company")

        name.innerText = companie.name
        opening.innerText = companie.opening_hours
        sector.innerText = companie.sectors.description

        li.append(name, opening, sector)
        reference.appendChild(li)
    })
}

async function renderSectorsHome () {
    const reference = document.querySelector("#reference")


    await sectors.forEach((companie)=>{

        const sector = document.createElement("option")
        sector.innerText = companie.description

        reference.append(sector)

    })
}

function renderFilteredSector (choices){

    const reference = document.querySelector("#registeredCompanies")
    reference.innerHTML = ""

    if(choices !== undefined){

            choices.forEach( (companie)=>{
            const li = document.createElement("li")
            const name = document.createElement("h1")
            const opening = document.createElement("p")
            const sector = document.createElement("span")
    
            li.classList.add("card-company-home")
            name.classList.add("name-company")
            opening.classList.add("open-hour-company")
            sector.classList.add("sector-company")

            name.innerText =  companie.name
            opening.innerText =  companie.opening_hours
            sector.innerText =  companie.sectors.description
            
            li.append(name, opening, sector)
            reference.appendChild(li)

        })
    }
}

export { renderCompaniesHome, renderSectorsHome, renderFilteredSector }