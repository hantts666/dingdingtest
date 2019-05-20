<template>
	<div class="container">
		<div class="header">
			<nut-navbar 
				@on-click-back="handleNavBack" 
				@on-click-title="title"
				@on-click-more="handleNavMore" 
				:leftShow="false" 
				:rightShow="false"
			>title</nut-navbar>
		</div>
		<div class="main">

		</div>
	</div>
</template>

<script>
	export default {
		name: 'pageA',
		data() {
			return {
				title:'pagea'
			}
		},
		methods: {
			handleNavBack() {
				
			},
			handleNavMore() {

			}
		},
		mounted () {
			console.log('pageA');
		},
	}
</script>

<style lang="scss" scoped>

</style>