<template>
	<div id="rightSlash">
		<ul>
			<li v-for="item in items">{{item.message}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'rightSlash',
		data(){
			return{
				items:[
					{message:''},
					{message:''},
					{message:''},
					{message:''},
					{message:''},
					{message:''},
					{message:''}
				]
			}

		}
	};
</script>
<style scoped lang="less">
	#rightSlash{
		position:absolute;
		top:48px;
		right: 35px;
		ul{
			margin: 0px;
		}
		li{
			width:29px;
			height: 1px;
			background: #161A1D;
			transform: rotate(22deg);
			margin-bottom:25px;
			opacity: 0.4;
			list-style: none;
		}
	}
</style>