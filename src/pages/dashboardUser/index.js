import { getTokenLocal } from '../../scripts/localStorage.js'
import { createUser } from '../../scripts/render/dashboardUser.js'
import { getDataUser } from '../../scripts/request/dashboardUser.js'

const token = getTokenLocal()

createUser(getDataUser(token.token)) 