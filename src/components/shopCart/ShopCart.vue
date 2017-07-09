<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{logoHighLight: totalCount>0}"> 
						<span class="icon-shopping_cart" :class="{'icon-shopping_cart_font': totalCount>0}"></span>
					</div>
					<div class="num" v-show="totalCount>0">
						{{totalCount}}
					</div>
				</div>
				<div class="price" :class="{pricehighLight: totalPrice>0}">￥{{totalPrice}}</div>
				<div class="desc">另需配送费￥{{deliveryprice}}元</div>
			</div>
			<div class="content-right">
				<div class="pay" :class="{enough: payDesc==='去结算'}">
					{{payDesc}}
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		props: {
			deliveryprice: {
				type: Number,
				required: true
			},
			minprice: {
				type: Number,
				required: true
			},
			selectFoods: {
				type: Array,
				default(){
					return []
				},
				required: true
			}
		},
		computed: {
			totalPrice() {
				let total = 0;
				this.selectFoods.forEach((food)=>{
					total += food.price * food.count;
				});
				return total;
			},
			totalCount() {
				let count = 0;
				this.selectFoods.forEach(function(food){
					count += food.count;
				});
				return count;
			},
			payDesc() {
				if(this.totalPrice===0){
					return `￥${this.minprice}元起送`;
				}else if(this.totalPrice<this.minprice){
					return `还差￥${this.minprice-this.totalPrice}元起送`;
				}else{
					return '去结算';
				}
			}
		}
	}
</script>

<style scoped>
	.shopcart {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 50;
		width: 100%;
		height: 48px;
	}
	.content {
		display: flex;
		background: #141d27;
		font-size: 0;
	}
	.content-left {
		flex: 1;
		color: rgba(255,255,255,0.4);
	}
	.logo-wrapper {
		display: inline-block;
		vertical-align: top;
		position: relative;
		top: -10px;
		margin: 0 12px;
		padding: 6px;
		width: 56px;
		height: 56px;
		box-sizing: border-box;
		border-radius: 50%;
		background: #141d27;
	}
	.num {
		position: absolute;
		top: 0;
		right: 0;
		width: 24px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		border-radius: 16px;
		font-size: 9px;
		font-weight: 700;
		color: #fff;
		background: rgb(240, 20, 20);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
	}
	.logo {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #2b343c;
		text-align: center;
	}
	.logoHighLight {
		background: rgb(0, 160, 220);
	}
	.icon-shopping_cart {
		line-height: 44px;
		font-size: 24px;
		color: #80858a;
	}
	.icon-shopping_cart_font {
		color: #fff;
	}
	.price {
		display: inline-block;
		vertical-align: top;
		line-height: 24px;
		margin-top: 12px;
		box-sizing: border-box;
		padding-right: 12px;
		border-right: 1px solid rgba(255,255,255,0.1);
		font-size: 16px;
		font-weight: 700;
	}
	.pricehighLight {
		color: #fff;
	}
	.desc {
		display: inline-block;
		vertical-align: top;
		line-height: 24px;
		margin: 12px 0 0 12px;
		font-size: 10px;
	}
	.content-right {
		flex: 0 0 105px;
		width: 105px;
		color: rgba(255,255,255,0.4);
		background: #2b333b;
	}
	.pay {
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 12px;
		font-weight: 700;
		background: #2b333b;
	}
	.enough {
		background: #00b43c;
		color: #fff;
	}
</style>