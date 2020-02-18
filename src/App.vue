<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-backtop></el-backtop>
    <div class="tel">
      <img src="@/assets/icon_tel.png" alt="" class="default">
      <img src="@/assets/icon_tel2.png" alt="" class="hover">
    </div>
    <div class="online">
      <img src="@/assets/icon_chat.png" alt="" class="default">
      <img src="@/assets/icon_chat2.png" alt="" class="hover">
    </div>
    <header-m class="header"/>
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
    }
  }
</script>

<style scoped lang="less">
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  .header {
    position: absolute;
    z-index: 9;
  }
  /deep/.el-backtop {
    border-radius: 5px;
    background-color: rgba(255,255,255,0.4);
    &:hover {
      color: #fff;
      background-color: rgba(83,83,253,1);
    }
  }
  .tel,
  .online {
    position: fixed;
    z-index: 10;
    right: 40px;
    bottom: 100px;
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
    bottom: 160px;
  }
}
</style>
