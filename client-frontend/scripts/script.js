    
    window.onload=()=>{
      const signUpModal = document.querySelector('.sign-up-modal');
      const closeSignUpModal = document.getElementById('close_sign_up_modal');
      const signUpContent= document.querySelector(".sign-up-modal > .flex");
      const slider=document.getElementById('slider');
      const row=document.getElementById('row');
      const cart = document.querySelector('.whitecart');
      // give flex to signup modal
      signUpContent.style.display="flex";
      signUpContent.style.flexDirection="row";
      // check user
      let addCart;
      let addFav;
      let checkOut;
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
      }
      checkOut=()=>{
        location.replace('checkout.html');
      }
    }
    else{
      addCart=(id)=>{
        signUpModal.classList.add('show-modal');
      }
       addFav=(id)=>{
        signUpModal.classList.add('show-modal');
      }
      checkOut=()=>{
        signUpModal.classList.add('show-modal');
      }
    }
    cart.onclick=()=>{
      checkOut();
    }
      // get ads
      const getImages= async()=>{
        await axios.get("http://localhost/e-commerce/ecommerce-server/apis/get-ads.php")
        .then(function (response) {
          for(const item of response.data){
            const myslide= document.createElement('div');
            myslide.classList="mySlides";
            const img=document.createElement('img');
            img.classList.add("ad-img","ad");
            img.src=item['image'];
            myslide.appendChild(img);
            slider.appendChild(myslide);
          }});
          setInterval(showSlides,2000);
        }
        getImages();
        // get products
        axios.get("http://localhost/e-commerce/ecommerce-server/apis/get-random-section.php",)
        .then(function (response) {
          for(const item of response.data){
           const products=document.createElement("div");
           products.classList.add("products");
           const imgdiv=document.createElement("div");
           imgdiv.innerHTML='<img class="item-img" src="'+item["image"]+'" alt="image">';
           imgdiv.onclick=()=>{
            localStorage.setItem('product_id',item['id']);
            location.replace("product.html");
           }
           products.appendChild(imgdiv);
           const smallcontainer=document.createElement("div");
           smallcontainer.classList.add("small-container");
           smallcontainer.innerHTML='<p class="item-name">'+item['name']+'</p>';
           const icons=document.createElement("div");
           const icon2=document.createElement("img");
           const icon3=document.createElement("img");
           icon2.classList="green-icons";
           icon3.classList="green-icons";
           icon2.src="images/greenheart.png";
           icon3.src="images/plus.png";
           icon2.onclick=()=>{
            addFav(item['id']);
           };
           icon3.onclick=()=>{
            addCart(item['id']);
           };
           icons.appendChild(icon2);
           icons.appendChild(icon3);
           smallcontainer.appendChild(icons);
           products.appendChild(smallcontainer);
           price=document.createElement('p');
           price.classList="price";
           price.innerHTML=item['price']+"$";
           products.append(price);
           row.appendChild(products);
          }
      });
      
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }

      let slideIndex = 0;

    function showSlides() {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    // close signup
    closeSignUpModal.addEventListener('click', () => {
      signUpModal.classList.remove('show-modal')
  })
    //Hamburger Menu

    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");

    function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } 
      else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
    }

    hamburger.addEventListener("click", toggleMenu);


    items.forEach( 
      function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
      }
    )


    }