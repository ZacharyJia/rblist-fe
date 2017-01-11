<template>
  <div>
    <el-switch
      v-model="value2"
      on-color="#13ce66"
      off-color="#ff4949">
    </el-switch>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    },
    methods: {
      login() {
        if (this.$store.state.isLogin == false) {
          this.$store.commit("login")
        } else {
          this.$store.commit("logout")
        }
      }
    }
  };
</script>