const getSellerProductUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/get-products.php"

const createProductRow = (id, name, description, phone, location) => {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `product-row-${id}`)
    tr.setAttribute('class', 'product-rows')

    const productIdTd = document.createElement('td')
    productIdTd.textContent = id

    const nameTd = document.createElement('td')
    const nameInput = document.createElement('input')
    nameInput.setAttribute('class', `btn-product-${id}`)
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('id', `product-name-${id}`)
    nameInput.setAttribute('disabled', true)
    nameInput.setAttribute('value', `${name}`)  
    nameTd.appendChild(nameInput)

    const descriptionTd = document.createElement('td')
    const descriptionInput = document.createElement('input')
    descriptionInput.setAttribute('class', `btn-product-${id}`)
    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('name', 'description')
    descriptionInput.setAttribute('id', `product-description-${id}`)
    descriptionInput.setAttribute('disabled', true)
    descriptionInput.setAttribute('value', `${description}`)
    descriptionTd.appendChild(descriptionInput)

    const phoneTd = document.createElement('td')
    const phoneInput = document.createElement('input')
    phoneInput.setAttribute('class', `btn-product-${id}`)
    phoneInput.setAttribute('type', 'text')
    phoneInput.setAttribute('name', 'phone')
    phoneInput.setAttribute('id', `product-phone-${id}`)
    phoneInput.setAttribute('disabled', true)
    phoneInput.setAttribute('value', `${phone}`)
    phoneTd.appendChild(phoneInput)

    const locationTd = document.createElement('td')
    const locationInput = document.createElement('input')
    locationInput.setAttribute('class', `btn-product-${id}`)
    locationInput.setAttribute('type', 'text')
    locationInput.setAttribute('name', 'location')
    locationInput.setAttribute('id', `product-location-${id}`)
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

    tr.appendChild(productIdTd)
    tr.appendChild(nameTd)
    tr.appendChild(descriptionTd)
    tr.appendChild(phoneTd)
    tr.appendChild(locationTd)
    tr.appendChild(btnsTd)

    productsTable.appendChild(tr)
    
}