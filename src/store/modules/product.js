export default {
  state: {
    products: [],
  },
  actions: {
    async fetchProducts(ctx) {
      await fetch("https://api.punkapi.com/v2/beers")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const products = data;
          ctx.commit("updateProducts", products);
        });
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
};
