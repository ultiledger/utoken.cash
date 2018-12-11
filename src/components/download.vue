<template>
  <div class="container">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default{
  }
</script>
<style lang="scss" scoped>
  @import '~assets/scss/_variables.scss';
  .container{
    border-radius: 30px;
    display: inline-block;
    background: $download-color;
    .icon{
      height: 50px;
      line-height: 50px;
      float: left;
      padding-top: 12px;
      padding-left: 20px;
      margin-top: 3px;
    }
    .content{
      float: left;
      color: #fff;
      padding-top: 14px;
      padding-left: 10px;
      height: 30px;
      line-height: 30px;
      padding-right: 20px;
      margin-top: 4px;
    }
  }
</style>
