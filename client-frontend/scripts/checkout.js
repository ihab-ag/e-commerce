// Checkout popup
function checkoutFunction(){
    document.getElementById("checkout-popup").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.checkout-btn')) {
  var popup = document.getElementById("checkout-popup");
    if (popup.classList.contains('show')) {
      popup.classList.remove('show');
    }
  }
}
window.onload=()=>{
  // declare elements
  const bigContainer=document.getElementById('checkout-container');
  let total=0;
  // load cart items
   for(const item of localStorage.getItem('cart').split(",")){
    const form=new FormData;
        form.append('product_id',item);
        axios.post('http://localhost/e-commerce/ecommerce-server/apis/get-product.php', 
        form
        ).then(async function (response) {
           for(const product of response.data){
             total+=parseInt(product['price']);
            document.querySelector('.total-price').innerHTML=total;
            createContainer(product['image'], product['name'], product['price']);
          }
        });
        
  }
  console.log(total);
   const checkoutBtn= document.getElementById('checkout-btn');
  //  checkout function
   checkoutBtn.onclick=()=>{
    for(const item of localStorage.getItem('cart').split(",")){
      const form=new FormData;
          form.append('product_id',item);
          axios.post('http://localhost/e-commerce/ecommerce-server/apis/add-revenue.php', 
          form);
   }
   const form=new FormData;
          form.append('id',localStorage.getItem('id'));
          form.append('amount',total);
          axios.post('http://localhost/e-commerce/ecommerce-server/apis/add-receipt.php', 
          form);
  }
  // create product container
  const createContainer=(img,name,price)=>{
    const productContainer= document.createElement("div");
    productContainer.classList="products-container";
    productContainer.innerHTML='<div class="product"><div class="left-part"><div class="image"><img src="'+img+'" alt="image"></div> <div class="info"><h3>'+name+'</h3></div></div><div class="right-part-container"><div class="right-part"><p class="prices">'+price+'</p><img class="times" src="images/times-icon.png" alt="image"><input type="number" class="counter"></div><div class="trash-icon"><img src="images/trash-icon.png" alt="image"></div></div></div>';
    bigContainer.appendChild(productContainer);
  }

}