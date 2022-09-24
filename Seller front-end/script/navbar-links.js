const clientPage = document.getElementById('display-clients-table')
const sellerPage = document.getElementById('display-sellers-table')
const statPage = document.getElementById('display-stats-graph')
const logout = document.getElementById('admin-logout')
const sections = document.querySelectorAll('.main-sub-container')
const navbarLinks = document.querySelectorAll('.navbar-link')

clientPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('client-section').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    clientPage.classList.add('current-navbar-link')
})

clientPage.addEventListener('dblclick', () => {
    deleteClientRows()
    getAllClients()
})

sellerPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('seller-section').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    sellerPage.classList.add('current-navbar-link')
})

sellerPage.addEventListener('dblclick', () => {
    deleteSellerRows()
    getAllSellers()
})

statPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('stat-section').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    statPage.classList.add('current-navbar-link')
})

statPage.addEventListener('dblclick', () => {
    getBestSellerWeek()
    getBestSellerMonth()
    getBestSellerYear()
    getBestClientWeek()
    getBestClientMonth()
    getBestClientYear()
    getNumberOfClients()
    getNumberOfSellers()
    getNumberOfProducts()
})

logout.addEventListener('click', () => {
    window.location.replace("https://www.google.com/")
})
// clientPage.addEventListener('click', () => {
//     document.getElementById('client-section').classList.remove('view-none')
//     document.getElementById('seller-section').classList.add('view-none')
//     document.getElementById('stat-section').classList.add('view-none')
// })