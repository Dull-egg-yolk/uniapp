<template>
  <view class="doc-container">
    <view>{{ txt }}</view>
    <view style="width: 100%;display: flex;">
      <image style="width: 400rpx;
      height: 600rpx;
      margin: 0 auto;"
        src="https://staticweb.jiudianhui.com.cn/ims/production/app/help_text_qr_code.jpeg"
        mode="scaleToFill"
      />
    </view>
  </view>
</template>
<script>
import { getAppHelp } from '@/api/user'

export default {
  components: {
  },
  data() {
    return {
      txt: '',
    };
  },
  methods: {
    async getAppHelp() {
      const res = await getAppHelp()
      console.log(res)
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.txt = res.Data.Value
      }
    }
  },
  mounted() {
    this.getAppHelp()
  }
};
</script>
<style scoped>
.doc-container {
  padding: 20rpx 50rpx;
  white-space: pre-line;
  box-sizing: border-box;
  width: 100%;
}
</style>




