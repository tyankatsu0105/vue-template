<template>
	<div id="app">
		<the-header />
		<main>
			<div class="container">
				<router-view />    
			</div>
		</main>
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
};
</script>
