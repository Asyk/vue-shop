<template>
  <div id="app">
    <header>
      <Navbar />
      <!-- <HeaderSlider /> -->
    </header>
    <main>
      <b-container>
        <!-- <TopFilter /> -->
        <div class="mt-5">
          <router-view/>
        </div>
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