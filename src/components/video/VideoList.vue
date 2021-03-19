<template>
  <router-link v-bind="{ to: '/videoPlay?id=' + item.id }">
    <div class="coursewrapper">
      <div class="coursewrapper__img">
        <img width="100px" :src="item.imgsrc" :title="item.title" />
      </div>
      <div class="coursewrapper__title">
        <span>
          {{ item.title }}
        </span>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
.coursewrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  &__img {
    padding-right: 10px;
  }
}
</style>
