<template>
  <div id="app">
    <header>
      <Navbar />
      <HeaderSlider />
    </header>
    <main>
      <b-container>
        <TopFilter />
        <b-card class="mt-4">
          <b-card-body>
            <router-view/>
          </b-card-body>
        </b-card>
      </b-container>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/partials/Navbar.vue'
import HeaderSlider from '@/components/partials/HeaderSlider.vue'
import TopFilter from '@/components/partials/TopFilter.vue'

export default {
  components: {
    Navbar,
    HeaderSlider,
    TopFilter
  }
}
</script>