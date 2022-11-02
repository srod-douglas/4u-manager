import { getTokenLocal } from '../localStorage.js'
import { dataDepartmentsCompanyUser, dataCompanyUser, getCoWorkersUser, getDataUser } from '../request/dashboardUser.js'
import { toastEditProfileUser } from '../toastUser.js'

async function createUser (data) {
    const responseData = await data

    if(responseData.department_uuid == null){
        renderUserNotWorks(responseData)
    }else{
        renderUserWorks(responseData)
    }
}

function renderUserNotWorks (user) {

    const divName = document.querySelector(".div_userName")
    const divInfosUser = document.querySelector(".div_infosUser")
    const secCompanie = document.querySelector(".sec_infosCompanie")
    divName.innerHTML = ""
    divInfosUser.innerHTML = ""
    secCompanie.innerHTML = ""
    const name = document.createElement("h2")
    const email = document.createElement("p")
    const level = document.createElement("span")
    
    name.innerText = user.username
    email.innerText = `Email: ${user.email}`
    
    if(level !== null){
        level.innerText = user.professional_level
    }else{
        level.innerText = ""
    }

    const icon = document.createElement("img")
    icon.classList.add("icon-edit")
    icon.src = '../../assets/img/pen-to-square-solid.svg'
    icon.alt = 'Icone para editar'
    
    const message = document.createElement("h2")
    message.innerText = "Você ainda não foi contratado"


    divName.append(name, icon)
    divInfosUser.append(email, level)
    secCompanie.appendChild(message)

    
        const token = getTokenLocal()
        icon.addEventListener("click", () => {

            toastEditProfileUser(getDataUser(token.token))
        })
    

}

async function renderUserWorks (user) {

    const divName = document.querySelector(".div_userName")
    const divInfosUser = document.querySelector(".div_infosUser")
    const secCompanie = document.querySelector(".sec_infosCompanie")

    divName.innerHTML = ""
    divInfosUser.innerHTML = ""
    secCompanie.innerHTML = ""

    const name = document.createElement("h2")
    const email = document.createElement("p")
    const level = document.createElement("span")
    const kind = document.createElement("span")
    
    name.classList.add("name-user")
    email.classList.add("email-user")
    level.classList.add("level-user")
    kind.classList.add("kind-user")
    

    name.innerText = user.username
    email.innerText = `Email: ${user.email}`
    kind.innerText = user.kind_of_work
    level.innerText = user.professional_level


    const divInfosJob = document.createElement("div")
    divInfosJob.classList.add("div-infos-job")

    const companyName = document.createElement("h2")
    const departmentName = document.createElement("h2")

    companyName.classList.add("company-name")
    departmentName.classList.add("department-name")
    


    const dataDeptCompanyUser = await dataDepartmentsCompanyUser()

    const depts = await dataDeptCompanyUser

    const dataCompanyLoggedUser = await dataCompanyUser()

    companyName.innerText = `${dataCompanyLoggedUser.name} -`

    depts.forEach((company) => {

        if(company.uuid == user.department_uuid){
            departmentName.innerText = company.name
        }
    })

    const ulCoWorkers = document.createElement("ul")

    const allCoWorkers = await getCoWorkersUser()
    
    allCoWorkers.forEach((coWorkers) => {
        console.log(coWorkers.users)
        const same = coWorkers.users
        same.forEach((check) => {
            if(check.uuid !== user.uuid){
                const liCoWorker = document.createElement("li")
                liCoWorker.classList.add("card-coWorker")
                
                
                const nameCoWorker = document.createElement("p")
                const levelCoWorker = document.createElement("p")
                
                nameCoWorker.classList.add("name-coWorker")
                levelCoWorker.classList.add("level-coWorker")
                
                nameCoWorker.innerText = check.username
                levelCoWorker.innerText = check.professional_level

                liCoWorker.append(nameCoWorker, levelCoWorker)
                ulCoWorkers.appendChild(liCoWorker)
            }
        })
    })


    
    
    const icon = document.createElement("img")
    icon.classList.add("icon-edit")
    icon.src = '../../assets/img/pen-to-square-solid.svg'
    icon.alt = 'Icone para editar'
    
    
    
    
    
    divName.append(name, icon)
    divInfosUser.append(email, level, kind)
    divInfosJob.append(companyName, departmentName)
    secCompanie.append(divInfosJob, ulCoWorkers)
    
    
    
}
export { createUser, renderUserNotWorks }