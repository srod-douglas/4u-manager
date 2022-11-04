import { getTokenLocal } from "../localStorage.js";
import { departmentsOfCompanyUser, InfosUserLogged, urlCoWorkers, urlRefreshUser } from "../path.js";
import { createUser } from "../render/dashboardUser.js";
import { toastOk } from "../toastUser.js";

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

        body: JSON.stringify(body),

    })

    try{

        if(request.ok){

            const newData = await request.json()

            createUser(newData)

            toastOk("success", "Solicitação efetuada.", "Perfil editado com sucesso.")

        }else{

            toastOk("Error", "Algo deu errado.", "Por favor, confira seu email e senha para tentar novamente.")

        }

    }catch(err){

        console.log(err)

    }
}

async function dataDepartmentsCompanyUser () {

    const token = getTokenLocal()

    const request = await fetch(departmentsOfCompanyUser,{

        method: "GET",
        headers: {

            Authorization: `Bearer ${token.token}`

        }
    })

    try{

        if(request.ok){

            const data = await request.json()
            return data.departments

        }

    }catch(err){

        console.log(err)

    }
}

async function dataCompanyUser () {

    const token = getTokenLocal()

    const request = await fetch(departmentsOfCompanyUser,{

        method: "GET",
        headers: {

            Authorization: `Bearer ${token.token}`

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

async function getCoWorkersUser () {

    const token = getTokenLocal()

    const request = await fetch(urlCoWorkers, {

        method: "GET",
        headers: {

            Authorization: `Bearer ${token.token}`

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

export { getDataUser, refreshDataUser, dataDepartmentsCompanyUser, dataCompanyUser,getCoWorkersUser }