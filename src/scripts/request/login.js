import { urlLogin, urlVerifyAdmin } from '../path.js'



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
            if(admin.is_admin){
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