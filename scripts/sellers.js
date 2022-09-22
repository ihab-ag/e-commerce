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
        });
    })
}

getAllSellers()

const createSellerRow = (id, name, email, phone, location) => {
    const tr = document.createElement('tr')

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