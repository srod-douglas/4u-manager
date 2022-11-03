import { getSectorClicked } from "../../scripts/request/filter.js";

import { renderCompaniesHome, renderFilteredSector, renderSectorsHome } from '../../scripts/render/home.js'

renderCompaniesHome()
renderSectorsHome()

const flex = "flex"
const hidden = "none"


const hamburguer = document.querySelector("#vector")
const close = document.querySelector("#vectorClose")
const divBtsRedirect = document.querySelector(".div-bts-redirect-home")

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle("none")
    close.classList.toggle("none")

    if(divBtsRedirect.style.display = hidden){
        divBtsRedirect.classList.add("appear")
        divBtsRedirect.style.display = flex
    }
})

close.addEventListener("click", () => {

    hamburguer.classList.toggle("none")
    close.classList.toggle("none")

    if(divBtsRedirect.style.display = flex){
        divBtsRedirect.classList.remove("appear")
        divBtsRedirect.classList.add("desappear")
        setTimeout(() => {
            divBtsRedirect.style.display = hidden
        }, 990);
    }
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
