<template>
  <view class="doc-container">
    {{ txt }}
  </view>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      txt: 'iOS系统 \n\n 第一步：点击右上角"..."\n 第二步：选择"添加到桌面" \n第三步：在Safari中点击分享按钮，选择"添加到主屏幕" \n\n Android系统 \n\n 点击右上角"···"或"⋮"菜单\n 第二步：选择"添加到主屏幕" \n第三步：确认添加即可完成'
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style scoped>
.doc-container {
  padding: 20rpx 50rpx;
  white-space: pre-line;
}
</style>




