<template>
 <p>名字：{{name}} <br/> 年龄：{{age}}</p>
 <button @click="setName">点击自我介绍</button>
</template>

<script>
export default {
  name: 'App',

  setup(){
    let name = "张三"
    let age= 18
    function setName(){
      alert(`大家好，我的名字叫${name},年龄${age}`)
    }
    return{
      name,
      age,
      setName,
    }
  }
}
</script>

<style scoped>

</style>
