<template>
  <view class="privacy-container">
    <!-- 内容区域 -->
    <scroll-view class="content">
      <!-- 标题 -->
      <text class="main-title">九点荟库存管理 小程序隐私保护指引</text>
      <view class="section">
        <text class="intro-text">
          本指引是九点荟库存管理小程序开发者"北京九点荟信息科技有限公司"（以下简称"开发者"）为处理你的个人信息而制定。
        </text>
      </view>
      
      <!-- 1.信息的使用规则 -->
      <view class="section">
        <text class="section-title">1.信息的使用规则</text>
        <text class="section-content">
          1.1 开发者将会在本指引所明示的用途内使用收集的信息\n\n
          1.2 如开发者使用你的信息超出本指引目的或合理范围，开发者必须在变更使用目的或范围前，再次以应用内展示指引方式告知并征得你的明示同意。
        </text>
      </view>
      
      <!-- 2.信息对外提供 -->
      <view class="section">
        <text class="section-title">2.信息对外提供</text>
        <text class="section-content">
          2.1 开发者承诺，不会主动共享或转让你的信息至任何第三方，如存在确需共享或转让时，开发者应当直接征得或确认第三方征得你的单独同意。\n\n
          2.2 开发者承诺，不会对外公开披露你的信息，如必须公开披露时，开发者应当向你告知公开披露的目的、披露信息的类型及可能涉及的信息，并征得你的单独同意。
        </text>
      </view>
      
      <!-- 3.开发者处理的信息 -->
      <view class="section">
        <text class="section-title">3.开发者处理的信息</text>
        <view class="info-item">
          <text>· 为了给商品加上图片，扫码出入库，开发者将在获取你的明示同意后，访问你的摄像头。</text>
        </view>
        <view class="info-item">
          <text>· 为了区分用户身份，开发者将在获取你的明示同意后，收集你的手机号。</text>
        </view>
        <view class="info-item">
          <text>· 为了完善用户展示信息，开发者将在获取你的明示同意后，收集你的微信昵称、头像。</text>
        </view>
        <view class="info-item">
          <text>· 为了保存二维码等图片，开发者将在获取你的明示同意后，使用你的相册（仅写入）权限。</text>
        </view>
        <view class="info-item">
          <text>· 为了区分国内外客户，开发者将在获取你的明示同意后，收集你的位置信息。</text>
        </view>
        <view class="info-item">
          <text>· 开发者收集你选中的照片或视频信息，用于商品图片，扫码出入库。</text>
        </view>
        <view class="info-item">
          <text>· 开发者访问你的蓝牙，用于连接打印机。</text>
        </view>
        <view class="info-item">
          <text>· 开发者读取你的剪切板，用于复制数据。</text>
        </view>
      </view>
      
      <!-- 4.你的权益 -->
      <view class="section">
        <text class="section-title">4.你的权益</text>
        <text class="section-content">
          4.1 关于获取你的手机号、收集你选中的照片或视频、微信昵称、微信头像，你可以通过以下路径：小程序主页右上角"..." → "设置" → "小程序已获取的信息" → "管理" → "删除"。开发者承诺收到通知后将删除信息。法律法规另有规定的，开发者承诺将停止除存储和采取必要的安全保护措施之外的处理。\n\n
          4.2 关于你的个人信息，你可以通过以下方式与开发者联系，行使查阅、复制、更正、删除等法定权利。\n\n
          4.3 若你在小程序中注册了账号，你可以通过以下方式与开发者联系，申请注销你在小程序中使用的账号。在受理你的申请后，开发者承诺在十五个工作日内完成核查和处理，并按照法律法规要求处理你的相关信息。\n
          E-mail: ims@jiudianhui.com.cn
        </text>
      </view>
      
      <!-- 5.开发者对信息的存储 -->
      <view class="section">
        <text class="section-title">5.开发者对信息的存储</text>
        <text class="section-content">
          开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。
        </text>
      </view>
      
      <!-- 6.投诉渠道 -->
      <view class="section">
        <text class="section-title">6.投诉与建议</text>
        <text class="section-content">
          若你认为开发者未遵守上述约定，或有其他的投诉建议、或未成年人个人信息保护相关问题，可通过以下方式与开发者联系；或者向微信进行投诉。\n
          E-mail: ims@jiudianhui.com.cn
        </text>
      </view>
      
      <!-- 发布日期 -->
      <view class="date-section">
        <text>发布日期：2025年4月15日</text>
        <text>生效日期：2025年4月15日</text>
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
.privacy-container {
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
.main-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 15px 0;
  display: block;
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

.info-item {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-left: 10px;
  margin-bottom: 5px;
}

.intro-text {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  display: block;
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