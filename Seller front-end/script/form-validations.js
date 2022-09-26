
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

const priceValidation = (price) => {
    const exp = /^\d+.?\d{1,2}$/
    if(!price.match(exp)) {
        return false
    }
    return true
}

const emptyFieldsValidation = (name, price, photo, description, selector) => {
    if(!name || !price || photo.files['length'] <= 0 || !description || (!selector || (selector === "addNewCategory"))) {
        return false
    }
    return true
}

const msgSection = document.querySelector('.msg-section')
const msgContent = document.querySelector('.msg-content')

// false if error and true if validate
const setMessage = (message, boolean) => {
    if(boolean) {
        msgSection.classList.remove('msg-error')
        msgSection.classList.add('msg-success')
    }else {
        msgSection.classList.remove('msg-success')
        msgSection.classList.add('msg-error')
    }
    msgSection.classList.add('msg-appear')
    msgContent.textContent = message
    setTimeout(() => {
        msgSection.classList.remove('msg-appear')
    }, 3000);

}
