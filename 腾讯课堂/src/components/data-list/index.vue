<template>
<!--  类目导航-->
  <div class="data-list">
<!--    推荐-->
 <ul class="data-list-t">
   <li   v-for="(itme,i) in list" :key="i" :class="{blus:isblu}" @click="blu()"><a>{{ itme }}</a></li>
    <div><a>修改兴趣</a></div>
 </ul>
    <div class="data-list-class">
      <DataListClass></DataListClass>
      <DataListClass></DataListClass>
      <DataListClass></DataListClass>
      <DataListClass></DataListClass>
      <DataListClass></DataListClass>
      <DataListClass></DataListClass>
    </div>



  </div>
</template>

<script>
import {reactive,toRefs ,onMounted} from "vue"
import DataListClass from "../data-list-class/index"
export default {
  name: 'DateList',
  components:{
    DataListClass
  },
  setup(){
    let d=reactive({
      list:["精选推荐","Java开发","平面设计","英语"],
      isblu:false,

    })
    onMounted(()=>{
      d.blu=(e)=>{
        console.log(e)

        // for ( d.a=0; d.a<d.list.length ; d.a++){
        // console.log(e)
        //  }
      }
    })
    return{
      ...toRefs(d)
    }
  }
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
.data-list{
  width: 100vw;
  border-bottom: #ccc 1px solid;
  height: 80px;

  .data-list-t{
    position: relative;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    line-height: 76px;
    justify-content: center;
    div {
        width: 80px;
        position: absolute;
        right: 0;
        top: 0;
        color: #666;
      text-align: center;
        a{
        border: 1px solid #666;
       padding: 5px;
        }
      }

    li{
      font-size: 24px;
      color: #666;
      margin: 0 10px;
      &:nth-child(1){
        color: #1761cc;
        border-bottom: 4px solid #1761cc;
      }
.blu{
  color: #1761cc;
  border-bottom: 4px solid #1761cc;

}
    }
  }
}
.data-list-class{
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  &::after{
    content: "";
    height: 0;
    display: block;
    clear: both;
    visibility: hidden;
  }
}
</style>
