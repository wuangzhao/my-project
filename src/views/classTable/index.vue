<template>
  <div class="classTable" v-loading="fullscreenLoading">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
import api from "../../common/api";

export default {
  name: "VClassTable",
  data() {
    return {
      fullscreenLoading: false,
      value: new Date()
    };
  },
  created() {
    console.log("classTable:" + api.demo);
  },
  methods: {}
};
</script>
<style scoped>
.classTable {
    color: #000;
}
</style>
