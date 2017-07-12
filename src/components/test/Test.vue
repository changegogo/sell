<template>
	<div id="test">
		<p>{{data}}</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				data: 'test'
			}
		},
		created(){
			this.$http({
				url: 'http://tp.feicuiedu.com:8081/recentServlet',
				method: 'get'
			}).then(function(res){
				this.data = res.data;
			});
		}
	}
</script>

<style>
</style>