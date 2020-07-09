export default {
  state: {
    products: [],
    pagination: {
      perPage: 10,
      total: 0,
    },
    totalProducts: 324,
    fetchLoading: false,
  },
  actions: {
    async fetchProducts({ commit, state }, { page = 1, beer_name }) {
      commit("toggleLoader", true);

      let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${state.pagination.perPage}`;
      if (beer_name) url += `&beer_name=${beer_name}`;

      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const products = data;
          commit("updateProducts", products);
          commit("toggleLoader", false);

          commit(
            "updatePaginationTotal",
            beer_name ? products.length : state.totalProducts
          );
        });
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    toggleLoader(state, toggle) {
      state.fetchLoading = toggle;
    },
    updatePaginationTotal(state, length) {
      state.pagination.total = length;
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    pagination(state) {
      return state.pagination;
    },
    fetchLoading(state) {
      return state.fetchLoading;
    },
  },
};
