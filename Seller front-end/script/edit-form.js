const closeEditForm = document.getElementById('close-edit-form')
const editForm = document.querySelector('.popup-form')
const editSel = document.getElementById('edit-product-category-selector')

const editCategoryInput = document.getElementById('edit-category-name')

const editCategoryBtn = document.getElementById('edit-category-btn')
const editProductBtn = document.getElementById('edit-product-btn')


closeEditForm.addEventListener('click', (e) => {
    e.preventDefault()
    editForm.classList.add('view-none')
})

const getCategoriesUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/get-categories.php"

const getEditCategories = () => {
    const formData = new FormData()
    formData.append('sellers_id', localStorage.getItem('sellers_id'))

    axios.post(getCategoriesUrl, formData).then(response => {
        const categories = response.data
        // console.log(categories)
        document.querySelectorAll('.form-categories').forEach(cat => {
            cat.remove()
        })
        categories.forEach(category => {
            const option = document.createElement('option')
            option.setAttribute('class', 'form-categories')
            option.setAttribute('value', category['id'])
            // option.setAttribute('id', category['name']+category['id'])
            option.textContent = category['name']
            editSel.appendChild(option)
        })

        const option = document.createElement('option')
        option.setAttribute('class', 'form-categories')
        option.setAttribute('value', "addNewCategory")
        option.setAttribute('selected', true)
        option.textContent = "+Add Category"
        editSel.appendChild(option)
    })
}

const updateProductUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/edit-product.php"

editProductBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(!editProductName.value || !editProductPrice.value || !editProductDescription.value || !editSel.value) {
        console.log(editProductName.value,editProductPrice.value,editProductDescription.value,catSelector.value )
        setMessage('All Fields are required', false)
        return
    }else if(!nameValidation(editProductName.value)) {
        setMessage('Name should be more than 5 chars', false)
        return
    }else if(!priceValidation(editProductPrice.value)) {
        setMessage('Price format is wrong')
        return
    }
    if (editProductImage.files.length != 0) {
        // we override the img
        const reader2 = new FileReader()
        reader2.addEventListener('load', () => {
            const finalImage = reader2.result;
            console.log(finalImage);

            
            const formData = new FormData()
            formData.append('name', editProductName.value)
            formData.append('description', editProductDescription.value)
            formData.append('price', editProductPrice.value)
            formData.append('image', finalImage)
            formData.append('id', localStorage.getItem('p-id'))
            
            axios.post(updateProductUrl, formData).then(response => {
                const data = response.data
                //console.log(data)
                setMessage("Product is updated", true)
                editForm.classList.add('view-none')
                deleteSellerRows()
                getSellerProducts()
        
            })
        })
        reader2.readAsDataURL(editProductImage.files[0])
    }else {
        const formData = new FormData()
            formData.append('name', editProductName.value)
            formData.append('description', editProductDescription.value)
            formData.append('price', editProductPrice.value)
            formData.append('image', localStorage.getItem('old-photo'))
            formData.append('id', localStorage.getItem('p-id'))
            
            axios.post(updateProductUrl, formData).then(response => {
                const data = response.data
                //console.log(data)
                setMessage("Product is updated", true)
                editForm.classList.add('view-none')
                deleteSellerRows()
                getSellerProducts()
        
            })
    }
    
})