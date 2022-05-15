<template>
    <!--    课程-->
    <div class="classS">
      <h2>IT互联网热门课程</h2>
      <ul>
        <li v-for="i in falist" :key="i">
          <div>
            <img src="../../assets/356.webp">
            <span>Python零基础新手小白入门到项目实战【六星教育】</span>
          </div>
          <div>进度：2-24节 &nbsp;| &nbsp; <a>六星源课堂</a> </div>
          <div><span>免费</span><span>1379人最近报名</span></div>
        </li>
      </ul>
    </div>


</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: 'DataListClass',
  setup(){
    let d=reactive({
          //  假数组
          falist:[1,2,3,4,5,6,7,8]
    })
    return {
      ...toRefs(d)
    }
  }
}
</script>

<style scoped lang="less">
li{list-style: none}
//课程列表

.classS{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 30px;
  &::after{
    content: "";
    height: 0;
    display: block;
    clear: both;
    visibility: hidden;
  }
H2{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 38px;
}
ul{
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 70px;
li{
  width: 220px;
  height: 224px;
  margin: 4px;
  border: 1px solid #fff;
  padding: 5px;
  color: #333333;
&:hover {
   box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
   border: 1px solid #ccc;
 }
div{
  margin-top: 5px;
}
div:nth-child(1){
  width: 220px;
img{
  width: 220px;
  height: 124px;
h3{
  font-size: 16px;
}
}
}
div:nth-child(2){
  font-size: 12px;
}
div:nth-child(3){
  font-size: 14px;
span{
  margin-right: 10px;
&:nth-child(1){
   color: orange;

 }
}
}

}
}
}
</style>
