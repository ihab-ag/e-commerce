window.onload=()=>{
    const signUpModal = document.querySelector('.sign-up-modal'),
    signupText = document.querySelector('.signup-text'),
    closeSignUpModal = document.getElementById('close_sign_up_modal'); 
    
    const hideModal = (modal) => {
        modal.classList.remove('show-modal');
    }
        
    const showModal = (modal, closeModal = null) => {
        modal.classList.add('show-modal');
    }

    closeSignUpModal.onclick = () => hideModal(signUpModal)
    
    signupText.addEventListener('click', () => {
        showModal(signUpModal)
    })
}