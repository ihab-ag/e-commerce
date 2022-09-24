const productName = document.getElementById('product-name')
const productPrice = document.getElementById('product-price')
const productImage = document.getElementById('product-img')
const productDescription = document.getElementById('product-description')
const catSelector = document.getElementById('product-category-selector')
const categoryName = document.getElementById('category-name')

catSelector.addEventListener('change', () => {
    if(catSelector.value !== 'addNewCategory') {
        document.getElementById('add-category').classList.remove('view-none')
    }else {
        document.getElementById('add-category').classList.add('view-none')
    }
})