<template>
  <div class="wrapper">
    <section class="video">
      <!--<img :src="videoUrl" alt="">-->
      <div :style="[bgi]" class="videoM"></div>
    </section>
    <section class="positioning">
      <h5 class="bigTitle">
        {{ positioning.bigTitle }}
      </h5>
      <h6 class="title">
        {{ positioning.title }}
      </h6>
      <article>
        <div class="backgroundBoard-1"></div>
        <div class="b">
          <div class="img">
            <img :src="positioning.imgUrl" alt="">
          </div>
          <div class="text">
            <p>
              {{ positioning.content }}
            </p>
          </div>
        </div>
      </article>
    </section>
    <section class="advantage">
      <h5 class="bigTitle">
        {{ advantage.bigTitle }}
      </h5>
      <h6 class="title">
        {{ advantage.title }}
      </h6>
      <article>
        <aside class="advantageList">
          <ul>
            <li v-for="(item,index) in advantage.list" :key="index">
                <img :src="item.imgUrl" alt="">
                <p class="tag">
                  {{ item.tag }}
                </p>
            </li>
          </ul>
        </aside>
      </article>
    </section>
    <section class="park">
      <h5 class="bigTitle">
        {{ park.bigTitle }}
      </h5>
      <h6 class="title">
        {{ park.title }}
      </h6>
      <article>
        <div class="backgroundBoard-2"></div>
        <div class="bb">
          <div class="text">
            <p>
              {{ park.content }}
            </p>
          </div>
          <div class="img">
            <img :src="park.imgUrl" alt="">
          </div>
        </div>
      </article>
    </section>
    <section class="crew">
      <h5 class="bigTitle">
        {{ crew.bigTitle }}
      </h5>
      <h6 class="title">
        {{ crew.title }}
      </h6>
      <article>
        <div class="backgroundBoard-3"></div>
        <div class="bbb">
          <div class="img">
            <img :src="crew.imgUrl" alt="">
          </div>
          <div class="text">
            <p>
              {{ crew.content }}
            </p>
          </div>
        </div>
      </article>
    </section>
    <section class="incubator">
      <h5 class="bigTitle">
        {{ incubator.bigTitle }}
      </h5>
      <h6 class="title">
        {{ incubator.title }}
      </h6>
      <article>
        <ul class="introduction">
          <li v-for="(item,index) in incubator.list" :key="index">
            <div class="t" :style="[item.tagBgi]">
              <h5 class="largeTitle">
                {{ item.largeTitle }}
              </h5>
              <h6 class="title">
                {{ item.title }}
              </h6>
            </div>
            <div class="c">
              {{ item.content }}
            </div>
          </li>
        </ul>
      </article>
    </section>
    <section class="contect">
      <img src="@/assets/icon_form.png" alt="">
      <h2>
        {{ joinUs }}
      </h2>
      <div class="redLine"></div>
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
        positioning: {
          bigTitle: 'GOALS & POSITIONING',
          title: '目标及定位',
          imgUrl: require('@/assets/p4.png'),
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
                    进而推动电影制作工业化体系建立完善。`
        },
        advantage: {
          bigTitle: 'ADVANTAGE',
          title: '我们的优势',
          list: [
            {
              imgUrl: require('@/assets/p5.png'),
              tag: '远程协作 快速作业'
            },
            {
              imgUrl: require('@/assets/p6.png'),
              tag: '远程协作 快速作业'
            },
            {
              imgUrl: require('@/assets/p7.png'),
              tag: '远程协作 快速作业'
            },
            {
              imgUrl: require('@/assets/p5.png'),
              tag: '远程协作 快速作业'
            },
            {
              imgUrl: require('@/assets/p6.png'),
              tag: '远程协作 快速作业'
            },{
              imgUrl: require('@/assets/p7.png'),
              tag: '远程协作 快速作业'
            }

          ]
        },
        park: {
          bigTitle: 'PARK STATUS',
          title: '园区现状',
          imgUrl: require('@/assets/p8.png'),
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
                    进而推动电影制作工业化体系建立完善。`
        },
        crew: {
          bigTitle: 'CREW RECEPTION',
          title: '剧组接待',
          imgUrl: require('@/assets/p4.png'),
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
                    进而推动电影制作工业化体系建立完善。`
        },
        incubator: {
          bigTitle: 'INCUBATOR',
          title: '文化产业孵化器',
          list: [
            {
              largeTitle: '孵化器',
              title: '介绍',
              content: `本届论坛正式启动“国家电影云制作服务平台”，
                        配合专门制作的《国家电影云制作服务平台宣传片》，
                        首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                        阐释如何通过基于云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制作水平和能力，
                        创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                        并推动电影制作与高速互联网、
                        移动互联网实现深度融合，
                        进而推动电影制作工业化体系建立完善。
                        云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制作水平和能力，
                        创建云计算体系下的现代。`,
              tagBgi: {
                backgroundImage: 'url(' + require("@/assets/icon_shape2.png") + ')',
                backgroundRepeat: 'no-repeat'
              }
            },
            {
              largeTitle: '孵化器',
              title: '模式',
              content: `本届论坛正式启动“国家电影云制作服务平台”，
                        配合专门制作的《国家电影云制作服务平台宣传片》，
                        首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                        阐释如何通过基于云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制作水平和能力，
                        创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                        并推动电影制作与高速互联网、
                        移动互联网实现深度融合，
                        进而推动电影制作工业化体系建立完善。
                        云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制作水平和能力，
                        创建云计算体系下的现代。`,
              tagBgi: {
                backgroundImage: 'url(' + require("@/assets/icon_shape3.png") + ')',
                backgroundRepeat: 'no-repeat'
              }
            }
          ]
        },
        joinUs: '点击加入我们'
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
    .positioning,
    .advantage,
    .park,
    .crew,
    .incubator {
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
        letter-spacing: 2px;
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
        }
        .backgroundBoard-1 {
          top: 12px;
          height: 444px;
          right: 0px;
        }
        .backgroundBoard-2 {
          top: 80px;
          left: 0px;
          height: 360px;
        }
        .backgroundBoard-3 {
          top: 80px;
          right: 0px;
          height: 360px;
        }
        .b,
        .bb,
        .bbb {
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
        .bb {
           .img {
             img {
               margin-top: 40px;
             }
           }
           .text {
             padding: 120px 60px 0px 130px;
           }
         }
        .bbb {
          .img {
            img {
              margin-top: 40px;
            }
          }
          .text {
            padding: 120px 130px 0px 60px;
          }
        }
        .advantageList {
          height: 100%;
          ul {
            display: flex;
            justify-content: space-around;
            align-content: space-around;
            flex-wrap: wrap;
            height: 100%;
            li {
              position: relative;
              width: 380px;
              height: 320px;
              box-sizing: border-box;
              list-style: none;
              text-align: center;
              background-color: #fff;
              img {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                /*z-index: ;*/
              }
              .tag {
                position: absolute;
                bottom: 0px;
                width: 100%;
                background-color: rgba(0,0,0,0.4);
                font-size: 16px;
                line-height: 73px;
                text-align: center;
                color: #fff;
                margin: 0px;
              }
              &:hover {

              }
            }
          }
        }
        .introduction {
          display: flex;
          flex-direction: column;
          align-content: space-around;
          font-size: 16px;
          padding-left: 0px;
          li {
            position: relative;
            list-style: none;
            .t {
              position: absolute;
              top: -50px;
              width: 180px;
              height: 272px;
              color: rgba(255,255,255,1);
              text-align: center;
              .largeTitle {
                font-size: 30px;
                margin: 104px 0px 20px 0px;
                font-weight: 400;
              }
              .title {
                font-size: 44px;
                font-weight: 400;
              }
            }
            .c {
              margin-left: 140px;
              padding: 52px 120px;
              box-sizing: border-box;
              height:300px;
              background:rgba(255,255,255,1);
              box-shadow:0px 2px 40px 0px rgba(62,62,255,0.15);
              line-height: 2.4em;
              color: #808080;
            }
            &:nth-of-type(1){
              margin-bottom: 80px;
            }
            &:nth-of-type(2) {
              .t {
                right: 0px;
              }
              .c {
                margin-left: 0px;
                width: calc(100% - 140px);
              }
            }
          }
        }
      }
    }
    .advantage {
      height: 840px;
      width: 1260px;
      article {
        height: 700px;
      }
    }
    .incubator {
      height: 840px;
    }
    .contect {
      position: relative;
      height: 395px;
      margin-bottom: 80px;
      text-align: center;
      h2 {
        cursor: pointer;
        &:hover + .redLine {
          box-shadow:0px 2px 22px 0px rgba(236,51,14,0.5);
        }
      }
      img {
        cursor: pointer;
        margin-top: 120px;
        &:hover ~ .redLine {
          box-shadow:0px 2px 22px 0px rgba(236,51,14,0.5);
        }
      }
      .redLine {
        width: 350px;
        height: 36px;
        background-color: rgba(236, 51, 14, 1);
        margin: -36px auto;
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0px;
        display: inline-block;
        width: 100vw;
        height: 1px;
        background-image: linear-gradient(to right, #ccc 0%, #ccc 70%, transparent 70%);
        background-size:10px 1px;
        background-repeat: repeat-x;
      }
      &::before {
        top: 0px;
      }
      &::after {
        bottom: 0px;
      }
    }
  }
</style>
