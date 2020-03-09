<template>
  <div class="home">
    <el-tabs v-model="activeTab" tabPosition="bottom" type="border-card" :stretch="true">
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
  beforeCreate() {
    let userInfo = {
      userId: '100000',
    };
    this.$store.commit('setUserInfo', userInfo);
  },
  data() {
      return {
          activeTab: "classInfo"
      }
  },
  methods: {
  }
};
</script>

<style>
  .el-tabs--border-card {
    position: absolute;
    bottom: 0px;
    left: -4px;
  }
  .el-tabs--border-card>.el-tabs__content {
    padding: 0px;
  }
  .home {
    position: absolute;
    height: calc(99vh);
    width: calc(99vw)
  }

  .classInfo{
    height: calc(95vh);
    width: calc(98vw)
  }

  .userInfo{
    height: calc(95vh);
    width: calc(98vw)
  }

  .classTable{
    height: calc(95vh);
    width: calc(98vw)
  }
</style>
