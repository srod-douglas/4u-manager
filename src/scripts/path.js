const urlSectors = 'http://localhost:6278/sectors'                  /* GET */
const urlAllCompanies = 'http://localhost:6278/companies'           /* GET */
const urlVerifyAdmin = 'http://localhost:6278/auth/validate_user'   /* GET */
const urlCreateNewUser = 'http://localhost:6278/auth/register'      /* POST */
const urlLogin = 'http://localhost:6278/auth/login'                 /* POST */
const InfosUserLogged = 'http://localhost:6278/users/profile'       /* GET BEARER*/
const urlRefreshUser = 'http://localhost:6278/users'
const urlDepartments = 'http://localhost:6278/departments'
const urlAllUsers = 'http://localhost:6278/users'
const urlUpdateUser = 'http://localhost:6278/admin/update_user/'
const urlDeleteUser = 'http://localhost:6278/admin/delete_user/'


export { urlAllCompanies, 
    urlSectors, 
    urlCreateNewUser, 
    urlVerifyAdmin, 
    urlLogin, 
    InfosUserLogged, 
    urlRefreshUser, 
    urlDepartments, 
    urlAllUsers, 
    urlUpdateUser, 
    urlDeleteUser 
}