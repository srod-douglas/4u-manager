import { 
    urlAdmitUser, urlAllCompanies, 
    urlAllUserNotWorking, 
    urlAllUsers, 
    urlDeleteUser, 
    urlDepartments, 
    urlTurnOff, 
    urlUpdateUser 
} from "../path.js";

import { toastResponse } from "../toastAdmin.js";
import { getTokenLocal } from '../localStorage.js'

async function dataCompanies (token) {

    const request = await fetch(urlAllCompanies,{

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

async function allDepartments (tokenAdmin) {

    const request = await fetch(urlDepartments, {

        method: "GET",
        headers: {

            Authorization: `Bearer ${tokenAdmin}`

        }
    })

    try{

        if(request.ok){

            const departments = await request.json()

            return departments

        }else{

            console.log(request)

        }

    }catch(err){

        console.log(err)

    }
}

async function departmentsFromCompanySelected (idCompany) {

    const token = getTokenLocal()

    const request = await fetch(`${urlDepartments}/${idCompany}`, {

        method: "GET",
        headers: {

            Authorization: `Bearer ${token.token}`

        }
    })

    try{

        if(request.ok){

            const departments = await request.json()

            return departments

        }else{

            console.log(request)

        }

    }catch(err){

        console.log(err)

    }
}

async function deleteDepartment (idDepartment) {

    const token = getTokenLocal()

    const request = await fetch(`${urlDepartments}/${idDepartment}`, {

        method: "DELETE",
        headers: {

            Authorization: `Bearer ${token.token}`

        }
    })

    try{

        if(request.ok){

            toastResponse("success", "Solicitação efetuada com sucesso!", "O departamento foi deletado.")

        }else{

            toastResponse("error", "Algo deu errado.", "Por favor, atualize a págine e tente novamente.")

        }

    }catch(err){

        console.log(err)

    }
}


async function createDepartment (body) {

    const token = getTokenLocal()

    const request = await fetch(urlDepartments, {

        method: "POST",
        headers: {

            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`

        },

        body: JSON.stringify(body)

    })

    try{

        if(request.ok){

            const success = await request.json()

            toastResponse("success", "Solicitação bem sucedida!", "Departamento criado com sucesso.")
            return success

        }else{

            toastResponse("Error", "Algo saiu errado.", "Por favor, tente novamente mais tarde.")
            console.log(request)
        }

    }catch(err){

        console.log(err)

    }
}

async function editDescriptionDepartment (description, idDepartment){

    const token = getTokenLocal()

    const request = await fetch(`${urlDepartments}/${idDepartment}`,{

        method: "PATCH",
        headers: {

            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`

        },

        body: JSON.stringify(description)

    })

    try{

        if(request.ok){

            toastResponse("success", "Solicitação bem sucedida!", "Descrição atualizada com sucesso.")
            const data = await request.json()

            return data

        }else{

            toastResponse("Error", "Algo saiu errado.", "Por favor, tente novamente mais tarde.")
            console.log(request)

        }

    }catch(err){

        console.log(err)

    }
}

async function usersNotWorking () {

    const token = getTokenLocal()

    const request = await fetch(urlAllUserNotWorking, {

        method: "GET",
        headers: {

            Authorization: `Bearer ${token.token}`

        }
    })

    try{

        if(request.ok){

            const users = await request.json()
            return users

        }else{

            console.log(request)

        }

    }catch(err){

        console.log(err)

    }
}

async function admitUser (body) {

    const token = getTokenLocal()

    const request = await fetch(urlAdmitUser, {

        method: "PATCH",
        headers: {

            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`
        },

        body: JSON.stringify(body)

    })

    try{

        if(request.ok){

            const admited = await request.json()

            toastResponse("success", "Solicitação bem sucedida.", "Usuário contratado.")
            return admited

        }else{

            toastResponse("error", "Solicitação cancelada.", "O usuário já foi contratado.")
            console.log(request)

        }

    }catch(err){}
}

async function turnOffUserOfDepartment (idUser) {

    const token = getTokenLocal()
    const request = await fetch(`${urlTurnOff}${idUser}`, {

        method: "PATCH",
        headers: {

            Authorization: `Bearer ${token.token}`

        }
    })

    try{

        if(request.ok){

            toastResponse("success", "Solicitação efetuada com sucesso!", "O funcionário foi desligado.")

        }else{

            toastResponse("error", "Algo deu errado.", "Por favor, atualize a págine e tente novamente.")

        }

    }catch(err){

        console.log(err)

    }
}

async function dataUsersFromDepartment (department) {

    const token = getTokenLocal()

    const allLoggedUsers = await dataUsers(token.token)
    const filtered = []

    allLoggedUsers.forEach(async (user) => {

        if(user.department_uuid == department.uuid){

            filtered.push(user)
        }

    })

    return filtered
}

export { 
    allDepartments,
    dataCompanies, 
    dataUsers, 
    refreshDataUser, 
    deleteDataUser, 
    departmentsFromCompanySelected,
    deleteDepartment,
    createDepartment,
    editDescriptionDepartment,
    usersNotWorking,
    admitUser,
    dataUsersFromDepartment,
    turnOffUserOfDepartment
}