const getAllSellersUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/view-sellers.php"
const deleteSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/delete-seller.php"
const editSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/update-seller.php"


const getAllSellers = () => {
    axios.get(getAllSellersUrl).then(response => {
        const sellers = response.data
        console.log(sellers)
    })
}

getAllSellers()