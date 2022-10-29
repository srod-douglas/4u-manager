import { urlDepartments } from "../path.js";


async function dataCompanies (token) {
    const request = await fetch(urlDepartments,{
        method: "GET",
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })

    try{
        if(request.ok){
            const data = await request.json()
            return data
        }else{
            console.log(request)
        }
    }catch(err){
        console.log(err)
    }
}

export { dataCompanies }