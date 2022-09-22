const getAllSellersUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/view-sellers.php"
const deleteSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/delete-seller.php"
const editSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/update-seller.php"
const sellersTable= document.getElementById('seller-table')


const getAllSellers = () => {
    axios.get(getAllSellersUrl).then(response => {
        const sellers = response.data
        console.log(sellers)
        sellers.forEach(seller => {
            createSellerRow(seller.id, seller.name, seller.email, seller.phone, seller.location)
            const editBtn = document.getElementById(`btn-edit-${seller.id}`)
            const deleteBtn = document.getElementById(`btn-delete-${seller.id}`)
            const editConfirmBtn = document.getElementById(`btn-edit-${seller.id}-confirm`)
            const deleteConfirmBtn = document.getElementById(`btn-delete-${seller.id}-confirm`)
            const info = document.querySelectorAll(`.btn-seller-${seller.id}`)

            editBtn.addEventListener('click', () => {
                info.forEach(box => box.removeAttribute('disabled'))
                editConfirmBtn.classList.remove('view-none')
                editBtn.classList.add('view-none')
                
            })

            editConfirmBtn.addEventListener('click', () => {
                const nameRow = document.getElementById(`seller-name-${seller.id}`).value
                const emailRow = document.getElementById(`seller-email-${seller.id}`).value
                const phoneRow = document.getElementById(`seller-phone-${seller.id}`).value
                const locationRow = document.getElementById(`seller-location-${seller.id}`).value

                if(!nameValidation(nameRow)) {
                    return
                }else if(!emailValidation(emailRow)) {
                    return
                }else if(!phoneValidation) {
                    return
                }else if(!locationValidation(locationRow)) {
                    return
                }
                info.forEach(box => box.setAttribute('disabled', true))
                editConfirmBtn.classList.add('view-none')
                editBtn.classList.remove('view-none')
                //const arr = []
                //document.querySelectorAll(`.btn-seller-${seller.id}`).forEach(seller => arr.push(seller.value))
                updateSellerInfo(seller.id, nameRow, emailRow, phoneRow, locationRow)
            })

            deleteBtn.addEventListener('click', () => {
                deleteConfirmBtn.classList.remove('view-none')
                deleteBtn.classList.add('view-none')
                info.forEach(box => box.setAttribute('disabled', true))
                editConfirmBtn.classList.add('view-none')
                editBtn.classList.remove('view-none')
            })

            deleteConfirmBtn.addEventListener('click', () => {
                document.getElementById(`seller-row-${seller.id}`).classList.add('view-none')
                editConfirmBtn.classList.add('view-none')
                editBtn.classList.remove('view-none')
                editConfirmBtn.classList.add('view-none')
                editBtn.classList.remove('view-none')
                deleteSeller(seller.id)
            })

            deleteConfirmBtn.addEventListener('mouseleave', () => {
                info.forEach(box => box.setAttribute('disabled', true))
                editConfirmBtn.classList.add('view-none')
                editBtn.classList.remove('view-none')
                deleteBtn.classList.remove('view-none')
                deleteConfirmBtn.classList.add('view-none')
            })
        });
    })
}

getAllSellers()

const updateSellerInfo = (sellerID, name, email, phone, location) => {
    const formData = new FormData()
    formData.append('seller_id', sellerID)
    formData.append('seller_name', name)
    formData.append('seller_email', email)
    formData.append('seller_phone', phone)
    formData.append('seller_location', location)

    axios.post(editSellerUrl, formData).then((response) => {
        const nowUpdate = response.data
        console.log(nowUpdate)
    })
}

const deleteSeller = (sellerID) => {
    const formData = new FormData()
    formData.append('seller_id', sellerID)
    
    axios.post(deleteSellerUrl, formData).then(response => {
        const deleteNow = response.data
        console.log(deleteNow)
    })
}

const createSellerRow = (id, name, email, phone, location) => {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `seller-row-${id}`)

    const sellerIdTd = document.createElement('td')
    sellerIdTd.textContent = id

    const nameTd = document.createElement('td')
    const nameInput = document.createElement('input')
    nameInput.setAttribute('class', `btn-seller-${id}`)
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('id', `seller-name-${id}`)
    nameInput.setAttribute('disabled', true)
    nameInput.setAttribute('value', `${name}`)  
    nameTd.appendChild(nameInput)

    const emailTd = document.createElement('td')
    const emailInput = document.createElement('input')
    emailInput.setAttribute('class', `btn-seller-${id}`)
    emailInput.setAttribute('type', 'text')
    emailInput.setAttribute('name', 'email')
    emailInput.setAttribute('id', `seller-email-${id}`)
    emailInput.setAttribute('disabled', true)
    emailInput.setAttribute('value', `${email}`)
    emailTd.appendChild(emailInput)

    const phoneTd = document.createElement('td')
    const phoneInput = document.createElement('input')
    phoneInput.setAttribute('class', `btn-seller-${id}`)
    phoneInput.setAttribute('type', 'text')
    phoneInput.setAttribute('name', 'phone')
    phoneInput.setAttribute('id', `seller-phone-${id}`)
    phoneInput.setAttribute('disabled', true)
    phoneInput.setAttribute('value', `${phone}`)
    phoneTd.appendChild(phoneInput)

    const locationTd = document.createElement('td')
    const locationInput = document.createElement('input')
    locationInput.setAttribute('class', `btn-seller-${id}`)
    locationInput.setAttribute('type', 'text')
    locationInput.setAttribute('name', 'location')
    locationInput.setAttribute('id', `seller-location-${id}`)
    locationInput.setAttribute('disabled', true)
    locationInput.setAttribute('value', `${location}`)
    locationTd.appendChild(locationInput)

    const btnsTd = document.createElement('td')
    const btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', 'btn-wrapper')
    const btnEdit = document.createElement('button')
    btnEdit.setAttribute('class', 'btn btn-edit')
    btnEdit.setAttribute('id', `btn-edit-${id}`)
    btnEdit.textContent = "Edit"

    const btnEditConfirm = document.createElement('button')
    btnEditConfirm.setAttribute('class', 'btn btn-confirm view-none')
    btnEditConfirm.setAttribute('id', `btn-edit-${id}-confirm`)
    btnEditConfirm.textContent = "Confirm"

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class', 'btn btn-ban') // Moatasem removed the view-none
    btnDelete.setAttribute('id', `btn-delete-${id}`)
    btnDelete.textContent = "Delete"
    
    const btnDeleteConfirm = document.createElement('button')
    btnDeleteConfirm.setAttribute('class', 'btn btn-confirm view-none')
    btnDeleteConfirm.setAttribute('id', `btn-delete-${id}-confirm`)
    btnDeleteConfirm.textContent = "Confirm"

    btnDiv.appendChild(btnEdit)
    btnDiv.appendChild(btnEditConfirm)
    btnDiv.appendChild(btnDelete)
    btnDiv.appendChild(btnDeleteConfirm)

    btnsTd.appendChild(btnDiv)

    tr.appendChild(sellerIdTd)
    tr.appendChild(nameTd)
    tr.appendChild(emailTd)
    tr.appendChild(phoneTd)
    tr.appendChild(locationTd)
    tr.appendChild(btnsTd)

    sellersTable.appendChild(tr)
    
}