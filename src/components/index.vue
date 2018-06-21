<template>
  <div class="warp" :style="{width:'100%',height:height}">
    <!-- tabcontainer -->
    <!--<div>{{phoneId}}</div>-->
      <!--<img src="../assets/1.png" alt="" class="bannerIndex" :style="{width:'100%',height:'100%'}">-->
      <!--<div @click="goVote" style="">点击开始</div>-->
    <!--<div style="position: relative;width: 100%;height: 20px">-->
      <!--<img style="position: absolute;left: 0;top: 0px" src="../assets/percentWarp.png" alt="" class="bannerIndex" :style="{width:'100%',height:'100%'}">-->
      <!--<img style="position: absolute;left: 5px;top: 4px" src="../assets/percent.png" alt="" class="bannerIndex" :style="{width:'98%',height:'60%'}">-->
    <!--</div>-->
    <img src="../assets/indexFont.png" alt="" class="fontSty" @click="goVote">
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import { post } from '../util/util'
  export default {
    name: 'index',
    data () {
      return {
        height: '',
        phoneId: ''
      }
    },
    created() {
      this.height = document.documentElement.clientHeight + 'px'
      // this.generateUUID()
      // console.log(this.generateUUID())
      // this.getQueryString('uid')
      // console.log(this.gunid())
      // localStorage.setItem('uid', this.generateUUID())
      console.log(localStorage.getItem('uid'))
      if (localStorage.getItem('uid') === null) {
        localStorage.setItem('uid', this.generateUUID())
      }
    },
    watch: {
    },
    methods: {
      goVote () {
        var self = this
        let url = 'answer/enter'
        let path = {
          authToken: '',
          token: "c92114bcc9e4454f1d2b7399dc9d62a9",
          time: '1480576266',
          only_id: localStorage.getItem('uid')
        }
        post(url, path, function (data) {
          console.log(data)
          if (data.status === 1) {
            self.$router.push({ path: '/explain' })
          } else {
            Toast({
              message: data.msg,
              position: 'center',
              duration: 1000
            });
          }
        })
      },
      generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
      },
      getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
      },
      gunid() {
        function S4() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
      }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .warp{
    /*width: 100%;*/
    /*height: 100%;*/
    background: url(../assets/banner.png) no-repeat center center/100% 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .fontSty{
    width: 17%;
    position: absolute;
    top: 61%;
    left: 42.5%;
  }
  .bannerIndex{
    /*width: 100%;*/
    /*height: 100%;*/
  }
</style>
