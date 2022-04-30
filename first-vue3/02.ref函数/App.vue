<template>
 <p>名字：{{name}} <br/> 年龄：{{age}}</p>
 <button @click="setName">点击修改数据</button>
  <p>
    {{obj.text}} <br> {{obj.abc}}
  </p>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',

  setup(){
    let name = ref("张三")
    let age= ref(18)
    let obj=ref({
          text:"a",
          abc:"abc",
    })
    function setName(){
      name.value='李四'
      age.value=16
      obj.value.text='b'
      obj.value.abc='cba'

    }
    return{
      name,
      age,
      obj,
      setName,
    }
  }
}
</script>

<style scoped>

</style>
