const urlSectors = 'http://localhost:6278/sectors'                  /* GET */
const urlAllCompanies = 'http://localhost:6278/companies'           /* GET */
const urlVerifyAdmin = 'http://localhost:6278/auth/validate_user'   /* GET */
const urlCreateNewUser = 'http://localhost:6278/auth/register'      /* POST */
const urlLogin = 'http://localhost:6278/auth/login'                 /* POST */
const InfosUserLogged = 'http://localhost:6278/users/profile'       /* GET BEARER*/


export { urlAllCompanies, urlSectors, urlCreateNewUser, urlVerifyAdmin, urlLogin, InfosUserLogged }