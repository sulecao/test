<template>
  <div class="Detail">
    导航栏 返回
    Detail</div>
</template>

<script>
export default {
  name: "Detail",
  data(){
      return{
          id:this.$route.params.id
      }
  },
  mounted(){
      console.log(this.id);
      
  },
  components: {
      
  }
};
</script>
