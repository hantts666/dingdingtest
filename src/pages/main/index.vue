<template>
	<div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<nut-tabbar 
			@tab-switch="handleTabSwitch" 
			:tabbarList="tableList" 
			:bottom="true"
		>
		</nut-tabbar>
	</div>
</template>

<script>
import tableList from './tableList'
	export default {
		name: '_main',
		data() {
			return {
				tableList: tableList
			}
		},
		mounted () {

		},
		methods: {
			handleTabSwitch(list) {
				console.log(list)
				this.$router.push(list['router-path'])
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>