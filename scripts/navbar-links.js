const clientPage = document.getElementById('display-clients-table')
const sellerPage = document.getElementById('display-sellers-table')
const statPage = document.getElementById('display-stats-graph')
const sections = document.querySelectorAll('.main-sub-container')


clientPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('client-section').classList.remove('view-none')
})

sellerPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('seller-section').classList.remove('view-none')
})

statPage.addEventListener('click', () => {
    sections.forEach(section => section.classList.add('view-none'))
    document.getElementById('stat-section').classList.remove('view-none')
})

// clientPage.addEventListener('click', () => {
//     document.getElementById('client-section').classList.remove('view-none')
//     document.getElementById('seller-section').classList.add('view-none')
//     document.getElementById('stat-section').classList.add('view-none')
// })