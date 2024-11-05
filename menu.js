// menu.js
export const menuLinks = [
    { text: "Home", href: "#", subLinks: [{ text: "Enquiry", href: "/Home/Enquiry" }] },
    {
        text: "Floor Plans",
        href: "#",
        subLinks: [
            { text: "Floorplans", href: "/Floorplans/Floorplans" },
            { text: "Community Map", href: "/Floorplans/Community Map" },
            { text: "eBroucher", href: "/Floorplans/eBroucher" },
        ],
    },
    { text: "Photos", href: "#", subLinks: [{ text: "Photos", href: "/Photos/new" }, { text: "Videos", href: "/Photos/pending" }] },
];

export function setupMenu(topMenuEl, subMenuEl, form) {
    for (const link of menuLinks) {
        let a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;

        a.addEventListener("click", function (event) {
            event.preventDefault();
            subMenuEl.innerHTML = "";
            subMenuEl.style.display = "none";

            if (link.subLinks) {
                link.subLinks.forEach((subLink) => {
                    let subA = document.createElement("a");
                    subA.href = subLink.href;
                    subA.textContent = subLink.text;
                    subA.addEventListener("click", (event) => handleSubMenuClick(event, subLink, form));
                    subMenuEl.appendChild(subA);
                });
                subMenuEl.style.display = "block";
            }
        });

        topMenuEl.appendChild(a);
    }
}

function handleSubMenuClick(event, subLink, form) {
    event.preventDefault();
    if (subLink.text === "Enquiry") {
        window.alert("Please fill out the form to book a tour.");
        form.style.display = "block";
    } else {
        form.classList.add("hidden");
    }
}

export function hideSubMenuOnClickOutside(event, topMenuEl, subMenuEl) {
    if (!topMenuEl.contains(event.target) && !subMenuEl.contains(event.target)) {
        subMenuEl.style.display = "none";
    }
}
