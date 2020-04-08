<template>
  <div class="userLogin">
    <div style="position: absolute; top: 30%; left: 10% ">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入用户名" v-model="user.userName">
          <template slot="prepend">用户名</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入密码" v-model="user.password">
          <template slot="prepend">密码</template>
        </el-input>
      </div>

      <div style="margin-top: 15px; position: relative;">
        <div style="position: absolute; right: 25px">
          <el-button type="primary" size="medium">登录</el-button>
        </div>

        <div style="position: absolute; left: 25px">
          <el-button type="warning" size="medium">注册</el-button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import api from "../../common/api";

export default {
  name: "VUserLogin",
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.userLogin {
  width: calc(96.5vw);
  height: calc(98vh);
  color: #000;
  background-color: cornflowerblue;
}

.userInfoFooter {
  position: absolute;
  top: 120px;
}
</style>
