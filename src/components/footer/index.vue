<template>
  <div class="wrapper">
    <footer>
      <div class="nav">
        <section>
          <ul class="list">
            <li>
              <aside>
                <header>
                  中国电影云平台
                </header>
                <nav>
                  <ul>
                    <li v-for="item in platform" :key="item.title">
                      <a href="item.url">
                        {{ item.title }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </li>
            <li>
              <aside>
                <header>
                  中国电影云基地
                </header>
                <nav>
                  <ul>
                    <li v-for="item in base" :key="item.title">
                      <a href="item.url">
                        {{ item.title }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </li>
            <li>
              <aside>
                <header>
                  影视协会
                </header>
                <nav>
                  <ul>
                    <li v-for="item in assonciation" :key="item.title">
                      <a href="item.url">
                        {{ item.title }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </li>
            <li>
              <aside>
                <header>
                  行业资讯
                </header>
                <nav>
                  <ul>
                    <li v-for="item in consult" :key="item.title">
                      <a href="item.url">
                        {{ item.title }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </li>
            <li>
              <aside>
                <header>
                  关于我们
                </header>
                <nav>
                  <ul>
                    <li v-for="item in about" :key="item.title">
                      <a href="item.url">
                        {{ item.title }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </li>
            <li>
              <span class="icon">
                <img src="@/icons/wechat.svg" alt="" class="i">
                <img src="@/assets/mm.png" alt="" class="code">
              </span>
              <span class="icon">
                <img src="@/icons/weibo.svg" alt="" class="i">
                <img src="@/assets/mm.png" alt="" class="code">
              </span>
            </li>
            <li>
              <div class="btn">
                {{ btn }}
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div class="info">
        <section>
          <p>
            <span>
              {{ info.name }}
            </span>
            <span>
              {{ info.address }}
            </span>
            <span>
              {{ info.postcode }}
            </span>
            <span>
              {{ info.fixedTelephone }}
            </span>
            <span>
              {{ info.telephone }}
            </span>
            <span>
              {{ info.email }}
            </span>
          </p>
          <p>
            <img src="@/assets/icon_interba.png" alt="">
            {{ info.number }}
          </p>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'f',
    data(){
      return {
        platform: [
          {
            title: '云管理系统',
            url: ''
          },
          {
            title: '渲染农场',
            url: ''
          }
        ],
        base: [
          {
            title: '目标及定位',
            url: ''
          },
          {
            title: '我们的优势',
            url: ''
          },
          {
            title: '园区现状',
            url: ''
          },
          {
            title: '剧组接待',
            url: ''
          },
          {
            title: '文化产业孵化器',
            url: ''
          }
        ],
        assonciation: [
          {
            title: '影视协会',
            url: ''
          }
        ],
        consult: [
          {
            title: '行业资讯',
            url: ''
          }
        ],
        about: [
          {
            title: '公司介绍',
            url: ''
          },
          {
            title: '公司愿景',
            url: ''
          },
          {
            title: '公司团队',
            url: ''
          },
          {
            title: '联系方式',
            url: ''
          }
        ],
        btn: '在线咨询',
        info: {
          name: '青岛盛世影音有限公司',
          address: '地址：山东省青岛市即墨区经济开发区',
          postcode: '邮编：266000',
          fixedTelephone: '固定电话：0532-2615612',
          telephone: '手机：18767683366',
          email: '邮箱：huahask@163.com',
          number: '鲁公网安备：22010002000124号'
        }
      }
    },

  }
</script>

<style scoped lang="less">
  .wrapper {
    height: 443px;
    background-color: #151C5B;
    footer {
      .nav {
        overflow: hidden;
        height: 330px;
        section {
          width: 1200px;
          margin: 50px auto;
          .list {
            display: flex;
            justify-content: space-between;
            padding-left: 0px;
            li {
              list-style: none;
              header {
                font-size: 14px;
                line-height: 20px;
                font-weight: 600;
                color: rgba(255,255,255,1);
                margin-bottom: 20px;
              }
              nav {
                ul {
                  padding-left: 0px;
                  li {
                    display: block;
                    margin-bottom: 10px;
                    a {
                      font-size: 12px;
                      line-height: 17px;
                      text-decoration: none;
                      color: rgba(255,255,255,0.5);
                      transition: color 0.2s;
                      &:hover {
                        color: rgba(255,255,255,0.8);
                      }
                    }
                  }
                }
              }
              .icon {
                position: relative;
                .i {
                  width: 20px;
                  padding: 10px;
                  border: 1px solid rgba(255,255,255,0.4);
                  border-radius: 50%;
                  cursor: pointer;
                  box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.1);
                  transition: all 0.2s;
                }
                &:nth-of-type(1) {
                  margin-right: 18px;
                }
                &:hover {
                  .i {
                    border: 1px solid rgba(255,255,255,0.8);
                    box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.4);
                    & + img {
                      display: inline-block;
                    }
                  }
                }
                .code{
                  position: absolute;
                  top: 24px;
                  left: -40px;
                  width: 120px;
                  height: 120px;
                  box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.4);
                  display: none;
                }
              }
              .btn {
                width: 124px;
                cursor: pointer;
                color: #fff;
                font-size: 14px;
                line-height: 40px;
                border-radius: 34px;
                text-align: center;
                border: 1px solid rgba(255,255,255,0.6);
                box-shadow: 0px 0px 3px 0px rgba(255,255,255,0.4);
                transition: box-shadow 0.2s;
                &:hover {
                  box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.4);
                }
              }
            }
          }
        }
      }
      .info {
        border-top: 1px solid rgba(255,255,255,0.1);
        section {
          width: 1200px;
          margin: 0px auto;
          p {
            font-size: 12px;
            line-height: 17px;
            font-weight: 400;
            margin: 32px 0px;
            span {

              display: inline-block;
              padding-right: 30px;
              color: rgba(255,255,255,0.6);
            }
            img {
              vertical-align: middle;
              /*margin: 0px 8px 32px;*/
            }
            &:nth-of-type(2) {
              color: rgba(255,255,255,0.6);
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
