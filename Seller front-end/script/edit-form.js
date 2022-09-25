const closeEditForm = document.getElementById('close-edit-form')
const editForm = document.querySelector('.popup-form')
const editSel = document.getElementById('edit-product-category-selector')

closeEditForm.addEventListener('click', (e) => {
    e.preventDefault()
    editForm.classList.add('view-none')
})

const getcategoriesUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/get-categories.php"

const getEditCategories = () => {
    const formData = new FormData()
    formData.append('sellers_id', localStorage.getItem('sellers_id'))

    axios.post(getcategoriesUrl, formData).then(response => {
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
