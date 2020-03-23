<template>
  <div id="app">
    <router-view></router-view>
    <van-grid id = 'bottom'>
      <van-grid-item icon="photo-o" to="/" text="首页" />
      <van-grid-item icon="photo-o" to="/category" text="分类" />
      <van-grid-item icon="photo-o" to="/cart" text="购物车" />
      <van-grid-item icon="photo-o" to="/me" text="我的" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#bottom{
  position: fixed;
  height: 100px;
  width: 100%;
  bottom: 0;
}
</style>
