<template>
 <p>名字：{{name}} <br/> 年龄：{{age}}</p>
 <button @click="setName">点击修改数据</button>

  <p>
    {{obj.text}} <br> {{obj.abc}}<br>{{obj.bac.c}}<br>{{obj.bac.x}}
  </p>
  <div>{{arr[0]}} <br> {{arr[arr.length-1][1]}}</div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',

  setup(){
    let name = ref("张三")
    let age = ref (18)
    let obj = reactive({
          text:"a",
          abc:"abc",
           bac:{
            c:5,
            x:6
           }
    })
    let arr=[5,6,8,9,41,[123,2558]]

    function setName(){
      name.value='李四'
      age.value=16
      obj.text='b'
      obj.abc='cba'
      obj.bac.c=11
      obj.bac.x=111
      arr[0]=555
      arr[arr.length-1][1]=3333

    }
    return{
      name,
      age,
      obj,
      setName,
      arr
    }
  }
}
</script>

<style scoped>

</style>
