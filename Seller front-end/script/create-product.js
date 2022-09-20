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

//load create product page 
const CreateProductPage = () => {
    navItem1.style.display = "block";
    navItem2.style.display = "none";
    navItem3.style.display = "none";
    navItem4.style.display = "none";
    createProductButton.style.backgroundColor='rgb(' + 219 + ',' + 219 + ',' + 219 + ')';
}

//load view product page
const showProductsPage = () => {
    navItem1.style.display = "none" ;
    navItem2.style.display = "block";
    navItem3.style.display = "none";
    navItem4.style.display = "none";
    // showProductsButton.style.backgroundColor='rgb(' + 219 + ',' + 219 + ',' + 219 + ')';
}

//load status page
const statusPage = () => {
    navItem1.style.display = "none" ;
    navItem2.style.display = "none";
    navItem3.style.display = "block";
    navItem4.style.display = "none";
}

//load coupons and ads page
const couponsAdsPage = () => {
    navItem1.style.display = "none" ;
    navItem2.style.display = "none";
    navItem3.style.display = "none";
    navItem4.style.display = "block";

}
//eventListeners
createProductButton.onclick = () => CreateProductPage();
showProductsButton.onclick = () => showProductsPage();
statusButton.onclick = () => statusPage();
couponsAdsButton.onclick = () => couponsAdsPage();
//  homeNav.onclick=()=>showHome();

