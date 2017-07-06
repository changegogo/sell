<template>
	<div id="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="headdata.avatar" />
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{headdata.name}}</span>
				</div>
				<div class="description">{{headdata.description}}/{{headdata.deliveryTime}}分钟送达</div>
				<div class="support" v-if="headdata.supports">
					<span class="icon" :class="classMap[headdata.supports[0].type]"></span>
					<span class="text">{{headdata.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="headdata.supports" class="support-count" @click="detailShow">
				<span class="count">{{headdata.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bullentin-wrapper" @click="detailShow">
			<span class="bullentin-title"></span><span class="bullentin-text">{{headdata.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="headdata.avatar" width="100%" height="100%" />
		</div>
		<transition name="fade">
			<div class="detail" v-show="isShowDetail">
				<div class="detail-wrapper clearfix">
					<div class="detail-main">
						<h1 class="name">{{headdata.name}}</h1>
						<div class="starWrapper">
							<star :size="48" :score="headdata.score"></star>
						</div>
						<div class="title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<ul v-if="headdata.supports" class="supports">
							<li class="support-item" v-for="item in headdata.supports">
								<span class="icon" :class="classMap[item.type]"></span>
								<span class="text">{{item.description}}</span>
							</li>
						</ul>
						<div class="title">
							<div class="line"></div>
							<div class="text">商家公告</div>
							<div class="line"></div>
						</div>
						<div class="bulletin">
							<p class="content">{{headdata.bulletin}}</p>
						</div>
					</div>
				</div>
				<div class="detail-close" @click="detailShow">
					<i class="icon-close"></i>
				</div>
			</div>
		</transition>
		
		
	</div>
</template>

<script>
	import Star from '../star/Star.vue'
	export default {
		name: 'header',
		components: {
			Star
		},
		data(){
			return {
				classMap: ['decrease','discount','special','invoice','guarantee'],
				isShowDetail: false
			}
		},
		props: {
			headdata: {
				type: Object
			}
		},
		methods: {
			detailShow(){
				this.isShowDetail = !this.isShowDetail;
			}
		}
	}
</script>
	
<style>
	#header {
		background: rgba(7,17,27,0.5);
		color: white;
		position: relative;
		overflow: hidden;
	}
	.content-wrapper {
		position: relative;
		padding: 24px 12px 18px 24px;
		font-size: 0;
	}
	.content-wrapper .avatar{
		display: inline-block;
		vertical-align: top;
	}
	.content-wrapper .content{
		display: inline-block;
		margin-left: 16px;
	}
	.avatar img{
		border-radius: 2px;
	}
	.title {
		margin: 2px 0px 8px 0px;
	}
	.brand {
		display: inline-block;
		vertical-align: top;
		width: 30px;
		height: 18px;
		background-image: url(brand@2x.png);
		background-size: 30px 18px;
		background-repeat: no-repeat;
	}
	.name {
		margin-left: 6px;
		font-size:16px ;
		line-height: 18px;
		font-weight: bold;
	}
	.description {
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.support .icon{
		display: inline-block;
		vertical-align: top;
		width: 10px;
		height: 10px;
		margin-right: 4px;
		background-size: 10px 10px;
		background-repeat: no-repeat;
	}
	.text {
		line-height: 12px;
		font-size: 10px;
	}
	.decrease {
		background-image: url(decrease_1@2x.png);
	}
	.discount {
		background-image: url(discount_1@2x.png);
	}
	.special {
		background-image: url(special_1@2x.png);
	}
	.invoice {
		background-image: url(invoice_1@2x.png);
	}
	.guarantee {
		background-image: url(guarantee_1@2x.png);
	}
	.support-count {
		position: absolute;
		right: 12px;
		bottom: 14px;
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		background: rgba(0,0,0,0.2);
		text-align: center;
	}
	.count{
		vertical-align: top;
		font-size: 12px;
	}
	.icon-keyboard_arrow_right {
		font-size: 12px;
		margin-left: 2px;
		line-height: 24px;
	}
	.bullentin-wrapper {
		position: relative;
		background: red;
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background: rgba(7,17,27,0.2);
	}
	.bullentin-title {
		display: inline-block;
		vertical-align: top;
		margin-top: 8px;
		width: 22px;
		height: 12px;
		background-size: 22px 12px;
		background-image: url(bulletin@2x.png)
	}
	.bullentin-text {
		vertical-align: top;
		font-size: 12px;
		margin:0 4px;
	}
	.bullentin-wrapper .icon-keyboard_arrow_right{
		position: absolute;
		font-size: 12px;
		right: 12px;
		top: 4px;
	}
	.background {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
	}
	.detail {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: rgba(7,17,27,0.8);
		backdrop-filter: blur(10px);
	}
	
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	  opacity: 0
	}
	
	.detail-wrapper {
		min-height: 100%;
		width: 100%;
	}
	.detail-main {
		margin-top: 64px;
		padding-bottom: 64px;
	}
	.detail-main .name{
		text-align: center;
		font-size: 16px;
		color: rgb(255,255,255);
		line-height: 16px;
		font-weight: 700;
	}
	.detail-close {
		position: relative;
		width: 32px;
		height: 32px;
		margin: -64px auto 0 auto;
		clear: both;
		font-size: 32px;
	}
	.starWrapper {
		margin-top: 18px;
		padding: 2px 0;
		text-align: center;
	}
	.detail-main .title{
		display: flex;
		width: 80%;
		margin: 28px auto 24px auto;
	}
	.detail-main .title .line {
		flex: 1;
		position: relative;
		top: -6px;
		border-bottom: 1px solid rgba(255,255,255,0.2);
	}
	.detail-main .title .text{
		padding: 0 12px 0 12px;
		font-weight: 700;
		font-size: 14px;
	}
	.supports {
		width: 80%;
		margin: 0 auto;
	}
	.support-item{
		padding: 0 12px;
		margin-bottom: 12px;
		font-size: 0;
	}
	.support-item:last-child {
		margin-bottom: 0;
	}
	.support-item .icon {
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: top;
		margin-right: 6px;
		background-size: 16px 16px;
		background-repeat: no-repeat;
	}
	.support-item .text {
		line-height: 16px;
		font-size: 12px;
	}
	.bulletin {
		width: 80%;
		margin: 0 auto;
	}
	.bulletin .content {
		padding: 0 12px;
		font-size: 12px;
		font-weight: 200;
		line-height: 24px;
	}
</style>