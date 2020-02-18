<template>
  <div class="hello">
    <div class="carousel">
      <div class="block">
        <el-carousel height="100vh">
          <el-carousel-item v-for="(item,index) in carousel" :key="item.index" :style="[item.bgiUrl]">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <section class="search">
      <aside>
        <el-input type="text" class="searchInput" :placeholder="search.placeholder" prefix-icon="el-icon-search" v-model="search.inputVal">
        </el-input>
        <span class="searchBtn">
          {{ search.btn }}
        </span>
        <div class="record">
          <ul>
            <li v-for="item in search.list" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </aside>
    </section>
    <section class="list">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="left">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="right">
            <h6 class="title">
              {{ item.title }}
            </h6>
            <p class="date">
              更新时间：{{ item.date }}
            </p>
            <p class="content">
              {{ item.content }}
            </p>
          </div>
        </li>
      </ul>
      <el-pagination
        class="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="5"
        layout="total, prev, pager, next"
        :total="30">
      </el-pagination>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        carousel: [
          {
            bgiUrl: {
              backgroundImage: 'url(' + require('@/assets/silter-1.png') + ')',
              backgroundSize: 'cover'
            }
          },
          {
            bgiUrl: {
              backgroundImage: 'url(' + require('@/assets/silter-1.png') + ')',
              backgroundSize: 'cover'
            }
          }
        ],
        search: {
          inputVal: '',
          placeholder: '请在此处输入关键字，例：渲染农场',
          btn: '搜索',
          list: [
            '渲染农场',
            '管理平台',
            '云网盘',
            '中国电影云基地',
            '影视协会'
          ]

        },
        list: [
          {
            title: '《少年的你》获金像奖12项提名，易烊千玺与周冬雨，成了遥不可及的目标',
            imgUrl: require('@/assets/timg.png'),
            date: '2020.02.02',
            content: `这两天有关电影《少年的你》获奖的消息，
                      让易烊千玺和周冬雨两位演员又火了一把，
                      最佳男主角、
                      最佳女主角、
                      最佳新演员，
                      我们很容易从这件事情上看出来，
                      两人在表演方面的实力确实不俗。
                      每年获奖的演员很多，
                      那为什么说易烊千玺和周冬雨这次的香港金像…`
          },
          {
            title: '《少年的你》获金像奖12项提名，易烊千玺与周冬雨，成了遥不可及的目标',
            imgUrl: require('@/assets/timg.png'),
            date: '2020.02.02',
            content: `这两天有关电影《少年的你》获奖的消息，
                      让易烊千玺和周冬雨两位演员又火了一把，
                      最佳男主角、
                      最佳女主角、
                      最佳新演员，
                      我们很容易从这件事情上看出来，
                      两人在表演方面的实力确实不俗。
                      每年获奖的演员很多，
                      那为什么说易烊千玺和周冬雨这次的香港金像…`
          },
          {
            title: '《少年的你》获金像奖12项提名，易烊千玺与周冬雨，成了遥不可及的目标',
            imgUrl: require('@/assets/timg.png'),
            date: '2020.02.02',
            content: `这两天有关电影《少年的你》获奖的消息，
                      让易烊千玺和周冬雨两位演员又火了一把，
                      最佳男主角、
                      最佳女主角、
                      最佳新演员，
                      我们很容易从这件事情上看出来，
                      两人在表演方面的实力确实不俗。
                      每年获奖的演员很多，
                      那为什么说易烊千玺和周冬雨这次的香港金像…`
          },
          {
            title: '《少年的你》获金像奖12项提名，易烊千玺与周冬雨，成了遥不可及的目标',
            imgUrl: require('@/assets/timg.png'),
            date: '2020.02.02',
            content: `这两天有关电影《少年的你》获奖的消息，
                      让易烊千玺和周冬雨两位演员又火了一把，
                      最佳男主角、
                      最佳女主角、
                      最佳新演员，
                      我们很容易从这件事情上看出来，
                      两人在表演方面的实力确实不俗。
                      每年获奖的演员很多，
                      那为什么说易烊千玺和周冬雨这次的香港金像…`
          },
          {
            title: '《少年的你》获金像奖12项提名，易烊千玺与周冬雨，成了遥不可及的目标',
            imgUrl: require('@/assets/timg.png'),
            date: '2020.02.02',
            content: `这两天有关电影《少年的你》获奖的消息，
                      让易烊千玺和周冬雨两位演员又火了一把，
                      最佳男主角、
                      最佳女主角、
                      最佳新演员，
                      我们很容易从这件事情上看出来，
                      两人在表演方面的实力确实不俗。
                      每年获奖的演员很多，
                      那为什么说易烊千玺和周冬雨这次的香港金像…`
          }
        ],
        currentPage1: 2
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style scoped lang="less">
  .hello {
    .carousel {
      .silterImg {

      }
    }
    .search{
      text-align: center;
      margin: 40px 0px;
      .searchInput {
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 44px;
        padding-left: 18px;
        box-sizing: border-box;
        width: 650px;
        height: 44px;
      }
      .searchBtn {
        position: relative;
        left: -60px;
        vertical-align: top;
        display: inline-block;
        width: 104px;
        height: 44px;
        background-color: rgba(62,62,255,1);
        color: #fff;
        line-height: 44px;
        border-radius: 44px;
      }
      .record {
        margin: 0px auto;
        width: 700px;
        text-align: left;
        ul {
          padding-left: 4px;
          margin-top: 12px;
          li {
            display: inline-block;
            list-style: none;
            padding: 0px 16px;
            color: rgba(0,0,0,0.4);
            cursor: pointer;
            font-size: 14px;
          }
        }
      }
    }
    .list {
      width: 1460px;
      li {
        height: 241px;
        list-style: none;
        cursor: pointer;
        padding: 30px 130px;
        box-sizing: border-box;
        .left {
          display: inline-block;
        }
        .right {
          padding: 6px 8px;
          box-sizing: border-box;
          display: inline-block;
          width: calc(100% - 326px);
          vertical-align: top;
          h6 {
            line-height: 1.0em;
            margin: 0px;
            font-size: 16px;
            font-weight: normal;
          }
          .date {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(0,0,0,0.2);
          }
          .content {
            color: #808080;
            font-size: 14px;
            line-height: 1.8em;
          }
        }
        &:hover {
          background-color: rgba(62,62,255,0.05);
        }
      }
      .page {
        margin: 70px auto 40px;
        width: 400px;
        text-align: center;
      }
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /deep/.el-carousel__indicators {
    display: none!important;
  }
  /deep/.el-carousel__arrow--left,
  /deep/.el-carousel__arrow--right {
    display: block!important;
  }
  /deep/.el-carousel__arrow {
    top: 92%;
    background-color: rgba(0,0,0,0);
  }
  /deep/.el-carousel__arrow--left {
    left: 146px!important;
  }
  /deep/.el-carousel__arrow--right {
    left: 166px!important;
  }
  /deep/.el-input__inner {
    border: 0px!important;
    background-color: transparent;
    height: 44px!important;
  }
  /deep/.el-input__icon.el-icon-search {
    line-height: 44px!important;
  }
  /deep/.el-pager li {
    margin: 0px 4px;
    box-sizing: content-box;
    padding: 0px!important;
    min-width: 28px!important;
    &.active {
      color: #fff;
      background-color: rgba(62, 62, 255, 1);
      border-radius: 50%;
    }
    &:hover {
      background-color: rgba(62, 62, 255, 0.2);
      border-radius: 50%;
    }
  }

</style>
