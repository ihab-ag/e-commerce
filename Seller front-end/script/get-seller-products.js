const getSellerProductUrl = "../../ecommerce-server/apis/get-products.php"
const productsTable = document.getElementById('product-table')
const editProductName = document.getElementById('edit-product-name')
const editProductPrice = document.getElementById('edit-product-price')
const editProductImage = document.getElementById('edit-product-img')
const editProductDescription = document.getElementById('edit-product-description')
const editCategorySel = document.getElementById('edit-product-category-selector')
const editCategory = document.getElementById('edit-category')//div

const getSellerProducts = () => {
    const dataForm = new FormData()
    dataForm.append('seller_id', localStorage.getItem('sellers_id'))

    axios.post(getSellerProductUrl, dataForm).then(response => {
        const products = response.data
        products.forEach(product => {
            createProductRow(product['id'], product['name'], product['description'], product['image'])
            
            const editBtn = document.getElementById(`btn-edit-${product.id}`)
            const deleteBtn = document.getElementById(`btn-delete-${product.id}`)
            const deleteConfirmBtn = document.getElementById(`btn-delete-${product.id}-confirm`)
            const btnCallEditForm = document.getElementById(`btn-edit-${product.id}`)
            btnCallEditForm.addEventListener('click', () => {
                const popUpForm = document.querySelector('.popup-form')
                popUpForm.classList.remove('view-none')
                editProductName.value = product['name']
                editProductPrice.value = product['price']
                // store old photo in case there is no change
                localStorage.setItem('old-photo', product['image'])
                localStorage.setItem('p-id', product.id)
                // document.getElementById('old-photo').textContent = product['image']
                // document.getElementById('p-id').textContent = product.id
                // 
                //editProductImage.value = product['image']
                editProductDescription.value = product['description']
                const optionsOfSelect = editCategorySel.children
                for(let o of optionsOfSelect) {
                    if(o.value == parseInt(product['Categories_id'])) {
                        o.setAttribute('selected', true)
                        break
                    }
                }
                editCategory.classList.remove('view-none')
                getEditCategories()
                // editCategoryInput
                // editCategoryBtn
                // editProductBtn

            })

            deleteBtn.addEventListener('click', () => {
                deleteConfirmBtn.classList.remove('view-none')
                deleteBtn.classList.add('view-none')
                editBtn.classList.remove('view-none')
            })
    
            deleteConfirmBtn.addEventListener('click', () => {
                document.getElementById(`product-row-${product.id}`).classList.add('view-none')
                editBtn.classList.remove('view-none')
                deleteProduct(product.id)
                setMessage('product info deleted successfully', true)
            })
    
            deleteConfirmBtn.addEventListener('mouseleave', () => {
                editBtn.classList.remove('view-none')
                deleteBtn.classList.remove('view-none')
                deleteConfirmBtn.classList.add('view-none')
            })
        })
    })
}

getSellerProducts()

const deleteProductUrl = "../../ecommerce-server/apis/delete-product.php"
const deleteProduct = (productID) => {
    const formData = new FormData()
    formData.append('id', productID)
    
    axios.post(deleteProductUrl, formData).then(response => {
        const deleteNow = response.data
        //console.log(deleteNow)
    })
}



const deleteSellerRows = () => {
    const productRows = document.querySelectorAll('.product-rows')
    productRows.forEach(row => {
        row.remove()
    })
}

const createProductRow = (id, name, description, image) => {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `product-row-${id}`)
    tr.setAttribute('class', 'product-rows')

    const productIdTd = document.createElement('td')
    productIdTd.textContent = id

    const nameTd = document.createElement('td')
    const nameInput = document.createElement('p')
    nameInput.setAttribute('class', `btn-product-${id}`)
    // nameInput.setAttribute('type', 'text')
    // nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('id', `product-name-${id}`)
    // nameInput.setAttribute('disabled', true)
    // nameInput.setAttribute('value', `${name}`)
    nameInput.textContent = name  
    nameTd.appendChild(nameInput)

    const descriptionTd = document.createElement('td')
    const descriptionInput = document.createElement('p')
    descriptionInput.setAttribute('class', `btn-product-${id}`)
    // descriptionInput.setAttribute('type', 'text')
    // descriptionInput.setAttribute('name', 'description')
    descriptionInput.setAttribute('id', `product-description-${id}`)
    // descriptionInput.setAttribute('disabled', true)
    // descriptionInput.setAttribute('value', `${description}`)
    descriptionInput.textContent = description  
    descriptionTd.appendChild(descriptionInput)

    const imageTd = document.createElement('td')
    const imageProduct = document.createElement('img')
    imageProduct.setAttribute('id', `product-img-${id}`)
    imageProduct.setAttribute('width', "50px")
    imageProduct.setAttribute('src', `${image}`)
    imageTd.appendChild(imageProduct)

    const btnsTd = document.createElement('td')
    const btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', 'btn-wrapper')
    const btnEdit = document.createElement('button')
    btnEdit.setAttribute('class', 'btn btn-edit')
    btnEdit.setAttribute('id', `btn-edit-${id}`)
    btnEdit.textContent = "Edit"

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class', 'btn btn-ban')
    btnDelete.setAttribute('id', `btn-delete-${id}`)
    btnDelete.textContent = "Delete"

    const btnDeleteConfirm = document.createElement('button')
    btnDeleteConfirm.setAttribute('class', 'btn btn-confirm view-none')
    btnDeleteConfirm.setAttribute('id', `btn-delete-${id}-confirm`)
    btnDeleteConfirm.textContent = "Confirm"

    btnDiv.appendChild(btnEdit)
    btnDiv.appendChild(btnDelete)
    btnDiv.appendChild(btnDeleteConfirm)

    btnsTd.appendChild(btnDiv)

    tr.appendChild(productIdTd)
    tr.appendChild(nameTd)
    tr.appendChild(descriptionTd)
    tr.appendChild(imageTd)
    tr.appendChild(btnsTd)

    productsTable.appendChild(tr)
    
}