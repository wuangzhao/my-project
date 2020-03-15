<template>
  <el-container>
    <el-header>
      <div>
        <span>管理系统</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']"  @select="handleSelect">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>管理系统</template>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="1">用户管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">课程</template>
              <el-menu-item index="2">课程管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">教师</template>
              <el-menu-item index="3">教师管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <cp-manage-user-table v-show="showTable === '1'"></cp-manage-user-table>
          <cp-class-manage-table v-show="showTable === '2'"></cp-class-manage-table>
          <cp-teacher-manage v-show="showTable === '3'"></cp-teacher-manage>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

  import CpManageUserTable from "../../components/ManageUserTable";
  import CpClassManageTable from "../../components/ClassManageTable";
  import CpTeacherManage from "../../components/TeacherManage";

  export default {
    name: "manage",
    components: {CpTeacherManage, CpClassManageTable, CpManageUserTable},
    beforeCreate() {
      let userInfo = {
        userId: '100000',
      };
      this.$store.commit('setUserInfo', userInfo);
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        showTable: 1,
        tableData: Array(20).fill(item)
      }
    },
    methods: {
      handleSelect(e) {
        this.showTable = e;
        console.log(this.showTable);
        console.log(e)

      }
    }
  };
</script>

<style>
  .el-tabs--border-card {
    position: absolute;
    bottom: 0px;
    left: -4px;
  }

  .el-tabs--border-card > .el-tabs__content {
    padding: 0px;
  }

  .home {
    position: absolute;
    height: calc(99vh);
    width: calc(99vw)
  }

  .classInfo {
    height: calc(95vh);
    width: calc(98vw)
  }

  .userInfo {
    height: calc(95vh);
    width: calc(98vw)
  }

  .classTable {
    height: calc(95vh);
    width: calc(98vw)
  }
</style>
