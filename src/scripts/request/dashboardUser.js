import { InfosUserLogged } from "../path.js";



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




export { getDataUser }