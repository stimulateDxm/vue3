<template>
  <div class="shadow" >
  </div>
  <div class="login">
    <div class="x">x</div>
 <div class="qqLogin"><i class="iconfont icon-QQ"  ></i>QQ号登录</div>
    <div class="zLogin">账号密码登录</div>
    <p class="safety-login">推荐使用<a>快速安全登录</a>，防止盗号。</p>
    <form>
    <div class="text"><input type="text" placeholder="支持QQ号/邮箱/手机号登录"></div>
    <div class="pass"><input type="password" placeholder="密码" ></div>
    <button class="aut-login">授权登录</button>
      <div class="checkbox"><input type="checkbox"> 下次自动登录</div>
    </form>
    <div class="low-login"><a>找回密码</a><a>新用户注册</a><a>意见反馈</a></div>
    <div class="other-login">
      <div>其他登录方式</div>
      <ul>
        <li><i class="iconfont icon-weixin"></i>微信</li>
        <li><i class="iconfont icon-accessory"></i>sso</li>
        <li><i class="iconfont icon-shoujihao"></i>手机号</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: 'Login',
  setup(){
    let l=reactive({
    })

    return{
      ...toRefs(l)
    }
  }
}
</script>

<style scoped lang="less">
.shadow{
  position: fixed;
  left: 0;
  top: 0;
  background-color: #555151;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

}
.login{
  position: relative;
 .x{
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 24px;
    color: #666666;
  }
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #f7f7f7;
  width: 450px;
  height: 550px;
  z-index: 99999;
  .qqLogin{
    font-size: 20px;
    width: 272px;
    text-align: center;
    line-height: 100px;
    i{
      font-size: 26px;
      position: relative;
      top: 5px;
    }
  }
  .zLogin{
    width: 272px;
    font-size: 25px;
    text-align: center;
    margin-top: -20px;
  }
  .safety-login{
    margin-top: -10px;
    color: #666666;
    a{
      color: #1761cc;
    }
  }
 form{
   width: 272px;
   height: 156px;
   position: relative;
   .text input,.pass input, button{
     padding-left: 15px;
     width: 255px;
     height: 40px;
     background-color: #e3e2e2;
     border-radius: 5px;
     margin-top: 15px;
     border: 1px solid transparent;
     font-size: 16px;
     outline:none;
   }

   .aut-login{
     padding-left: 0px;
    margin-top: 30px;
     background-color: #1761cc;
     width: 272px;
     color: white;
     text-align: center;
   }
   .checkbox{
     text-align: center;
     margin-top: 5px;
     input{
       width: 19px;
       height: 19px;

     }
   }
 }
  .low-login{
  margin-top: 60px;
    a{
     padding-right: 10px;
    }
  a:nth-child(1),a:nth-child(2){
    border-right: #cccccc 1px solid;
    margin-right: 10px;
  }
  }
  .other-login{
    font-size: 14px;
    color: #b5b2b2;
   width: 270px;
    div{
      text-align: center;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
     margin-top: 20px;
        list-style: none;
        width: 60px;
        height: 85px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        i{
          font-size: 25px;
          background-color: #e6e3e3;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          color: #575555;

        }
      }
    }
  }
}

</style>
