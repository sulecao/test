<template>
  <div id="home">
  home
  <nav-bar>
    <div class="hmoe-nav" slot="center">首页</div>
  </nav-bar>
 <div class="one-good" v-for="(item,index) in goodslist" :key="index" @click="detail(index)">
     {{item.name}}
     {{item.price}}
 </div>
  </div>
</template>

<script>

import NavBar from 'components/NavBar'
import {getHomeMultidata} from 'network/home.js'
export default {
  name: "Home",
  components: {
    NavBar
  },
  data(){
    return{
      goodslist:[{
        id:1,
        name: '商品1',
        price:98
      },
      {
        id:2,
        name: '商品2',
        price:198
      },{
        id:3,
        name: '商品3',
        price:298
      },{
        id:4,
        name: '商品4',
        price:398
      },{
        id:5,
        name: '商品5',
        price:498
      }
      
      
      ]
    }
  },
  methods:{
    detail(){

    }
  },
  mounted(){
getHomeMultidata().then(res=>{
  console.log(res)
})
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
