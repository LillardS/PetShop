// the products being used for the array

let pet_product1 = {
    name: 'Small Bites Dog Food',
    description: "This is Dog Food meant for full grown small dogs, or doggie adults.",
    imgFile: 'images/pet_product1.png',
    price: '$14.99',
    id: 1,
    count: 1
};

let pet_product2 = {
    name: '9 Lives Cat Food',
    description: "This is cat food meant for full grown cats, or kittens.",
    imgFile: 'images/pet_product2.png',
    price: '$19.99',
    id: 2,
    count: 1
};

let pet_product3 = {
    name: 'Alien Chew Toy',
    description: "This is a chew/rope toy meant for smaller dogs to play with.",
    imgFile: 'images/pet_product3.png',
    price: '$6.99',
    id: 3,
    count: 1
};

let pet_product4 = {
    name: 'Bone Plush Toy',
    description: "This is a bone shaped plush toy meant to be fetched/played with gently.",
    imgFile: 'images/pet_product4.png',
    price: '$5.99',
    id: 4,
    count: 1
};

let pet_product5 = {
    name: 'Tiny Friends Farm Rabbit Food',
    description: "This is rabbit food meant for full grown rabbits, or bunnies.",
    imgFile: 'images/pet_product5.png',
    price: '$8.99',
    id: 5,
    count: 1
};

let pet_product6 = {
    name: 'Strong Dog Pet Leash',
    description: "This is a leash meant for full grown large dogs, or doggie adults.",
    imgFile: 'images/pet_product6.png',
    price: '$17.99',
    id: 6,
    count: 1
};

let pet_product7 = {
    name: 'Lazy Cat Lounger',
    description: "This is cat lounger/sleeper meant for cats to relax and sleep in.",
    imgFile: 'images/pet_product7.png',
    price: '$24.99',
    id: 7,
    count: 1
};

let pet_product8 = {
    name: 'Small Dog Bedrest',
    description: "This is a dog bed/rest area for your dog with a small amount of storage underneath.",
    imgFile: 'images/pet_product8.png',
    price: '$24.99',
    id: 8,
    count: 1
};

let pet_product9 = {
    name: 'Basic Cat Bed',
    description: "This is a basic cat bed with warm and fluffy padding to ensure a comfy kitty.",
    imgFile: 'images/pet_product9.png',
    price: '$20.99',
    id: 9,
    count: 1
};

let pet_product10 = {
    name: 'Large Dog Bedrest',
    description: "This is a dog bed/rest area for larger dogs with plenty of space to relax and sleep.",
    imgFile: 'images/pet_product10.png',
    price: '$29.99',
    id: 10,
    count: 1
};

let pet_product11 = {
    name: 'Rabbit Tower Feeder',
    description: "This is a feeding tower for your pet rabbit, where you stuff the center with hay for your rabbit to get on his own.",
    imgFile: 'images/pet_product11.png',
    price: '$17.99',
    id: 11,
    count: 1
};

let pet_product12 = {
    name: 'Rabbit Chew Toy',
    description: "This is a rabbit chew/play toy that will give your furry friend hours of joy.",
    imgFile: 'images/pet_product12.png',
    price: '$12.99',
    id: 12,
    count: 1
}

// the empty cart

let cart = [];

// the array of products

let items_array = [pet_product1, pet_product2, pet_product3, pet_product4, pet_product5, pet_product6, pet_product7, pet_product8, pet_product9, pet_product10, pet_product11, pet_product12];

// showing items on the website

function appendNode(parent, element) {
    parent.appendChild(element);
};

function getDiv(container) {
    return document.getElementById(container);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};

function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("li");
        item_node.setAttribute("id", item.id);

        if (item.count > 0) {
            item_node.innerHTML = `<img class = "product" src = "${item.imgFile}" alt = ""> <h2>${item.name} 
            <span id="badge">${item.count}</span> - ${item.price}</h2><p>${item.description}</p>`;
            appendNode(items_container, item_node);
        }
    }
}

displayItems(items_array, "items");

// adding and removing items from the cart

function addOrRemoveItemsFromCart(action) {

    let container = '';

    if (action == "add") {
        container = getDiv("items");

        takeAction(container)
    }
    else if (action == "remove") {
        container = getDiv("cart");

        takeAction(container)
    };

    function takeAction(container) {
        container.addEventListener("click", function (event) {
            let item_id = event.target.id;

            if (item_id !== "items" && item_id !== "badge") {
                let item = items_array.filter(function (item) {
                    return item.id == item_id;
                })[0];

                let item_in_cart = cart.filter(function (item) {
                    return item.id == item_id;
                })[0];

                if (item_in_cart == undefined) {
                    cart.push(item);
                } else if (action == "add") {
                    item_in_cart.count++;
                } else if (action == "remove") {
                    item_in_cart.count--;
                }

                console.log(cart);
                displayItems(cart, "cart");
            };
        });
    };
}

addOrRemoveItemsFromCart('add');
addOrRemoveItemsFromCart('remove');

// this is the form submit to console

function sConsole(event) {
    event.preventDefault();
    var data1 = document.getElementById("data1");
    var data2 = document.getElementById("data2");
    console.log(data1.value);
    console.log(data2.value);
    data1.value = '';
    data2.value = '';
  }
