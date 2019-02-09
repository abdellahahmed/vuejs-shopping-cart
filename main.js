let app = new Vue({
    el: '#app',
    data: {
        product:'Socks',
        image: 'images/sock_green.jpeg',
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],

        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "/images/sock_green.jpeg"
            },
            {   
                variantId: 2235,
                variantColor: "blue",
                variantImage: "/images/sock_blue.jpeg"
            }
        ],

        cart: 0,



     //data end   
    },

    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        updateProduct: function (variantImage) {
            this.image = variantImage; 
        }
    }
})