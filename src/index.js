import './styles/styles.css';
import { renderHome } from "./homepage.js";
import { renderNav } from "./navbar.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";

console.log("working!!");

const content = document.querySelector("#content");

function home() {
    content.innerHTML = "";
    renderHome();
}

function menu() {
    content.innerHTML = "";
    renderHome();
    renderMenu();
}

function contact() {
    content.innerHTML = "";
    renderHome();
    renderContact();
}

document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if (target === "Home") {
        home();
    }
    else if (target === "Menu") {
        menu();
    }
    else if (target === "Contact") {
        contact();
    }
})

renderHome();