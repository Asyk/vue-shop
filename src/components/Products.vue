<template>
  <b-row>
    <b-col 
      md="6" 
      class="mb-4"
      v-for="product in products"
      :key="product.id"
    >
      <Product :product="product" />
    </b-col>
  </b-row>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'Products',
  components: {
    Product
  },
  props: {
    products: Array
  }
}
</script>

<style>

</style>