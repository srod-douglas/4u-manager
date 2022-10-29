function setLocal (response){
    localStorage.setItem("@user",JSON.stringify(response))
}

export { setLocal }