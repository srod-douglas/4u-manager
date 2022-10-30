import { 
    renderAllCompanies, 
    renderAllUsers 
} from "../../scripts/render/dashboardAdmin.js";
import { getTokenLocal } from "../../scripts/localStorage.js";
import { dataCompanies, dataUsers } from "../../scripts/request/dashboardAdmin.js";
import { editUserFromAdmin } from "../../scripts/toast.js";


const token = getTokenLocal()
renderAllCompanies(dataCompanies(token.token))
renderAllUsers(dataUsers(token.token))

setTimeout(() => {
    
    const btsEditUser = document.querySelectorAll(".bt-edit-user")
    btsEditUser.forEach((bt) => {
        bt.addEventListener("click", async () => {
            const idUser = bt.id
            console.log(idUser)
            const allUsers = await dataUsers(token.token)
            allUsers.forEach((user) => {
                if(idUser == user.uuid){
                    editUserFromAdmin(user)
                }
            })
        })
    })
}, 200);