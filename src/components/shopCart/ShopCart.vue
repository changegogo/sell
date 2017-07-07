<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo">
						<span class="icon-shopping_cart"></span>
					</div>
				</div>
				<div class="price">￥{{totalPrice}}</div>
				<div class="desc">另需配送费￥{{deliveryprice}}元</div>
			</div>
			<div class="content-right">
				<div class="pay">
					￥{{minprice}}元起送
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
				require: true
			},
			minprice: {
				type: Number,
				require: true
			},
			selectFoods: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				
			}
		},
		computed: {
			totalPrice(){
				let total = 0;
				this.selectFoods.forEach((food)=>{
					total += food.price * food.count;
				});
				return total;
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
	.logo {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #2b343c;
		text-align: center;
	}
	.icon-shopping_cart {
		line-height: 44px;
		font-size: 24px;
		color: #80858a;
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
	}
</style>