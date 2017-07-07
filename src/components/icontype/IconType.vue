<template>
	<span class="icon" :class="classMap[type]"></span>
</template>

<script>
	export default {
		name: 'icontype',
		data(){
			return {
				classMap: ['decrease','discount','special','invoice','guarantee']
			}
		},
		props: {
			type: Number
		}
		
	}
</script>

<style scoped>
	.icon{
		display: inline-block;
		vertical-align: top;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
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
</style>