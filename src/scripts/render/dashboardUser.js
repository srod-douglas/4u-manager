

async function createUser (data) {
    const responseData = await data

    if(responseData.department_uuid == null){
        renderUserNotWorks(responseData)
    }else{
        renderUserWorks(responseData)
    }
    
    /*     const name = responseData.username
    const email = responseData.email
    const level = responseData.professional_level
    const department = responseData.department_uuid
    const kindWork = responseData.kind_of_work */
    
/*     const user = {
        name: responseData.username,
        email: responseData.email,
        level: responseData.professional_level,
        department: responseData.department_uuid,
        kindWork: responseData.kind_of_work
    } */
    
    console.log(responseData)
/*     console.log(user) */
}

function renderUserNotWorks (user) {
    const divName = document.querySelector(".div_userName")
    const divInfosUser = document.querySelector(".div_infosUser")
    const secCompanie = document.querySelector(".sec_infosCompanie")

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


}



function renderUserWorks () {

}
export { createUser }