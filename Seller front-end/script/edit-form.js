const closeEditForm = document.getElementById('close-edit-form')
const editForm = document.querySelector('.popup-form')

closeEditForm.addEventListener('click', (e) => {
    e.preventDefault()
    editForm.classList.add('view-none')
})