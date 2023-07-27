var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    imageSrc: "./assets/socks-green.jpg",
    altText: "A pair of Socks",
    link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
    inStock: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImg: "./assets/socks-green.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImg: "./assets/socks-blue.jpg",
      },
    ],
    sizes: ["Small", "Medium", "Large", "XLarge"],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(variantImg) {
      this.imageSrc = variantImg;
    },
  },
});
