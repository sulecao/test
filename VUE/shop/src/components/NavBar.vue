<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot  name="center"></slot>
    </div>
    <div class="right">
      <slot  name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar{
    display: flex;
    height: 44px;
    background-color: pink;
}
.center{
    flex: 1;
}
.left{
    width: 50px;
}
.right{
    width: 50px;
}
</style>