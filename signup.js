/*=========================================
 signup.js
 AI Interview Preparation
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const signupForm = document.getElementById("signupForm");

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    /*==============================
      Email Validation
    ==============================*/

    function isValidEmail(emailValue){

        const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return pattern.test(emailValue);

    }

    /*==============================
      Mobile Validation
    ==============================*/

    function isValidMobile(number){

        return /^[6-9]\d{9}$/.test(number);

    }

    /*==============================
      Password Toggle
    ==============================*/

    function addToggle(input){

        const icon=document.createElement("span");

        icon.innerHTML="👁";

        icon.style.cursor="pointer";
        icon.style.marginLeft="10px";

        input.parentNode.appendChild(icon);

        icon.addEventListener("click",()=>{

            if(input.type==="password"){

                input.type="text";

                icon.innerHTML="🙈";

            }else{

                input.type="password";

                icon.innerHTML="👁";

            }

        });

    }

    addToggle(password);
    addToggle(confirmPassword);

    /*==============================
      Form Submit
    ==============================*/

    signupForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        if(name.value.trim().length<3){

            alert("Enter valid full name.");

            return;

        }

        if(!isValidEmail(email.value)){

            alert("Invalid email.");

            return;

        }

        if(!isValidMobile(mobile.value)){

            alert("Enter valid mobile number.");

            return;

        }

        if(password.value.length<6){

            alert("Password must be at least 6 characters.");

            return;

        }

        if(password.value!==confirmPassword.value){

            alert("Passwords do not match.");

            return;

        }

        if(!terms.checked){

            alert("Please accept Terms & Conditions.");

            return;

        }

        /* Save User (Demo) */

        const user={

            name:name.value,

            email:email.value,

            mobile:mobile.value

        };

        localStorage.setItem("user",JSON.stringify(user));

        /* Loading */

        const btn=document.querySelector(".signupBtn");

        btn.innerHTML="Creating Account...";

        btn.disabled=true;

        /*==============================
          Backend API (FastAPI Ready)

        fetch("http://localhost:8000/api/signup",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                name:name.value,

                email:email.value,

                mobile:mobile.value,

                password:password.value

            })

        })

        ==============================*/

        setTimeout(()=>{

            alert("Account Created Successfully!");

            window.location.href="login.html";

        },1500);

    });

});