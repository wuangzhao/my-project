<template>
  <div class="classInfo" v-loading="fullscreenLoading">
    <!--    <span>课程信息</span>-->
    <cp-class-info v-for="(item, index) in classInfos" :classInfo="item" :key="index"></cp-class-info>

  </div>
</template>

<script>
  import api from "../../common/api";
  import CpClassInfo from "../../components/ClassInfo";

  export default {
    name: "VClassInfo",
    components: {CpClassInfo},
    computed: {
      userInfo() {
        return this.$store.state.userInfo;
      }
    },
    data() {
      return {
        fullscreenLoading: false,
        classInfos: [],
      };
    },
    created() {
      console.log("classInfo:" + api.demo);
      this.$axios
        .post(api.userClassQuery, this.userInfo)
        .then(e => {
          console.log(e);
          this.classInfos = e.data.data;
        });
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
