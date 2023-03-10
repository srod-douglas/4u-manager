import { urlAllCompanies, urlSectors  } from "../path.js";

async function getAllCompanies () {

    const request = await fetch(urlAllCompanies)

    try{

        if(request.ok){

            const data = await request.json()
            return data

        }

    }catch(err){}
}

async function getAllSectors () {

    const request = await fetch(urlSectors)
    
    try{

        if(request.ok){

            const data = await request.json()
            return data

        }

    }catch(err){}
}

async function getSectorClicked (sector) {

    const request = await fetch(`${urlAllCompanies}/${sector}`)

    try{

        if(request.ok){

            const data = await request.json()
            return data

        }

    }catch(err){}
}

const sectors = await getAllSectors()
const companies = await getAllCompanies()

export { companies, sectors, getSectorClicked }