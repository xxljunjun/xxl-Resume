<template>
  <div class="home">
    <!-- <img src="@/static/building_2.jpg" alt="" class="topimg" /> -->
    <!-- 头部导航栏 -->
    <div class="header">
      <div class="nav">
        <div class="nav-inner">
          <div class="nav-left">
            <div
              v-for="(item, index) in navArr"
              :key="index"
              class="item"
              @click="gotoPage(item.id)"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="nav-right">
            <div class="qq-box">
              <img src="@/assets/email.png" alt="" class="icon" />
              <span class="qq">xxl15363272121@163.com</span>
            </div>
            <div class="number-box">
              <img src="@/assets/phone.png" alt="" class="icon" />
              <span class="telephone">13286754697</span>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="author">
          <img src="@/assets/man.jpg" alt="" class="author-img" />
        </div>
        <p class="ch">天行健，君子以自强不息；地势坤，君子以厚德载物。</p>
        <p class="en">
          When the sky is healthy, the gentleman strives for continuous
          self-improvement; in the terrain of Kun, the gentleman carries things
          with virtue.
        </p>
      </div>
    </div>
    <!-- 个人信息 -->
    <div class="box">
      <img src="@/assets/katongman.png" alt="" class="catongman" />
      <div class="preson">
        <p class="introduce">简介 introduction</p>
        <div class="resume">
          <p>廖军军</p>
          <p>学历：本科</p>
          <p>职业：前端工程师</p>
          <p>年龄：23</p>
          <p>经验：2年工作经验</p>
          <p>技能：嗯，下拉详情</p>
        </div>
      </div>
    </div>
    <!-- 技能栏 -->
    <div class="main">
      <div class="title">技能 skill</div>
      <div class="skill">
        <div
          class="item"
          v-for="(item, index) in skillArr"
          :key="index"
          :style="'color:' + item.color"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="software">
        <div class="item" v-for="(item, index) in skillArr2" :key="index">
          <img :src="item.src" alt="" class="skill-img" />
        </div>
      </div>
      <div class="case">
        <div
          class="img-box"
          v-for="item in demoArr"
          :key="item.id"
          @click="gotoIframe(item.id)"
        >
          <div class="who">
            <img :src="item.path" alt="0" class="demoimg" />
            <div class="img-overly">view</div>
          </div>
          <div class="txt">{{ item.title }}</div>
        </div>
      </div>
      <div class="path" @click="goToGithub">
        gitHub地址：https://github.com/xxljunjun
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="bottom">
      <!-- <div class="title">最后的浮华只会迷乱你的眼</div> -->
      <div class="message">
        <p>联系方式：13286754697</p>
        <p>QQ：793117268</p>
        <p>邮箱：xxl15363272121@163.com</p>
        <p class="lasttxt">简书：小溪流jun</p>
        <div class="thanks">
          <div class="radioBox">Think You For Watch</div>
          <div class="radioBox radioBox2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navArr: [
        { id: 1, name: "HOME" },
        { id: 2, name: "ABOUT" },
        { id: 3, name: "SKILL" },
        { id: 4, name: "CONTACT" },
      ],
      skillArr: [
        { id: 1, name: "Vue ,", color: "#82ae67" },
        { id: 2, name: "React ,", color: "#3e6193" },
        { id: 4, name: "Webpack ,", color: "#f80000" },
        { id: 5, name: "Uniapp ,", color: "#4e4d84" },
        { id: 6, name: "Hybrid", color: "#f9a304" },
      ],
      skillArr2: [
        {
          id: 1,
          name: "Vue ,",
          color: "#82ae67",
          src: require("@/assets/logo.png"),
        },
        {
          id: 2,
          name: "React ,",
          color: "#3e6193",
          src: require("@/assets/logo_1.png"),
        },
        {
          id: 3,
          name: "Node ,",
          color: "#902f80",
          src: require("@/assets/logo_2.jpg"),
        },
        {
          id: 4,
          name: "Webpack ,",
          color: "#f80000",
          src: require("@/assets/logo_3.jpg"),
        },
        {
          id: 5,
          name: "Uniapp ,",
          color: "#4e4d84",
          src: require("@/assets/logo_4.jpg"),
        },
        {
          id: 6,
          name: "Hybrid",
          color: "#f9a304",
          src: require("@/assets/logo_5.jpg"),
        },
      ],
      demoArr: [
        {
          id: 1,
          path: require("@/assets/xxl_1.jpg"),
          title: "电池报告管理",
        },
        {
          id: 2,
          path: require("@/assets/xxl_2.png"),
          title: "realFix-pc端",
        },
        {
          id: 3,
          path: require("@/assets/xxl_3.png"),
          title: "realFix-pad端",
        },
        {
          id: 4,
          path: require("@/assets/xxl_4.png"),
          title: "冲榜活动",
        },
        {
          id: 5,
          path: require("@/assets/xxl_5.png"),
          title: "运营后台",
        },
        {
          id: 6,
          path: require("@/assets/xxl_6.png"),
          title: "PC官网",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    gotoIframe(id) {
      switch (id) {
        case 1:
          window.location.href =
            "http://autel-cloud-battery-mgr-front-testus.autel.com";
          break;
        case 2:
          window.location.href = "http://accufix.autel.com/home";
          break;
        case 3:
          window.location.href = "http://autel-device-app-pad-prod.autel.com";
          break;
        case 4:
          window.location.href =
            "http://autel-inspection-realfix-activity-testus-origin.autel.com/#/";
          break;
        case 5:
          window.location.href =
            "https://management-frontend-testus.autel.com/login";
          break;
        case 6:
          this.$router.push("/beauty");
          break;
      }
    },
    goToGithub() {
      window.location.href = "https://github.com/xxljunjun";
    },
    gotoPage(id) {
      //scrollIntoView的属性
      let ele = "";
      switch (id) {
        case 1:
          ele = document.getElementsByClassName("header-bottom")[0];
          ele.scrollIntoView({ block: "start", behavior: "smooth" });
          break;
        case 2:
          ele = document.getElementsByClassName("box")[0];
          ele.scrollIntoView({ block: "start", behavior: "smooth" });
          break;
        case 3:
          ele = document.getElementsByClassName("main")[0];
          ele.scrollIntoView({ block: "start", behavior: "smooth" });
          break;
        case 4:
          ele = document.getElementsByClassName("bottom")[0];
          ele.scrollIntoView({ block: "start", behavior: "smooth" });
          break;
        default:
          break;
      }
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  // width: 1200px;
  color: #fff;
  margin: 0 auto;
  .topimg {
    position: fixed;
    width: 100%;
    z-index: -1;
    height: 1000px;
    top: 0;
  }
  .header {
    // width: 1200px;
    // margin: 0 auto;
    // height: 490px;
    // background: #595c8f;
    box-sizing: border-box;
    // background: #00FF00 url('../../static/home/img_1.jpg') no-repeat fixed top;
    .nav {
      position: fixed;
      top: 0;
      background: #595c8f;
      // width: 1200px;
      width: 100%;
      z-index: 99;
      // border-bottom: 3px solid #9fa4f5;
      box-shadow: 10px 0 5px #9fa4f5;
    }
    .nav-inner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 0 160px;
      .nav-left {
        display: flex;
        flex-direction: row;
        .item {
          width: 120px;
          height: 20px;
          border-right: 1px solid #fff;
          text-align: center;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
          &:last-child {
            border-right: 0;
          }
        }
      }
      .nav-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        .qq-box {
          margin-right: 24px;
          display: flex;
          flex-direction: row;
          align-items: center;
          .icon {
            // height: 24px;
            width: 24px;
            margin-right: 10px;
          }
          .qq {
            color: #fff;
          }
        }
        .number-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          .number {
            color: #fff;
          }
          .icon {
            margin-right: 10px;
            height: 24px;
            width: 24px;
          }
        }
      }
    }
    .header-bottom {
      background: #595c8f;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 410px;
      width: 1200px;
      margin: 0 auto;
      .author {
        height: 160px;
        width: 160px;
        overflow: hidden;
        border-radius: 50%;
        margin-bottom: 35px;
        margin-top: 50px;
        .author-img {
          // height: 160px;
          width: 160px;
        }
      }
      .ch {
        color: #fff;
        font-size: 24px;
        line-height: 26px;
        margin-bottom: 6px;
        text-align: center;
      }
      .en {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
      }
    }
  }
  .box {
    margin: 0 auto;
    width: 1200px;
    height: 490px;
    background: #9fa4f5;
    position: relative;
    .catongman {
      position: absolute;
      left: 100px;
      bottom: 20px;
      height: 450px;
    }
    .preson {
      position: absolute;
      left: 680px;
      font-size: 26px;

      .introduce {
        margin: 10px 0 80px;
        color: #595c8f;
      }
      .resume {
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
  .main {
    margin: 0 auto;
    width: 1200px;
    height: 1020px;
    background: #e3e4f8;
    position: relative;
    .title {
      position: absolute;
      left: 680px;
      top: 10px;
      font-size: 26px;
      color: #595c8f;
    }
    .skill {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 110px;
      margin-bottom: 60px;

      .item {
        margin-right: 15px;
        font-size: 26px;
        cursor: default;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .software {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 60px;
      .item {
        margin-right: 25px;
        height: 90px;
        width: 90px;
        border-radius: 50%;
        overflow: hidden;
        background: #fff;
        .skill-img {
          height: 90px;
          width: 90px;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
    .case {
      width: 1200px;
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0 100px;
      box-sizing: border-box;
      flex-wrap: wrap;
      margin-bottom: 30px;
      .img-box {
        width: 270px;
        height: 220px;
        border-radius: 8px;
        margin-bottom: 60px;
        box-sizing: border-box;
        box-shadow: 0px 10px 24px 2px #848484;
        cursor: pointer;
        margin-right: 60px;
        .who {
          position: relative;
          &:hover .demoimg {
            border-radius: 20px;
            transform: scale(1.1);
          }
          &:hover .img-overly {
            opacity: 1;
            transform: scale(1.1);
            border-radius: 20px;
          }
          .demoimg {
            width: 270px;
            height: 220px;
            border-radius: 8px;
            transition: 0.3s;
          }
          .img-overly {
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            transition: all 0.2s;
            z-index: 6;
            left: 0;
            top: 0;
            color: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
        .txt {
          margin-top: 20px;
          text-align: center;
          color: #0b5f78;
          font-size: 24px;
        }
      }
    }
    .path {
      margin-left: 100px;
      font-size: 24px;
      color: #58568a;
      cursor: pointer;
    }
  }
  .bottom {
    margin: 0 auto;
    background: #595c8f;
    width: 1200px;
    height: 390px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1200px 390px;
    // filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .title {
      position: absolute;
      left: 680px;
      top: 10px;
      font-size: 26px;
      color: #9fa4f5;
    }
    .message {
      margin-top: 70px;
      font-size: 26px;
      p {
        margin-bottom: 20px;
      }
      // .lasttxt {
      //   margin-bottom: 0;
      // }
    }
    .thanks {
      position: relative;
      .radioBox {
        height: 90px;
        width: 480px;
        border-radius: 20px;
        border: 1px dotted #fff;
        text-align: center;
        line-height: 90px;
        font-size: 30px;
      }
      .radioBox2 {
        position: absolute;
        top: -12px;
        left: 12px;
      }
    }
  }
}
</style>
