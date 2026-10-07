/*=========================================
 dashboard.js
 AI Interview Preparation
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      Load User Information
    ==============================*/

    const user = JSON.parse(localStorage.getItem("user"));

    if(user){

        const userName=document.querySelector(".user-box h3");

        if(userName){

            userName.innerText=user.name;

        }

    }

    /*==============================
      Sidebar Active Menu
    ==============================*/

    const menuItems=document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item=>{

        item.addEventListener("click",()=>{

            menuItems.forEach(i=>i.classList.remove("active"));

            item.classList.add("active");

        });

    });

    /*==============================
      Progress Animation
    ==============================*/

    const progressBars=document.querySelectorAll(".progress");

    progressBars.forEach(bar=>{

        const width=bar.style.width;

        bar.style.width="0%";

        setTimeout(()=>{

            bar.style.width=width;

            bar.style.transition="1.5s";

        },300);

    });

    /*==============================
      Statistics Counter
    ==============================*/

    const counters=document.querySelectorAll(".card h2");

    counters.forEach(counter=>{

        const text=counter.innerText.replace(/\D/g,"");

        const target=parseInt(text);

        if(isNaN(target)) return;

        let value=0;

        const speed=Math.max(1,target/100);

        function update(){

            if(value<target){

                value+=speed;

                counter.innerText=Math.ceil(value);

                requestAnimationFrame(update);

            }else{

                if(counter.innerText.includes("%")){

                    counter.innerText=target+"%";

                }else{

                    counter.innerText=target;

                }

            }

        }

        update();

    });

    /*==============================
      Performance Chart
    ==============================*/

    const chart=document.getElementById("performanceChart");

    if(chart){

        new Chart(chart,{

            type:"line",

            data:{

                labels:[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],

                datasets:[{

                    label:"Interview Score",

                    data:[60,68,74,81,88,93],

                    borderColor:"#2563eb",

                    backgroundColor:"rgba(37,99,235,.15)",

                    fill:true,

                    tension:.4

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        });

    }

    /*==============================
      Notification Animation
    ==============================*/

    const notifications=document.querySelectorAll(".notification-card");

    notifications.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(20px)";

        setTimeout(()=>{

            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*200);

    });

    /*==============================
      Logout
    ==============================*/

    const logout=document.querySelector(
        '.sidebar a[href="login.html"]'
    );

    if(logout){

        logout.addEventListener("click",(e)=>{

            e.preventDefault();

            if(confirm("Do you want to logout?")){

                localStorage.removeItem("user");

                window.location.href="login.html";

            }

        });

    }

});