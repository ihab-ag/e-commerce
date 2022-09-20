const adminToggleBtn = document.getElementById('toggle-btn')
const adminNavbar = document.getElementById('admin-navbar')

adminToggleBtn.addEventListener('click', () => {
    adminNavbar.classList.toggle('navbar-toggle')
})