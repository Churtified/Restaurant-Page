const content = document.querySelector("#content");

const menuItems = [
    {
        name: "Pad Thai",
        description: "Authentic Pad Thai on the streets of Thailand has a distinct fishy/prawny funk (which sounds thoroughly unappetising but is actually completely addictive and the very essence of true Thai street food)",
        price: "$15",
    },
    {
        name: "Massaman Curry",
        description: "Massaman curry is a rich, flavourful, and mildly spicy Thai curry. It is a fusion dish, combining ingredients from Persia, the Indian subcontinent, and the Malay Archipelago with ingredients more commonly used in native Thai cuisine to make massaman curry paste.",
        price: "$20",
    },
    {
        name: "Som Tum",
        description: "Zingy and spicy cold salad made with green papaya, a fruit which might be unfamiliar to most Westerners. Green papaya is simply unripened papaya, and has a juicy and slightly crunchy texture with a neutral taste.",
        price: "$15",
    },
];

const renderMenu = function() {
    const main = document.createElement("main");
    main.classList.add("main");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menuTitle");
    
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");

    menuItems.forEach((item) => {
        const name = document.createElement("h2");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        const price = document.createElement("h3");
        price.textContent = item.price;

        name.classList.add("menu");
        description.classList.add("menu");
        price.classList.add("menu");

        itemContainer.appendChild(name);
        itemContainer.appendChild(description);
        itemContainer.appendChild(price);
        
        main.appendChild(itemContainer);
    })

    content.appendChild(main);
}

export {
    renderMenu,
}