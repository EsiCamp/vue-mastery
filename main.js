var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    selectedVariant: 0,
    altText: "A pair of Socks",
    link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImg: "./assets/socks-green.jpg",
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImg: "./assets/socks-blue.jpg",
        variantQuantity: 0,
      },
    ],
    onSale: true,
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
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    imageSrc() {
      return this.variants[this.selectedVariant].variantImg;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return `${this.brand} ${this.product} are on sale!`;
      }
      return `${this.brand} ${this.product} are not on sale!`;
    },
  },
});
