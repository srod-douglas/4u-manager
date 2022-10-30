import { getTokenLocal } from '../../scripts/localStorage.js'
import { createUser } from '../../scripts/render/dashboardUser.js'
import { getDataUser } from '../../scripts/request/dashboardUser.js'
import { toastEditProfileUser } from '../../scripts/toastUser.js'


const token = getTokenLocal()

setTimeout(() => {

    const icon = document.querySelector(".icon-edit")

    if(icon !== null){

        icon.addEventListener("click", () => {

            toastEditProfileUser(getDataUser(token.token))
        })
    }
},400)


const btLogout = document.querySelector("#logout")

btLogout.onclick = () => {
    const redirect = btLogout.dataset.path
    localStorage.removeItem("@user")
    localStorage.removeItem("@admin")
    window.location.replace(redirect)
}

createUser(getDataUser(token.token)) 