<template>
  <view class="doc-container">
    {{ txt }}
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
}
</style>




