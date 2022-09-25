const closeEditForm = document.getElementById('close-edit-form')
const editForm = document.querySelector('.popup-form')

closeEditForm.addEventListener('click', () => {
    editForm.classList.add('view-none')
})