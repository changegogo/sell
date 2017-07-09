<template>
	<div class="cartcontrol">
		<transition name="fade">
			<div class="cart-decrease icon-remove_circle_outline" 
				v-show="food.count>0"
				@click="decShop($event)">
			</div>
		</transition>	
		<transition name="fade">
			<div class="foodcount" v-show="food.count>0">
				{{food.count}}
			</div>
		</transition>
		<div class="cart-add icon-add_circle" @click="addShop($event)">
		</div>
	</div>
</template>

<script>
    import Vue from 'vue'
	export default {
		name: 'cartControl',
		props: {
			food: {
				type: Object,
				required: true
			}
		},
		created() {

		},
		methods: {
			addShop(event) {
				if(!event._constructed){
					return;
				}
				if(!this.food.count){
					Vue.set(this.food,'count', 1);
				}else{
					this.food.count++;
				}
			},
			decShop(event){
				if(!event._constructed){
					return;
				}
				this.food.count--;
			}
		}
	}
</script>

<style scoped>
	.cartcontrol {
		font-size: 0;
	}
	.cart-decrease, .cart-add {
		display: inline-block;
		font-size: 24px;
		line-height: 24px;
	}
	.foodcount {
		display: inline-block;
		vertical-align: top;
		margin-top: 6px;
		font-size: 10px;
		line-height: 24px;
		min-width: 12px;
		max-width: 24px;
		overflow: hidden;
		text-align: center;
		color: rgb(147, 153, 159);
	}
	.cart-decrease, .cart-add {
		padding: 6px;
	}
	.icon-remove_circle_outline, .icon-add_circle {
		color: rgb(0, 160, 220);
	}
	.fade-enter-active, .fade-leave-active {
	  transition: all .2s ease;
	}
	.fade-enter, .fade-leave-to {
	  opacity: 0;
	  transform: translate3d(24px,0,0) rotate(360deg);
	}
	
</style>