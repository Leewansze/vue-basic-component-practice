<template>
  <div class="uploadVideo">
    <el-form :model="form" label-width="80px">
      <el-form-item label="视频标题">
        <el-input
          v-model="form.name"
          placeholder="请保持上传的视频文件名与视频标题一致"
        ></el-input>
      </el-form-item>
      <el-form-item label="" :label-width="formLabelWidth">
        <el-upload
          class="upload-demo"
          drag
          action="http://localhost:8085/api/uploadFile"
          :show-file-list="true"
          :limit="1"
          :before-upload="beforeUploadVideo"
          :on-success="handleVideoSuccess"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传video/mp4文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleClick">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'uploadVideo',
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    beforeUploadVideo (file) {
      var fileSize = file.size / 1024 / 1024 < 50
      if (
        [
          'video/mp4',
          'video/ogg',
          'video/flv',
          'video/avi',
          'video/wmv',
          'video/rmvb',
          'video/mov'
        ].indexOf(file.type) === -1
      ) {
        this.$message({
          message: '请上传正确的视频格式',
          type: 'warning'
        })
        return false
      }
      if (!fileSize) {
        this.$message({
          message: '视频大小不能超过50MB',
          type: 'warning'
        })
        return false
      }
    },
    handleClick () {
      this.$router.push({ path: '/' })
    },
    // onSubmit () {
    //   console.log('submit!')
    // },
    handleVideoSuccess (res, file) {
      console.log(file)
      // 获取上传图片地址
      this.videoFlag = false
      this.videoUploadPercent = 0
      if (res.status === 200) {
        this.videoForm.videoUploadId = res.data.uploadId
        this.videoForm.Video = res.data.uploadUrl
      } else {
        this.$message.error('视频上传失败，请重新上传！')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.uploadVideo {
  width: 1152px;
  margin: auto;
  padding-top: 5%;
}
</style>
