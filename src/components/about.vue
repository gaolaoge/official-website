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
    <section class="main">
      <aside class="nav">
        <el-tabs tab-position="right" style="height: 120px;" @tab-click="handleClick">
          <el-tab-pane label="公司介绍"></el-tab-pane>
          <el-tab-pane label="公司愿景"></el-tab-pane>
          <el-tab-pane label="联系我们"></el-tab-pane>
        </el-tabs>
      </aside>
      <article v-show="showNum === '0'">
        <h5 class="bigTitle">
          {{ main.pageOne.bigTitle }}
        </h5>
        <h6 class="title">
          {{ main.pageOne.title }}
        </h6>
        <article>
          <img :src="main.pageOne.imgUrl" alt="">
          <div v-html="main.pageOne.content" class="content">
          </div>
        </article>
      </article>
      <article v-show="showNum === '1'">
        <h5 class="bigTitle">
          {{ main.pageTwo.bigTitle }}
        </h5>
        <h6 class="title">
          {{ main.pageTwo.title }}
        </h6>
        <article>
          <img :src="main.pageTwo.imgUrl" alt="">
          <div v-html="main.pageTwo.content" class="content">
          </div>
        </article>
      </article>
      <article v-show="showNum === '2'">
        <h5 class="bigTitle">
          {{ main.pageThree.bigTitle }}
        </h5>
        <h6 class="title">
          {{ main.pageThree.title }}
        </h6>
        <article class="lastOne">
          <ul>
            <li v-for="(item,index) in contentList" :key="index">

              <div class="left">
                <img :src="item.iconUrl" alt="" :class="{ telephone: item.title == '固定电话' }">
              </div>
              <div class="right">
                <h6>
                  {{ item.title }}
                </h6>
                <p>
                  {{ item.detail }}
                </p>
                <img :src="item.imgUrl" alt="" v-if="item.imgUrl" class="img">
                <baidu-map class="map"
                           :center="map.center"
                           :zoom="map.zoom"
                           @ready="handler"
                           v-if="item.map">
                  <!--缩放-->
                  <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
                  <!--定位-->
                  <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                                  :showAddressBar="true"
                                  :autoLocation="true"></bm-geolocation>
                  <!--点-->
                  <bm-marker :position="map.center"
                             :dragging="map.dragging"
                             animation="BMAP_ANIMATION_DROP">
                    <!--提示信息-->
                    <bm-info-window :show="map.show">
                      盛世影云
                    </bm-info-window>
                  </bm-marker>
                </baidu-map>
              </div>
            </li>
          </ul>
        </article>
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
        main: {
          pageOne: {
            bigTitle: 'SENSE',
            title: '盛世影云',
            imgUrl: require('@/assets/main.png'),
            content: `<p class="pp">
                         本届论坛正式启动“国家电影云制作服务平台”，
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
                      </p>
                      <p class="pp">
                         本届论坛正式启动“国家电影云制作服务平台”，
                         配合专门制作的《国家电影云制作服务平台宣传片》，
                         首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                         阐释如何通过基于云计算服务平台的数字电影网络化、
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                         并推动电影制作与高速互联网、
                         移动互联网实现深度融合，
                         进而推动电影制作工业化体系建立完善。
                      </p>
                      <p class="pp">
                         首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                         阐释如何通过基于云计算服务平台的数字电影网络化、
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                         并推动电影制作与高速互联网、
                         移动互联网实现深度融合，
                         进而推动电影制作工业化体系建立完善。
                      </p>`
          },
          pageTwo: {
            bigTitle: 'PROSPECT',
            title: '公司愿景',
            imgUrl: require('@/assets/main.png'),
            content: `<p class="pp">
                         本届论坛正式启动“国家电影云制作服务平台”，
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
                      </p>
                      <p class="pp">
                         本届论坛正式启动“国家电影云制作服务平台”，
                         配合专门制作的《国家电影云制作服务平台宣传片》，
                         首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                         阐释如何通过基于云计算服务平台的数字电影网络化、
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         分布式跨域协同制作，
                         创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                         并推动电影制作与高速互联网、
                         移动互联网实现深度融合，
                         进而推动电影制作工业化体系建立完善。
                      </p>
                      <p class="pp">
                         首次向大众介绍国家电影云制作服务平台的建设与示范情况，
                         阐释如何通过基于云计算服务平台的数字电影网络化、
                         分布式跨域协同制作，
                         促进我国精品电影持续推出，
                         有效提升我国电影制作水平和能力，
                         创建云计算体系下的现代电影生产制作工艺流程和新型产业服务模式，
                         并推动电影制作与高速互联网、
                         移动互联网实现深度融合，
                         进而推动电影制作工业化体系建立完善。
                      </p>`
          },
          pageThree: {
            bigTitle: 'CONTENT US',
            title: '联系我们',
          }
        },
        showNum: '0',
        contentList: [
          {
            title: '公司名称',
            iconUrl: require('@/assets/icon_com.png'),
            detail: '青岛盛世影云影视科技有限公司'
          },
          {
            title: '固定电话',
            iconUrl: require('@/assets/icon_telp.png'),
            detail: '0532-2537641'
          },
          {
            title: '邮政编码',
            iconUrl: require('@/assets/icon_coded.png'),
            detail: '266000'
          },
          {
            title: '手机号码',
            iconUrl: require('@/assets/icon_mphone.png'),
            detail: '18673782882'
          },
          {
            title: '微信公众号',
            iconUrl: require('@/assets/icon_wechat3.png'),
            detail: '盛世影云',
            imgUrl: require('@/assets/mm.png')
          },
          {
            title: '官方微博',
            iconUrl: require('@/assets/icon_bolg3.png'),
            detail: '盛世影云',
            imgUrl: require('@/assets/mm.png')
          },
          {
            title: '公司地址',
            iconUrl: require('@/assets/icon_address.png'),
            detail: '山东省青岛市即墨区经济开发区',
            map: true
          }
        ],
        map:{
          center: {lng: 120.544633, lat: 36.412524},
          zoom: 20,
          show: true,
          dragging: true
        }
      }
    },
    methods: {
      handleClick(tab) {
        this.showNum = tab.index
      },
      handler ({BMap, map}) {
        let me = this;
        console.log(BMap, map)
        // 鼠标缩放
        map.enableScrollWheelZoom(true);
        // 点击事件获取经纬度
        map.addEventListener('click', function (e) {
          console.log(e.point.lng, e.point.lat)
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
    .nav {
      position: absolute;
      top: -30px;
      left: 0px;
    }
    .main {
      position: relative;
      width: 1430px;
      margin: 100px auto 200px;
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
        img {
          display: block;
          margin: 62px auto 12px;
        }
        .content {
          width: 1130px;
          margin: 0px auto;
          /deep/.pp {
            text-indent: 2em;
            line-height: 1.8em;
            color: rgba(0,0,0,0.6);
          }
        }
        .lastOne {
          ul {
            display: flex;
            flex-wrap: wrap;
            padding-left: 340px;
            width: 1140px;
            margin: 40px auto;
            li {
              list-style: none;
              flex-basis: 50%;
              padding: 16px 0px;
              .left {
                display: inline-block;
                width: 60px;
                vertical-align: top;
                img {
                  margin: 0px!important;
                  &.telephone {
                    box-shadow: 0px 0px 8px 1px rgba(62,62,255,0.4);
                    border-radius: 50%;
                    margin-left: 8px!important;
                    margin-top: 10px!important;
                  }
                }
              }
              .right {
                display: inline-block;
                width: 280px;
                h6 {
                  margin: 4px;
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 33px;
                  display: inline-block;
                  border-bottom: 3px solid rgba(62,62,255,1);
                }
                p {
                  margin: 4px;
                  font-size: 18px;
                  color: rgba(0,0,0,0.6);
                }
                .img {
                  height: 120px;
                  width: 120px;
                  margin: 14px 0px 0px 0px;
                  box-shadow:0px 2px 10px 0px rgba(62,62,255,0.3);
                  border-radius:5px;
                }
              }
            }
          }
        }
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
  /deep/.el-tabs--right .el-tabs__nav-wrap.is-right::after {
    width: 1px!important;
    opacity: 0.5;
    left: 2px!important;
  }
  /deep/.el-tabs__nav-scroll {
    overflow: initial!important;
  }
  /deep/.el-tabs__active-bar {
    height: 5px!important;
    width: 5px!important;
    border-radius: 50%;
    top: 17px!important;
    background-color: rgba(62, 62, 255, 1)!important;
  }
  /deep/.el-tabs__item {
    position: relative;
    font-size: 16px;
    user-select: none;
    &.is-active {
      font-size: 21px;
      color: rgba(62, 62, 255, 1)!important;
    }
  }
  /deep/.el-tabs__item::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 17px;
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.1);
    background-color: #fff;
    box-shadow: 0px 0px 0px 3px #fff;
  }
  .map {
    width: 691px;
    height: 396px;
  }
</style>
