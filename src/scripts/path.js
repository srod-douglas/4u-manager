const urlSectors            = 'http://localhost:6278/sectors'                  
const urlAllCompanies       = 'http://localhost:6278/companies'           
const urlVerifyAdmin        = 'http://localhost:6278/auth/validate_user'   
const urlCreateNewUser      = 'http://localhost:6278/auth/register'      
const urlLogin              = 'http://localhost:6278/auth/login'                 
const InfosUserLogged       = 'http://localhost:6278/users/profile'       
const urlRefreshUser        = 'http://localhost:6278/users'
const urlDepartments        = 'http://localhost:6278/departments'
const urlAllUsers           = 'http://localhost:6278/users'
const urlUpdateUser         = 'http://localhost:6278/admin/update_user/'
const urlDeleteUser         = 'http://localhost:6278/admin/delete_user/'
const urlAllUserNotWorking  = 'http://localhost:6278/admin/out_of_work'
const urlAdmitUser          = 'http://localhost:6278/departments/hire/'
const urlTurnOff            = 'http://localhost:6278/departments/dismiss/'

const departmentsOfCompanyUser  = 'http://localhost:6278/users/departments'
const urlCoWorkers              = 'http://localhost:6278/users/departments/coworkers'

export { 
    urlAllCompanies, 
    urlSectors, 
    urlCreateNewUser, 
    urlVerifyAdmin, 
    urlLogin, 
    InfosUserLogged, 
    urlRefreshUser, 
    urlDepartments, 
    urlAllUsers, 
    urlUpdateUser, 
    urlDeleteUser,
    urlAllUserNotWorking,
    urlAdmitUser,
    departmentsOfCompanyUser,
    urlCoWorkers,
    urlTurnOff
}