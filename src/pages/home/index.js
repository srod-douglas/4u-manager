import { getSectorClicked } from "../../scripts/request/filter.js";

import { renderCompaniesHome, renderFilteredSector, renderSectorsHome } from '../../scripts/render/home.js'

renderCompaniesHome()
renderSectorsHome()
const divBts = document.querySelector(".div-bts-redirect-home")
const vectClose = document.querySelector("#vectorClose")
const vect = document.querySelector("#vector")
divBts.style.display = "none"
vect.addEventListener("click", () => {
    vect.classList.toggle("none")
    divBts.style.display = "flex"
    vectClose.classList.toggle("none")
})

vectClose.addEventListener("click", () => {
    vect.classList.toggle("none")
    divBts.style.display = "none"
    vectClose.classList.toggle("none")
})


const select = document.querySelector("select")
const bts = document.querySelectorAll("button")

bts.forEach((bt)=>{
    bt.onclick = () => {
        if(bt.id == "btLogin"){
            const redirectLogin = bt.dataset.path
            window.location.replace(redirectLogin)
        }else{
            const redirectRegister = bt.dataset.path
            window.location.replace(redirectRegister)
        }
    }
})

select.addEventListener("change", async () =>{
    const sector = select.value
    if(sector !== ""){
        renderFilteredSector(await getSectorClicked(sector))
    }else{
        renderCompaniesHome()
    }
})
