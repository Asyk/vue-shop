<template>
  <div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-container>
				<b-navbar-brand href="#">Vue-shop</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>

					<b-navbar-nav class="ml-auto">
						<b-nav-form v-on:submit.prevent="search">
							<b-form-input size="sm" class="mr-sm-2" placeholder="Введите название товара" v-model="searchValue"></b-form-input>
							<b-button size="sm" class="my-2 my-sm-0" type="submit">Поиск</b-button>
						</b-nav-form>
					</b-navbar-nav>
					
				</b-collapse>
			</b-container>
		</b-navbar>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Navbar',
	data() {
		return {
			searchValue: ''
		}
	},
  computed: mapGetters(["allProducts", "fetchLoading"]),
	methods: {
		...mapActions(["fetchProducts"]),
		search() {
			const params = {
        beer_name: this.searchValue
      };
      this.fetchProducts(params)
		}
	}
}
</script>

<style>

</style>