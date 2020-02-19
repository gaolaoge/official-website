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
    <section class="platfrom">
      <article>
        <header class="title">
          {{ platform.title }}
        </header>
        <p class="littleTitle">
          {{ platform.littleTitle }}
        </p>
        <p class="dircetion">
          {{ platform.direction }}
        </p>
        <aside>
          <ul class="rectangle">
            <li v-for="item in list">
              <img :src="item.imgUrl" alt="" v-if="item.imgUrl">
              <div class="title" v-if="item.title">
                {{ item.title }}
              </div>
              <div class="direction" v-if="item.direction">
                {{ item.direction }}
              </div>
              <div class="button" v-if="item.button">
                {{ item.button }}
              </div>
            </li>
          </ul>
        </aside>
      </article>
    </section>
    <section class="base">
      <div class="background-1"></div>
      <article>
        <header class="title even_">
          {{ base.title }}
        </header>
        <p class="littleTitle">
          {{ base.direction }}
        </p>
        <nav class="baseNav">
          <ul>
            <li v-for="(item,index) in base.list"
                :key="item.name"
                :class="{active: item.active}"
                @click="switchItem(index)">
              {{ item.index }}
              <i class="el-icon-caret-right"></i>
              {{ item.name }}
            </li>
          </ul>
        </nav>
        <aside class="videoBox">
          <img :src="base.videoUrl" alt="">
        </aside>
      </article>
    </section>
    <section class="association">
      <div class="background-2"></div>
      <article>
        <header class="title">
          {{ association.title }}
        </header>
        <p class="littleTitle">
          {{ association.littleTitle }}
        </p>
        <div class="articleMain">
          <div class="img">
            <img :src="association.imgUrl" alt="article-img">
          </div>
          <div class="text">
            <span>
              {{ association.mainText }}
            </span>
            <div class="btn">
              {{ association.btn }}
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="information">
      <article>
        <header class="title">
          {{ information.title }}
        </header>
        <p class="littleTitle">
          {{ information.littleTitle }}
        </p>
        <aside>
          <ul class="warpList">
            <li v-for="(item,index) in information.list" :key="index">
              <div class="left">
                <p class="date">
                  {{ item.date }}
                </p>
                <p class="week">
                  {{ item.week }}
                </p>
              </div>
              <div class="right">
                <div class="title">
                  {{ item.title }}
                </div>
                <div class="direction">
                  {{ item.direction }}
                </div>
                <div class="btn">
                  <i class="el-icon-arrow-right"></i>
                  MORE
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </article>
    </section>
    <section class="partners">
      <article>
        <header class="title">
          {{ partners.title }}
        </header>
        <p class="littleTitle">
          {{ partners.littleTitle }}
        </p>
        <aside>
          <div class="relativeship">
            <img src="@/assets/relativeship.png" alt="">
          </div>
        </aside>
      </article>
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
      platform: {
        title: 'CHINA MOIVE CLOUD',
        littleTitle: '中国电影云平台',
        direction: `中国电影云平台是基于云计算服务平台的数字电影网络化、
                    分布式跨越协同制作，
                    促进我国精品电影持续推出，
                    有效提升我国电影制作水平和能力，
                    创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                    并推动电影制作与高速互联网、
                    移动互联网实现深度融合，
                    进而推动电影制作工业化体系建立完善。`
      },
      list: [
        {
          imgUrl: require('@/assets/li-p1.png')
        },
        {
          title: '云管理系统',
          direction: '基于云计算服务平台的数字电影网络化、分布式跨越协同制作，促进我国精品电影...',
          button: 'MORE'
        },
        {
          imgUrl: require('@/assets/li-p2.png')
        },
        {
          title: '云平台',
          direction: '基于云计算服务平台的数字电影网络化、分布式跨越协同制作，促进我国精品电影...',
          button: 'MORE'
        },
        {
          imgUrl: require('@/assets/li-p3.png')
        },
        {
          title: '渲染农场',
          direction: '基于云计算服务平台的数字电影网络化、分布式跨越协同制作，促进我国精品电影...',
          button: 'MORE'
        }
      ],
      base: {
        title: 'CHINA MOIVE CLOUD BASE',
        direction: '中国电影云基地',
        videoUrl: require('@/assets/video-1.png'),
        list: [
          {
            name: '前沿技术',
            active: false,
            index: '01'
          },
          {
            name: '政府补贴',
            active: true,
            index: '02'
          },
          {
            name: '配套服务',
            active: false,
            index: '03'
          },
          {
            name: '成果转化',
            active: false,
            index: '04'
          },
          {
            name: '降低成本',
            active: false,
            index: '05'
          },
          {
            name: '填补空白',
            active: false,
            index: '06'
          }
        ]
      },
      association: {
        title: 'MOVIE ASSOCIATION',
        littleTitle: '影视协会',
        imgUrl: require('@/assets/m.png'),
        mainText: `中国电影云平台是基于云计算服务平台的数字电影网络化分布式跨越协同制作，
                   促进我国精品电影持续输出，
                   有效提升我国电影制作水平和能力，
                   创建云计算体系下的现代电影生产制作工艺流程和新兴产业服务模式，
                   并推动电影制作与高速互联网、
                   移动互联网实现深度融合，
                   进而推动电影云计算体系下的现代电影生产制作工艺...`,
        btn: 'MORE'
      },
      information: {
        title: 'INDUSTRY INFORMATION',
        littleTitle: '行业资讯',
        list: [
          {
            date: '18',
            week: 'OCT',
            title: '疫情后的影视行业，失业，会轮到你么：铁饭碗是什么',
            direction: '各大影视城也有对应措施，比如横店的免剧组场租、酒店半价、发群半价这真的杯...',
            link: ''
          },
          {
            date: '23',
            week: 'SEP',
            title: '疫情后的影视行业，失业，会轮到你么：铁饭碗是什么',
            direction: '各大影视城也有对应措施，比如横店的免剧组场租、酒店半价、发群半价这真的杯...',
            link: ''
          },
          {
            date: '16',
            week: 'SEP',
            title: '疫情后的影视行业，失业，会轮到你么：铁饭碗是什么',
            direction: '各大影视城也有对应措施，比如横店的免剧组场租、酒店半价、发群半价这真的杯...',
            link: ''
          }
        ]
      },
      partners: {
        title: 'BUSINESS PARTNERS',
        littleTitle: '合作伙伴'
      }
    }
  },
  methods: {
    switchItem(index){
      this.base.list.forEach((curr_,index_) => {
        curr_.active = false
        if(index_ == index)
          curr_.active = true
      })
    }
  }
}
</script>

<style scoped lang="less">
.hello {
  .carousel {
    .silterImg {

    }
  }
  .platfrom,
  .base,
  .association,
  .information,
  .partners {
    position: relative;
    width: 1200px;
    text-align: center;
    margin: 52px auto 80px;
    .background-1,
    .background-2,
    .background-3 {
      position: absolute;
      left: calc((-100vw + 1200px)/2);
      z-index: -1;
      width: 100vw;
      background-color: rgba(249,249,255,1);
    }
    .background-1 {
      top: 0px;
      height: 720px;
    }
    .background-2 {
      top: 180px;
      height: 500px;
    }
    .background-3 {
      top: 0px;
    }
    .title {
      font-weight: 800;
      font-size: 24px;
    }
    .littleTitle {
      margin-top: 6px;
      font-size: 14px;
      color: #808080;
    }
    .title.even_ {
      padding-top: 50px;
    }
    .dircetion {
      margin-top: 26px;
      color: #808080;
      font-size: 14px;
      line-height: 2.0em;
    }
    aside {
      margin: 40px auto 0px;
      width: 900px;
      .rectangle {
        padding: 0px;
        display: flex;
        flex-wrap: wrap;
        li {
          box-sizing: border-box;
          list-style: none;
          width: 300px;
          height: 300px;
          padding: 12px;
          img {
            width: 100%;
          }
          .title {
            margin-top: 60px;
            font-size: 17px;
            letter-spacing: 3px;
            line-height: 3.0em;
          }
          .direction {
            color: #808080;
            font-size: 13px;
            line-height: 2.0em;
          }
          .button {
            margin: 20px auto;
            width: 140px;
            font-size: 12px;
            line-height: 1.8em;
            font-weight: normal;
            border: 1px solid #666;
            box-shadow:0px 2px 10px 0px rgba(62,62,255,0.1);
            cursor: pointer;
            transition: box-shadow 0.2s;
            &:hover {
              background-color: #3E3EFF;
              color: #fff;
              border: 1px solid rgba(0,0,0,0);
              box-shadow:0px 2px 10px 0px rgba(62,62,255,0.4);
            }
          }
          &:nth-of-type(even) {
            background-color: rgba(249,249,255,1);
          }
        }
      }
      .warpList {
        display: flex;
        justify-content: space-around;
        padding: 0px;
        li {
          list-style: none;
          position: relative;
          width: 407px;
          height: 216px;
          flex-shrink: 0;
          padding: 24px;
          box-sizing: border-box;
          border-radius: 2px;
          transition: all 0.2s;
          .left {
            display: inline-block;
            border-right: 1px solid #ccc;
            width: 84px;
            height: 166px;
            vertical-align: top;
            .date,
            .week {
              font-size: 32px;
              font-weight: bold;
              font-style: italic;
              color: #bbb;
              margin: 0px;
            }
            .week {
              font-size: 20px;

            }
          }
          .right {
            display: inline-block;
            width: 267px;
            padding: 8px;
            box-sizing: border-box;
            text-align: left;
            .title {
              font-size: 14px;
              line-height: 1.8em;
            }
            .direction {
              margin-top: 10px;
              color: #888;
              font-size: 13px;
              line-height: 2.0em;
            }
            .btn {
              color: #3E3EFF;
              font-size: 13px;
              line-height: 4.0em;
              cursor: pointer;
            }
          }
          &:hover {
            box-shadow:0px 2px 30px 0px rgba(112,112,255,0.1);
          }
        }
      }
      .relativeship {
        width: 1462px;
        margin: 0px auto;
        img {
          width: 1420px;
        }
      }
    }
    .baseNav {
      margin-top: 54px;
      ul {
        display: flex;
        justify-content: space-around;
        height: 26px;
        li {
          list-style: none;
          font-size: 14px;
          color: #424242;
          cursor: pointer;
          line-height: 26px;
          transition: all 0.2s;
          &.active {
            color: #3E3EFF;
            font-size: 22px;
          }
        }
      }
    }
    .videoBox {
      width: 1200px;
      height: 600px;
      box-shadow: 0px 0px 4px 1px #ccc;
      img {
        margin: -20px 0px 0px -20px;
      }
    }
    .articleMain {
      margin: 60px auto 0px;
      width: 1060px;
      display: flex;
      .img {
        width: 458px;
        box-shadow: 0px 0px 1px 1px #aaa;
        font-size: 0px;
        img {
          width: 458px;
        }
      }
      .text {
        width: 490px;
        box-sizing: border-box;
        padding: 140px 0px 0px 92px;
        line-height: 2.0em;
        color: #808080;
        text-align: left;
      }
      .btn {
        width: 192px;
        margin: 0px auto;
        font-size: 12px;
        font-weight: bold;
        line-height: 2.0em;
        background-color: #fff;
        color: #808080;
        border-radius: 1px;
        border: 1px solid rgba(0,0,0,1);
        text-align: center;
        cursor: pointer;
        transition: color 0.2s,backgroundColor 0.2s,boxShadow 0.2s;
        &:hover {
          border: 1px solid rgba(0,0,0,0);
          background-color: #3E3EFF;
          color: #fff;
          box-shadow:0px 2px 10px 0px rgba(62,62,255,0.4);
        }
      }
    }
  }
  .information {
    width: 1400px;
    margin-top: 160px;
  }
  .partners {
    width: 100vw;
    aside {
      margin: 0px auto;
      width: 1462px;
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
</style>
