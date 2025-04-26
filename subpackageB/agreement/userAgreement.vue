<template>
  <view class="agreement-container">
    
    <!-- 协议内容 -->
    <scroll-view class="content">
      <!-- 标题 -->
      <text class="main-title">九点荟库存管理 用户协议</text>
      
      <!-- 一、协议生效与适用范围 -->
      <view class="section">
        <text class="section-title">一、协议生效与适用范围</text>
        <text class="section-content">
          1.1 本协议是用户与九点荟库存管理小程序的开发者"北京九点荟信息科技有限公司"（以下简称"我们"或"小程序"）之间关于用户注册、登录、使用九点荟库存管理小程序（以下简称"本小程序"）所订立的协议。\n\n
          1.2 用户在使用本小程序前应当认真阅读并完全理解本协议，特别是其中所涉及的免除或限制我们责任的条款、对用户权利进行限制的条款、争议解决和法律适用等。如对本协议有任何疑问，请向我们的客服咨询。\n\n
          1.3 用户注册、登录、使用本小程序的，即表示用户完全理解并接受本协议的全部内容，并与我们达成一致，成为我们的用户。如果用户不同意本协议，则无法使用本小程序。
        </text>
      </view>
      
      <!-- 二、用户注册与登录 -->
      <view class="section">
        <text class="section-title">二、用户注册与登录</text>
        <text class="section-content">
          2.1 用户在使用本小程序前，需要进行注册和登录。用户应保证所提供的信息真实、准确、完整，如因用户提供的信息不真实、不准确、不完整或不合法者，用户需承担相应的法律责任。\n\n
          2.2 用户应当妥善保管自己的账号信息，不得将账号和密码转让、出借或以其他方式授权他人使用。如用户发现账号或密码被他人非法使用，应立即通知我们，我们将协助用户进行处理。
        </text>
      </view>
      
      <!-- 三、用户权利与义务 -->
      <view class="section">
        <text class="section-title">三、用户权利与义务</text>
        <text class="section-content">
          3.1 用户有权在遵守本协议的前提下，使用本小程序提供的各项服务。\n\n
          3.2 用户应遵守中华人民共和国的法律法规，不得利用本小程序进行任何违法、违规的行为。\n\n
          3.3 用户应尊重他人的知识产权和其他合法权益，不得利用本小程序侵犯他人的合法权益。
        </text>
      </view>
      
      <!-- 四、我们的权利与义务 -->
      <view class="section">
        <text class="section-title">四、我们的权利与义务</text>
        <text class="section-content">
          4.1 我们有义务为用户提供稳定、安全的小程序服务，保障用户在本小程序上的合法权益。\n\n
          4.2 我们有权对用户的行为进行监管，对于违反法律法规、本协议或侵犯他人权益的行为，我们有权采取相应的措施，包括但不限于警告、限制使用、封禁账号等。
        </text>
      </view>
      
      <!-- 五、隐私条款 -->
      <view class="section">
        <text class="section-title">五、隐私条款</text>
        <text class="section-content">
          5.1 我们非常重视用户的隐私保护，我们将根据《中华人民共和国个人信息保护法》等相关法律法规，制定并执行严格的隐私保护政策。\n\n
          5.2 我们收集、使用、储存、处理、共享、转让、公开披露用户的个人信息，将遵循合法、正当、必要原则，并经过用户的明确同意。\n\n
          5.3 我们将采取一切合理可行的措施，保护用户的个人信息不被未经授权的第三方获取、使用、修改、披露或损坏。
        </text>
      </view>
      
      <!-- 六、争议解决与法律适用 -->
      <view class="section">
        <text class="section-title">六、争议解决与法律适用</text>
        <text class="section-content">
          6.1 本协议的签订、执行和解释以及与本协议有关的争议，应适用中华人民共和国法律。如双方就本协议内容或其执行发生任何争议，应首先友好协商解决；协商不成的，任何一方均有权向我们的注册地法院提起诉讼。
        </text>
      </view>
      
      <!-- 发布时间 -->
      <view class="date-section">
        <text>发布时间：2025年4月15日</text>
        <text>生效时间：2025年4月15日</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack();
    }
  }
}
</script>

<style lang="scss" scoped>
.agreement-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.content {
  width: auto;
  flex: 1;
  padding: 15px;
  background-color: #fff;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.main-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 15px 0;
  display: block;
}

.section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.section-content {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  display: block;
  margin-bottom: 5px;
  white-space: pre-line;
}

.date-section {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px dashed #eee;
  text-align: right;
  
  text {
    display: block;
    font-size: 12px;
    color: #999;
    line-height: 1.5;
  }
}
</style>