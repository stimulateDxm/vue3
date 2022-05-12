<template>
  <div>
    <Header></Header>
    <Section></Section>
    <TypeNav></TypeNav>
  </div>
</template>

<script>
import Header from "./components/header"
import  Section from "./components/section"
import  TypeNav from  "./components/typenav"
export default {
  name: 'App',
  components:{
    Header,
    Section,
    TypeNav
  }
}
</script>

<style >
*{
  margin: 0;
  padding: 0;
}


@font-face {
  font-family: 'iconfont';  /* project id 3391629 */
  src: url('?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_3391629_thtvcmiqhqp.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_3391629_thtvcmiqhqp.woff') format('woff'),
  url('//at.alicdn.com/t/font_3391629_thtvcmiqhqp.ttf') format('truetype'),
  url('#iconfont') format('svg');
}

</style>
