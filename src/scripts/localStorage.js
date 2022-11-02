function setTokenLocal (response){
    localStorage.setItem("@admin",JSON.stringify(response))
}

function setUserLocal (response) {
    localStorage.setItem("@user", JSON.stringify(response))
}

function getTokenLocal () {
    const token = localStorage.getItem("@user")
    return JSON.parse(token)
}


export { setTokenLocal, setUserLocal, getTokenLocal }