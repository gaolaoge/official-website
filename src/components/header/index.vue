<template>
  <div class="wrapper">
    <header>
      <div class="logo" @click="$router.push('/')">
        <img src="@/icons/logo.png" alt="SENSE" title="SENSE">
      </div>
      <nav>
        <ul>
          <li v-for="(nav,index) in navList"
              :key="nav.index"
              :class="{'active': index == activeIndex}"
              @click="activeIndex = index">
            <router-link :to="nav.url" class="a">
              {{ nav.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="searchInput">
        <i class="el-icon-search i"></i>
      </div>
    </header>

  </div>
</template>

<script>
  export default {
    name: 'h',
    data(){
      return {
        navList: [
          {
            title: '首页',
            url: '/'
          },
          {
            title: '中国电影云平台',
            url: '/platform'
          },
          {
            title: '中国电影云基地',
            url: '/base'
          },
          {
            title: '影视协会',
            url: '/association'
          },
          {
            title: '行业资讯',
            url: '/information'
          },
          {
            title: '关于我们',
            url: '/about'
          }
        ],
        activeIndex: 0
      }
    },
    watch: {
      $route: {
        handler: function(val){
          switch(val.path){
            case '/':
              this.activeIndex = 0
              break
            case '/platform':
              this.activeIndex = 1
              break
            case '/base':
              this.activeIndex = 2
              break
            case '/association':
              this.activeIndex = 3
              break
            case '/information':
              this.activeIndex = 4
              break
            case '/about':
              this.activeIndex = 5
              break
          }
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    position: relative;
    width: 100vw;
    height: 24px;
    header {
      position: relative;
      margin: 18px auto;
      width: 1354px;
      height: 24px;
      .logo {
        position: absolute;
        cursor: pointer;
      }
      nav {
        position: absolute;
        right: 107px;
        ul {
          margin: 0px;
          li {
            display: inline-block;
            padding: 0px 25px;
            font-size: 14px;
            cursor: pointer;
            .a {
              color: rgba(255,255,255,0.6);
              text-decoration: none;
            }
            &:hover,
            &.active {
              .a {
                color: rgba(255,255,255,1);
              }
            }
          }
        }
      }
      .searchInput {
        position: absolute;
        cursor: pointer;
        right: 10px;
        .i {
          color: #fff;
        }
      }
    }
  }
</style>
