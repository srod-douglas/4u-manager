import { urlCreateNewUser } from "../path.js";

async function registerNewUser (body) {
    const request = await fetch(urlCreateNewUser,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })

    try{

        if(request.ok){
            const data = await request.json()
            /* call modal */
            window.location.assign("../../pages/login/index.html")
        }

    }catch(err){
        console.log(err)

    }
}

export { registerNewUser }