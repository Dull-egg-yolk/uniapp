<template>
  <web-view :src="url"></web-view>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.example.com' // 要跳转的网址
    }
  },
  onLoad(options) {
    console.log(options.url);
    
    if (options.url) {
      this.url = decodeURIComponent(options.url);
    }
  }
}
</script>