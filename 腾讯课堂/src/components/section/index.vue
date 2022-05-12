<template>
  <section id="di"   @mouseenter="ulsEnter()" @mouseleave="ulsLeave()">
    <ul id="uls">
      <li class="frist"  v-for="(i) in imgs" :key="i"> <a><img :src="require('../../assets/'+a+'.png')" alt=""></a></li>

    </ul>
    <ol>
      <li id="lt" @click="lt()">&lt;</li>
      <li id="gt" @click="gt()">&gt;</li>
    </ol>
    <ul id="didi">
      <li v-for="i in imgs" :key="i" @click="dots(i)"   :style="{ opacity: i == a ? 0.9 : 0.3 }"></li>
    </ul>
    <div class="mod-entry">
      <p>跟进你的学习进度</p>
      <div></div>
      <button>登录</button>
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
      imgs: [1, 2, 3, 4, 5]
    })
    //  点左切换上一张
    p.lt=()=> {
      console.log("111")
      if (p.lock) return;
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
          clearInterval(p.timer);
        },
        //移出图片时自动播放
        p.ulsLeave=()=> {
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
}
#di {
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 300px;
}

ul {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 300px;


}
li {
  list-style: none;
}
.frist{
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 300px;

}
.frist:first-child{
  background-color: white;
}
.frist:nth-child(2){
background-color: #1761cc;
}
.frist:nth-child(3){
  background-color: #2A1D27;
}
.frist:nth-child(4){
background-color: #0D0D0D;
}
.frist:nth-child(5){
  background-color: #202be9;
}
ul li img {
  position: absolute;
  left: 112px;
  top: 0;
  opacity: 0;
}
ul .frist img {
  opacity: 1;
}
img {
  width: 710px;
  height: 300px;
}
ol {
  width: 900px;
  height: 300px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 2;
  margin-left: 50px;

}
ol li {
  background-color: #000;
  width: 50px;
  height: 50px;
  line-height: 45px;
  border-radius: 50%;
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: -25px;
  opacity: 0.3;
}
ol li:hover {
  opacity: 0.6;
}
#didi {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  left: 30%;
  top: 94%;
  z-index: 2;
}
#didi li {
  width: 43px;
  height: 3px;
  margin: 0 5px;
  background-color: #333;
  opacity: 0.5;
}
#didi li:hover{
  opacity: 0.8;
}
.mod-entry{
  width: 220px;
  height: 260px;
  position: absolute;
  left: 980px;
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
  background-color: #91b5e9;
  width: 200px;
  line-height: 50px;
  color: white;
  border: 1px solid #fff;
  margin-left: 10px;

}
</style>
