<template>
  <div class="home">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="课程信息" name="classInfo">
        <v-class-info></v-class-info>
      </el-tab-pane>
      <el-tab-pane label="课表" name="classTable">
        <v-class-table></v-class-table>
      </el-tab-pane>
      <el-tab-pane label="个人主页" name="userInfo">
        <v-user-info></v-user-info>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VClassInfo from "./classInfo";
import VClassTable from "./classTable";
import VUserInfo from "./userInfo";
export default {
  name: "home",
  components: {VUserInfo, VClassTable, VClassInfo},
  data() {
      return {
          activeTab: "roadStatus"
      }
  },
  methods: {
  }
};
</script>

<style>
</style>
