import { getSectorClicked } from "../../scripts/request/filter.js";

import { renderCompaniesHome, renderFilteredSector, renderSectorsHome } from '../../scripts/render/home.js'

renderCompaniesHome()
renderSectorsHome()
/* const divBts = document.querySelector(".div-bts-redirect-home")
const close = document.querySelector("#vectorClose")
const hamburguer = document.querySelector("#vector")
const largura = screen.width
let mobile = new Boolean

console.log(typeof largura)
largura.addEventListener("change", () =>{
    if(largura <= 767){
        mobile = true
    }else{
        mobile = false
    }

})

console.log(mobile)
console.log(`Largura: ${largura}`)

if(window.innerWidth <= 767){

    hamburguer.style.display = "flex"
    close.style.display = "none"
    divBts.style.display = "none"

}

if(window.innerWidth >= 768){
    hamburguer.style.display = "none"
    close.style.display = "none"
    divBts.style.display = "flex"
}
hamburguer.addEventListener("click", () => {
    hamburguer.style.display = "none"
    close.style.display = "flex"
    divBts.style.display = "flex"
})


if(hamburguer.style.display = "none"){
close.addEventListener("click", () => {
    close.style.display = "none"
    hamburguer.style.display = "flex"
    divBts.style.display = "none"
})} */



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
