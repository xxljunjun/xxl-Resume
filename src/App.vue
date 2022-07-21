<template>
  <div class="xxl">
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
// import axios from "axios"
import { goToRegister, gotoIndex } from "@/api/login.js";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    // this.togotoIndex()
    this.togoToRegister()
  },
  components: {},
  methods: {
    togoToRegister() {
      let params = {
        username: "liao",
        password: "2222",
      };
      goToRegister(params).then((res) => {
        console.log(">>>", res);
      });
    },
    togotoIndex() {
      gotoIndex().then((res) => {
        console.log(">>>", res);
      });
    },
  },
};
</script>
<style lang="scss">
.xxl {
  height: 100%;
}
</style>
