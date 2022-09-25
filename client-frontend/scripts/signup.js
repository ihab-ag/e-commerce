window.onload=()=>{
    const signUpModal = document.querySelector('.sign-up-modal'),
    // signupText = document.querySelector('.signup-text'),
    closeSignUpModal = document.getElementById('close_sign_up_modal'); 
    
    const signupFormCaller = document.getElementById('guest-sign-in')
    signupFormCaller.addEventListener('click', () => {
        modal.classList.add('show-modal')
    })
    closeSignUpModal.addEventListener('click', () => {
        modal.classList.remove('show-modal')
    })

    // const hideModal = (modal) => {
    //     modal.classList.remove('show-modal');
    // }
        
    // const showModal = (modal, closeModal = null) => {
    //     modal.classList.add('show-modal');
    // }

    // closeSignUpModal.onclick = () => hideModal(signUpModal)

    // if(signupText){
    //     signupText.addEventListener('click', () => {
    //         showModal(signUpModal)
    //     })
    // }

    const userNameSignup = document.getElementById('username')
    const emailSignup = document.getElementById('email')
    const phoneSignup = document.getElementById('phone')
    const pwdSignup = document.getElementById('password')
    const pwdSignupRepeat = document.getElementById('confirm')
    const signupBtn = document.getElementById('signup-btn')

    const checkClientEmailUrl = "http://localhost/e-commerce/ecommerce-server/apis/check-client-email.php"

    signupBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if(!emptyFieldsValidation(userNameSignup.value, emailSignup.value, phoneSignup.value, pwdSignup.value) || !pwdSignupRepeat.value) {
            setMessage('All Fields are required', false)
            return
        }
        if(!nameValidation(userNameSignup.value)) {
            setMessage('username is in english and has at least 5 chars', false)
            return
        }
        if(!emailValidation(emailSignup.value)) {
            setMessage("Not a valid email", false)
            return
        }
        if(!phoneValidation(phoneSignup.value)) {
            setMessage('Wrong phone format', false)
            return
        }
        if(pwdSignup.value !== pwdSignupRepeat) {
            setMessage('Passwords do not match', false)
            return
        }
        const formData = new FormData()
        formData.append('client_email', emailSignup.value)
        axios.post(checkClientEmailUrl, formData).then(response => {
            const status = response.data
            if(status['emailTaken']) {
                setMessage('email is taken', false)
                return
            }

            const insertClientUrl = "http://localhost/e-commerce/ecommerce-server/apis/add-client.php"
            const dataForm2 = new FormData()
            dataForm2.append('name', userNameSignup.value)
            dataForm2.append('pwd', pwdSignup.value)
            dataForm2.append('phone', phoneSignup.value)
            dataForm2.append('email', emailSignup.value)
            
            axios.post(insertClientUrl, dataForm2).then(resp => {
                setMessage("Signed up Successfully", true)
                const getClientId = resp.data
                localStorage.setItem('clients_id', getClientId['client_id'])
            })
        })
    })

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
    
    const emptyFieldsValidation = (name, email, phone, location) => {
        if(!name || !email || !phone || !location) {
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
    

}