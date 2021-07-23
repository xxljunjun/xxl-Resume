<template>
  <div class="home">
    <div class="header">
      <div class="nav">
        <div class="nav-left">111111</div>
        <div class="nav-right">22222222222</div>
      </div>
      <div class="header-bottom">
        <div class="author">
          <img src="@/static/author.png" alt="" class="author-img" />
        </div>
        <p class="ch">11111111111111111111111111111111111</p>
        <p class="en">22222222222222222</p>
      </div>
    </div>
    <div class="box"></div>
    <div class="main"></div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .header {
    width: 1200px;
    height: 490px;
    background: #595c8f;
    padding: 0 160px;
    box-sizing: border-box;
    .nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      .nav-left {
      }
      .nav-right {
      }
    }
    .header-bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 410px;
      .author {
        height: 160px;
        width: 160px;
        overflow: hidden;
        border-radius: 50%;
        margin-bottom: 35px;
        .author-img {
          height: 160px;
          width: 160px;
        }
      }
      .ch {
        color: #fff;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 6px;
      }
      .en {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .box {
    width: 1200px;
    height: 490px;
    background: #9fa4f5;
  }
  .main {
    width: 1200px;
    height: 1000px;
    background: #e3e4f8;
  }
  .bottom {
    width: 1200px;
    height: 380px;
  }
}
</style>