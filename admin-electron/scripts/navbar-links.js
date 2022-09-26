const clientPage = document.getElementById('display-clients-table')
const sellerPage = document.getElementById('display-sellers-table')
const statPage = document.getElementById('display-stats-graph')
const logoutBtn = document.getElementById('admin-logout')
const sections = document.querySelectorAll('.main-sub-container')
const navbarLinks = document.querySelectorAll('.navbar-link')

clientPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('client-section').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    clientPage.classList.add('current-navbar-link')
})

sellerPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('seller-section').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    sellerPage.classList.add('current-navbar-link')
})

statPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('stat-section').classList.remove('view-none')
    navbarLinks.forEach(navbarLink => navbarLink.classList.remove('current-navbar-link'))
    statPage.classList.add('current-navbar-link')
})

logoutBtn.addEventListener('click', () => {
    location.href = "https://www.google.com/"
})