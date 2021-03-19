<template>
  <div id="leftMenu">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
        <el-button style="float: right; color: #fff; padding: 3px 0" type="text"
          >更多</el-button
        >
      </div>
      <div v-for="o in playList" :key="o" class="text item">
        <span class='el-icon-video-camera'></span><router-link v-bind="{ to: '/videoPlay?title=' + o.title}">{{o.title}}</router-link> 管理员: {{o.create_time}}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'VideoCard',
  props: {
    title: {
      type: String
    },
    playList: {
      type: []
    }
  },
  data () {
    return {
      videoList: [
        {
          title: '[数据库原理与应用视频教程]',
          data: '2018-12-02'
        },
        {
          title: '[数据库与关系数据库]',
          data: '2018-12-02'
        },
        {
          title: '[了解数据库原理]',
          data: '2018-12-02'
        },
        {
          title: '[安装SQL Server数据库]',
          data: '2018-12-02'
        },
        {
          title: '[SQL Server 简介]',
          data: '2018-12-02'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style>
#leftMenu {
  width: 600px;
  margin-right: 10px;
  padding-top: 5px;
}
#leftMenu .clearfix {
  color: #fff;
}
.el-card .el-card__header {
  background: #489bdd;
}
.el-card .el-card__body {
  height: 340px;
  overflow-y: scroll;
}
</style>
