const productName = document.getElementById('product-name')
const productPrice = document.getElementById('product-price')
const productImage = document.getElementById('product-img')
const productDescription = document.getElementById('product-description')
const catSelector = document.getElementById('product-category-selector')
const categoryName = document.getElementById('category-name')

const submitProduct = document.getElementById('add-product-btn')
const submitCategory = document.getElementById('add-category-btn')

const insertProductUrl = "../../ecommerce-server/apis/add-product.php"
submitProduct.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("click")
    if(!emptyFieldsValidation(productName.value, productPrice.value, productImage, productDescription.value, catSelector.value)) {
        setMessage('All Fields are required', false)
        return
    }else if(!nameValidation(productName.value)) {
        setMessage('Name should be more than 5 chars', false)
        return
    }else if(!priceValidation(productPrice.value)) {
        setMessage('Price format is wrong')
        return
    }
    const reader = new FileReader();
      reader.addEventListener('load', () => {
          const finalImage = reader.result;
          //console.log(finalImage);

          
        const formData = new FormData()
        formData.append('name', productName.value)
        formData.append('description', productDescription.value)
        formData.append('price', productPrice.value)
        formData.append('image', finalImage)
        formData.append('categories_id', catSelector.value)
        
        axios.post(insertProductUrl, formData).then(response => {
            const data = response.data
            //console.log(data)
            setMessage("Product is added", true)
            deleteSellerRows()
            getSellerProducts()
            productName.value = ""
            productDescription.value = ""
            productPrice.value = ""
            finalImage
            catSelector.value
        })
    })
    
    reader.readAsDataURL(productImage.files[0]);


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
    // image = productImage.files[0];
})

const categoriesUrl = "../../ecommerce-server/apis/get-categories.php"

const getCategories = () => {
    const formData = new FormData()
    formData.append('sellers_id', localStorage.getItem('sellers_id'))

    axios.post(categoriesUrl, formData).then(response => {
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
            catSelector.appendChild(option)
        })

        const option = document.createElement('option')
        option.setAttribute('class', 'form-categories')
        option.setAttribute('value', "addNewCategory")
        option.setAttribute('selected', true)
        option.textContent = "+Add Category"
        catSelector.appendChild(option)
    })
}

getCategories()
const addCategoryUrl = "../../ecommerce-server/apis/add-category.php"
submitCategory.addEventListener('click', (e) => {
    e.preventDefault()
    if(!categoryName.value) {
        setMessage('Category is required', false)
        return
    }
    const formData = new FormData()
    formData.append('sellers_id', localStorage.getItem('sellers_id'))

    axios.post(categoriesUrl, formData).then(response => {
        const categories = response.data
        // console.log(categories)
        let exist = false
        for(const category of categories) {
            // console.log(category)
            if(category['name'] === categoryName.value) {
                exist = true
                break
            }
        }
        if(exist) { 
            setMessage('Category exists', false)
            categoryName.value = null
        }else {
            const formData2 = new FormData()
            formData2.append('sellers_id', localStorage.getItem('sellers_id'))
            formData2.append('category', categoryName.value)
            axios.post(addCategoryUrl, formData2).then(response => {
                const cat = response.data
                console.log("newCat: ", cat)
                setMessage('category is added', true)
                //getCategories()
                catSelector.remove(catSelector.selectedIndex)

                const option = document.createElement('option')
                option.setAttribute('class', 'form-categories')
                option.setAttribute('value', cat['id'])
                option.setAttribute('selected', true)
                option.textContent = cat['name']
                catSelector.appendChild(option)


                document.getElementById('add-category').classList.add('view-none')
                categoryName.value = null

                const option2 = document.createElement('option')
                option2.setAttribute('class', 'form-categories')
                option2.setAttribute('value', "addNewCategory")
                option2.textContent = "+Add Category"
                catSelector.appendChild(option2)
            })
        }
    })
})