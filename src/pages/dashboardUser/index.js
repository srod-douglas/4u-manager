import { getTokenLocal } from '../../scripts/localStorage.js'
import { getDataUser } from '../../scripts/request/dashboardUser.js'

const token = getTokenLocal()

getDataUser(token.token)