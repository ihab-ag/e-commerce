const productName = document.getElementById('product-name')
const productPrice = document.getElementById('product-price')
const productImage = document.getElementById('product-img')
const productDescription = document.getElementById('product-description')
const catSelector = document.getElementById('product-category-selector')
const categoryName = document.getElementById('category-name')

const submitProduct = document.getElementById('add-product-btn')
const submitCategory = document.getElementById('add-category-btn')

submitProduct.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(!emptyFieldsValidation(productName.value, productPrice.value, productImage, productDescription.value, catSelector.value)) {
        setMessage('All Fields are required', false)
        return
    }
})

catSelector.addEventListener('change', () => {
    if(catSelector.value !== 'addNewCategory') {
        document.getElementById('add-category').classList.add('view-none')
    }else {
        document.getElementById('add-category').classList.remove('view-none')
    }
})

productImage.addEventListener('change', () => {
    console.log(productImage.files)
})