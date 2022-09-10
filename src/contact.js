const renderContact = function() {
    const content = document.querySelector('#content');

    const main = document.createElement('main');
    main.classList.add('main');

    const title = document.createElement('h2');
    title.classList.add('contact');
    title.textContent = "Contact Us";

    const info = document.createElement('p');
    info.classList.add('contact');
    info.textContent = "Whether you’ve made an booking and have questions about that booking, have questions about reservations or you simply have a general inquiry into our restaurant please contact us via info@nangkwokfakery.co"

    main.appendChild(title);
    main.appendChild(info);
    
    content.appendChild(main);
}

export {
    renderContact,
}