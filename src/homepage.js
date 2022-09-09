const renderHome = function() {
    const content = document.querySelector('#content');

    const title = document.createElement("h1");

    title.classList.add('title');
    title.textContent = "nang kwak eatery";

    content.appendChild(title);


    console.log("hi");
}

export {
    renderHome,
};