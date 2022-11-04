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

            toastOk("success", "Login efetuado com sucesso!", "Estamos redirecionando para a sua Home Page.")

        }else{

            toastOk("error", "Algo deu errado.", "Por favor, confira o seu email e senha. Tente novamente.")

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

                setTokenLocal(admin)

                toastOk("success", "Login Efetuado", "Redicionaremos para a sua Página Inicial.")

                setTimeout(() => {
                    window.location.replace("../../pages/dashboardAdmin/index.html")
                }, 4000);

            }else{

                toastOk("success", "Login Efetuado", "Redicionaremos para a sua Página Inicial.")

                setTimeout(() => {
                    window.location.replace("../../pages/dashboardUser/index.html")
                }, 4000);

            }

        }else{

            console.log(admin)

        }
    
    }catch(err){

        console.log(err)
        
    }
}

export { checkLogin }