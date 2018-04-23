<template>
 <div class="newLogin">
	<div class="wrapper" :class="{'form-success': loginSuccess}">
		
		<!-- <img src="../images/logo.png" class="logo"> -->

		<div class="container" >
			<h1>Welcome</h1>
			<form class="form">
				<input type="text" placeholder="Username" v-model="username">
				<input type="password" placeholder="Password" v-model="password">
				<p class="error">{{inputError}}</p>
				<button type="button" @click="login">Login</button>
			</form>
		</div>
		
		<ul class="bg-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>

	</div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      loginSuccess: false,
      username: "",
      password: "",
      inputError: ""
    };
  },
  created() {},
  methods: {
    login() {
      if (!this.username) {
        this.inputError = "请输入用户名!";
        return;
      }

      if (!this.password) {
        this.inputError = "请输入密码!";
        return;
      }

      if (this.password.length < 6 || this.password.length > 16) {
        this.inputError = "密码在6~16位之间!";
        return;
      }

      this._commitForm();
    },
    _commitForm() {
      this.loginSuccess = true;
      setTimeout(() => {
        this.$router.push({ path: "/index" });
      }, 1800);
    }
  }
};
</script>

<style lang="less">
@import "./login.less";
</style>

