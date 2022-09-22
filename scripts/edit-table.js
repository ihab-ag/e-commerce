const editBtn = document.getElementById('btn-edit-1')
const deleteBtn = document.getElementById('btn-delete-1')
const editConfirmBtn = document.getElementById('btn-edit-confirm')
const banConfirmBtn = document.getElementById('btn-delete-confirm')
const info = document.querySelectorAll('.btn-seller-1')

editBtn.addEventListener('click', () => {
    info.forEach(box => box.removeAttribute('disabled'))
    editConfirmBtn.classList.remove('view-none')
    editBtn.classList.add('view-none')
})

editConfirmBtn.addEventListener('click', () => {
    info.forEach(box => box.setAttribute('disabled', true))
    editConfirmBtn.classList.add('view-none')
    editBtn.classList.remove('view-none')
})

deleteBtn.addEventListener('click', () => {
    banConfirmBtn.classList.remove('view-none')
    deleteBtn.classList.add('view-none')
})

banConfirmBtn.addEventListener('click', () => {
    document.getElementById('seller-row-1').classList.add('view-none')
})

banConfirmBtn.addEventListener('mouseleave', () => {
    info.forEach(box => box.setAttribute('disabled', true))
    editConfirmBtn.classList.add('view-none')
    editBtn.classList.remove('view-none')
    deleteBtn.classList.remove('view-none')
    banConfirmBtn.classList.add('view-none')
})