/*=========================================
 profile.js
 AI Interview Preparation
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

const profileForm = document.getElementById("profileForm");
const changePhoto = document.getElementById("changePhoto");
const profileImage = document.querySelector(".profile-image img");

/*==============================
 Load Profile
==============================*/

loadProfile();

/*==============================
 Save Profile
==============================*/

profileForm.addEventListener("submit", function(e){

    e.preventDefault();

    const profile = {

        fullName: document.getElementById("fullName").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        college: document.getElementById("college").value,

        course: document.getElementById("course").value,

        semester: document.getElementById("semester").value,

        gender: document.getElementById("gender").value,

        dob: document.getElementById("dob").value,

        skills: document.getElementById("skills").value,

        github: document.getElementById("github").value,

        linkedin: document.getElementById("linkedin").value,

        address: document.getElementById("address").value,

        goal: document.getElementById("goal").value,

        about: document.getElementById("about").value

    };

    localStorage.setItem(

        "userProfile",

        JSON.stringify(profile)

    );

    document.getElementById("userName").innerText =
    profile.fullName || "User";

    document.getElementById("userEmail").innerText =
    profile.email || "Email";

    alert("Profile Saved Successfully");

});

/*==============================
 Load Saved Data
==============================*/

function loadProfile(){

const profile = JSON.parse(

localStorage.getItem("userProfile")

);

if(!profile) return;

document.getElementById("fullName").value =
profile.fullName || "";

document.getElementById("email").value =
profile.email || "";

document.getElementById("phone").value =
profile.phone || "";

document.getElementById("college").value =
profile.college || "";

document.getElementById("course").value =
profile.course || "";

document.getElementById("semester").value =
profile.semester || "";

document.getElementById("gender").value =
profile.gender || "";

document.getElementById("dob").value =
profile.dob || "";

document.getElementById("skills").value =
profile.skills || "";

document.getElementById("github").value =
profile.github || "";

document.getElementById("linkedin").value =
profile.linkedin || "";

document.getElementById("address").value =
profile.address || "";

document.getElementById("goal").value =
profile.goal || "";

document.getElementById("about").value =
profile.about || "";

document.getElementById("userName").innerText =
profile.fullName || "User";

document.getElementById("userEmail").innerText =
profile.email || "Email";

}

/*==============================
 Change Profile Photo
==============================*/

changePhoto.addEventListener("click",()=>{

const input = document.createElement("input");

input.type = "file";

input.accept = "image/*";

input.click();

input.onchange = function(){

const file = input.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(){

profileImage.src = reader.result;

localStorage.setItem(

"profileImage",

reader.result

);

};

reader.readAsDataURL(file);

};

});

/*==============================
 Load Saved Image
==============================*/

const savedImage =

localStorage.getItem("profileImage");

if(savedImage){

profileImage.src = savedImage;

}

});