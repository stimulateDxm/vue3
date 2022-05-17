<template>
  <div>
    <Header></Header>
    <Section></Section>
    <TypeNav></TypeNav>
    <DateList></DateList>
  </div>
  <div class="fixed">
    <i class="iconfont icon-xinxi"></i>
    <i class="iconfont icon-shouji"></i>
    <i v-show="isfixed" class="iconfont icon-xiangshang"></i>

  </div>
</template>

<script>
import Header from "./components/header"
import  Section from "./components/section"
import  TypeNav from  "./components/typenav"
import  DateList from "./components/data-list"
import {onUpdated, reactive, toRefs} from "vue";
export default {
  name: 'App',
  components:{
    Header,
    Section,
    TypeNav,
    DateList
  },
  setup(){
    let p=reactive({
      isfixed:true
    })
    onUpdated(()=>{

    })
    return{
      ...toRefs(p)
    }
  }
}
</script>

<style lang="less" >

*{
  margin: 0;
  padding: 0;
  user-select: none;
}

a{
  cursor:pointer
}

.fixed{
  z-index: 99999;
  position: fixed;
  width: 62px;
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  top: 400px;
  right: 30px;
  background-color: white;
  i{
    width: 62px;
   line-height: 62px;
    font-size: 35px;
    color: #23b8ff;
    &:hover{
      background-color:#23b8ff;
      color: white;
    }
  }
}

</style>
