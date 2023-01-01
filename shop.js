var shop = [

    {
        title: 'Small Bites Dog Food',
        image: 'images/pet_product1.png',
        price: 14.99,
        description: "This is Dog Food meant for full grown small dogs, or doggie adults.",
        id: 1
    },

    {
        title: '9 Lives Cat Food',
        image: 'images/pet_product2.png',
        price: 19.99,
        description: 'This is cat food meant for full grown cats, or kittens.',
        id: 2
    },

    {
        title: 'Alien Chew Toy',
        image: 'images/pet_product3.png',
        price: 6.99,
        description: "This is a chew/rope toy meant for smaller dogs to play with.",
        id: 3
    },

    {
        title: 'Bone Plush Toy',
        image: 'images/pet_product4.png',
        price: 5.99,
        description: "This is a bone shaped plush toy meant to be fetched/played with gently.",
        id: 4
    },

    {
        title: 'Tiny Friends Farm Rabbit Food',
        image: 'images/pet_product5.png',
        price: 8.99,
        description: "This is rabbit food meant for full grown rabbits, or bunnies.",
        id: 5
    },

    {
        title: 'Strong Dog Pet Leash',
        image: 'images/pet_product6.png',
        price: 17.99,
        description: "This is a leash meant for full grown large dogs, or doggie adults.",
        id: 6
    },

    {
        title: 'Lazy Cat Lounger',
        image: 'images/pet_product7.png',
        price: 24.99,
        description: "This is cat lounger/sleeper meant for cats to relax and sleep in.",
        id: 7
    },

    {
        title: 'Small Dog Bedrest',
        image: 'images/pet_product8.png',
        price: 24.99,
        description: "This is a dog bed/rest area for your dog with a small amount of storage underneath.",
        id: 8
    },

    {
        title: 'Basic Cat Bed',
        image: 'images/pet_product9.png',
        price: 20.99,
        description: "This is a basic cat bed with warm and fluffy padding to ensure a comfy kitty.",
        id: 9
    },

    {
        title: 'Large Dog Bedrest',
        image: 'images/pet_product10.png',
        price: 29.99,
        description: "This is a dog bed/rest area for larger dogs with plenty of space to relax and sleep.",
        id: 10
    },

    {
        title: 'Rabbit Tower Feeder',
        image: 'images/pet_product11.png',
        price: 17.99,
        description: "This is a feeding tower for your pet rabbit, where you stuff the center with hay for your rabbit to get on his own.",
        id: 11
    },

    {
        title: 'Rabbit Chew Toy',
        image: 'images/pet_product12.png',
        price: 12.99,
        description: "This is a rabbit chew/play toy that will give your furry friend hours of joy.",
        id: 12
    }

]

var postHTML = " "

for (var i = 0; i < 12; i++) {
    var heading = '<div class="card"><div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p class="price"> $' + shop[i].price + '</p></span>'
    var description = '<div class=""><p>' + shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div></div>'
    var concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis
}
document.getElementById('market').innerHTML = postHTML