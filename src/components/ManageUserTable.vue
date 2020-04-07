<template>
  <div>
    <table>
      <el-table :data="tableData">
        <el-table-column prop="userId" label="用户id" width="160">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" width="160">
        </el-table-column>
        <el-table-column prop="nickName" label="用户昵称" width="150">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="180">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="课程管理"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickClass(scope.row)" type="text" size="small">查看课程</el-button>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDeleteClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :total="tableTotal">
      </el-pagination>
    </table>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <div style="margin-top: 15px;" class="input-with-title">
        <el-input v-model="clickData.userId" :disabled="true">
          <template slot="prepend">ID</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;" class="input-with-title">
        <el-input v-model="clickData.userName" :disabled="true">
          <template slot="prepend">用户名</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;" class="input-with-title">
        <el-input v-model="clickData.nickName">
          <template slot="prepend">昵称</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;" class="input-with-title">
        <el-input v-model="clickData.password">
          <template slot="prepend">密码</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="deleteDialogVisible"
      width="30%">
      <span>确定删除</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

    <el-dialog
      title="课程管理"
      :visible.sync="showCClassInfo"
      width="50%">
      <div>
        <el-table :data="clickData">
          <el-table-column prop="date" label="上课时间" width="160">
          </el-table-column>
          <el-table-column prop="teacher" label="教师名称" width="160">
          </el-table-column>
          <el-table-column prop="className" label="课程名" width="160">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="课程管理"
            width="180">
            <template slot-scope="scope">
              <el-button @click="handleClickClass(scope.row)" type="text" size="small">查看课程</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>


      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>

</template>

<script>
  import api from "../common/api";

  export default {
    name: "CpManageUserTable",
    data() {
      return {
        showCClassInfo: false,
        currentPage: 1,
        tableTotal: 100,
        dialogVisible: false,
        deleteDialogVisible: false,
        clickData: {
          userId: '123',
          userName: 'userName',
          nickName: 'nickName',
          password: 'password'
        },
        tableData: [
          {
            userId: '123',
            userName: 'userName',
            nickName: 'nickName',
            password: 'password'
          }
        ]
      }
    },
    created() {
      this.queryData('')
    },
    methods: {
      queryData(name) {
        let param = {
          name: name
        };
        this.$axios
          .post(api.userInfoQuery, param)
          .then(e => {
            console.log('===============' + e);
            this.tableData = e.data.data.result;
          });
      },
      handleClickClass(e) {
        this.showCClassInfo = true;
        console.log(e);
        let param = {
          userId: e.userId
        };
        this.$axios
          .post(api.userClassQuery, param)
          .then(e => {
            console.log('===============' + e);
            this.clickData = e.data.data;
          });
      },
      handleClick(e) {
        this.dialogVisible = true;
        console.log(e)

      },
      handleDeleteClick(e) {
        this.deleteDialogVisible = true;
        console.log(e)

      }


    }
  }
</script>

<style>

  .input-with-title .el-input-group__prepend {
    background-color: #fff;
    width: 50px;
  }

</style>

