<template>
  <div class="container">
    <span class="icon">
      <slot name="icon"></slot>
    </span>
    <span class="title">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  
</script>
<style lang="scss" scoped>
  .container{
    height: 40px;
    line-height: 40px;
    .icon{

    }
    .title{
      padding-left: 14px;
    }
  }
</style>
