<template>
  <div>
    <Products :products="allProducts" />
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
  computed: mapGetters(["allProducts"]),
  methods: mapActions(["fetchProducts"]),
  mounted() {
    this.fetchProducts()
  }
}
</script>
