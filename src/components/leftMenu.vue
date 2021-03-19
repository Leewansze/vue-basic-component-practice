<template>
  <div id="leftMenu">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>信息介绍</span>
      </div>
       <div class="content">
         基于计算机网络技术与信息安全专业的“协同育人、专本一体化”教学资源库（简称“专本一体化”教学资源库）建设方案是以广东省教育厅
         《关于2016年开展高职院校与本科高校协同育人试点工作的通知》（粤教高函〔2016〕84号）为背景、以广东理工职业学院“专本一体化应
         用型人才培养试点项目”为依托，借助互联网技术与云计算技术，把职业信息、行业标准、课程标准、课程、教学视频、实训材料规范化为标准化的学习文件、
         为广大的教师、学生、企业用户创建一个共享性的学习平台，以此来提高教学质量，满足当今社会对于职业教育的需要，也是实现教育强国的一个重要举措。
       </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'leftMenu',
  data () {
    return {
      tabPosition: 'left'
    }
  },
  methods: {}
}
</script>
<style>
#leftMenu{
  width: 400px;
  margin-right: 10px;
}
#leftMenu .clearfix{
  color: #fff
}
.el-card .el-card__header {
  background: #489bdd;
  padding: 8px;
}

</style>
