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
const productCategories = document.querySelector("#cars");
const productCategoryName = document.querySelector("#product-cat-name").value;
const addNewCategory = document.querySelector("#add-new-catg");
console.log(addNewCategory);
//add new product 
addNewCategory.onclick = () => {
    addCategoryForm.classList.toggle("add-category-form-block");
};

//submit new product 
addCategoryButton.onclick = (e) => {
    e.preventDefault();
    const productCategoryName = document.querySelector("#product-cat-name").value;
    let newCategory = document.createElement("option");
    productCategories.appendChild(newCategory);
    newCategory.innerHTML = `${productCategoryName}`;
    newCategory.value=`${productCategoryName}`;
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

