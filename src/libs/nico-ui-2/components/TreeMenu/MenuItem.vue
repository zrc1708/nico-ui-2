<template>
  <div class="menu-item">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Ni-MenuItem'
}
</script>

<style lang="less" scoped>
.menu-item{
    height: 50px;
    text-align: center;
    line-height: 50px;
}
</style>