import { renderNav } from "./navbar.js";

const renderHome = function() {
    const content = document.querySelector('#content');

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("headerContainer");

    const title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = "nang kwak eatery";

    const copy = document.createElement("p");
    copy.classList.add('copy');
    copy.textContent = "inspired by traditional thai street foods";

    content.appendChild(headerContainer);
    content.appendChild(copy);
    headerContainer.appendChild(title);

    renderNav();
}

export {
    renderHome,
};