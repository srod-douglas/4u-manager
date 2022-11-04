import { toastCreateDepartment, toastViewDepartment } from "../../scripts/toastAdmin.js";
import { getTokenLocal } from "../../scripts/localStorage.js";
import { allDepartments, dataCompanies, dataUsers } from "../../scripts/request/dashboardAdmin.js";

import { 
    filterCompanies,
    renderAllDepartaments, 
    renderAllUsers 
} from "../../scripts/render/dashboardAdmin.js";

const token = getTokenLocal()

if(localStorage.getItem("@admin") == null){
    window.location.replace("../../../index.html")
    localStorage.removeItem("@user")
    localStorage.removeItem("@admin")
}

const logout = document.querySelector("#logout")
logout.onclick = () => {
    const redirect = logout.dataset.path
    localStorage.removeItem("@admin")
    localStorage.removeItem("@user")
    window.location.replace(redirect)
}

setTimeout(() => {

        const btCreateDepartment = document.querySelector("#new-department")
        btCreateDepartment.onclick = async () => {
            await toastCreateDepartment(dataCompanies(token.token))
        }
        
        const btsViewerDepartments = document.querySelectorAll(".bt-view-department")

        btsViewerDepartments.forEach((bt) => {

            bt.addEventListener("click",async (event) => {
                
                event.preventDefault()
                
                const allDepts = await allDepartments(token.token)

                allDepts.forEach(async(department) => {

                    const idDepartment = await department.uuid

                    if(idDepartment == event.target.id){

                        const backgroundModal = document.querySelectorAll(".background-view-department")

                        backgroundModal.forEach((div)=>{

                            div.innerHTML=""
                            backgroundModal.removeAttribute("class")
                        })

                        toastViewDepartment(department)

                    }
                })
            }
        )})
}, 100)
renderAllDepartaments(allDepartments(token.token))
renderAllUsers(dataUsers(token.token))
filterCompanies(dataCompanies(token.token))