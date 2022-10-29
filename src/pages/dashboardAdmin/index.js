import { dataCompanies } from "../../scripts/request/dashboardAdmin.js";
import { renderAllCompanies } from "../../scripts/render/dashboardAdmin.js";
import { getTokenLocal } from "../../scripts/localStorage.js";

const token = getTokenLocal()
renderAllCompanies(dataCompanies(token.token))

/* renderAllCompanies() */
