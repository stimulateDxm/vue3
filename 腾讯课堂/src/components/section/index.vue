<template>
  <section id="di"   @mouseenter="ulsEnter()" @mouseleave="ulsLeave()"    :class="'child'+a">
    <div class="w">
    <ul id="uls" >
      <li class="frist"
          v-for="(i) in imgs"
          :key="i"
      > <a><img :src="require('../../assets/'+a+'.png')" alt=""></a></li>

    </ul >
<!--      :style="{backgroundColor:ishover?'grba(0,0,0,0.7)':'grba(0,0,0,0.2)'}"-->
    <ol  class="ltgt"  v-show="ishover" >
      <li id="lt" @click="lt()"><i class="iconfont icon-xiangzuojiantou"></i></li>
      <li id="gt" @click="gt()"><i class="iconfont icon-xiangyoujiantou"></i></li>
    </ol>
      <div id="didi">
    <ul >
      <li v-for="i in imgs" :key="i" @click="dots(i)"   :style="{ opacity: i == a ? 0.9 : 0.2 }"></li>
    </ul>
      </div>
    <div class="mod-entry">
      <p>跟进你的学习进度</p>
      <div></div>
      <button>登录</button>
    </div>
    </div>

  </section>
</template>
<script>
import {reactive,toRefs,onMounted,onUpdated} from "vue"
export default {
  name: 'Section',
  setup(){
    let p=reactive({
      a:1,
      //定义切换图片数量
      imgs: [1, 2, 3, 4, 5],
      // 节流
      lock :true,
      ishover:false,
    })
    // 左右hover
    // p.hover=()=>{
    //   p.ishover=true
    // }
    //  点左切换上一张
    p.lt=()=> {
      if (!p.lock) return;
      p.lock = false;
      p.a--;
      if (p.a == 0) {
        p.a = 5;
      }
      setTimeout(() => {
        p.lock = true;
      }, 500);
    },
        //  点左切换下一张
        p.gt=()=> {
          if (!p.lock) return;
          p.lock = false;
          p.a++;
          if (p.a == 6) {
            p.a = 1;
          }
          setTimeout(() => {
            p.lock = true;
          }, 500);
        },
        //移入图片时停止播放
        p.ulsEnter=()=> {
        p.ishover=true
          clearInterval(p.timer);
        console.log("aa")
        },
        //移出图片时自动播放
        p.ulsLeave=()=> {
          p.ishover=false
          clearInterval(p.timer);
          p.timer = setInterval(() => {
            p.gt();
          }, 2000);
        },
        //   点击圆点切换到对应的图片
        p.dots=(i)=> {
          p.a= i
        }

    onMounted(()=>{
      //自动播放图片
      p.timer = setInterval(() => {
        p.gt();
      }, 2000)

    })
    onUpdated(()=>{

    })


    return{
      ...toRefs(p)
    }
  }

}
</script>

<style scoped lang="css">
section{
  position: relative;
  width: 100vw;
  height: 300px;
  z-index: 1;
}
/*图片ul*/
#uls{
  position: absolute;
  height: 300px;
  padding-left: 150px;
}
li {
  list-style: none;
}
/*图片li*/
.frist{
 position: absolute;
  top: 0;
  height: 300px;

}
/*轮播切换的背景颜色*/
.child1{
  background-color: white;
}
.child2{
background-color: #1761cc;
}
.child3{
  background-color: #2A1D27;
}
.child4{
background-color: #0D0D0D;
}
.child5{
  background-color: #202be9;
}
/*轮播图片*/
ul li img {
  position: relative;
  left: 0;
  top: 0;
  width: 710px;
  height: 300px;
  opacity: 0;
  z-index: 1;
}
ul li img:nth-child(1){
  opacity: 1;
}
/*左右轮播切换ol*/
ol {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
 margin-top: 150px;
}
/*左右轮播切换*/
ol li {
  background-color: rgba(0,0,0,0.2);
  width: 50px;
  height: 50px;
  line-height: 45px;
  border-radius: 50%;
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: -20px;
  z-index: 99;
}
ol li:nth-child(1){
  margin-right: 800px;
}
  /*左右轮播切换箭头*/
ol li i{
  font-size: 30px;
  color: #ffffff;
}
ol li:hover{
  background-color: rgba(0,0,0,0.5);

}
/*下部切换图片横线*/
#didi {
  position: relative;
  top: 280px;
  z-index: 2;
}
#didi ul{

  display: flex;
  flex-wrap: nowrap;
  margin-left: 350px;
}
#didi li {
  width: 43px;
  height: 3px;
  margin: 0 5px;
  background-color: #333;
  opacity: 0.5;
  z-index: 2;
}
#didi li:hover{
  opacity: 0.8;

}
.w{

  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.mod-entry{
  width: 220px;
  height: 260px;
  position: absolute;
  right: 0;
  top: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 10px 10px 10px rgba(0 0 0 0);
  z-index: 4;
}
.mod-entry p{
  color: #ccc;
  margin: 20px 46px;
}
.mod-entry button{
  position: absolute;
  bottom: 10px;
  background-color: #23b8ff;
  width: 200px;
  line-height: 50px;
  color: white;
  border: 1px solid #fff;
  margin-left: 10px;
}
.mod-entry button:hover{
  background-color: #15a7ec;

}
</style>
