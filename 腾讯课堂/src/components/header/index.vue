<template>

  <header>
    <h1><a>腾讯课堂</a></h1>
    <div class="search">
        <div class="search-1" @click="issearchXia1()"> &nbsp;课程 <i class="iconfont icon-xiangxiajiantou"></i></div>
        <div class="search-1 search-1-xia" v-show="issearchXia"> &nbsp;机构</div>
        <div class="search-2"><input placeholder="搜索课程" type="text"></div>
        <div class="search-3"><i class="iconfont icon-sousuo"></i></div>
      </div>
      <ul class="header-ul">
        <li>入驻/合作</li>
        <li>客户端</li>
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

@font-face {
  font-family: 'iconfont';  /* project id 3391629 */
  src: url('?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_3391629_thtvcmiqhqp.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_3391629_thtvcmiqhqp.woff') format('woff'),
  url('//at.alicdn.com/t/font_3391629_thtvcmiqhqp.ttf') format('truetype'),
  url('#iconfont') format('svg');
}

header {
  position: relative;
  height: 80px;
  .w();

  H1 {
    margin-left: 50px;
    width: 192px;
    height: 80px;
    line-height: 80px;
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

  .header-ul {
    position: absolute;
    top: 0;
    right: 0;

    li {
      float: left;
      margin: 30px 10px;
    }
  }

}

</style>
