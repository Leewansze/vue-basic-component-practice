<template>
	<div id="width">
		<header-img></header-img>
		<content-form></content-form>
		<footer-copyright></footer-copyright>
	</div>
</template>

<script>
import headerImg from './headerImg'
import contentForm from './contentForm'
import footerCopyright from './footerCopyright'
export default {
  components:{
    'header-img':headerImg,
    'content-form':contentForm,
    'footer-copyright':footerCopyright
  },
  name: 'width',
  data () {
    return {

    }
  }
};
</script>

<style scoped lang="less">
// 字体声明
	@font-face {
	  font-family: 'PingFang-SC-W2';
	  font-weight: normal;
	  font-style: normal;
	  src: url('../../static/PingFang-SC-W2.otf');
	}
	#width{
		width:1400px;
		background-color:#111113!important;
		// height: 1000px;
		margin: auto;
		font-family: 'PingFang-SC-W2';
    	background:url("../assets/img_10109_0_1.png")no-repeat,url("../assets/img_10109_0_0.png")no-repeat;
    	background-size:0%,100%;
    	background-attachment:inherit;
    	background-position:-21px 155px,0px -111px;
	}
</style>