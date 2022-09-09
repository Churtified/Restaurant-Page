const renderNav = function() {
    const content = document.querySelector("#content");

    const navContainer = document.createElement("nav");
    const navList = document.createElement("ul");
    const navHome = document.createElement("li");
    const navMenu = document.createElement("li");
    const navContact = document.createElement("li");

    navHome.classList.add("navItems");
    navMenu.classList.add("navItems");
    navContact.classList.add("navItems");

    navHome.textContent = "Home";
    navMenu.textContent = "Menu";
    navContact.textContent = "Contact";

    content.appendChild(navContainer);
    navContainer.appendChild(navList);
    navList.appendChild(navHome);
    navList.appendChild(navMenu);
    navList.append(navContact);
}

export {
    renderNav,
}