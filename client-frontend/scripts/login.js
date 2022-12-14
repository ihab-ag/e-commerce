window.onload=()=>{
    // declarables
    // elements
    const email=document.getElementById('login-username');
    const password=document.getElementById('login-password');
    const signInBtn=document.getElementById('sign-in-btn');
    const guestSignIn=document.getElementById('guest-sign-in');
    const wrongPassword=document.querySelector('.wrong-password')
    // functions
    const login=()=>{
        const formData = new FormData();
        formData.append('email',email.value);
        formData.append('password',password.value);
        // place inputs in form
         axios.post('../ecommerce-server/apis/login-auth.php',formData).then((response)=>{
            if(response.data=='Wrong user credentials'){
                // change div here
                wrongPassword.style.display = 'block';
            }
            else{
                localStorage.setItem('id', response.data);
                location.replace("home.html");
            }
         }).catch(function (error) {
            console.log(error);
          });
    }
    // main
    signInBtn.onclick=()=>{
        login();
    }
    // guest sign in
    guestSignIn.onclick=()=>{
        localStorage.setItem('id', "guest");
        location.replace("home.html");
    }
}