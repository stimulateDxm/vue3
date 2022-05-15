<template>

  <header>
    <h1><img src="../../../src/assets/logo.png"><a>腾讯课堂</a></h1>
    <div class="search">
        <div class="search-1" @click="issearchXia1()"> &nbsp;课程 <i class="iconfont icon-xiangxiajiantou"></i></div>
        <div class="search-1 search-1-xia" v-show="issearchXia"> &nbsp;机构</div>
        <div class="search-2"><input placeholder="搜索课程" type="text"></div>
        <div class="search-3"><i class="iconfont icon-sousuo"></i></div>
      </div>
      <ul class="header-ul">
        <li @mouseover="isulli1=true" @mouseuot="isulli1=false">入驻/合作
        <ul v-show="isulli1" >
          <li>个人入驻</li>
          <li>个人入驻</li>
          <li>个人入驻</li>
          <li>个人入驻</li>
        </ul>
        </li>
        <li @mouseover="isulli2=true" @mouseout="isulli2=false">客户端
        <ul v-show="isulli2">
          <li>app</li>
          <li>mac</li>
          <li>win</li>
        </ul>
        </li>
        <li><a>私信</a></li>
        <li><a>登录</a></li>
      </ul>
  </header>

</template>

<script>
import {reactive,toRefs} from  "vue"
export default {
  name: 'Header',
  setup(){
    let h=reactive({
      issearchXia:false,
      isulli1:false,
      isulli2:false,
    })
    h.issearchXia1 = ()=>{
     h.issearchXia=!h.issearchXia
    }
    return{
      ...toRefs(h)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.w() {
  width: 1200px;
  margin: 0 auto;
}


header {
  position: relative;
  height: 80px;
  .w();
  H1 {
    img{}
    width: 220px;
    height: 80px;
    line-height: 80px;
    a{
      position: absolute;
      top: 0px;
    }
  }


  .search {
    margin-left: 50px;
    position: absolute;
    left: 300px;
    top: 15px;
    width: 350px;
    height: 50px;
    display: flex;
    flex-wrap: wrap;

    .search-1 {
      width: 58px;
      height: 50px;
      border: 1px solid #ccc;
      background-color: white;
      line-height: 50px;

    }
    .search-1-xia{
      position: absolute;
      top: 51px;
      left: 0;
      z-index: 5;
    }
    .search-2 {
      width: 238px;
      border: 1px solid #ccc;
      border-left: 0 solid #ffffff;
      input {
        width: 230px;
        margin-left: 10px;
        line-height: 48px;
        border: 1px solid #fff;
      }

    }

    .search-3 {
      border: 1px solid #ccc;
      width: 48px;
      height: 50px;
      background-color: #6ca1c9;

      i {
        font-size: 35px;
        line-height: 50px;
        color: white;
        margin-left: 5px;
      }
    }
  }
  //下拉样式
  .u(@l:0,@t:50px){
    position: absolute;
    left: @l;
    top: @t;
    width: 120px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 99;
    &::after{
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px;
      position: absolute;
      left: 53px;
      top: -8px;
      border-color: transparent  transparent white;
      z-index: 100;
    }
    &::before{
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px;
      position: absolute;
      left: 53px;
      top: -9px;
      border-color: transparent  transparent #ccc;
    }

    li{
      margin: 0 20px;
      line-height: 40px;
    }

  }
//header右边列表
  .header-ul {
    position: absolute;
    top: 30px;
    right: 0;
    display: flex;
    flex-wrap: nowrap;
  li{
  margin-left: 20px;
}
    //入驻合作
    li:nth-child(1) {
     ul{
       .u(-10px);

     }
      }
//客户端
    li:nth-child(2){
      ul{
   .u(80px)
      }
    }
  }

}

</style>
