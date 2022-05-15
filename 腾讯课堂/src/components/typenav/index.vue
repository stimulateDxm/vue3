<template>
  <div class="wt">
  <div class="type-nav">
    <div class="paging" @mouseover="isnav=true" @mouseout="isnav=false"><i class=" iconfont icon-fenlei"></i>分类
      <ul class="ul1" v-show="isnav">
        <li class="list2"><h3><a>IT.互联网</a></h3> <p><a>前端开发</a><a>java</a></p><i class="iconfont icon-xiangyoujiantou"></i>
        </li>
        <li class="list2"><h3><a>IT.互联网</a></h3> <p><a>前端开发</a><a>java</a></p><i class="iconfont icon-xiangyoujiantou"></i></li>
        <li class="list2"><h3><a>IT.互联网</a></h3> <p><a>前端开发</a><a>java</a></p><i class="iconfont icon-xiangyoujiantou"></i></li>
        <li class="list2"><h3><a>IT.互联网</a></h3> <p><a>前端开发</a><a>java</a></p><i class="iconfont icon-xiangyoujiantou"></i></li>
        <li class="list2"><h3><a>IT.互联网</a></h3> <p><a>前端开发</a><a>java</a></p><i class="iconfont icon-xiangyoujiantou"></i></li>
        <ul>
          <li><h3><a>前端开发</a></h3><p><a>前端零基础</a><a>前端进阶</a><a>其他</a></p></li>
          <li><h3><a>前端开发</a></h3><p><a>前端零基础</a><a>前端进阶</a><a>其他</a></p></li>
          <li><h3><a>前端开发</a></h3><p><a>前端零基础</a><a>前端进阶</a><a>其他</a></p></li>
          <li><h3><a>前端开发</a></h3><p><a>前端零基础</a><a>前端进阶</a><a>其他</a></p></li>
          <li><h3><a>前端开发</a></h3><p><a>前端零基础</a><a>前端进阶</a><a>其他</a></p></li>
          <li><h3><a>前端开发</a></h3><p><a>前端零基础</a><a>前端进阶</a><a>其他</a></p></li>
          <li><h3><a>前端开发</a></h3><p><a>前端零基础</a><a>前端进阶</a><a>其他</a></p></li>
        </ul>
      </ul>

    </div>

  </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue"
export default {
  name: 'TypeNav',
  setup(){
    let t=reactive({
      isnav: false
    } )
return{
      ...toRefs(t)
}
  }
}
</script>

<style scoped lang="less">
li{
  list-style: none;
}
.wt{
  position: relative;
  width: 1200px;
  margin: 0 auto;

}

.type-nav{
  width: 1200px;
  height: 900px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: -300px;
  //分类
  .paging {
    .icon-fenlei{
      font-size: 35px;
      position: absolute;
      top: 2px;
      left: -40px;
    }
    position: absolute;
    top: -82px;
    line-height: 80px;
    left: 280px;
    font-size: 20px;

//二级下拉
  .ul1{
    z-index: 99;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    position: absolute;
    left: -105px;
    top: 82px;
    &:hover ul{
      display: block;
    }

    //三级
    ul{
      display: none;
      width: 750px;
      height: 7500px;
      background-color: white;
      border: 1px solid #ccc;
      box-shadow: 10px 10px 10px rgba(150,150,150,0.5 );
      position: absolute;
      left: 220px;
      top: -1px;
      li{
        display: flex;
        flex-wrap: nowrap;
        line-height: 50px;
        h3{
          margin: 10px;
          margin-right: 40px;
          font-size: 18px;
        }
        p{
          margin: 10px 5px;
          font-size: 16px;
          opacity: 0.8;
          a{
            margin-right: 25px;
          }
        }
      }
    }
    &::after{
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px;
      position: absolute;
      left: 100px;
      top: -7px;
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
     left: 100px;
     top: -8px;
     border-color: transparent  transparent #ccc;
   }
  .list2{
    position: relative;
    width: 200px;
    height: 50px;
    padding: 10px;
    border: 1px solid #ccc;


    h3{
      font-size: 16px;
      margin-top: -25px;
    }
    p{
      font-size: 14px;
      margin-top:-55px;
      //margin-top: 8px;
      color: #666666;
      a{
        margin-right: 20px;

      }
    }
    .icon-xiangyoujiantou{
      position: absolute;
      right: 20px;
      top: -10px;
      font-size: 12px;
    }

  }
  }
}
}


</style>
