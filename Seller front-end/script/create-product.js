//define variable
const navItem1=document.querySelector("#nav-item1");
const navItem2=document.querySelector("#nav-item2");
const navItem3=document.querySelector("#nav-item3");
const navItem4 = document.querySelector("#nav-item4");
//navbar buttons
const createProductButton=document.querySelector("#create-p-btn");
const showProductsButton=document.querySelector("#show-p-btn");
const statusButton=document.querySelector("#status-btn");
const couponsAdsButton = document.querySelector("#coupons-ads-btn");
//submit category variable
const addCategoryForm = document.getElementsByClassName("add-category-form")[0];    
const addCategoryButton = document.querySelector("#submit-cat");
const productCategories = document.querySelector("#product-categories");
const productCategoryName = document.querySelector("#product-cat-name").value;
const addNewCategory = document.querySelector("#add-new-catg");

//add new product 
addNewCategory.onclick = () => {
    addCategoryForm.classList.toggle("add-category-form-block");
};
addCategoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

//submit new product 
addCategoryButton.onclick = () => {
    
    const productCategoryName = document.querySelector("#product-cat-name").value;
    if (productCategoryName.length != 0) {
        let newCategory = document.createElement("option");
        productCategories.appendChild(newCategory);
        newCategory.innerHTML = `${productCategoryName}`;
        newCategory.value=`${productCategoryName}`;
    }
    
}

//load create product page 
const CreateProductPage = () => {
    navItem1.style.display = "block";
    navItem2.style.display = "none";
    navItem3.style.display = "none";
    navItem4.style.display = "none";
    createProductButton.style.backgroundColor = 'rgb(' + 219 + ',' + 219 + ',' + 219 + ')';
    showProductsButton.style.backgroundColor = "white";
    statusButton.style.backgroundColor = "white";
    couponsAdsButton.style.backgroundColor = "white";
}

//load view product page
const showProductsPage = () => {
    navItem1.style.display = "none" ;
    navItem2.style.display = "block";
    navItem3.style.display = "none";
    navItem4.style.display = "none";
    //BUTTONS
    createProductButton.style.backgroundColor = "white";
    showProductsButton.style.backgroundColor = 'rgb(' + 219 + ',' + 219 + ',' + 219 + ')';
    statusButton.style.backgroundColor = "white";
    couponsAdsButton.style.backgroundColor = "white";
}

//load status page
const statusPage = () => {
    navItem1.style.display = "none" ;
    navItem2.style.display = "none";
    navItem3.style.display = "block";
    navItem4.style.display = "none";
    //BUTTONS COLOR
    createProductButton.style.backgroundColor = "white";
    showProductsButton.style.backgroundColor = "white";
    statusButton.style.backgroundColor = 'rgb(' + 219 + ',' + 219 + ',' + 219 + ')';
    couponsAdsButton.style.backgroundColor = "white";
}

//load coupons and ads page
const couponsAdsPage = () => {
    navItem1.style.display = "none" ;
    navItem2.style.display = "none";
    navItem3.style.display = "none";
    navItem4.style.display = "block";
    //BUTTONS
    createProductButton.style.backgroundColor = "white";
    showProductsButton.style.backgroundColor = "white";
    statusButton.style.backgroundColor ="white";
    couponsAdsButton.style.backgroundColor = 'rgb(' + 219 + ',' + 219 + ',' + 219 + ')';

}
//eventListeners
createProductButton.onclick = () => CreateProductPage();
showProductsButton.onclick = () => showProductsPage();
statusButton.onclick = () => statusPage();
couponsAdsButton.onclick = () => couponsAdsPage();
//  homeNav.onclick=()=>showHome();




//form actions

//add product action
const addProductForm = document.querySelector(".add-form");
const submitProductButton = document.querySelector("#submit-product");

//prevent refresh when submit
addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
//submit a product validation
submitProductButton.addEventListener('click', () => {
    const productName = document.querySelector("#product-name").value;
    const productPrice = document.querySelector("#product-price").value;
    const productImage = document.querySelector("#product-img").value;
    const productDescription = document.querySelector("#product-desc").value;
    const productCategories = document.querySelector("#product-categories");

    if (productCategories.value == "") {
        debugger
        document.getElementById("product-warnings").innerHTML = "Please add a specific Category";
        document.getElementById("product-warnings").style.color = "red";
    }
    else {
        
    }
    //specifications
    
        

        
    }
);

//status form
//revenue form
const revenueForm = document.querySelector(".revenue-form"); 
calculateRevenueButton = document.querySelector("#calculate-rev-btn"); 
//prevent refresh 
revenueForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
//click on calculate
calculateRevenueButton.addEventListener('click', () => {
    //end date validation
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;//january is 0
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('end-date').setAttribute('max', today);
});


