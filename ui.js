// ui.js
export function setupUI(mainContent, topMenuEl, subMenuEl, form) {
    mainContent.style.backgroundColor = "var(--main-bg)";
    const h1 = document.createElement("h1");
    h1.textContent = "Hello!";
    mainContent.appendChild(h1);

    const h3 = document.createElement("h3");
    h3.textContent = "Welcome to Villages Community";
    mainContent.appendChild(h3);

    topMenuEl.style.height = "100%";
    topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
    topMenuEl.classList.add("flex-around");

    subMenuEl.style.flexDirection = "column";

    form.style.backgroundColor = "#573737";
    form.style.padding = "20px";
    form.style.color = "#ccc";
    form.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    form.style.width = "300px";
}
