<template>
  <div id="headerImg">
    <el-row :guter="20">
      <!-- logo图片 start -->
      <el-col :span="12">
        <div class="grid-content">
          <h1>
            <img class="ca-logo" src='../assets/img_10109_0_8.png'><img class="st-logo" src='../assets/img_10109_0_7.png'>
          </h1>
        </div>
      </el-col>
      <!-- logo图片 end -->
      <el-col :span="6" :offset="6">
        <div class="grid-content userName">
          <img class="head-photo" src="../assets/img_10109_0_5.png"><a href="#"><p>User Name:VIVI</p></a>
        </div>
      </el-col>
    </el-row>
    <!-- 顶部导航栏 start -->
    <top-navbar></top-navbar>
    <!-- 顶部导航栏 end -->
  </div>
</template>
<script>
import topNavbar from './topNavbar'
export default {
  name: 'headerImg',
  components:{
    'top-navbar':topNavbar
  },
  data () {
    return {
    }
  }
};
</script>
<style scoped lang="less">
  @color: #fff;
  h1, h2 {
    font-weight: normal;
    margin:0px;
  }
  #headerImg{
    width:1050px;
    margin:auto;
    padding-top:4%;
    .el-row{
      padding-bottom:3%;
    }
    img{
      vertical-align: middle;
    }
    .ca-logo{
      width:60px;
    }
    .st-logo{
      width:168px;
      padding-left:12px;
    }
    .head-photo{
      width:25px;
      background-color:#fff;
      border-radius:26px;
    }
    .userName{
      float: right;
      line-height: 28px;
      padding-top:8px;
      a{
        color:@color;
        padding-left:8px;
        padding-top:5px;
        font-size:14px;
        letter-spacing: 0.48px;
        text-decoration: none;
        p{
          display: inline-block;
          vertical-align: middle;
          margin:0px;
          letter-spacing: .78px;
        }
      }
    }
  }
</style>