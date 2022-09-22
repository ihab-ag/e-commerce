const nameValidation = (name) => {
    const exp = /^[A-Za-z\s]{5,255}$/
    if(name.length < 5) {
        return false
    }else if (name.length > 255) {
        return false
    }else if(!name.match(exp)) {
        console.log("match")
        return false
    }

    return true
}

const emailValidation = (email) => {
    const exp = /^(\w([\.-]?\w)*)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!email.match(exp)) {
        return false
    }

    return true
}

const phoneValidation = (phone) => {
    //least phone number of digits internationally is country code +  4 numbers
    const exp = /^[+]\d{7,255}$/
    if(!phone.match(exp)) {
        return false
    }

    return true
}

const locationValidation = (location) => {
    const exp = /^[A-Za-z0-9,\s]+$/
    if(!location.match(exp)) {
        return false
    }

    return true
} 

const emptyFieldsValidation = (name, email, phone, location) => {
    if(!name || !email || !phone || !location) {
        return false
    }
    return true
}

const setErrorMessage = (message) => {

}