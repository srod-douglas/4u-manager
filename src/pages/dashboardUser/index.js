import { getTokenLocal } from '../../scripts/localStorage.js'
import { createUser } from '../../scripts/render/dashboardUser.js'
import { getDataUser } from '../../scripts/request/dashboardUser.js'
import { toastEditProfileUser } from '../../scripts/toast.js'


const token = getTokenLocal()

setTimeout(() => {

    const icon = document.querySelector(".icon-edit")

    if(icon !== null){

        icon.addEventListener("click", () => {

            toastEditProfileUser(getDataUser(token.token))
        })
    }
},400)

createUser(getDataUser(token.token)) 