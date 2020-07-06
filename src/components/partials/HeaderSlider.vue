<template>
  <div>
		<b-container>
			<b-carousel
				id="carousel-1"
				v-model="slide"
				:interval="4000"
				controls
				indicators
				background="#ababab"
				img-width="1024"
				img-height="300"
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<!-- Text slides with image -->
				<b-carousel-slide
					caption="First slide"
					text="Nulla vitae elit libero, a pharetra augue mollis interdum."
					img-src="https://picsum.photos/1024/300/?image=52"
				></b-carousel-slide>
			</b-carousel>
		</b-container>
  </div>
</template>

<script>
export default {
	name: 'HeaderSlider',
	data() {
		return {
			slide: 0,
			sliding: null
		}
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	}
}
</script>

<style>

</style>