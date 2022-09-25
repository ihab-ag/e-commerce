window.onload=()=>{
    // declarables
    // elements
    const email=document.getElementById('login-email');
    const password=document.getElementById('login-password');

    // functions
    const login=()=>{
        const formData = new FormData();
        formData.append('email',email.value);
        formData.append('password',password.value);
        // place inputs in form
         axios.post('../ecommerce-server/apis/login-auth.php',formData).then((response)=>{
            console.log(response);
         })
    }

}