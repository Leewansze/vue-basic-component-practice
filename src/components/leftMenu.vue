<template>
	<div>
		<div id="leftMenu">
			<ul id="side-nav">	
				<li><router-link to="/contentLegal">Legal Reference</router-link></li>
				<li><router-link to="/contentShipment">Shipment Roles</router-link></li>
				<li><router-link to="/contentBasic">Basic Information</router-link></li>
				<li><router-link to="/contentAddress">Address</router-link></li>
				<li><router-link to="/contentContract">Contract Person</router-link></li>
				<li><router-link to="/contentSegment">Segment</router-link></li>
				<li><router-link to="/contentNotifica">Notification</router-link></li>
			</ul>
		</div>
		<!-- 路由匹配到的组件将显示在这里 -->
		<transition :name="transitionName">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
</div>
</template>
<script>
	export default{
		name:'leftMenu',
		data(){
			return{
				tabPosition:'left',	
			};
		},
		methods:{
		},
		// 使用watch监听$router的变化
		watch:{
			$route(to,from){
				if(to.meta.index > from.meta.index){
	    		//设置动画名称
        	this.transitionName = 'slide-down';
				}
				else{
					this.transitionName ='slide-up';
				}
			}
		}
	};
</script>
<style scoped lang="less">
.slide-up-enter-active, 
.slide-up-leave-active, 
.slide-down-enter-active, 
.slide-down-leave-active { 
	will-change: transform; 
	transition: all 1100ms; 
	position: absolute; 
	} 
	.slide-up-enter { 
		opacity: 0; 
		transform: translate3d(0, -40%,0); 
	} 
	.slide-up-leave-active { 
		opacity: 0; transform: translate3d(0, 40%,0); 
	} 
	.slide-down-enter { 
		opacity: 0; 
		transform: translate3d(0,40% ,0); 
	} 
	.slide-down-leave-active{ 
		opacity: 0; 
		transform: translate3d(0, -40%,0); 
	}
	#leftMenu{
		position:absolute;
		left:50px;
		top:100px;
		color:#000;
		ul{
			li{
				font-size: 18px;
				font-weight: bold;
				letter-spacing: 1px;
				text-align: right;
				padding-bottom:28px;
				list-style: none;
				cursor: pointer;
				a:-webkit-any-link{
					text-decoration: none;
					color: #797a7b;
					position:relative;
				}
				a:-webkit-any-link:hover::after{
					position:absolute;
					top:10px;
					left:-15px;
					content:'';
					border:3px solid #161A1D;
					border-radius:3px;
				}
				.router-link-active,a:-webkit-any-link:hover{
					color:#000!important;
					font-weight:bolder;
				}
				.router-link-active::after{
					position:absolute;
					top:10px;
					left:-15px;
					content:'';
					border:3px solid #161A1D;
					border-radius:3px;
				}
			}
		}
	}
</style>