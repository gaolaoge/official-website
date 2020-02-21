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
              <div class="left">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="right">
                <span class="name">
                  {{ item.name }}
                </span>
                <span class="tag">
                  {{ item.tag }}
                </span>
                <p class="content">
                  <span>
                    {{ item.content }}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </aside>
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
          bigTitle: 'INTRODCTION',
          title: '关于影视协会',
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
          bigTitle: 'MEMBER',
          title: '协会成员',
          list: [
            {
              imgUrl: require('@/assets/w1.png'),
              name: '于洁',
              tag: '影视协会理事',
              content: `本届论坛正式启动“国家电影云制作服务平台”，
                        配合专门制作的《国家电影云制作服务平台宣传片》，
                        首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                        阐释如何通过基于云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制。`
            },
            {
              imgUrl: require('@/assets/w2.png'),
              name: '王荔',
              tag: '影视协会理事',
              content: `本届论坛正式启动“国家电影云制作服务平台”，
                        配合专门制作的《国家电影云制作服务平台宣传片》，
                        首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                        阐释如何通过基于云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制。`
            },{
              imgUrl: require('@/assets/m1.png'),
              name: '豪客',
              tag: '影视协会理事',
              content: `本届论坛正式启动“国家电影云制作服务平台”，
                        配合专门制作的《国家电影云制作服务平台宣传片》，
                        首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                        阐释如何通过基于云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制。`
            },{
              imgUrl: require('@/assets/m2.png'),
              name: '捷克',
              tag: '影视协会理事',
              content: `本届论坛正式启动“国家电影云制作服务平台”，
                        配合专门制作的《国家电影云制作服务平台宣传片》，
                        首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                        阐释如何通过基于云计算服务平台的数字电影网络化、
                        分布式跨域协同制作，
                        促进我国精品电影持续推出，
                        有效提升我国电影制。`
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
    .advantage {
      width: 1440px;
      height: 602px;
      margin: 120px auto 100px;
      font-family:PingFangSC-Semibold,PingFang SC;
      .bigTitle {
        text-align: center;
        color: rgba(0,0,0,0.19);
        font-size: 50px;
        font-weight: 600;
        line-height: 70px;
        margin: 0px;
        letter-spacing: 2px;
      }
      .title {
        text-align: center;
        font-size: 30px;
        margin: 0px;
        color: rgba(48,48,48,1);
      }
      article {
        position: relative;
        margin-top: 50px;
        font-size: 0px;
        .backgroundBoard-1 {
          position: absolute;
          z-index: -1;
          background-color: rgba(62,62,255,0.03);
          width: 1330px;
          top: 132px;
          height: 393px;
          right: 0px;
        }
        .b {
          display: flex;
          .img {
            display: inline-block;
            height: 444px;
            img {
              margin-top: 62px;
              width: 620px;
              height: 354px;
              display: inline-block;
            }
          }
          .text {
            display: inline-block;
            width: calc(1440px - 576px);
            font-size: 17px;
            line-height: 2.0em;
            padding: 190px 100px 0px;
            box-sizing: border-box;
            p {
              margin: 0px;
              font-size: 18px;
              font-weight: 400;
              color: rgba(96,96,96,1);
              line-height: 36px;

            }
          }
        }
        .advantageList {
          height: 100%;
          ul {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            padding-left: 0px;
            li {
              position: relative;
              width: 100%;
              height: 250px;
              box-sizing: border-box;
              list-style: none;
              text-align: center;
              background-color: #fff;
              .left {
                position: absolute;
                width: 200px;
                height: 250px;
                z-index: 8;
                img {
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 100%;
                  height: 100%;
                }
              }
              .right {
                position: absolute;
                box-sizing: border-box;
                height: 100%;
                width: 100%;
                padding-top: 24px;
                .name {
                  display: inline-block;
                  font-size: 24px;
                  font-weight: bold;
                  color: #424242;
                  line-height: 1em;
                  margin-left: 250px;
                }
                .tag {
                  position: absolute;
                  width: 84px;
                  font-size: 14px;
                  display: inline-block;
                  background-color: #3E3EFF;
                  padding: 3px 20px;
                  color: #fff;
                }
                .content {
                  position: absolute;
                  bottom: 0px;
                  width: 100%;
                  height: 157px;
                  overflow: hidden;
                  background-color: rgba(0,0,0,0);
                  box-shadow: 0px 2px 20px 0px rgba(62,62,255,0.15);
                  font-size: 16px;
                  line-height: 2.0em;
                  text-align: center;
                  color: #808080;
                  margin: 0px;
                  span {
                    text-align: left;
                    padding: 30px 100px;
                  }
                }
              }
              &:nth-of-type(odd) {
                .right {
                  text-align: left;
                  .content {
                    span {
                      display: inline-block;
                      padding-left: 250px;
                    }
                  }
                  .name {
                  }
                  .tag{
                    left: 350px;
                  }
                }
              }
              &:nth-of-type(even) {
                .left {
                  right: 0px;
                }
                .right {
                  text-align: right;
                  .content {
                    span {
                      display: inline-block;
                      padding-right: 250px;
                    }
                  }
                  .name {
                    margin-right: 250px;
                  }
                  .tag {
                    right: 350px;
                  }
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
    .positioning {
      height: 650px;
    }
    .advantage {
      height: 1340px;
      width: 1440px;
      article {
        height: 1240px;
      }
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
