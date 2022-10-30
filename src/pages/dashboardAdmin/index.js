import { editUserFromAdmin } from "../../scripts/toastAdmin.js";
import { getTokenLocal } from "../../scripts/localStorage.js";
import { 
    renderAllCompanies, 
    renderAllUsers 
} from "../../scripts/render/dashboardAdmin.js";
import { dataCompanies, 
    dataUsers
} from "../../scripts/request/dashboardAdmin.js";


const token = getTokenLocal()
renderAllCompanies(dataCompanies(token.token))
renderAllUsers(dataUsers(token.token))

const logout = document.querySelector("#logout")
logout.onclick = () => {
    const redirect = logout.dataset.path
    localStorage.removeItem("@admin")
    localStorage.removeItem("@user")
    window.location.replace(redirect)
}

setTimeout(() => {
    
    const btsEditUser = document.querySelectorAll(".bt-edit-user")
    btsEditUser.forEach((bt) => {
        bt.addEventListener("click", async () => {
            const idUser = bt.id
            console.log(idUser)
            const allUsers = await dataUsers(token.token)
            allUsers.forEach( async (user) => {
                if(idUser == user.uuid){
                    editUserFromAdmin(user)
                }
            })
        })
    })
}, 200);