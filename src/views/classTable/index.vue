<template>
  <div class="classTable" v-loading="fullscreenLoading">
    <el-calendar v-model="value">
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(2).join('-') }} {{ data.isSelected ? '✔️' : ''}}
        </p>
        <p v-on="test(data.day)" v-show="map.get(data.day) === true" >有课</p>
      </template>
    </el-calendar>
    <el-dialog
      title="当日课程信息"
      :visible.sync="centerDialogVisible"
      width="80%"
      center>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="className"
          label="课程">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="姓名"
          width="80px">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  import api from "../../common/api";

  export default {
    name: "VClassTable",
    computed: {
      userInfo() {
        return this.$store.state.userInfo;
      }
    },
    watch: {
      value(newValue, oldValue) {
        let tempAddDate = new Date(oldValue);
        tempAddDate.setMonth(oldValue.getMonth() + 1);
        tempAddDate.setHours(8, 0, 0,);
        let tempMinusDate = new Date(oldValue);
        tempMinusDate.setMonth(oldValue.getMonth() - 1);
        tempMinusDate.setHours(8, 0, 0);
        if (tempAddDate.getTime() === newValue.getTime() || tempMinusDate.getTime() === newValue.getTime()) {
          return
        }
        let param = {
          userId: this.userInfo.userId,
          date: newValue.getTime()
        };
        this.$axios
          .post(api.classDateQuery, param)
          .then(e => {
            console.log(e);
            this.tableData = e.data.data;
          });
        this.centerDialogVisible = true;
      },
    },
    data() {
      return {
        map: new Map(),
        updateMap: new Map(),
        tableData: [
          {
            className: 'className',
            teacher: '吴昂钊钊',
            time: '08:00 ~ 10:00',
          },
          {
            className: 'className',
            teacher: '吴昂钊钊',
            time: '08:00 ~ 10:00',
          },
          {
            className: 'className',
            teacher: '吴昂钊钊',
            time: '08:00 ~ 10:00',
          }
        ],
        centerDialogVisible: false,
        fullscreenLoading: false,
        value: new Date()
      };
    },
    created() {
      console.log("classTable:" + api.demo);
      console.log(this.map);

    },
    methods: {
      addToMap(k, v) {
        this.map = new Map(this.map.set(k, v));
      },
      test(date) {
        let param = {
          userId: this.userInfo.userId,
          date: date
        };
        this.$axios
          .post(api.classDateQuery, param)
          .then(e => {
            if (e.data.total > 0) {
              if (this.updateMap.get(date) ===  'update') {
                return
              }
              this.updateMap.set(date, 'update');
              this.addToMap(date, true)
            }
          });
      }
    }
  };
</script>
<style scoped>
  .classTable {
    color: #000;
  }
</style>
