<template>
  <div id="app">
		<keep-alive>
			<router-view/>
		</keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/reset.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}
</style>
