function setTokenLocal (response){
    localStorage.setItem("@admin",JSON.stringify(response))
}

function setUserLocal (response) {
    localStorage.setItem("@user", JSON.stringify(response))
}

export { setTokenLocal, setUserLocal }