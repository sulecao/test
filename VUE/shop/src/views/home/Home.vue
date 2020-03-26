<template>
  <div id="home">
  home
  <nav-bar>
    <div class="hmoe-nav" slot="center">首页</div>
  </nav-bar>
  <!-- .native 监听组件根元素事件 -->
  <!-- ref重复怎么办？ -->
<return-top ></return-top>

 <div class="one-good" v-for="(item,index) in goodslist" :key="index" @click="detail(item)">
     {{item.name}}
     {{item.price}}
 </div>
  </div>
</template>

<script>

import NavBar from 'components/NavBar'
import ReturnTop from 'components/content/ReturnTop'
// import {getHomeMultidata} from 'network/home.js'
export default {
  name: "Home",
  components: {
    NavBar,ReturnTop
  },
  data(){
    return{
      goodslist:[]
    }
  },
  methods:{
    detail(item){
      this.$router.push(`detail/${item.id}`)
    }
  },
  mounted(){
    console.log(this.$bus);
    

    for(let i =1;i<100;i++){
    this.goodslist.push({
        id:i,
        name: '商品'+i,
        price: Math.floor(Math.random()*100)
      })
    }
    
    
// getHomeMultidata().then(res=>{
//   console.log(res)
// })
  }
};
</script>
<style scoped>
.one-good{
  width: 50%;
  height: 100px;
  background-color: pink;

}
.hmoe-nav{
  text-align: center;
}
</style>
