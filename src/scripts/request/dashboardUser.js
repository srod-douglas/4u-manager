import { InfosUserLogged, urlRefreshUser } from "../path.js";
import { createUser, renderUserNotWorks } from "../render/dashboardUser.js";



async function getDataUser (token) {
    const request = await fetch(InfosUserLogged,{
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    try{

        if(request.ok){
            const data = await request.json()
            return data
        }

    }catch(err){
        console.log(err)
    }
}

async function refreshDataUser (body, token) {
    const request = await fetch(urlRefreshUser, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: body,
    })

    try{

        if(request.ok){
            const newData = await request.json()
            createUser(newData)
        }else{
            console.log(request.message)
        }

    }catch(err){
        console.log(err)
    }
}


export { getDataUser, refreshDataUser }