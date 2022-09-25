window.onload=()=>{
    const imgDiv=document.getElementById('imgDiv');
    //get product
    axios.get("http://localhost/e-commerce/ecommerce-server/apis/get-product-by-id.php")
    .then(function(response){
        for(const item of response.data){
            const productInfo = document.createElement('div');
            productInfo.classList= "imgDiv";
            const img = document.createElement('img');
            img.classList.add("product-img");
            img.src=item['image'];
            productInfo.appendChild(img);
            imgDiv.appendChild(productInfo);
            const info = document.createElement('div');
            info.classList= "product-info";
            const title = document.createElement('h1');
            title.classList = "nameHeader";
            const price = document.createElement('p');
            price.classList = "green";
            const description = document.createElement('p');
            description.classList = "description";
            title.appendChild(info);
            price.appendChild(info);
            description.appendChild(info);
        }
    })
}