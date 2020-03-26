<template>
  <div class="Detail">Detail</div>
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
