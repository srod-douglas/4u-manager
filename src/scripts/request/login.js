import { urlLogin, urlVerifyAdmin } from '../path.js'
import { setTokenLocal, setUserLocal } from '../localStorage.js'
import { toastOk } from '../toastUser.js'

async function checkLogin (body) {
    const request = await fetch(urlLogin, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    try{

        if(request.ok){
            const user = await request.json()
            setUserLocal(user)
            validateUser(user)
        }

    }catch(err){
        console.log(err)
    }
}

async function validateUser (token) {
    const request = await fetch(urlVerifyAdmin, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`
        }
    })

    try{
        const admin = await request.json()
        if(request.ok){
            setTokenLocal(admin)
            if(admin.is_admin){
                toastOk("success", "Login Efetuado", "Redicionaremos para a sua Página Inicial.")
                window.location.replace("../../pages/dashboardAdmin/index.html")
            }else{
                window.location.replace("../../pages/dashboardUser/index.html")
            }
        }else{
            console.log(admin)
        }
    
    }catch(err){
        console.log(err)
    }
}

export { checkLogin }