<template>
  <b-card
    class="shadow product-card"
  >
    <template v-slot:header>
      <h5 class="mb-0">{{product.name}}</h5>
    </template>
    <b-card-body>
      <b-row>
        <b-col class="mb-md-0 mb-3"><img :src="product.image_url"/></b-col>
        <b-col md="8"><div class="desc">{{cutText(product.description)}}</div></b-col>
      </b-row>
    </b-card-body>

    <template v-slot:footer>
      <b-button href="#" variant="success">Купить</b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object
  },
  methods: {
    cutText: (text) => {

      if ( text.length>400 ) {
        text = text.substr(0,400)+"...";
      }

      return text;
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 40px;
    margin: auto;
    display: flex;
  }
  .desc {
    font-size: 12px;
  }
  .product-card {
    min-height: 355px;
  }
</style>>

</style>