const getTopUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/get-top5-section.php"
const tableView = document.getElementById('view-table')


const getViews = () => {
    axios.get(getTopUrl).then(response => {
        const views = response.data
        //console.log(views)
        views.forEach(view => {
            createMostViewdRow(view['id'], view['name'], view['description'], view['image'], view['views'])
        });
    })
}

getViews()

const createMostViewdRow = (id, product, description, image, view) => {
    const tr = document.createElement('tr')
    
    const idTd = document.createElement('td')
    idTd.textContent = id
    const productTd = document.createElement('td')
    productTd.textContent = product
    const descriptionTd = document.createElement('td')
    descriptionTd.textContent = description
    const imgTd = document.createElement('td')
    const img = document.createElement('img')
    img.setAttribute('src', image)
    img.setAttribute('width', '50px')
    imgTd.appendChild(img)

    const viewTd = document.createElement('td')
    viewTd.textContent = view

    tr.appendChild(idTd)
    tr.appendChild(productTd)
    tr.appendChild(descriptionTd)
    tr.appendChild(imgTd)
    tr.appendChild(viewTd)

    tableView.appendChild(tr)

}