<template>
  <div>
    <div v-if="fetchLoading" class="text-center">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>
    <div v-else >
      <div v-if="allProducts.length>0">
        <p>Страница: {{currentPage}} из {{Math.ceil(pagination.total/pagination.perPage)}}</p>
        <Products :products="allProducts" />
        <div class="d-flex justify-content-center">
            <b-pagination
              v-model="currentPage"
              v-on:input="onPageChange"
              :total-rows="pagination.total"
              :per-page="pagination.perPage">
            </b-pagination>
        </div>
      </div>
      <div v-else>
        <p>Список продуктов пустой</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
    Products
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: mapGetters(["allProducts", "pagination", "fetchLoading"]),
  methods: {
    ...mapActions(["fetchProducts"]),
    onPageChange() {
      const params = {
        page: this.currentPage
      };
      this.fetchProducts(params)
    }
  },
  mounted() {
    this.fetchProducts(this.currentPage)
  }
}
</script>
