<template>
  <div>
    <el-dialog :visible.sync="statusVal"
               width="640px"
               @close="$emit('shutMe',false)">
      <div class="firstStep" v-show="join">
        <img src="@/icons/icon_close.png" alt="" class="closeBtn" @click="$emit('shutMe',false)">
        <h6 class="mainTit">
          {{ title }}
        </h6>
        <el-form :model="form">
          <el-form-item label="公司名称："
                        label-width="90px">
            <el-input v-model="form.company"
                      placeholder="请在此输入"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="主要业务："
                        label-width="90px">
            <el-input v-model="form.mainBusiness"
                      placeholder="请在此输入"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系人："
                        label-width="90px">
            <el-input v-model="form.name"
                      placeholder="请在此输入"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系人身份："
                        label-width="90px">
            <el-input v-model="form.identity"
                      placeholder="请在此输入"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话："
                        label-width="90px">
            <el-input v-model="form.phone"
                      placeholder="请在此输入"
                      autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button type="primary"
                     @click="shutWin">确 定</el-button>
        </div>
      </div>
      <div class="secondStep" v-show="!join">
        <img src="@/icons/icon_success.png" alt="">
        <p class="title">
          您已提交成功！
          <br>
          我们将尽快与您联系~
        </p>
        <span class="info">
          本窗口
          <span class="num">
            {{ num }}
          </span>s 后自动关闭
        </span>
      </div>

    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'joinUs',
    data(){
      return {
        form: {
          company: '',
          mainBusiness: '',
          name: '',
          identity: '',
          phone: '',
        },
        num: 3,
        join: true,
        title: '欢迎加入中国电影云基地'
      }
    },
    props: {
      statusVal: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      shutWin(){
        this.join = false
        let self_ = this,
            t = function(){
          setTimeout(function (){
            self_.num --
            if(self_.num > 0){
              t()
            }else {
              self_.$emit('shutMe',false)
              setTimeout(function(){
                self_.num = 3
                self_.join = true
              },200)
            }
          },1000)
        }
        t()
      }
    }
  }
</script>
<style lang="less" scoped>
  /deep/.el-dialog {
    height: 430px;
    .mainTit {
      text-align: center;
      margin: -50px 0px 40px;
      font-size: 22px;
      font-weight: 500;
    }
    .secondStep {
      text-align: center;
      padding-top: 40px;
      .title {
        font-weight: bold;
        line-height: 1.8em;
        letter-spacing: 1px;
      }
      .info {
        color: rgba(0,0,0,0.3);
        .num {
          color: rgba(62,62,255,0.8);
        }
      }
    }
    .el-dialog__header {
      text-align: center;
      padding-top: 36px;
      font-weight: bold;
      color: #808080;
      span {
        font-size: 21px!important;
      }
    }
    .el-dialog__body {
      padding: 30px 100px 0px;
      .el-form-item__label {
        text-align: left;
        padding: 0px!important;
      }
      .el-form-item {
        margin-bottom: 15px;
      }
    }
    .dialog-footer {
      text-align: center;
      padding-bottom: 30px;
      .el-button {
        width: 112px;
        height: 30px;
        background-color: rgba(62,62,255,1);
        box-shadow: 0px 2px 10px 0px rgba(62,62,255,0.5);
        border-radius: 5px;
        line-height: 30px;
        padding: 0px;
        border: 1px solid transparent!important;
      }
    }
    .el-dialog__close {
      display: none;
    }
    .closeBtn {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }
</style>
