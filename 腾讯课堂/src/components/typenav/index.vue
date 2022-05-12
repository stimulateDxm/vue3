<template>
  <div class="type-nav">
    <ul>
      <li><dt><a>IT.互联网</a></dt> <dd><a>前端开发</a><a>java</a></dd><i class="iconfont icon-xiangyoujiantou"></i></li>
      <li><dt><a>IT.互联网</a></dt> <dd><a>前端开发</a><a>java</a></dd><i class="iconfont icon-xiangyoujiantou"></i></li>
      <li><dt><a>IT.互联网</a></dt> <dd><a>前端开发</a><a>java</a></dd><i class="iconfont icon-xiangyoujiantou"></i></li>
      <li><dt><a>IT.互联网</a></dt> <dd><a>前端开发</a><a>java</a></dd><i class="iconfont icon-xiangyoujiantou"></i></li>
      <li><dt><a>IT.互联网</a></dt> <dd><a>前端开发</a><a>java</a></dd><i class="iconfont icon-xiangyoujiantou"></i></li>
      <li><dt><a>IT.互联网</a></dt> <dd><a>前端开发</a><a>java</a></dd><i class="iconfont icon-xiangyoujiantou"></i></li>
      <li><dt><a>IT.互联网</a></dt> <dd><a>前端开发</a><a>java</a></dd><i class="iconfont icon-xiangyoujiantou"></i></li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'TypeNav',
}
</script>

<style scoped lang="less">
li{
  list-style: none;
}
.type-nav{
  position: relative;
  left: 155px;
  top: -301px;
  //border: 1px solid #ccc;
  z-index: 99;
  width: 232px;
  background-color: white;
  ul{
    width: 232px;
    display: flex;
    flex-wrap: wrap;
    &::after{
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px;
      position: absolute;
      left: 50%;
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
     left: 50%;
     top: -8px;
     border-color: transparent  transparent #ccc;
   }
  li{
    position: relative;
    width: 200px;
    height: 50px;
    padding: 10px;
    border: 1px solid #ccc;


    dt{
      font-size: 16px;
    }
    dd{
      font-size: 14px;
      margin-top: 8px;
      color: #666666;
      a{
        margin-right: 20px;

      }
    }
    i{
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 12px;
    }

  }
  }
}

</style>
