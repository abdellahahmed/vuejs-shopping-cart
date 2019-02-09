let app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product:'Socks',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],

        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "/images/sock_green.jpeg",
                variantQuantity: 10
            },
            {   
                variantId: 2235,
                variantColor: "blue",
                variantImage: "/images/sock_blue.jpeg",
                variantQuantity: 5
            }
        ],

        cart: 0,  
    },
    //end of data

    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(index) {
            this.selectedVariant = index; 
        }
    },
    // end of method

    computed: { 
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
    // end of computed
})