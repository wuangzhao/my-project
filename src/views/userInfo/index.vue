<template>
  <div class="userInfo" v-loading="fullscreenLoading">
    <el-container>
      <el-header>
        <el-container>
          <el-aside style="width: 30%">
            <el-image
              style="width: 100px; height: 100px"
              :src="url"></el-image>
          </el-aside>
          <el-main>
            <span>用户昵称: {{this.currentUserInfo.nickName}}</span><br/>
            <span>用户登录名: {{this.currentUserInfo.userName}}</span><br/>
          </el-main>
        </el-container>
      </el-header>

      <el-footer>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            prop="labelName"
            label="姓名"
            width="180">
          </el-table-column>
        </el-table>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import api from "../../common/api";

  export default {
    name: "VUserInfo",
    data() {
      return {
        tableData: [
          {
            labelName: 'test'
          },
          {
            labelName: 'test1'
          }
        ],
        fullscreenLoading: false,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        currentUserInfo: {
          nickName: 'nickName',
          userName: 'userName',
        }
      };
    },
    created() {
      console.log("userInfo:" + api.demo);
    },
    methods: {}
  };
</script>
<style scoped>
  .userInfo {
    color: #000;
  }
</style>
