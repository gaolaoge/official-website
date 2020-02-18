<template>
  <div class="wrapper">
    <section class="video">
      <!--<img :src="videoUrl" alt="">-->
      <div :style="[bgi]" class="videoM"></div>
    </section>
    <section class="background">
      <h5 class="bigTitle">
        {{ background.bigTitle }}
      </h5>
      <h6 class="title">
        {{ background.title }}
      </h6>
      <article>
        <div class="backgroundBoard-1"></div>
        <div class="b">
          <div class="img">
            <img :src="background.imgUrl" alt="">
          </div>
          <div class="text">
            <p>
              {{ background.content }}
            </p>
            <div class="btn">
              {{ background.btn }}
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="system">
      <h5 class="bigTitle">
        {{ system.bigTitle }}
      </h5>
      <h6 class="title">
        {{ system.title }}
      </h6>
      <article>
        <div class="backgroundBoard-2"></div>
        <aside class="systemList">
          <ul>
            <li v-for="(item,index) in system.list" :key="index">
              <div class="catalog">
                <img :src="item.imgUrl" alt="">
                <p class="tag">
                  {{ item.tag }}
                </p>
              </div>
              <div class="introduction">
                <header>
                  {{ item.title }}
                </header>
                <article>
                  {{ item.content }}
                </article>
              </div>
            </li>
          </ul>
        </aside>
        <div class="moreBtn">
          {{ system.btn }}
        </div>
      </article>
    </section>
    <section class="farm">
      <h5 class="bigTitle">
        {{ farm.bigTitle }}
      </h5>
      <h6 class="title">
        {{ farm.title }}
      </h6>
      <article>
        <div class="backgroundBoard-3"></div>
        <div class="farmImg">
          <img :src="farm.imgUrl" alt="">
        </div>
        <div class="list">
          <ul>
            <li v-for="(item,index) in farm.list" :key="index">
              <div class="leftM">
                <span>
                  0
                </span>
                <span class="index">
                  {{ item.index }}
                </span>
              </div>
              <div class="rightM">
                <h6>
                  {{ item.title }}
                </h6>
                <div class="content">
                  {{ item.content }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="recharge">
          <img src="@/icons/recharge_btn.png" alt="">
          {{ recharge }}
        </div>
        <div class="memberList">
          <ul>
            <li v-for="(item,index) in memberList" :key="index">
              <div class="top">
                <img src="@/icons/shape.png" alt="" class="shape">
                <img :src="item.icon" alt="" class="diamond">
                {{ item.memberType }}
              </div>
              <div class="basket">
                <div class="topM">
                  <span class="priceColor">
                    <span class="unit">
                      ￥
                    </span>
                    <span class="num">
                      {{ item.price }}
                    </span>
                  </span>
                  / 核实
                </div>
                <div class="bottomM">
                  <p>
                    累计充值<{{ item.lowerLimit }}元
                  </p>
                  <p>
                    相当于每小时收费{{ item.averagePrice }}元
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'platform',
    data(){
      return {
        videoUrl: require('@/assets/p4.png'),
        bgi: {
          backgroundImage: 'url(' + require('@/assets/bgi.png') + ')',
          backgroundSize: 'cover',
          height: '100vh'
        },
        background: {
          bigTitle: 'BACKGROUND',
          title: '平台背景',
          imgUrl: require('@/assets/p2.png'),
          content: `本届论坛正式启动“国家电影云制作服务平台”，
                    配合专门制作的《国家电影云制作服务平台宣传片》，
                    首次向大众介绍国家电影云制作服务平台的建设和示范情况，
                    阐释如何通过基于云计算服务平台的数字电影网络化、
                    分布式跨域协同制作，
                    促进我国精品电影持续推出，
                    有效提升我国电影制作水平和能力，
                    创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                    并推动电影制作与高速互联网、
                    移动互联网实现深度融合，
                    进而推动电影制作工业化体系建立完善。`,
          btn: '前往平台'
        },
        system: {
          bigTitle: 'MANAGEMENT SYSTEM',
          title: '云管理系统',
          list: [
            {
              imgUrl: require('@/icons/icon_yc.png'),
              tag: '远程协作 快速作业',
              title: '远程协作 快速作业',
              content: `基于云计算服务平台的数字电影网络化分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制作水平和能力，
                        创建云计算体系下的现代化地阿奴应生产制作工艺流程和新型产业进而推动电影制作工业化体系建立完善。`
            },
            {
              imgUrl: require('@/icons/icon_tec.png'),
              tag: '技术突破',
              title: '技术突破',
              content: `基于云计算服务平台的数字电影网络化分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制作水平和能力，
                        创建云计算体系下的现代化地阿奴应生产制作工艺流程和新型产业进而推动电影制作工业化体系建立完善。`
            },
            {
              imgUrl: require('@/icons/icon_normal.png'),
              tag: '电影规则标准化',
              title: '电影规则标准化',
              content: `基于云计算服务平台的数字电影网络化分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制作水平和能力，
                        创建云计算体系下的现代化地阿奴应生产制作工艺流程和新型产业进而推动电影制作工业化体系建立完善。`
            }
          ],
          btn: '前往了解更多'
        },
        farm: {
          bigTitle: 'RENDER FARM',
          title: '渲染农场',
          imgUrl: require('@/assets/p3.png'),
          list: [
            {
              index: 1,
              title: '一键渲染',
              content: '平台项目无需上传，分析，直接渲染。'
            },
            {
              index: 2,
              title: '更快渲染速度',
              content: '平台项目无需上传，分析，直接渲染。'
            },{
              index: 3,
              title: '更实惠价格',
              content: '平台项目无需上传，分析，直接渲染。'
            },
            {
              index: 4,
              title: '更便捷操作',
              content: '平台项目无需上传，分析，直接渲染。'
            }

          ]
        },
        recharge: '立即充值',
        memberList: [
          {
            icon: require('@/icons/icon_vip1.png'),
            memberType: '普通会员',
            price: 90,
            lowerLimit: 3000,
            averagePrice: 10
          },
          {
            icon: require('@/icons/icon_vip2.png'),
            memberType: '高级会员',
            price: 90,
            lowerLimit: 3000,
            averagePrice: 10
          },
          {
            icon: require('@/icons/icon_vip3.png'),
            memberType: '黄金会员',
            price: 90,
            lowerLimit: 3000,
            averagePrice: 10
          },
          {
            icon: require('@/icons/icon_vip4.png'),
            memberType: '砖石会员',
            price: 90,
            lowerLimit: 3000,
            averagePrice: 10
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .wrapper{
    .video {
      height: 100vh;
      .videoM {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          background: inherit;
          filter: brightness(60%);
          z-index: 2;
        }
      }
    }
    .background,
    .system,
    .farm {
      width: 1440px;
      height: 602px;
      margin: 70px auto 100px;
      .bigTitle {
        text-align: center;
        color: #ddd;
        font-size: 50px;
        font-weight: normal;
        line-height: 1.0em;
        margin: 10px 0px 8px;
      }
      .title {
        text-align: center;
        font-size: 30px;
        margin: 0px;
        line-height: 1.0em;
      }
      article {
        position: relative;
        margin-top: 50px;
        font-size: 0px;
        .backgroundBoard-1,
        .backgroundBoard-2,
        .backgroundBoard-3 {
          position: absolute;
          z-index: -1;
          background-color: rgba(62,62,255,0.03);
          width: 1330px;
          right: 0px;
        }
        .backgroundBoard-1 {
          top: 12px;
          height: 444px;
        }
        .backgroundBoard-2 {
          top: 186px;
          left: calc(-50vw + 720px);
          height: 400px;
          width: 100vw;
        }
        .backgroundBoard-3 {
          top: 606px;
          height: 320px;
          width: 1440px;
        }
        .b {
          display: flex;
          .img {
            display: inline-block;
            height: 444px;
            img {
              margin-top: 62px;
              width: 576px;
              height: 324px;
              display: inline-block;
            }
          }
          .text {
            display: inline-block;
            width: calc(1440px - 576px);
            font-size: 17px;
            line-height: 2.0em;
            padding: 80px 100px;
            box-sizing: border-box;
          }
        }
        .systemList {
          ul {
            display: flex;
            justify-content: space-around;
            padding-left: 0px;
            li {
              position: relative;
              width: 360px;
              height: 360px;
              border: 10px solid rgba(62, 62, 255, 0.1);
              box-sizing: border-box;
              list-style: none;
              text-align: center;
              background-color: #fff;
              .catalog {
                font-size: 18px;
                img {
                  margin-top: 113px;
                }
              }
              .introduction {
                display: none;
                position: absolute;
                top: -20px;
                left: -20px;
                width: 380px;
                height: 380px;
                padding: 42px;
                border-radius: 2px;
                box-sizing: border-box;
                background-color: rgba(62, 62, 255, 1);
                box-shadow:0px 2px 40px 0px rgba(62,62,255,0.5);
                header {
                  font-size: 18px;
                  color: #fff;
                  font-weight: bold;
                }
                article {
                  margin-top: 26px;
                  font-size: 16px;
                  line-height: 30px;
                  color: rgba(255,255,255,0.9);
                  text-align: left;
                }
              }
              &:hover {
                .introduction {
                  display: inline-block;
                }
              }
            }
          }
        }
        .btn {
          text-align: center;
          width: 152px;
          line-height: 32px;
          background-color: rgba(0,0,0,0.1);
          box-shadow:0px 2px 30px 0px rgba(62,62,255,0.1);
          border-radius: 2px;
          color: #fff;
          cursor: pointer;
          letter-spacing: 2px;
          font-weight: 500;
          &:hover {
            background-color: rgba(62,62,255,1);
            box-shadow:0px 2px 30px 0px rgba(62,62,255,0.3);

          }
        }
        .moreBtn {
          width: 478px;
          height: 77px;
          line-height: 77px;
          margin: 80px auto;
          border: 1px solid rgba(62, 62, 255, 0.1);
          border-radius: 39px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(62, 62, 255, 1);
          font-size: 21px;
          letter-spacing: 2px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: rgba(62, 62, 255, 1);
            box-shadow:0px 2px 30px 0px rgba(62,62,255,0.3);
            color: #fff;
          }
        }
        .farmImg {
          margin: 0px auto;
          width: 880px;
          height: 347px;
          box-shadow: 0px 2px 30px 0px rgba(0,0,0,0.15);
          img {
            margin: -30px 0px 0px -30px;
          }
        }
        .list {
          width: 1200px;
          margin: 50px auto;
          font-size: 16px;
          ul {
            display: flex;
            justify-content: space-between;
            li {
              list-style: none;
              .leftM {
                display: inline-block;
                width: 80px;
                height: 116px;
                font-style: italic;
                letter-spacing: -4px;
                border-right: 1px solid rgba(0,0,0,0.09);
                vertical-align: top;
                span {
                  color: rgba(0,0,0,0.09);
                  font-size: 30px;
                  &.index {
                    font-size: 80px;
                  }
                }
              }
              .rightM {
                display: inline-block;
                width: 160px;
                padding: 8px;
                box-sizing: border-box;
                h6 {
                  font-size: 21px;
                  font-weight: 500;
                  line-height: 29px;
                  margin: 0px 0px 20px 0px;
                }
                .content {
                  color: #808080;
                  font-size: 16px;
                  font-weight: 400;
                  line-height: 26px;
                }
              }
            }
          }
        }
        .recharge {
          position: relative;
          font-size: 30px;
          line-height: 82px;
          color: #fff;
          margin: 0px auto;
          width: 360px;
          text-align: center;
          cursor: pointer;
          img {
            position: absolute;
            left: 0px;
            z-index: -1;
            width: 100%;
          }
        }
        .memberList {
          font-size: 14px;
          ul {
            display: flex;
            justify-content: space-around;
            padding-left: 0px;
            li {
              cursor: pointer;
              position: relative;
              list-style: none;
              width: 263px;
              .top {
                margin-top: 40px;
                text-align: center;
                line-height: 54px;
                font-size: 24px;
                color: rgba(62, 62, 255, 1);
                .shape {
                  position: absolute;
                  left: 0px;
                  width: 263px;
                }
                .diamond {
                  vertical-align: middle;
                  width: 30px;
                }
              }
              .basket {
                height: 296px;
                margin-top: 24px;
                box-shadow:0px 2px 30px 0px rgba(62,62,255,0.15);
                padding: 12px;
                box-sizing: border-box;
                text-align: center;
                background-color: #FFF;
                .topM {
                  border-bottom: 1px solid rgba(62, 62, 255, 0.15);
                  padding: 28px 0px 40px;
                  .priceColor {
                    color: rgba(62, 62, 255, 1);
                    .unit {
                      font-size: 30px;
                    }
                    .num {
                      font-style: italic;
                      font-size: 60px;
                      line-height: 69px;
                    }
                  }
                }
                .bottomM {
                  color: #808080;
                  padding: 22px 0px;
                  p {
                    margin: 16px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .system {
      height: 800px;
    }
    .farm {
      margin-top: -40px;
      height: 1200px;
    }
  }
</style>
