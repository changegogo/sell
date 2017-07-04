<template>
  <div id="app">
  	<!--头布局-->
    <MyHead></MyHead>
    <!--导航栏-->
    <div class="tab">
    	<div class="tab-item">商品</div>
    	<div class="tab-item">评价</div>
    	<div class="tab-item">商家</div>
    </div>
    <div id="content">主体内容</div>
  </div>
</template>

<script>
	import MyHead from './components/header/MyHead'
	export default {
		components: {
			MyHead
		}
	};
</script>

<style>
	#app {
		
	}
	.tab{
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	.tab .tab-item{
		flex: 1;
		text-align: center;
	}
</style>
