<template>
  <div class="tree-menu">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Ni-TreeMenu'
}
</script>

<style lang="less" scoped>
.tree-menu{
    width: 100%;
    background-color: #000;
    color: white;
}
</style>