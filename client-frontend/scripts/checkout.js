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
  for(const item of localStorage.getItem('cart').split(",")){
    const form=new FormData;
        form.append('product_id',item);
        axios.post('http://localhost/e-commerce/ecommerce-server/apis/get-product.php', 
        form
        ).then(async function (response) {
           for(const product of response.data){
            console.log(product['price']);
            await createContainer(product['image'],product['name'],product['price']);
          }
        })
  }
  // create product container
  const createContainer=(img,name,price)=>{
    const productContainer= document.createElement("div");
    productContainer.classList="products-container";
    productContainer.innerHTML='<div class="product"><div class="left-part"><div class="image"><img src="'+img+'" alt="image"></div> <div class="info"><h3>'+name+'</h3></div></div><div class="right-part-container"><div class="right-part"><p class="prices">'+price+'</p><img class="times" src="images/times-icon.png" alt="image"><input type="number" class="counter"></div><div class="trash-icon"><img src="images/trash-icon.png" alt="image"></div></div></div>';
    bigContainer.appendChild(productContainer);
  }
}