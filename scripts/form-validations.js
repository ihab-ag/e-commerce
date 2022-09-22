const nameValidation = (name) => {
    const exp = /^[A-Za-z\s]{5, 255}$/
    if(name.length < 5) {
        return false
    }else if (name.length > 255) {
        return false
    }else if(!exp.match(name)) {
        return false
    }

    return true
}



const setErrorMessage = (message) => {

}