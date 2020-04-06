<template>
  <div>
    <table>
      <el-table :data="tableData">
        <el-table-column prop="classId" label="课程Id" width="160">
        </el-table-column>
        <el-table-column prop="className" label="课程名称" width="160">
        </el-table-column>
        <el-table-column prop="teacher" label="授课教师" width="160">
        </el-table-column>
        <el-table-column prop="classId" label="上课时间" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClickDate(scope.row)" type="text" size="small">查看列表</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="nickName" label="课程照片" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClickShowImage(scope.row)" type="text" size="small">查看照片</el-button>
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
        :current-page.sync="pageIndex"
        :page-size="pageSize"
        :total="tableTotal"
        @current-change="queryClassInfo"
      >
      </el-pagination>
      <el-button type="primary" @click="addDialogVisible = true">添加课程</el-button>
    </table>
    <el-dialog
    name="editDialog"
    title="提示"
    :visible.sync="dialogVisible"
    width="30%">
    <div style="margin-top: 15px;" class="input-with-title">
      <el-input v-model="clickData.classId" :disabled="true">
        <template slot="prepend">ID</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;" class="input-with-title">
      <el-input v-model="clickData.className">
        <template slot="prepend">课程名</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;" class="input-with-title">
      <el-input v-model="clickData.teacher">
        <template slot="prepend">教师编号</template>
      </el-input>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateClassInfo">修 改</el-button>
    <el-button type="primary" @click="dialogVisible = false">取 消</el-button>
  </span>
  </el-dialog>


    <el-dialog
      name="addDialog"
      title="提示"
      :visible.sync="addDialogVisible"
      width="30%">
      <div style="margin-top: 15px;" class="input-with-title">
        <el-input v-model="addTable.className">
          <template slot="prepend">课程名</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;" class="input-with-title">
        <el-input v-model="addTable.teacher">
          <template slot="prepend">教师编号</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;" class="input-with-title">
        <el-input v-model="addTable.img">
          <template slot="prepend">图片地址</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addClassInfo">添 加</el-button>
    <el-button type="primary" @click="addDialogVisible = false">取 消</el-button>
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
      title="日期列表"
      :visible.sync="datesDialogVisible"
      width="30%">
      <span>确定删除</span>
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
      name="date"
      title="提示"
      :visible.sync="dateDialogVisible"
      width="30%">
      <el-table :data="clickDateList">
        <el-table-column prop="classDate" label="日期" width="160">
        </el-table-column>
        <el-table-column label="删除" width="150">
          <template slot-scope="scope">
            <el-button @click="deleteDate(scope.row)" type="text" size="small">删除该日期</el-button>
          </template>
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
            <el-date-picker
              v-model="datePickerData"
              type="datetime"
              placeholder="选择日期时间">
    </el-date-picker>
        <el-button type="" @click="addTime">新增</el-button>
    <el-button type="primary" @click="dateDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import api from "../common/api";

  export default {
    name: "CpClassManageTable",
    data() {
      return {
        addDialogVisible: false,
        addTable: {},
        datePickerData: '',
        dateDialogVisible: false,
        dialogVisible: false,
        deleteDialogVisible: false,
        datesDialogVisible: false,
        pageIndex: 1,
        pageSize: 1,
        tableTotal: 20,
        queryClassName: '',
        clickData: {
          classId: '123',
          className: '课程名字',
          teacher: '教师',
          classImg: 'url',
          dates: [],
          date: '2020-02-03 20:12'
        },
        tableData: [
          {
            classId: '123',
            className: '课程名字',
            teacher: '教师',
            classImg: 'url',
            dates: [],
            date: '2020-02-03 20:12',
          }
        ],
        clickDateList: [],
        clickClassId: '',
      }
    },
    methods: {
      addClassInfo() {
        let param = {
          "classImg": this.addTable.img,
          "className": this.addTable.className,
          "teacherId": this.addTable.teacher
        };
        this.$axios
          .post(api.addClassInfo, param)
          .then(data => {
            this.queryClassInfo()
            this.addDialogVisible = false;
          });

      },
      updateClassInfo() {
        let param = {
          classId: this.clickData.classId,
          className: this.clickData.className,
          teacherId: this.clickData.teacher
        };
        this.$axios
          .post(api.classEdit, param)
          .then(data => {
            this.queryClassInfo();
            this.dialogVisible = false;
          });
      },
      handleClick(e) {
        this.clickData = e;
        this.clickData.teacher = ''
        this.dialogVisible = true;
      },
      addTime() {
        let param = {
          classId: this.clickClassId,
          time: this.datePickerData
        };
        this.$axios
          .post(api.addDate, param)
          .then(data => {
            this.handleClickDate(param);
          });
      },
      deleteDate(e) {
        console.log(e);
        let param = {
          dataId: e.id
        };
        this.$axios
          .post(api.deleteDate, param)
          .then(data => {
            this.handleClickDate(e);
          });

      },
      handleClickDate(e) {
        this.clickClassId = e.classId;
        let param = {
          classId: e.classId
        };
        this.$axios
          .post(api.classDatesQuery, param)
          .then(e => {
            this.clickDateList = e.data.data;
          });
        this.dateDialogVisible = true;
      },
      handleClickShowImage(e) {
        this.datesDialogVisible = true;
        this.clickData = e;
        console.log(e.classImg)

      },
      handleDeleteClick(e) {
        console.log(e);
        let param = {
          classId: e.classId
        };
        this.$axios
          .post(api.deleteClassInfo, param)
          .then(e => {
            this.queryClassInfo();
          });

      },
      queryClassInfo() {
        let param = {
          name: this.queryClassName,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        };
        this.$axios
          .post(api.queryClass, param)
          .then(e => {
            this.tableData = e.data.data.result;
            this.tableTotal = e.data.data.total;
          });
      },
    },
    created() {
      this.queryClassInfo();
    }
  }
</script>

<style>
  .input-with-title .el-input-group__prepend {
    background-color: #fff;
    width: 50px;
  }

</style>
