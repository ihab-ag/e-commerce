window.onload=()=>{
    const imgDiv=document.getElementById('imgDiv');
    let addCart;
      let addFav;
      if(localStorage.getItem('id')!="guest"){
        // add to fav
       addFav=(id)=>{
        const form=new FormData;
        form.append("id",localStorage.getItem("id"));
        form.append('product_id',id)
        axios.post('http://localhost/e-commerce/ecommerce-server/apis/add-favourite.php', 
        form
        ).then(function (response) {
          console.log(response.data);
        })
      };
      // create cart
      localStorage.setItem('cart',[]);
      // add to cart
       addCart=(id) =>{
        let cartArray=[];
        if(localStorage.getItem('cart')!="")
        cartArray=localStorage.getItem('cart').split(",");
        cartArray.push(id);
        localStorage.setItem('cart',cartArray);
      }}
    //get product
    axios.get("http://localhost/e-commerce/ecommerce-server/apis/get-product-by-id.php")
    .then(function(response){
        for(const item of response.data){
            localStorage.getItem('product_id',item['id']);
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