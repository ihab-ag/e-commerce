const getAllClientsUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/view-clients.php"
const getAPI = (url) => {
    axios.get(url).then(response => {
        const users = response.data
        console.log(users)
    }).catch(error => console.error(error))
}
getAPI(getAllClientsUrl)