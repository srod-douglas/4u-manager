

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

}



function renderUserWorks () {

}
export { createUser, renderUserNotWorks }