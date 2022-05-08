<template>
  <div class="w">
    <section id="section">
      <canvas id="canvass" height="550" width="800">看到这行字就是因为你的浏览器没更新的结果</canvas>
      <button v-show="isgood" id="go" @click="good">开始</button>

    </section>
    <div class="selects">
      <div id="buts">
        <button id="stop" @click="over">结束</button>
        <button id="restart" @click="restart">重来</button>
      </div>
      <ol id="olnum" :class=olnum>
        <li id="over" class="i" v-show="isbook">游戏结束</li>
        <li id="num">完成的数量:{{ accomplish }}</li>
        <li id="miss">错过的数量:{{ missarr.length }}</li>
        <li id="imte" class="i" v-show="isbook">用时:{{time}}秒</li>
      </ol>
      <div class="hints" v-show="ishints">
      </div>
      <span class="hint" v-show="ishints">直接在键盘输入下落的字母，会自动计数，如已下到不可见区域还未输入数量超过20个就自动结束 <span @click="ishint">我知道了</span></span>


    </div>
  </div>
</template>

<script>
import {onMounted, reactive,watch, toRefs} from 'vue'

export default {
  name: 'App',
  setup() {
    let p = reactive({
      //下落的随机字母
      ABC: "abcdefghijklnmopqrstuvwxyz".toUpperCase().split(''),
      //下落的字母数组
      carr: [],
      //下落字母的值
      y: 1,
      //开始按钮显示隐藏
      isgood: true,
      //完成数量
      accomplish:0,
     //错过的数量
      missarr:[],
    //记录时间
      time:0,
      //结束显示框
      isbook:false,
      olnum:"s",
      //说明框
      ishints:true,
      //加速个数的出现
      speed:1000

    })
    //小球函数
    p.cs =
        (x = parseInt(Math.random() * 750) + 30, tex = p.ABC[parseInt(Math.random() * p.ABC.length)], y = -50, col = `rgb(${parseInt(Math.random() * 225)},${parseInt(Math.random() * 225)},${parseInt(Math.random() * 225)})`) => {
          // this.ctx.clearRect(0,0,800,550)//清除画布
          p.c.beginPath();
          p.c.save();
          let lg = p.c.createRadialGradient(x, y, 0, x, y, 30);
          lg.addColorStop(0, "#fff");
          lg.addColorStop(1, col);
          p.c.arc(x, y, 20, 0, 2 * Math.PI);
          p.c.fillStyle = lg;
          p.c.fill();
          p.c.restore();
          p.c.save();
          p.c.font = "20px  Microsoft YaHei"; //设置字体样式
          p.c.fillText(tex, x - 7, y + 6); //绘制文本
          p.c.textAlign = "center"; //设置绘制文本的给定点为文本中间
          p.c.restore();
          return [x, tex, y, col]
        }
        //下落速度函数
    p.x=()=>{

      //下落字母速度
      cancelAnimationFrame(p.re)
      p.re=requestAnimationFrame(()=>{
        p.c.clearRect(0,0,800,550)//清除画布
        for (let i=0; i<p.carr.length ; i++){
          p.carr[i][2]+=p.y
          p.cs(p.carr[i][0],p.carr[i][1],p.carr[i][2],p.carr[i][3])
        }
      })

    }
    //游戏提示框
    p.ishint=()=>{
      p.ishints=false
    }
    //开始按钮
    p.good = () => {
      p.times=new Date().getTime()
      p.isgood = false
      //一段时间生产出的字母
      clearInterval(p.tiems)
      p.tiems = setInterval(() => {
        p.carr.push(p.cs())
        if(p.speed<=200){
          p.speed-=30
        }
        if(p.y<=3){
          p.y+=0.1
        }

      }, 550)
      p.x()
    }
    //结束按钮
    p.over = () => {
      p.time=Math.ceil((new Date().getTime()-p.times)/1000)
      p.isbook=true
      p.olnum='olnums'
      clearInterval(p.tiems)
      cancelAnimationFrame(p.re)
    }
    //重来
    p.restart=()=>{
      p.isgood=true;
      //下落的字母数组
     p.carr= []
          //下落字母的值
         p.y=1
          //开始按钮显示隐藏
          p.isgood=true
          //完成数量
          p.accomplish=0
          //错过的数量
          p.missarr=[]
          //记录时间
          p.time=0
          //结束显示框
          p.isbook=false
          p.olnum="s"
      p.c.clearRect(0, 0, 800, 550)//清除画布
    }

    watch([()=>p.carr,()=>p.missarr],()=>{
      //p.carr有变量就开始执行下落函数
      p.x()
      for (let i=0; i<p.carr.length ; i++){
        if(p.carr[i][2]>=530){
          p.missarr.push(p.carr[i])
          p.carr.splice(i, 1)
        }
      }
      if(p.missarr.length==20){
        p.over()
      }
    },{deep:true})



    onMounted(() => {
      //封装一个获取id的函数
      function $(value) {
        return document.getElementById(value)
      }

      //获取canvas上下文
      p.c = $('canvass').getContext('2d')

      //健盘事件
      document.addEventListener("keyup", (e) => {
        let ek = e.key.toUpperCase()
        for (let i = 0; i < p.carr.length; i++) {
          if (ek == p.carr[i][1]) {
            p.c.clearRect(0, 0, 800, 550)//清除画布
            p.carr.splice(i, 1)
            p.accomplish++
            for (let j = 0; j < p.carr.length; j++) {
              p.cs(p.carr[j][0], p.carr[j][1], p.carr[j][2], p.carr[j][3])
            }
          }
        }
      })

    })


    return {
      ...toRefs(p),
    }
  }
}
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
}

li {
  list-style: none;
}

.w {
  width: 80vw;
  margin: 0 auto;
  height: 100vh;
  margin-top: -10px;
}

//下落区域
section {
  position: relative;
  width: 80vw;
  height: 75vh;
  margin: 0 auto;
  background-color: rgb(174, 237, 216);
  overflow: hidden;
  //开始按钮
  #go {
    font-size: 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(215, 232, 55);
    border: 2px solid rgb(221, 239, 21);
    position: absolute;
    top: 50%;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%);

    &:hover {
      background-color: rgb(183, 236, 8);
    }
  }
}

.selects {
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 75vh;
  margin: 0 auto;
  margin-top: 10px;
  //结束重来按钮
  #buts {
    display: flex;
    flex-wrap: wrap;

    button {
      cursor: pointer;
      width: 50px;
      height: 50px;
      margin-right: 30px;
      border-radius: 50%;
      border: 2px solid rgb(87, 238, 188);
      background-color: rgb(145, 235, 205);
      &:hover{
        background-color: rgb(28, 91, 70);
      }
    }
  }

  .s {
    position: absolute;
    top: 77%;
    left: 50%;
  }

  .olnums {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -120%);
  }

  //完成的数量//错过的数量
  #num,
  #miss,
  #imte {
    background-color: rgb(145, 235, 205);
    border: 1px solid rgb(87, 238, 188);
    text-align: center;
    width: 150px;
    height: 30px;
    line-height: 30px;
  }


  #over {
    background-color: rgb(206, 231, 83);
    border: 1px solid rgb(142, 203, 80);
    text-align: center;
    width: 150px;
    height: 50px;
    line-height: 50px;

  }
}
.hints{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
}
.hint{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border: 1px solid rgb(87, 238, 188);
  width: 250px;
  height: 150px;
  line-height: 33px;
  z-index: 999;
  span{
    border: 1px solid #555151;
    background-color: #dba645;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    font-size: 18px;
    &:hover{
      background-color: #835a10;
    }
  }
}

</style>
