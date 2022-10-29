import { getSectorClicked } from "../../scripts/request/filter.js";

import { renderCompaniesHome, renderFilteredSector, renderSectorsHome } from '../../scripts/render/home.js'

renderCompaniesHome()
renderSectorsHome()

const select = document.querySelector("select")


select.addEventListener("change", async () =>{
    const sector = select.value
    if(sector !== ""){
        renderFilteredSector(await getSectorClicked(sector))
    }else{
        renderCompaniesHome()
    }
})
