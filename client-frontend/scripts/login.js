const signUpBtn = document.querySelector('.sign-up-btn'),
signUpModal = document.querySelector('.sign-up-modal'),
signInBtn = document.querySelector('.sign-in-btn'),
signInModal = document.querySelector('.sign-in-modal');


const hideModal = (modal) => {
    modal.classList.remove('show-modal');
}
    

const showModal = (modal, closeModal = null) => {
    if (modal != null) {
        if (closeModal.classList.contains('show-modal')) {
            hideModal(closeModal)
        }
    }
    modal.classList.add('show-modal');
}


signInBtn.addEventListener('click', () => {
    showModal(signUpModal)
})

