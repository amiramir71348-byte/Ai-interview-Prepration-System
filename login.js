/*=========================================
 login.js
 AI Interview Preparation
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const remember = document.getElementById("remember");

    /*==============================
      Email Validation
    ==============================*/

    function isValidEmail(value) {

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return pattern.test(value);

    }

    /*==============================
      Show / Hide Password Button
    ==============================*/

    const toggle = document.createElement("span");

    toggle.innerHTML = "👁";

    toggle.style.cursor = "pointer";
    toggle.style.marginLeft = "10px";
    toggle.style.userSelect = "none";

    password.parentNode.appendChild(toggle);

    toggle.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            toggle.innerHTML = "🙈";

        } else {

            password.type = "password";
            toggle.innerHTML = "👁";

        }

    });

    /*==============================
      Remember Me
    ==============================*/

    if (localStorage.getItem("rememberEmail")) {

        email.value = localStorage.getItem("rememberEmail");
        remember.checked = true;

    }

    /*==============================
      Login Form Submit
    ==============================*/

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        if (email.value.trim() === "") {

            alert("Please enter your email.");
            email.focus();
            return;

        }

        if (!isValidEmail(email.value)) {

            alert("Invalid email address.");
            email.focus();
            return;

        }

        if (password.value.length < 6) {

            alert("Password must be at least 6 characters.");
            password.focus();
            return;

        }

        /* Save Email */

        if (remember.checked) {

            localStorage.setItem("rememberEmail", email.value);

        } else {

            localStorage.removeItem("rememberEmail");

        }

        /* Loading */

        const btn = document.querySelector(".loginBtn");

        btn.innerHTML = "Logging in...";
        btn.disabled = true;

        /* Backend API */

        /*
        fetch("http://localhost:8000/api/login",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                email:email.value,

                password:password.value

            })

        })
        */

        /* Demo Login */

        setTimeout(() => {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        },1500);

    });

});