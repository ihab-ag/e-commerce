const productFormPage = document.getElementById('display-products-form')
const viewProductPage = document.getElementById('display-products-table')
const statusPage = document.getElementById('display-status')
const couponPage = document.getElementById('display-coupons')
const sections = document.querySelectorAll('.main-sub-container')
const navbarLinks = document.querySelectorAll('.navbar-link')

productFormPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('display-product-form-sec').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    productFormPage.classList.add('current-navbar-link')
})

// // productFormPage.addEventListener('dblclick', () => {
// //     deleteClientRows()
// //     getAllClients()
// // })

viewProductPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('display-product-table-sec').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    viewProductPage.classList.add('current-navbar-link')
})

// // viewProductPage.addEventListener('dblclick', () => {
// //     deleteSellerRows()
// //     getAllSellers()
// // })

statusPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('display-status-sec').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    statusPage.classList.add('current-navbar-link')
})

couponPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('display-coupons-sec').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    couponPage.classList.add('current-navbar-link')
})

// statPage.addEventListener('dblclick', () => {
//     getBestSellerWeek()
//     getBestSellerMonth()
//     getBestSellerYear()
//     getBestClientWeek()
//     getBestClientMonth()
//     getBestClientYear()
//     getNumberOfClients()
//     getNumberOfSellers()
//     getNumberOfProducts()
// })

// logout.addEventListener('click', () => {
//     window.location.replace("https://www.google.com/")
// })
// clientPage.addEventListener('click', () => {
//     document.getElementById('client-section').classList.remove('view-none')
//     document.getElementById('seller-section').classList.add('view-none')
//     document.getElementById('stat-section').classList.add('view-none')
// })