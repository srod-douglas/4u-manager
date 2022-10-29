import { getSectorClicked } from "../../scripts/request/filter.js";

import { renderCompaniesHome, renderFilteredSector, renderSectorsHome } from '../../scripts/render/home.js'

renderCompaniesHome()
renderSectorsHome()

const select = document.querySelector("select")
const bts = document.querySelectorAll("button")

bts.forEach((bt)=>{
    bt.onclick = () => {
        if(bt.id == "btLogin"){
            const redirectLogin = bt.dataset.path
            window.location.assign(redirectLogin)
        }else{
            const redirectRegister = bt.dataset.path
            window.location.assign(redirectRegister)
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
