import { renderHome } from "./homepage.js";

const renderNav = function() {
    const content = document.querySelector("#content");
    const headerContainer = document.querySelector(".headerContainer");

    const navContainer = document.createElement("nav");
    navContainer.classList.add("navContainer");

    const navList = document.createElement("ul");
    navList.classList.add("navList");

    const navHome = document.createElement("li");
    const navMenu = document.createElement("li");
    const navContact = document.createElement("li");

    navHome.classList.add("navItems");
    navMenu.classList.add("navItems");
    navContact.classList.add("navItems");

    navHome.textContent = "Home";
    navMenu.textContent = "Menu";
    navContact.textContent = "Contact";

    headerContainer.appendChild(navContainer);
    navContainer.appendChild(navList);
    navList.appendChild(navHome);
    navList.appendChild(navMenu);
    navList.append(navContact);
}

export {
    renderNav,
}