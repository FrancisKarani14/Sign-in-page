document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("myform");
    let error = document.getElementById("errormessage");
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        
        let name = document.getElementById("name").value.trim();
        let email= document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmpassword = document.getElementById("confirmpassword").value.trim();

        if (name ==="") {
            error.textContent ="Kindly insert your Name";
            return;
        }
      if (email === "") {
        error.textContent="kindly insert your email";
        return;
        
      }
     else if (!email.includes("@") || !email.includes(".")) {
        error.textContent="Kindly enter a valid email";
        return;
        
     }
      
        if (password === "") {
            error.textContent="kindly insert your password"
            return;
        }
        if (password.length < 6) {
            error.textContent="password should atleast have 6 characters";
           return; 
        }
        if (password.length > 12) {
            error.textContent="password should not exceed 12 characters"
            return;
            
        }
        if (!password.includes("!") && !password.includes("@") && !password.includes("$") && !password.includes("&")) {
            error.textContent="pasword should atleast have one special character eg,!, @, $, &";
            return;
        }
        if (confirmpassword ==="") {
            error.textContent="Kindly confirm your password";
            return;
            
        } else if (confirmpassword !== password) {
            error.textContent="passwords did not maatch"
            return;
            
        }
        error.textContent="Signin successful"
       
        
    })
    
    
})