<template>
  <div>
    <table>
      <el-table :data="tableData">
        <el-table-column prop="userId" label="教师Id" width="160">
        </el-table-column>
        <el-table-column prop="userName" label="教师名" width="160">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="头像图片"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">教师图片</el-button>
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
  </div>

</template>

<script>
  export default {
    name: "CpTeacherManage",
    data() {
      return {
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
    methods: {
      handleClick(e) {
        this.dialogVisible = true;
        this.clickData = e;
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


