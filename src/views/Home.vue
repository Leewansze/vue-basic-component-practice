<template>
  <div id="width">
    <Header class="header"></Header>
    <div class='section'>
      <router-view />
    </div>
    <!-- <footer-copyright class="footer"></footer-copyright> -->
  </div>
</template>

<script>
import contentForm from '../components/ContentForm'
import footerCopyright from '../components/FooterCopyright'
import Header from '../components/Header'
export default {
  components: {
    'content-form': contentForm,
    'footer-copyright': footerCopyright,
    Header
  },
  name: 'width',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
// 字体声明
@font-face {
  font-family: "PingFang-SC-W2";
  font-weight: normal;
  font-style: normal;
  src: url("../../static/PingFang-SC-W2.otf");
}
#width {
  font-family: "PingFang-SC-W2";
  display: flex;
  flex-direction: column;
  min-height: 100%;
  .header {
    flex: 0;
  }
  .section{
    flex: 1
  }
  .footer {
    flex: 0;
  }
}
</style>
