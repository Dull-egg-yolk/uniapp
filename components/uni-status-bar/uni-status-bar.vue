<template>
  <view
    :style="{ height: statusBarHeight }"
    class="uni-status-bar"><slot/></view>
</template>

<script>
var statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px'
export default {
  name: 'UniStatusBar',
  data () {
    return {
      statusBarHeight: statusBarHeight
    }
  }
}
</script>

<style>
.uni-status-bar {
	display: block;
	width: 100%;
	height: 20px;
	height: var(--status-bar-height);
}
</style>
