<template>
  <div class="content">
    <p class="please">请登录</p>

    <input class="name" type="text" value="请输入账号" />
    <input class="password" type="text" value="请输入密码" />

    <button class="login">登录</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  components: {},
});
</script>

<style lang="scss" scoped>
.content {
  padding: 0rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.39);
  .please {
    font-size: 0.46rem;
    font-weight: 800;
    color: #000000;
    position: absolute;
    top: 1rem;
  }
  .name {
    width: 6.5rem;
    height: 0.9rem;
    border: 1px solid #818691;
    border-radius: 12px;
    margin-bottom: 0.3rem;
    margin-top: 2.4rem;
    padding: 0.27rem 0rem 0.26rem 0.3rem;
    box-sizing: border-box;
    color: #818691;
    font-size: 0.26rem;
  }
  .password {
    width: 6.5rem;
    height: 0.9rem;
    border: 1px solid #818691;
    border-radius: 12px;
    padding: 0.27rem 0rem 0.26rem 0.3rem;
    box-sizing: border-box;
    color: #818691;
    font-size: 0.26rem;
  }
  .login {
    width: 6.5rem;
    height: 0.9rem;
    background-color: #3a70ec;
    border: 0rem;
    box-shadow: 0px 6px 10px rgba(58, 112, 236, 0.3);
    border-radius: 12px;
    margin-top: 2.22rem;
    color: #ffffff;
    font-size: 0.26rem;
  }
}
</style>
