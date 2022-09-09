const renderHome = function() {
    const content = document.querySelector('#content');

    const title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = "nang kwak eatery";

    const copy = document.createElement("p");
    copy.classList.add('copy');
    copy.textContent = "inspired by traditional thai street foods";

    content.appendChild(title);
    content.appendChild(copy);

    console.log("test");
}

export {
    renderHome,
};