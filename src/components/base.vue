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
                <p class="tagContent">
                  {{ item.tagContent }}
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
      <img src="@/assets/icon_form.png" alt="" @click="dialogFormVisible_ = true">
      <h2 @click="dialogFormVisible_ = true">
        {{ joinUs }}
      </h2>
      <div class="redLine"></div>
    </section>
    <join-us :statusVal="dialogFormVisible_" @shutMe="shutJoinUs"/>
  </div>
</template>

<script>
  import joinUs from '@/view/joinUs'
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
          content: `中宣部中国电影科学技术研究所授权青岛已臻化境影视科技有限公司，
                    与青岛市即墨区人民政府联手打造的中国电影云基地，
                    位于青岛市即墨区龙山街道，
                    占地面积188亩，
                    总建筑面积31.5万㎡。
                    打造集中国电影云平台研发中心、
                    互动空间、
                    高科技体验馆、
                    电影元素商业街区、
                    电影上下游产业办公用房、
                    众创空间、
                    孵化器、
                    邻里关系为一体的产业园区。`
        },
        advantage: {
          bigTitle: 'ADVANTAGE',
          title: '我们的优势',
          list: [
            {
              imgUrl: require('@/assets/p5.png'),
              tag: '远程协作 快速作业',
              tagContent: `本园区项目为政府重点招商引进项目，
                           入驻企业可享受税收优惠、
                           房屋补贴、
                           人才补贴等优惠政策；
                           并且中国电影云平台落地商业区，
                           将大大降低企业的使用成本、
                           提高传输速度、
                           技术团队支持随时完善客户需求。`
            },
            {
              imgUrl: require('@/assets/p6.png'),
              tag: '远程协作 快速作业',
              tagContent: `园区基础配套、
                           生活配套、
                           工商税务、
                           法律财务、
                           知识产权服务、
                           人力资源服务、
                           管理咨询服务、
                           投融资服务等多种咨询辅导代办服务。`
            },
            {
              imgUrl: require('@/assets/p7.png'),
              tag: '远程协作 快速作业',
              tagContent: `孵化器及加速器，
                           入驻企业不仅享受产业园的资源和政策同时能享受孵化器多有的功能及政策优势。`
            },
            {
              imgUrl: require('@/assets/p5.png'),
              tag: '远程协作 快速作业',
              tagContent: `随着城市经济的不断发展，
                           园区发展需通过构建高效的组织架构、
                           产业链条、
                           服务集群，
                           来提升园区的运营效率，
                           从而增强园区的价值优势，
                           打造及集政策优惠，
                           产业聚集，
                           人才聚集为一体的高端科技产业园区。`
            },
            {
              imgUrl: require('@/assets/p6.png'),
              tag: '远程协作 快速作业',
              tagContent: `打破现在行业“小而散”的特点，
                           产业聚集，
                           为上下游企业提供资源，
                           资源不外流，
                           形成产业化、
                           规模化。
                           通过通讯、
                           网络等公共设施实现资源共享，
                           资源互补，
                           让资源得到最大效率的利用，
                           使企业共同进步。`
            },
            {
              imgUrl: require('@/assets/p7.png'),
              tag: '远程协作 快速作业',
              tagContent: `聘请技术专家、
                           教授、
                           学术带头人为名誉顾问，
                           对企业研发中心的困难进行点对点帮扶，
                           定期举办园区企业技术、
                           管理专题讲座和培训。`
            }

          ]
        },
        park: {
          bigTitle: 'PARK STATUS',
          title: '园区现状',
          imgUrl: require('@/assets/p8.png'),
          content: `中宣部中国电影科学技术研究所授权青岛已臻化境影视科技有限公司，
                    与青岛市即墨区人民政府联手打造的中国电影云基地，
                    位于青岛市即墨区龙山街道，
                    占地面积188亩，
                    总建筑面积31.5万㎡。
                    打造集中国电影云平台研发中心、
                    互动空间、
                    高科技体验馆、
                    电影元素商业街区、
                    电影上下游产业办公用房、
                    众创空间、
                    孵化器、
                    邻里关系为一体的产业园区。`
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
        joinUs: '点击加入我们',
        dialogFormVisible_: false
      }
    },
    components: {
      joinUs
    },
    methods: {
      shutJoinUs(v){
        this.dialogFormVisible_ = v
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
      font-family:PingFangSC-Semibold,PingFang SC;
      .bigTitle {
        text-align: center;
        color: rgba(0,0,0,0.19);
        font-size: 50px;
        font-weight: 600;
        line-height: 70px;
        margin: 10px 0px 8px;
        letter-spacing: 2px;
      }
      .title {
        text-align: center;
        font-size: 30px;
        margin: -10px 0px 0px 0px;
        line-height: 42px;
        color: rgba(48,48,48,1);
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
          top: 130px;
          height: 353px;
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
             font-family:PingFangSC-Regular,PingFang SC;
             display: inline-block;
             width: calc(1440px - 576px);
             font-size: 18px;
             line-height: 36px;
             padding: 150px 100px 0px;
             box-sizing: border-box;
             p {
               color: rgba(96,96,96,1);
             }
           }
         }
        .bb {
           .img {
             img {
               margin-top: 40px;
             }
           }
           .text {
             padding: 130px 60px 0px 130px;
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
              overflow: hidden;
              font-family:PingFangSC-Regular,PingFang SC;
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
                height: 73px;
                background-color: rgba(0,0,0,0.4);
                font-size: 16px;
                line-height: 73px;
                text-align: center;
                color: #fff;
                margin: 0px;
                transition: height 0.2s;
              }
              .tagContent {
                position: absolute;
                top: 400px;
                font-size: 16px;
                color: rgba(255,255,255,0.9);
                line-height: 30px;
                padding: 0px 30px;
                transition: top 0.3s;
              }
              &:hover {
                .tag {
                  height: 100%;
                  font-size: 21px;
                  line-height: 29px;
                  padding: 40px;
                  box-sizing: border-box;
                }
                .tagContent {
                  top: 89px;
                  text-align: left;
                }
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
                margin: 104px 0px 30px 0px;
                font-weight: 400;
              }
              .title {
                color: rgba(255,255,255,1);
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
              line-height: 40px;
              font-size: 18px;
              color: rgba(96,96,96,1);
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
