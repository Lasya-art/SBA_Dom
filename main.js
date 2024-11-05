import { submitForm } from './form.js';

var menuLinks = [
    {
        text: "Home",
        href: "#",
        subLinks: [
            { text: "Enquiry", href: "/Home/Enquiry" },


        ],
    },
    {
        text: "Floor Plans",
        href: "#",
        subLinks: [
            { text: "Floorplans", href: "/Floorplans/Floorplans" },
            { text: "Community Map", href: "/Floorplans/Community Map" },
            { text: "ebroucher", href: "/Floorplans/ebroucher" },
        ],
    },
    {
        text: "Photos",
        href: "#",
        subLinks: [
            { text: "Photos", href: "/Photos/new" },
            { text: "Videos", href: "/Photos/pending" },
        ],
    },
];


const mainContent = document.querySelector('#main-content');
mainContent.style.backgroundColor = 'var(--main-bg)';
const h1 = document.createElement('h1');
h1.textContent = 'Hello, !';
mainContent.appendChild(h1);
const h3 = document.createElement('h3');
h3.textContent = 'Welcome to Villages Commiunity';
mainContent.appendChild(h3);
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add = "flex-around";
subMenuEl.style.flexDirection = "column";
const form = document.getElementById("registration");
const enquiryForm = document.getElementById("enquiryForm");
const registerButton = document.getElementById("register");
const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

    form.style.backgroundColor = "#573737";
    form.style.padding = "20px";
    form.style.color="#ccc";
    
    form.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    form.style.width = '300px';
  



function clearSubMenu() {
    subMenuEl.innerHTML = "";
    subMenuEl.style.display = "none";
}


for (const link of menuLinks) {
    let a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.addEventListener("click", function (event) {
        event.preventDefault();
        subMenuEl.innerHTML = "";
        subMenuEl.style.display = "none";
        // Check if the clicked menu item has subLinks
        if (link.subLinks) {
            link.subLinks.forEach((subLink) => {
                let subA = document.createElement("a");
                subA.href = subLink.href;
                subA.textContent = subLink.text;
                subA.addEventListener("click", function (event) {
                    event.preventDefault();
                    let topMenuParent = topMenuEl.parentNode;
                    let firstSubMenuItem = subMenuEl.firstChild;

                    console.log("Parent of topMenuEl:", topMenuParent);
                    console.log("First child of subMenuEl:", firstSubMenuItem);

                    if (subLink.text === "Enquiry") {
                        window.alert("Please fill out the form to book a tour.");
                        form.style.display = "block";
                        clearImage();
                    } else {
                        form.classList.add('hidden');
                    }

                });
                subMenuEl.appendChild(subA);
            });

            subMenuEl.style.display = "block";

        } else {
            subMenuEl.style.display = "none";
        }
    });

    topMenuEl.appendChild(a);


    
}


function hideSubMenuOnClickOutside(event) {

    if (!topMenuEl.contains(event.target) && !subMenuEl.contains(event.target)) {
        subMenuEl.style.display = "none"; 
    }
}


document.addEventListener("click", hideSubMenuOnClickOutside);
document.getElementById('register').addEventListener('click', function(event) {
    event.preventDefault();
    submitForm();
});
