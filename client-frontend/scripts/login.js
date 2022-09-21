window.onload=()=>{
    const signUpBtn = document.querySelector('.sign-up-btn'),
    signUpModal = document.querySelector('.sign-up-modal'),
    signInBtn = document.querySelector('.sign-in-btn'),
    closeSignUpModal = document.getElementById('close_sign_up_modal'),
    signInModal = document.querySelector('.sign-in-modal');
    
    
    const hideModal = (modal) => {
        modal.classList.remove('show-modal');
    }
        
    const showModal = (modal, closeModal = null) => {
        modal.classList.add('show-modal');
    }

    closeSignUpModal.onclick = () => hideModal(signUpModal)
    
    signInBtn.addEventListener('click', () => {
        showModal(signUpModal)
    })
}