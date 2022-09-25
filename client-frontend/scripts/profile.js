window.onload=()=>{
    const profileModal = document.querySelector('.profile-modal'),
    editBtn = document.querySelector('.edit-profile'),
    closeProfileModal= document.getElementById('close_profile_modal'); 
    
    const hideModal = (modal) => {
        modal.classList.remove('show-modal');
    }
        
    const showModal = (modal, closeModal = null) => {
        modal.classList.add('show-modal');
    }

    closeProfileModal.onclick = () => hideModal(profileModal)
    
    if(editBtn){
        editBtn.addEventListener('click', () => {
            showModal(profileModal)
        })
    }
}