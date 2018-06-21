<template>
  <div class="warp" :style="{width:'100%',height:height}">
    <div style="width: 50%;height: 13%;position: relative;float: left;margin-top: 3%">
      <img class="imgwarpSty" v-if="cheakList[0].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(0)">
      <img class="imgwarpSty" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(0)">
      <div class="playerSty" @click="btnClick(0)">1号选手</div>
      <div class="whereSty" @click="btnClick(0)">东区</div>
    </div>
    <div style="width: 50%;height: 13%;position: relative;float: left;margin-top: 3%">
      <img class="imgwarpSty1" v-if="cheakList[1].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(1)">
      <img class="imgwarpSty1" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(1)">
      <div class="playerSty1" @click="btnClick(1)">2号选手</div>
      <div class="whereSty1" @click="btnClick(1)">东区</div>
    </div>
    <div style="width: 50%;height: 13%;position: relative;float: left">
      <img class="imgwarpSty" v-if="cheakList[2].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(2)">
      <img class="imgwarpSty" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(2)">
      <div class="playerSty" @click="btnClick(2)">3号选手</div>
      <div class="whereSty" @click="btnClick(2)">东区</div>
    </div>
    <div style="width: 50%;height: 13%;position: relative;float: left">
      <img class="imgwarpSty1" v-if="cheakList[3].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(3)">
      <img class="imgwarpSty1" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(3)">
      <div class="playerSty1" @click="btnClick(3)">4号选手</div>
      <div class="whereSty1" @click="btnClick(3)">东区</div>
    </div>
    <div style="width: 50%;height: 13%;position: relative;float: left">
      <img class="imgwarpSty" v-if="cheakList[4].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(4)">
      <img class="imgwarpSty" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(4)">
      <div class="playerSty" @click="btnClick(4)">5号选手</div>
      <div class="whereSty" @click="btnClick(4)">东区</div>
    </div>
    <div style="width: 50%;height: 13%;position: relative;float: left">
      <img class="imgwarpSty1" v-if="cheakList[5].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(5)">
      <img class="imgwarpSty1" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(5)">
      <div class="playerSty1" @click="btnClick(5)">6号选手</div>
      <div class="whereSty1" @click="btnClick(5)">东区</div>
    </div>
    <div style="width: 50%;height: 13%;position: relative;float: left">
      <img class="imgwarpSty" v-if="cheakList[6].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(6)">
      <img class="imgwarpSty" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(6)">
      <div class="playerSty" @click="btnClick(6)">7号选手</div>
      <div class="whereSty" @click="btnClick(6)">东区</div>
    </div>
    <div style="width: 50%;height: 13%;position: relative;float: left">
      <img class="imgwarpSty1" v-if="cheakList[7].ischecked === true" src="../assets/btnActive.png" alt="" @click="btnClick(7)">
      <img class="imgwarpSty1" v-else src="../assets/btnNormal.png" alt="" @click="btnClick(7)">
      <div class="playerSty1" @click="btnClick(7)">8号选手</div>
      <div class="whereSty1" @click="btnClick(7)">东区</div>
    </div>
    <img class="btnSubmit" src="../assets/btnSubmit.png" alt="" @click="submit">
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'explain',
    data () {
      return {
        height: '',
        phoneId: '',
        cheakList:[
          {ischecked: false},
          {ischecked: false},
          {ischecked: false},
          {ischecked: false},
          {ischecked: false},
          {ischecked: false},
          {ischecked: false},
          {ischecked: false}
        ]
      }
    },
    created() {
      this.height = document.documentElement.clientHeight + 'px'
      // this.phoneId = navigator.userAgent
      // console.log(this.phoneId)
      // this.generateUUID()
      // console.log(this.generateUUID())
      // this.getQueryString('uid')
      // console.log(this.gunid())
      // alert(document.documentElement.clientHeight)
    },
    watch: {
    },
    methods: {
      btnClick (i) {
        var num = 0
        this.cheakList.forEach((item, index) => {
          if (item.ischecked === true && index !== i) {
            num = num + 1
          }
        })
        if (num === 2) {
          Toast({
            message: '最多只能选择2位选手!',
            position: 'center',
            duration: 1000
          });
        } else {
          this.cheakList[i].ischecked = !this.cheakList[i].ischecked
        }
      },
      submit () {
        var self = this
        var arr = []
        this.cheakList.forEach((item, index) => {
          if (item.ischecked === true) {
            arr.push(index + 1)
          }
        })
        if (arr.length === 2) {
          Toast({
            message: arr,
            position: 'center',
            duration: 1000
          });
          self.$router.push({ path: '/overVote' })
        } else {
          Toast({
            message: '请选择2位选手进行投票!',
            position: 'center',
            duration: 1000
          });
        }
      },
      goVote () {
        this.$router.push({ path: '/explain' })
      }
    }
  }
</script>

<style scoped>
  .warp{
    /*width: 100%;*/
    /*height: 100%;*/
    background: url(../assets/vote3.png) no-repeat center center/100% 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    box-sizing: border-box;
  }
  .btnSty{
    padding-top: 3%;
    padding-left: 16%;
    width: 30%;
    float: left;
    display: block;
  }
  .btnSty2{
    padding-left: 4.6%;
    padding-top: 3%;
    width: 30%;
    float: left;
    display: block;
  }
  .btnSubmit{
    width: 30%;
    position: absolute;
    top: 57%;
    left: 34%;
  }
  .imgSty{
    position: relative;
  }
  .imgwarpSty{
    padding-top: 6%;padding-left: 32%;width: 60%;float: left;display: block;
  }
  .playerSty{
    font-size: 18px;
    color: white;
    position: absolute;
    left: 45.5%;
    top: 24px;
  }
  .whereSty{
    font-size: 13px;
    color: white;
    position: absolute;
    left: 55%;
    top: 44px;
  }
  .imgwarpSty1{
    padding-top: 6%;padding-left: 1%;width: 60%;float: left;display: block;
  }
  .playerSty1{
    font-size: 18px;
    color: white;
    position: absolute;
    left: 15%;
    top: 24px;
  }
  .whereSty1{
    font-size: 13px;
    color: white;
    position: absolute;
    left: 24%;
    top: 44px;
  }
</style>
