<template>
    <div class="w">
    <section id="section">
         <canvas id="canvass" width="800" height="500">看到这行字就是因为你的浏览器没更新的结果</canvas>
        <button id="go">开始</button>

    </section>
    <div class="selects">
        <div id="buts">
            <button id="stop">结束</button>
            <!-- <button id="goon">继续</button> -->
            <button id="restart">重来</button>
        </div>
        <!-- <ul id="select">
            <li>选择速度</li>
            <li class="nums">慢</li>
            <li class="nums">中</li>
            <li class="nums">快</li>
            <li class="nums">特快</li>
        </ul> -->
        <ol id="olnum" class="s" >
            <li id="over" class="i">游戏结束</li>
            <li id="num" >完成的数量:0</li>
            <li id="miss" >错过的数量:0</li>
            <li id="imte" class="i">用时:0秒</li>
        </ol>

    </div>
</div>
</template>

<script>
import {reactive,onUnmounted,toRefs} from 'vue'
export default {
  name:'App',
  setup() {
    let p = reactive({
      //下落的随机字母
      ABC: "abcdefghijklnmopqrstuvwxyz".toUpperCase().split(''),
      //下落的字母数组
      carr:[],
      //下落字母的值
      y:1

    })
    //小球函数
  p.cs =
        (x = parseInt(Math.random() * 750)+30, tex=p.ABC[parseInt(Math.random() * p.ABC.length)], y = 50 , col = `rgb(${parseInt(Math.random()*225)},${parseInt(Math.random()*225)},${parseInt(Math.random()*225)})`)=> {
          // this.ctx.clearRect(0,0,800,500)//清除画布
       p.c.beginPath();
       p.c.save();
          let lg =p.c.createRadialGradient(x, y, 0, x, y, 30);
          lg.addColorStop(0, "#fff");
          lg.addColorStop(1, col);
       p.c.arc(x, y, 20, 0, 2 * Math.PI);
       p.c.fillStyle =lg;
       p.c.fill();
       p.c.restore();
       p.c.save();
       p.c.font = "20px  Microsoft YaHei"; //设置字体样式
       p.c.fillText(tex, x - 7, y + 6); //绘制文本
       p.c.textAlign = "center"; //设置绘制文本的给定点为文本中间
       p.c.restore();
          return [x,tex,y]
        }
    onUnmounted(()=>{
      //封装一个获取id的函数
      function $(value){
        return document.getElementById(value)
      }
      //获取canvas上下文
       p.c=$('canvass').getContext('2d')
     //一段时间生产出的字母
        clearInterval(p.tiems)
         p.tiems= setInterval(()=>{
           p.carr.push(p.cs())
         },1000)

      //下落字母速度
      setInterval(()=>{

        for (var i=0; i<p.carr.length ; i++){
        p.c.clearRect(0,0,800,500)//清除画布
        p.carr[i][2]++
        p.cs(p.carr[i][0],p.carr[i][1],p.carr[i][2])

      }
      },1001)


         //健盘事件

      document.addEventListener("keyup", (e)=>{
        //获取第一个出现的索引
        function ekey(a){
          return a[1]==e.key.toUpperCase()
        }
        p.b=p.carr.findIndex(ekey)
        p.carr.splice(p.b,1)

        p.c.clearRect(0,0,800,500)//清除画布
        for (let i=0; i<p.carr.length ; i++){
          p.cs(p.carr[i][0],p.carr[i][1],p.carr[i][2])

        }

      })
    })


   return{
     ...toRefs(p),
   }
}
}
</script >

<style scoped  lang='less'>
* {
    margin: 0;
    padding: 0;
    user-select: none;
}

li {
    list-style: none;
}
.w{
    width: 80vw;
    margin: 0 auto;
    height: 100vh;
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
            opacity: 0.5;
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
    //暂停 继续
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
        }
    }
    //选择速度按钮
    // #select {
    //     width: 80px;
    //     height: 30px;
    //     cursor: pointer;
    //     li {
    //         &:first-child {
    //             display: block;
    //             width: 80px;
    //             line-height: 35px;
    //             background-color: rgb(215, 232, 55);
    //             border: 1px solid rgb(221, 239, 21);
    //         }
    //         &:nth-child(2) {
    //             display: block;
    //             background-color: rgb(215, 232, 55);
    //             border: 1px solid rgb(221, 239, 21);
    //             opacity: 0.6;
    //         }
    //         width: 80px;
    //         line-height: 30px;
    //         background-color:rgb(145, 235, 205);
    //         border: 1px solid rgb(87, 238, 188);
    //     }
    //     .nums:hover {
    //         background-color: rgb(215, 232, 55);
    //         border: 1px solid rgb(221, 239, 21);
    //         opacity: 0.6;
    //     }
    // }
    .s {
        position: absolute;
        top:77% ;
        left: 50%;


    }
    .olnums{
        position: absolute;
        top:50% ;
        left: 50%;
        transform: translate(-50% ,-120%);
    }
    //完成的数量//错过的数量
    #num,
    #miss,
    #imte{
        background-color: rgb(145, 235, 205);
        border: 1px solid rgb(87, 238, 188);
        text-align: center;
        width: 150px;
        height: 30px;
        line-height: 30px;
    }
    .i{
        display: none;
    }
    #over{
        background-color: rgb(206, 231, 83);
        border: 1px solid rgb(142, 203, 80);
        text-align: center;
        width: 150px;
        height: 50px;
        line-height: 50px;

    }
}

</style>
