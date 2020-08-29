<template>
	<div id="topNavbar">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="Search Customer" name="first">SearchCustomer</el-tab-pane>
		    <el-tab-pane disabled></el-tab-pane>
		    <el-tab-pane label="Search Customer Group" name="second">Search Customer Group</el-tab-pane>
		    <el-tab-pane disabled></el-tab-pane>
		    <el-tab-pane label="Create Customer" name="third">Create Customer</el-tab-pane>
		    <el-tab-pane disabled></el-tab-pane>
		    <el-tab-pane label="Create Global 
		    Customer Group" name="fourth">Create Global Customer Group</el-tab-pane>
		    <el-tab-pane disabled></el-tab-pane>
		    <el-tab-pane label="Create Regional
		    Customer Group" name="fifth">Create Regional Customer Group</el-tab-pane>
  		</el-tabs>
  		<p>Customer Profile &lt;</p>
	</div>
</template>
<script>
	export default{
		name:'topNavbar',
		data(){
			return{
				activeName: 'third',
			};
		},
		 methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      }
	    }
	};
</script>
<style lang="less">
@color: #fff;
	#topNavbar{
		padding-left:7.3%;
		p{
			color:@color;
			font-size: 12px;
			letter-spacing: .86px;
		}
	}
/*清除重置element的样式*/
	.el-tabs__nav-wrap::after{
		display: none;
	}
	/*字体颜色*/
	.el-tabs__item{
		color:@color;
		font-size: 15px;
		height:45px;
		letter-spacing: 1px;
	}
	/*导航栏悬停鼠标*/
	.el-tabs__item:hover:not([label="|"]){
		color:@color;
		text-shadow:5px 0 20px rgba(255,255,255,0.4);
	}
	/*顶部导航栏active颜色*/
	.el-tabs__item.is-active{
		color:@color;
		text-shadow:5px 0 20px rgba(255,255,255,0.4);
	}
	/*顶部导航栏active-bar(就是下面的那条横杠)*/
	.el-tabs__active-bar{
		background-color:@color;
		height:3px;

	}
	.el-tabs__nav{
		white-space: pre-line;//允许换行符
	}
	// 导航栏的最后两个
	#tab-fourth,#tab-fifth{
		width:168px;
		line-height: 20px;
		text-align: center;
		position:relative;
		top:8px;
	}
	#tab-fifth{
		width:148px;
	}
	// 中间分割线
	#tab-1,#tab-3,#tab-5,#tab-7{
		padding:0px;
		background-color:#fff;
		width: 1px;
		height:38px;
		opacity: 0.35;
		position: relative;
		top:21px;
	}
	// 定位
	.el-tabs__content{
		color:@color;
		font-size: 12px;
		position:relative;
		top:29px;
		left:125px;
		letter-spacing: 0.86px;
	}
</style>