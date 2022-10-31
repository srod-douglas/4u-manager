import { sectors, companies } from "../request/filter.js";

function renderCompaniesHome () {
    const reference = document.querySelector("#registeredCompanies")
    reference.innerHTML = ""
    companies.forEach((companie)=>{

        const name = document.createElement("h1")
        const opening = document.createElement("p")
        const sector = document.createElement("span")

        name.innerText = companie.name
        opening.innerText = companie.opening_hours
        sector.innerText = companie.sectors.description

        reference.append(name, opening, sector)
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
    
            const name = document.createElement("h1")
            const opening = document.createElement("p")
            const sector = document.createElement("span")
    
            name.innerText =  companie.name
            opening.innerText =  companie.opening_hours
            sector.innerText =  companie.description
    
            reference.append(name, opening, sector)
        })
    }
}

export { renderCompaniesHome, renderSectorsHome, renderFilteredSector }