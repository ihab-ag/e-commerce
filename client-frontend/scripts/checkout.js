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