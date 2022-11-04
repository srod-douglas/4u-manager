import { getTokenLocal } from '../../scripts/localStorage.js'
import { createUser } from '../../scripts/render/dashboardUser.js'
import { getDataUser } from '../../scripts/request/dashboardUser.js'


if(localStorage.getItem("@admin") !== null){
    window.location.replace("../../../index.html")
    localStorage.removeItem("@user")
    localStorage.removeItem("@admin")
}

if(localStorage.getItem("@user") == null){
    window.location.replace("../../../index.html")
}

const token = getTokenLocal()

const btLogout = document.querySelector("#logout")

btLogout.onclick = () => {
    const redirect = btLogout.dataset.path
    localStorage.removeItem("@user")
    localStorage.removeItem("@admin")
    window.location.replace(redirect)
}

createUser(getDataUser(token.token)) 