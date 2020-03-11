<template>
  <el-container style="height: 110px">
    <el-aside style="width: 100px">
      <el-image
        style="width: 100px; height: 100px"
        :src="url"></el-image>
    </el-aside>
    <el-main>
      <div class="classInfoTable">
        <span>课程名称: {{this.classInfo.className}}</span><br/>
        <span>上课老师: {{this.classInfo.teacher}}</span><br/>
        <span>上课时间: {{this.classInfo.date}}</span><br/>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "CpClassInfo",
    props: {
      classInfo: {
        type: Object,
      }
    },
    watch: {
      classInfo: {
        handler() {
          this.currentClassInfo = this.classInfo;
        }
      }
    },
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        currentClassInfo: {
          className: 'testName',
          classTeacher: 'teacherName',
          classTime: '2020-03-04 22:04'
        }
      }
    }
  }
</script>

<style scoped>
  .classInfoTable {
    position: fixed;
  }

</style>
