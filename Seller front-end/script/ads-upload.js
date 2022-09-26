const uploadAd = document.getElementById('ads-img')
const submitAd = document.getElementById('ad-submit-btn')
const adDate = document.getElementById('ad-date')

const getAdUrl = "http://localhost/e-commerce/ecommerce-server/apis/add-ad.php"

adDate.min = new Date().toLocaleDateString('en-ca')
submitAd.addEventListener('click', () => {
    if(!uploadAd.value || !adDate.value) {
        setMessage('All Fields are required', false)
        return
    }
    const reader = new FileReader()
        reader.addEventListener('load', () => {
            const finalImage = reader.result
            
            const dataForm = new FormData()
            dataForm.append('sellers_id', localStorage.getItem('sellers_id'))
            dataForm.append('image', finalImage)
            dataForm.append('validity_date', adDate.value)
            
            axios.post(getAdUrl, dataForm).then(response => {
                const data = response.data
                setMessage("Ad is uploaded successfully", true)
            })
        })
        reader.readAsDataURL(uploadAd.files[0])
})