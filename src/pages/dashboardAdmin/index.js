import { 
    renderAllCompanies, 
    renderAllUsers 
} from "../../scripts/render/dashboardAdmin.js";
import { getTokenLocal } from "../../scripts/localStorage.js";
import { dataCompanies, dataUsers } from "../../scripts/request/dashboardAdmin.js";


const token = getTokenLocal()
renderAllCompanies(dataCompanies(token.token))
renderAllUsers(dataUsers(token.token))
/* renderAllCompanies() */
