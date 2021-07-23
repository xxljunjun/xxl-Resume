<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <div class="header">
      <div class="nav">
        <div class="nav-left">
          <div v-for="(item, index) in navArr" :key="index" class="item">
            {{ item.name }}
          </div>
        </div>
        <div class="nav-right">
          <div class="qq-box">
            <img src="@/static/author.png" alt="" class="icon" />
            <span class="qq">793117268@qq.com</span>
          </div>
          <div class="number-box">
            <img src="@/static/author.png" alt="" class="icon" />
            <span class="telephone">13286754697</span>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="author">
          <img src="@/static/author.png" alt="" class="author-img" />
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
      <div class="preson">
        <p class="introduce">简介 introduction</p>
        <div class="resume">
          <p>姓名：小溪流</p>
          <p>学历：本科</p>
          <p>职业：前端工程师</p>
          <p>年龄：23</p>
          <p>经验：2-3年工作经验</p>
          <p>技能：嗯，下拉详情</p>
        </div>
      </div>
    </div>
    <!-- 技能栏 -->
    <div class="main">
      <div class="title">技能 skill</div>
      <div class="skill">
        <div class="item" v-for="(item, index) in skillArr" :key="index">
          {{ item.name }}
        </div>
      </div>
      <div class="software">
        <div class="item" v-for="(item, index) in skillArr2" :key="index">
          <img src="@/assets/logo.png" alt="" class="skill-img" />
        </div>
      </div>
      <div class="case">
        <div class="img-box" v-for="item in demoArr" :key="item.id">
          <div class="who">
            <img :src="item.path" alt="0" class="demoimg" />
            <div class="img-overly">view demo</div>
          </div>
          <div class="txt">{{ item.title }}</div>
        </div>
      </div>
      <div class="path">gitHub地址：https://github.com/xxljunjun/</div>
    </div>
    <div class="bottom">
      <div class="title">技能 skill</div>
      <div class="message">
        <p>联系方式：13286754697</p>
        <p>QQ：793117268@qq.com</p>
        <p>邮箱：793117268@qq.com</p>
        <p>gitHub地址：https://github.com/xxljunjun/</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navArr: [
        { id: 1, name: '首页HOME' },
        { id: 2, name: '关于ABOUT' },
        { id: 3, name: '技能SKILL' },
        { id: 4, name: '联系CONTACT' },
      ],
      skillArr: [
        { id: 1, name: 'Vue ,', color: '#82ae67' },
        { id: 2, name: 'React ,', color: '#3e6193' },
        { id: 4, name: 'Webpack ,', color: '#f80000' },
        { id: 5, name: 'Uniapp ,', color: '#4e4d84' },
        { id: 6, name: 'Hybrid', color: '#f9a304' },
      ],
      skillArr2: [
        { id: 1, name: 'Vue ,', color: '#82ae67' },
        { id: 2, name: 'React ,', color: '#3e6193' },
        { id: 3, name: 'Node ,', color: '#902f80' },
        { id: 4, name: 'Webpack ,', color: '#f80000' },
        { id: 5, name: 'Uniapp ,', color: '#4e4d84' },
        { id: 6, name: 'Hybrid', color: '#f9a304' },
      ],
      demoArr: [
        { id: 1, path: require('../../static/price.png'), title: '11111' },
        { id: 2, path: require('../../static/price.png'), title: '11111' },
        { id: 3, path: require('../../static/price.png'), title: '11111' },
        { id: 4, path: require('../../static/price.png'), title: '11111' },
        { id: 5, path: require('../../static/price.png'), title: '11111' },
        { id: 6, path: require('../../static/price.png'), title: '11111' },
      ],
    }
  },
  mounted() {},
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;
  color: #fff;
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
            height: 24px;
            width: 24px;
            margin-right: 4px;
          }
          .qq {
            color: #fff;
            font-size: 14px;
          }
        }
        .number-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          .number {
            color: #fff;
            font-size: 14px;
          }
          .icon {
            margin-right: 4px;
            height: 24px;
            width: 24px;
          }
        }
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
        font-size: 24px;
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
    position: relative;
    .preson {
      position: absolute;
      left: 680px;
      font-size: 26px;
      .introduce {
        margin: 10px 0 90px;
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
    width: 1200px;
    height: 1000px;
    background: #e3e4f8;
    position: relative;
    .title {
      position: absolute;
      left: 680px;
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
      }
    }
    .software {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
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
      font-size: 18px;
      color: #58568a;
    }
  }
  .bottom {
    width: 1200px;
    height: 380px;
    position: relative;
    background: #ccc;
    .title {
      position: absolute;
      left: 680px;
      font-size: 26px;
      color: #595c8f;
    }
  }
}
</style>