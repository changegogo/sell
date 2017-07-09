<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuwrapper">
			<ul  class="ulMenuParent">
				<li v-for="(item, index) in goods" class="menu-item" 
					:class="{'current': currentIndex===index}" @click="selectMenu(index, $event)">
					<span class="text">
						<icon-type v-if="item.type>=0" :type='item.type'></icon-type>{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodwrapper">
			<ul>
				<li v-for="item in goods" class="food-list food-list-hook">
					<h1 class="title">{{item.name}}</h1>
					<ul class="ulfoodParent">
						<li v-for="food in item.foods" class="food-item">
							<div class="icon">
								<img width="57" height="57" :src="food.icon" />
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
								</div>
							</div>
							<div class="cartcontrol-wrapper">
								<cart-control :food="food"></cart-control>
							</div>
							
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shop-cart 
			:deliveryprice="Number.parseInt(seller.deliveryPrice)" 
			:minprice="Number.parseInt(seller.minPrice)"
			:selectFoods="selectFoods">
		</shop-cart>
	</div>
</template>

<script>
	import IconType from '../icontype/IconType'
	import ShopCart from '../shopCart/ShopCart'
	import CartControl from '../cartControl/CartControl'
	import BScroll from 'better-scroll'
	const STATUS = 200;
	export default {
		data(){
			return {
				goods: [],
				listHeight: [],
				scrollY: 0
			}
		},
		components: {
			IconType,
			ShopCart,
			CartControl
		},
		props: {
			seller: {
				type: Object
			}
		},
		created(){
			this.$http.get('/api/goods').then(function(res){
				if(res.status === STATUS){
					this.goods = res.data.data;
					this.$nextTick(()=>{
						this._initScroll();
						this._calculateHeight();
					});
				}
			});
		},
		computed:{
			currentIndex(){
				for(let i=0;i<this.listHeight.length;i++){
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i+1];
					if(!height2 || this.scrollY>=height1 && this.scrollY<height2){
						return i;
					}
				}
				return 0;
			},
			selectFoods() {
				let foods = [];
				this.goods.forEach((good)=>{
					good.foods.forEach((food)=>{
						if(food.count){
							foods.push(food);	
						}
					});
				});
				return foods;
			}
		},
		methods: {
			_initScroll() {
				this.menuScroll = new BScroll(this.$refs.menuwrapper, {
					click: true
				});
				this.foodScroll = new BScroll(this.$refs.foodwrapper, {
					click: true,
					probeType: 3
				});
				this.foodScroll.on('scroll', (pos)=>{
					this.scrollY = Math.abs(Math.round(pos.y));
				});
			},
			_calculateHeight(){
				let foodList = this.$refs.foodwrapper.getElementsByClassName('food-list-hook');
				let height = 0;
				this.listHeight.push(height);
				for(let i=0;i<foodList.length;i++){
					let item = foodList[i];
					height += item.clientHeight;
					this.listHeight.push(height);
				}
			},
			selectMenu(index, event){
				if(event._constructed){
					let foodList = this.$refs.foodwrapper.getElementsByClassName('food-list-hook');
					let el = foodList[index];
					this.foodScroll.scrollToElement(el, 300);
				}
			}
		}
	}
</script>

<style scoped>
	.goods {
		display: flex;
		position: absolute;
		top: 174px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
	}
	.menu-wrapper {
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
	}
	.foods-wrapper {
		flex: 1;
	}
	.menu-item {
		display: table;
		width: 54px;
		height: 54px;
		width: 56px;
		line-height: 14px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
		padding: 0 12px;
	}
	.ulMenuParent li:last-child {
		border: 0;
	}
	.current {
		position: relative;
		margin-top: -1px;
		z-index: 10;
		background: white;
		font-weight: 700;
	}
	.text{
		display: table-cell;
		font-size: 12px;
		width: 56px;
		vertical-align: middle;
	}
	.title {
		padding-left: 14px;
		height: 26px;
		line-height: 26px;
		border-left: 2px solid #d9dde1;
		font-size: 12px;
		color: rgb(147,153,159);
		background: #f3f5f7;
	}
	.food-item {
		position: relative;
		display: flex;
		margin: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	.cartcontrol-wrapper {
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.ulfoodParent li:last-child {
		margin-bottom: 0;
		border-bottom: 0px solid rgba(7, 17, 27, 0.1);
	}
	.icon {
		flex: 0 0 57px;
		margin-right: 10px;
	}
	.content {
		flex: 1;
	}
	.name {
		margin: 2px 0 8px 0;
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		color: rgb(7,17,27);
	}
	.desc,.extra {
		line-height: 10px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.desc {
		line-height: 12px;
		margin-bottom: 8px;
	}
	.count{
		margin-right: 12px;
	}
	.price {
		font-weight: 700;
		line-height: 24px;
	}
	.now {
		margin-right: 8px;
		font-size: 14px;
		color: red;
	}
	.old {
		text-decoration: line-through;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}

	
	
	
</style>