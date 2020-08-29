<template>
	<div id="contentForm">
		<div><h2>CUSTOMER PROFILE DETAILS</h2></div>
		<div class="content-form">
			<div class="page-content">
				<!-- 左边侧边导航栏 -->
				<left-menu></left-menu>
				<!-- 中间分割线 -->
				<div class="middle-line"></div>
				<!-- 中间表单 -->
				<!-- 路由匹配到的组件将显示在这里 -->
				<!-- <router-view></router-view> -->
				<!-- <content-shipment></content-shipment> -->
				<!-- <content-legal></content-legal> -->
				<!-- 右边斜线 -->
				<right-slash></right-slash>
				<!-- 图片 -->
				<div class="right-bottom-img">
					<img src='../assets/img_10109_0_8.png'/>
				</div>
				<router-link :to="path" v-if="up" class="icono-caretUp"></router-link>
				<router-link :to="droppath" v-if="drop" class="icono-caretDown"></router-link>
			</div>
		</div>
	</div>
</template>
<script>
import leftMenu from './leftMenu'
import rightSlash from './rightSlash'
import contentLegal from './contentLegal'
import contentShipment from './contentShipment'
import contentBasic from './contentBasic'
import contentAddress from './contentAddress'
import contentContract from './contentContract'
import contentSegment from './contentSegment'
import contentNotifica from './contentNotifica'
	export default{
		name:'contentForm',
		data(){
			return{
				up:'',
				drop:'',
				path:'',
				droppath:''
			}
		},
		components:{
			'left-menu':leftMenu,
			'right-slash':rightSlash,
			'content-legal':contentLegal,
			'content-shipment':contentShipment,
			'content-basic':contentBasic,
			'content-address':contentAddress,
			'content-contract':contentContract,
			'content-segment':contentSegment,
			'content-notifica':contentNotifica,
		},
		mounted:function(){
			this.setArrow();//需要触发的函数
		},
		methods:{
			setArrow(){//刷新的时候调用一次，用来初始获取路由的值
				if(this.$route.meta.index==7){
					this.up=false;
					this.drop=true;
				}else if(this.$route.meta.index==1){
					this.up=true;
					this.drop=false;
				}else{
					this.up=true;
					this.drop=true;
				}

				if(this.$route.meta.index==6){
					this.path='/contentLegal';
					this.droppath='/contentBasic';
				}
				else if(this.$route.meta.index==5){
					this.path='/contentShipment';
					this.droppath='/contentAddress';
				}
				else if(this.$route.meta.index==4){
					this.path='/contentBasic';
					this.droppath='/contentContract';
				}
				else if(this.$route.meta.index==3){
					this.path='/contentAddress';
					this.droppath='/contentSegment';
				}
				else if(this.$route.meta.index==2){
					this.path='/contentContract';
					this.droppath='/contentNotifica';
				}
				else if(this.$route.meta.index==1){
					this.path='/contentSegment'
				}
				if(this.$route.meta.index==7){
					this.droppath='/contentShipment'
				}
			}
		},
		watch:{ //监听路由，意味着需要路由启动了才可以监听，在界面初始加载时监听的路由无变化，因此无法监听
			$route(to,from){
				if(this.$route.meta.index==7){
					this.up=false;
				}else{
					this.up=true;
				}
				if(to.meta.index==1){
					this.drop=false;
				}else{
					this.drop=true;
				}
				if(this.$route.meta.index==6){
					this.path='/contentLegal';
					this.droppath='/contentBasic';
				}
				else if(this.$route.meta.index==5){
					this.path='/contentShipment';
					this.droppath='/contentAddress';
				}
				else if(this.$route.meta.index==4){
					this.path='/contentBasic';
					this.droppath='/contentContract';
				}
				else if(this.$route.meta.index==3){
					this.path='/contentAddress';
					this.droppath='/contentSegment';
				}
				else if(this.$route.meta.index==2){
					this.path='/contentContract';
					this.droppath='/contentNotifica';
				}
				else if(this.$route.meta.index==1){
					this.path='/contentSegment'
				}
				if(this.$route.meta.index==7){ //获取当前路由的索引
					this.droppath='/contentShipment'
				}
			}
		}
	};
</script>
<style lang="less">
	#contentForm{
		width:1050px;
		margin: auto;
		h2{
			text-align: center;
			color:#fff;
			margin-top: 50px;
			margin-bottom: 65px;
			font-size: 26px;
			letter-spacing: 1.2px;
		}
		.content-form{
			height: 589px;
			background-color:#fff;
			// 表单整体布局
			.page-content{
				position: relative;
				padding-left: 345px;
				padding-right:293px;
			}
		}
		// 中间分割线
		.middle-line{
			width: 388px;
			position:absolute;
			top:295px;
			left:104px;
			opacity: 0.05;
			border: 1px solid #000000;
			transform: rotate(90deg);
		}
		//覆盖element的样式
		.el-form-item__label{
			color:#000;
			font-size: 16px;
		}
		// 输入框的下外边距
		.el-form-item--mini.el-form-item{
			margin-bottom: 28px;
		}
		// 输入框的左外边距+checkbox的左外边距
		.el-input--mini .el-input__inner,.el-checkbox{
			margin-left:30px;
		}
		// 覆盖checkbox的element样式
		.el-checkbox__inner{
			background-color:#000;
		}
		// checkbox的选择框的内部样式
		.el-checkbox__input.is-checked .el-checkbox__inner,
		.el-checkbox__input.is-checked+.el-checkbox__label,.is-foucs
		{
			border-color:#000;
			color:#000;
		}
		.el-checkbox__label{
			font-size: 16px;
			color:#000;
		}
		.el-row{
			margin-bottom:25px;
		}
		input[type='file']{
			border:0px;
			display:none;
			font-size: 8px;
		}
		.el-button{
			width: 80px;
			height: 28px;
			color:#fff;
			font-size: 12px;
			position:absolute;
			left:250px;
			top:0px;
			padding-top:7px;
			padding-left:14px;
			background: #161A1D;
			border:1px solid #161A1D;
			border-radius:10px;
		}
		// 上箭头样式
		.icono-caretUp{
		text-align: center;
		position: absolute;
		top:50px;
		right:500px;
		color: #000;
		}
		// 下箭头样式
		.icono-caretDown{
			text-align: center;
			position: absolute;
			top:500px;
			right:500px;
			color: #000;
		}
		// 右下角图片
		.right-bottom-img{
			img{
			width: 279px;
			height: 180px;
			position:absolute;
			top: 405px;
			right: 0px;
		}
		}
	}
</style>