export default {
  state: {
    products: [],
    pagination: {
      perPage: 10,
      total: 324,
    },
    fetchLoading: false,
  },
  actions: {
    async fetchProducts({ commit, state }, { page = 1, search }) {
      commit("toggleLoader", true);

      let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${state.pagination.perPage}`;
      if (search) url += `&search=${search}`;

      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const products = data;
          commit("updateProducts", products);
          commit("toggleLoader", false);
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
