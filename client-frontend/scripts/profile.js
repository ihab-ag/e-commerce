window.onload=()=>{
    const signUpModal = document.querySelector('.profile-modal'),
    signupText = document.querySelector('.edit-profile'),
    closeSignUpModal = document.getElementById('close_profile_modal'); 
    
    const hideModal = (modal) => {
        modal.classList.remove('show-modal');
    }
        
    const showModal = (modal, closeModal = null) => {
        modal.classList.add('show-modal');
    }

    closeSignUpModal.onclick = () => hideModal(signUpModal)
    
    if(signupText){
        signupText.addEventListener('click', () => {
            showModal(signUpModal)
        })
    }
}