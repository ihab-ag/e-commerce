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

const emailValidation = (email) => {
    const exp = /^(\w([\.-]?\w)*)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!exp.match(email)) {
        return false
    }

    return true
}

const phoneValidation = (phone) => {
    const exp = /^+\d+$/
    if(!exp.match(phone)) {
        return false
    }

    return true
}

const locationValidation = (location) => {
    const exp = /^[A-Za-z,\s]+$/
    if(!exp.match(location)) {
        return false
    }

    return true
} 

const setErrorMessage = (message) => {

}