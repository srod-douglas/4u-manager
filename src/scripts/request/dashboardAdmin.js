import { urlAllUsers, urlDeleteUser, urlDepartments, urlUpdateUser } from "../path.js";
import { toastResponse } from "../toastAdmin.js";
import { getTokenLocal } from '../localStorage.js'

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


async function dataUsers (token) {
    const request = await fetch(urlAllUsers,{
        method: "GET",
        headers:{
            Authorization: `Bearer ${token}`
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



async function refreshDataUser (idUser, body, tokenAdmin) {
    const request = await fetch(`${urlUpdateUser}${idUser}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenAdmin}`
        },
        body: JSON.stringify(body)
    })

    try{
        if(request.ok){
            const data = await request.json()
            toastResponse("success", "Solicitação efetuada", "Usuário editado com sucesso.")
            return data
        }else{
            toastResponse("error", "Algo deu errado.", "Por favor, tente novamente mais tarde.")
            return
        }
    }catch(err){
        console.log(err)
    }
}


async function deleteDataUser (idUser) {
    const tokenAdmin = getTokenLocal()
    const request = await fetch(`${urlDeleteUser}${idUser}`,{
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${tokenAdmin.token}`
        }
    })

    try{
        if(request.ok){
            toastResponse("success", "Solicitação efetuada", "Usuário excluído com sucesso.")
        }else{
            toastResponse("error", "Algo deu errado.", "Por favor, tente novamente mais tarde.")
        }

    }catch(err){
        console.log(err)
    }
}

export { dataCompanies, dataUsers, refreshDataUser, deleteDataUser }