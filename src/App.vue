<template>
  <div id="app">
  	<!--头布局-->
    <MyHead :headdata="seller"></MyHead>
    <!--导航栏-->
    <div class="tab">
    	<div class='tab-item'>
    		<router-link to="/goods">商品</router-link>
    	</div>
    	<div class='tab-item'>
    		<router-link to="/ratings" class='tab-item'>评价</router-link>
    	</div>
    	<div class='tab-item'>
    		<router-link to="/sellers" class='tab-item'>商家</router-link>
    	</div>
    </div>
    <div id="content">
		<router-view :seller="seller"></router-view>
    </div>
  </div>
</template>

<script>
	import MyHead from './components/header/MyHead'
	export default {
		data(){
			return {
				seller: {}
			}
		},
		components: {
			MyHead
		},
		methods: {
			getSeller(){
				this.$http({
					url: '/api/seller',
					method: 'get'
				}).then((res)=>{
					if(res.data.errno==0){
						this.seller = res.data.data;
					}
				},(res)=>{
					alert('seller error');
				});
			}
		},
		created(){
			this.getSeller();
		}
	};
</script>

<style>
	.tab{
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: relative;
	}
	.tab:after {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		content: '';
		border-top: 1px solid rgba(7,17,27,0.1);
	}
	.tab .tab-item{
		flex: 1;
		text-align: center;
	}
	.tab-item>a {
		display: block;
		font-size: 14px;
	}
	.router-link-active {
		color: rgb(240,20,20);
	}
	
</style>
