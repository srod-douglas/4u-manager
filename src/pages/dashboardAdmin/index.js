import { editUserFromAdmin, toastCreateDepartment, toastDeleteDepartment, toastDeleteUser, toastEditDescriptionDepartment, toastViewDepartment } from "../../scripts/toastAdmin.js";
import { getTokenLocal } from "../../scripts/localStorage.js";
import { 
    filterCompanies,
    renderAllDepartaments, 
    renderAllUsers 
} from "../../scripts/render/dashboardAdmin.js";
import { allDepartments, dataCompanies, 
    dataUsers
} from "../../scripts/request/dashboardAdmin.js";


const token = getTokenLocal()


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

    const btsDeleteUser = document.querySelectorAll(".bt-del-user")
    btsDeleteUser.forEach((bt) => {
        bt.addEventListener("click", async () => {
            const idUser = bt.id
            const allUsers = await dataUsers(token.token)
            allUsers.forEach( async (user) => {
                if(idUser == user.uuid){
                    toastDeleteUser(user)
                }
            })
            })
        })

        const btsDeleteDepartment = document.querySelectorAll(".bt-del-department")
        btsDeleteDepartment.forEach((bt)=>{
            bt.addEventListener("click", event => {
                console.log(event.target)
                toastDeleteDepartment(bt.id, bt.dataset.path)
                
            })
        })

        const btCreateDepartment = document.querySelector("#new-department")
        btCreateDepartment.onclick = async () => {
            await toastCreateDepartment(dataCompanies(token.token))
        }
        const btsEditDepartments = document.querySelectorAll(".bt-edit-department")
        btsEditDepartments.forEach((bt)=>{
            bt.onclick = async (event) => {
                event.preventDefault()
                const allDepts = await allDepartments(token.token)
                allDepts.forEach(async(department) => {
                    const idDepartment = await department.uuid
                    if(idDepartment == event.target.id){
                        toastEditDescriptionDepartment(await department.description, idDepartment)
                    }
                })
            }
        })
        
        const btsViewerDepartments = document.querySelectorAll(".bt-view-department")
        btsViewerDepartments.forEach((bt) => {
            bt.addEventListener("click",async (event) => {
                
                event.preventDefault()
                
                const allDepts = await allDepartments(token.token)
                allDepts.forEach(async(department) => {
                    const idDepartment = await department.uuid
                    if(idDepartment == event.target.id){

                        toastViewDepartment(department)
                    }
                })
            }
        )})
        
}, 100)
renderAllDepartaments(allDepartments(token.token))
renderAllUsers(dataUsers(token.token))
    filterCompanies(dataCompanies(token.token))