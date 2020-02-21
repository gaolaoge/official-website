<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-backtop :bottom="200" :right="230"></el-backtop>
    <div class="tel">
      <img src="@/assets/icon_tel.png" alt="" class="default">
      <img src="@/assets/icon_tel2.png" alt="" class="hover">
    </div>
    <div class="online">
      <img src="@/assets/icon_chat.png" alt="" class="default">
      <img src="@/assets/icon_chat2.png" alt="" class="hover">
    </div>
    <header-m class="header" :class="[{showBackground: isShow}]"/>
    <router-view />
    <footer-m class="footer"/>
  </div>
</template>

<script>
  import headerM from './components/header/index'
  import footerM from './components/footer/index'
  export default {
    name: 'App',
    components: {
      headerM,
      footerM
    },
    data(){
      return {
        isShow: false
      }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll)
      this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
      })
    },
    methods: {
      handleScroll(){
        let scrollTop_ = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop_ > 60) {
          this.isShow = true
        }else{
          this.isShow = false
        }
      }
    }
  }
</script>

<style scoped lang="less">
#app {
  position: relative;
  font-family:PingFangSC-Regular,PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  .header {
    position: fixed;
    height: 60px;
    background-color: transparent;
    z-index: 9;
    &.showBackground {
      background:rgba(21,28,91,1);
      box-shadow:0px 2px 15px 0px rgba(21,28,91,0.8);
    }
  }
  /deep/.el-backtop {
    border-radius: 5px;
    background-color: rgba(233,233,233,0.7);
    i {
      color: #fff;
    }
    &:hover {
      color: #fff;
      background-image: url('./icons/mini_btn_bgi.png');
      background-size: cover;
    }
  }
  .tel,
  .online {
    position: fixed;
    z-index: 10;
    right: 230px;
    bottom: 310px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.12);
    cursor: pointer;
    img {
      width: 40px;
    }
    .hover {
      display: none;
    }
    &:hover {
      .default {
        display: none;
      }
      .hover {
        display: inline-block;
      }
    }
  }
  .tel {
    bottom: 255px;
  }
}
</style>
