<template>
  <div class="classInfo" v-loading="fullscreenLoading">
    <!--    <span>课程信息</span>-->
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>
    <cp-class-info></cp-class-info>

  </div>
</template>

<script>
  import api from "../../common/api";
  import CpClassInfo from "../../components/ClassInfo";

  export default {
    name: "VClassInfo",
    components: {CpClassInfo},
    data() {
      return {
        fullscreenLoading: false
      };
    },
    created() {
      console.log("classInfo:" + api.demo);
    },
    methods: {}
  };
</script>
<style scoped>
  .classInfo {
    color: #000;
    overflow: scroll;
  }
</style>
