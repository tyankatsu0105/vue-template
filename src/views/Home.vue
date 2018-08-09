<template>
	<div>
		<transition appear>
			<h1 class="main-heading">{{title}}</h1>
		</transition>

		<img 
			:class="{show: loaded}" 
			src="@/assets/spinach.jpg" 
			alt="" 
			@load='loaded = true'>
	</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'トップ',
      loaded: false
    };
  },
  meta: [
    {
      name: 'description',
      content: 'ここにトップページの説明文が入ります。'
    },
    { property: 'og:title', content: 'トップページ' },
    {
      property: 'og:description',
      content: 'ここにトップページの説明文が入ります。'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://example.com' },
    { property: 'og:image', content: 'https://example.com/img/og.png' },
    { name: 'twitter:card', content: 'summary' }
  ]
};
</script>

<style lang="scss" scoped>
img {
  opacity: 0;
  transition: $tst-default * 2;
}
.show {
  opacity: 1;
}
</style>
