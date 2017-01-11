<template>
  <div>
    <el-menu theme="dark" :router="true" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="index">交大红黑榜</el-menu-item>
      <el-menu-item index="red">红榜</el-menu-item>
      <el-menu-item index="black">黑榜</el-menu-item>
      <el-submenu index="category">
        <template slot="title">类别</template>
        <el-menu-item index="option1">选项1</el-menu-item>
        <el-menu-item index="option2">选项2</el-menu-item>
        <el-menu-item index="option3">选项3</el-menu-item>
      </el-submenu>
      <template v-if="isLogin">
          <el-submenu style="float: right" index="user">
          <template slot="title">jia199474</template>
          <el-menu-item index="user_center">个人中心</el-menu-item>
          <el-menu-item index="logout">登出</el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item style="float: right" index="register">注册</el-menu-item>
        <el-menu-item style="float: right" index="login">登录</el-menu-item>
      </template>

    </el-menu>
  </div>
</template>


<script>
  export default {  
    computed: {
      isLogin () {
        return this.$store.state.isLogin;
      }
    },
    methods: {
      handleSelect(key, keyPath) {

      }
    }
  }
</script>